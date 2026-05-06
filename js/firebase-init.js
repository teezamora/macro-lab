/* ============================================================
   LATTITUDE — firebase-init.js
   Shared Firebase init, auth helpers, and Firestore helpers.
   Loaded on every page before nav.js and page scripts.
   ============================================================ */

const firebaseConfig = {
  apiKey:            "AIzaSyAswU1mC0-yzySGnMHrkViJPUG0ZV37D5Y",
  authDomain:        "lattitude-808.firebaseapp.com",
  projectId:         "lattitude-808",
  storageBucket:     "lattitude-808.firebasestorage.app",
  messagingSenderId: "31299710521",
  appId:             "1:31299710521:web:432648a3b9b398c8b1e7e8",
};

firebase.initializeApp(firebaseConfig);

window.db   = firebase.firestore();
window.auth = firebase.auth();

// ── LOCAL STORAGE KEY ────────────────────────────────────────
window.PROFILE_LS_KEY = 'lattitude_profile';

// ── LOCAL STORAGE HELPERS ────────────────────────────────────
window.getLocalProfile = function () {
  try {
    // support old key from before rebrand
    const raw = localStorage.getItem('lattitude_profile')
             || localStorage.getItem('macrolab_profile');
    return raw ? JSON.parse(raw) : null;
  } catch { return null; }
};

window.saveLocalProfile = function (data) {
  localStorage.setItem('lattitude_profile', JSON.stringify(data));
  // remove old key if present
  localStorage.removeItem('macrolab_profile');
};

// ── FIRESTORE HELPERS ────────────────────────────────────────
window.saveProfileToCloud = async function (profileData) {
  const user = window.auth.currentUser;
  if (!user) return;
  await window.db
    .collection('users')
    .doc(user.uid)
    .set({ profile: profileData }, { merge: true });
};

window.loadProfileFromCloud = async function () {
  const user = window.auth.currentUser;
  if (!user) return null;
  try {
    const doc = await window.db.collection('users').doc(user.uid).get();
    return doc.exists ? (doc.data().profile || null) : null;
  } catch { return null; }
};

// ── RECIPE HELPERS ───────────────────────────────────────
window.saveRecipeToCloud = async function (recipeData) {
  const user = window.auth.currentUser;
  if (!user) throw new Error('Not signed in');
  const docRef = await window.db.collection('recipes').add({
    ...recipeData,
    uid: user.uid,
    createdAt: firebase.firestore.FieldValue.serverTimestamp(),
  });
  return docRef.id;
};

window.loadUserRecipes = async function () {
  const user = window.auth.currentUser;
  if (!user) return [];
  try {
    const snap = await window.db
      .collection('recipes')
      .where('uid', '==', user.uid)
      .orderBy('createdAt', 'desc')
      .get();
    return snap.docs.map(doc => ({ id: doc.id, ...doc.data() }));
  } catch (e) {
    console.error('loadUserRecipes:', e);
    return [];
  }
};

window.loadRecipeById = async function (id) {
  try {
    const doc = await window.db.collection('recipes').doc(id).get();
    return doc.exists ? { id: doc.id, ...doc.data() } : null;
  } catch (e) {
    console.error('loadRecipeById:', e);
    return null;
  }
};

// ── GOOGLE SIGN-IN ───────────────────────────────────────────
// signInWithPopup is required on GitHub Pages — the redirect flow breaks because
// Firebase's auth handler (firebaseapp.com) cannot write session data back across
// the origin boundary to github.io in browsers that block third-party storage.
window.signInWithGoogle = function () {
  const provider = new firebase.auth.GoogleAuthProvider();
  window.auth.signInWithPopup(provider).catch(err => {
    // popup blocked (some mobile browsers) — fall back to redirect
    if (err.code === 'auth/popup-blocked' || err.code === 'auth/popup-cancelled-by-user') {
      window.auth.signInWithRedirect(provider).catch(console.error);
    } else {
      console.error('Google sign-in error:', err);
    }
  });
};

// Handle any pending redirect result (fallback path for mobile popup-blocked cases)
window.auth.getRedirectResult().then(result => {
  if (result && result.user) console.log('Signed in via redirect:', result.user.displayName);
}).catch(console.error);

// ── AUTH NAV RENDERER ────────────────────────────────────────
// Fills the #auth-nav element present on every page.
window.renderAuthNav = function (user) {
  const el = document.getElementById('auth-nav');
  if (!el) return;
  if (user) {
    const name  = user.displayName ? user.displayName.split(' ')[0] : 'You';
    const photo = user.photoURL || '';
    el.innerHTML = `
      <div class="auth-user">
        ${photo ? `<img src="${photo}" class="auth-avatar" alt="${name}">` : ''}
        <span class="auth-name">${name}</span>
        <button class="auth-signout" onclick="window.auth.signOut()">Sign Out</button>
      </div>`;
  } else {
    el.innerHTML = `
      <button class="auth-signin" onclick="window.signInWithGoogle()">
        Sign in with Google
      </button>`;
  }
};
