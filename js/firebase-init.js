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

// ── WORKOUT LOG HELPERS ──────────────────────────────────────
window.saveWorkoutLog = async function (exerciseId, exerciseName, weight, setsCompleted, dayId, setLog) {
  const user = window.auth.currentUser;
  if (!user) return;
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  const docId  = `${exerciseId}_${today}`;
  await window.db
    .collection('users').doc(user.uid)
    .collection('workoutLogs').doc(docId)
    .set({
      exerciseId,
      exerciseName,
      weight:        parseFloat(weight) || 0,
      setsCompleted: setsCompleted || 0,
      setLog:        setLog || [],
      dayId:         dayId || '',
      date:          today,
      timestamp:     firebase.firestore.FieldValue.serverTimestamp(),
    }, { merge: true });
};

window.loadRecentWorkoutLogs = async function () {
  const user = window.auth.currentUser;
  if (!user) return {};
  try {
    const snap = await window.db
      .collection('users').doc(user.uid)
      .collection('workoutLogs')
      .orderBy('timestamp', 'desc')
      .limit(60)
      .get();
    const map = {};
    snap.docs.forEach(doc => {
      const d = doc.data();
      if (!map[d.exerciseId]) map[d.exerciseId] = d; // keep most recent only
    });
    return map;
  } catch (e) {
    console.error('loadRecentWorkoutLogs:', e);
    return {};
  }
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
window.signInWithGoogle = function () {
  const provider = new firebase.auth.GoogleAuthProvider();
  const btn = document.querySelector('.auth-signin');
  if (btn) { btn.textContent = 'Opening…'; btn.disabled = true; }

  window.auth.signInWithPopup(provider)
    .then(result => {
      console.log('Sign-in success:', result.user.displayName);
    })
    .catch(err => {
      console.error('Sign-in error code:', err.code, err.message);
      if (btn) { btn.textContent = 'Sign in with Google'; btn.disabled = false; }
      if (err.code === 'auth/popup-blocked') {
        alert('Popup was blocked by your browser.\nPlease allow popups for this site and try again.');
      } else if (err.code !== 'auth/popup-cancelled-by-user' && err.code !== 'auth/cancelled-popup-request') {
        alert('Sign-in failed: ' + err.message);
      }
    });
};

window.auth.getRedirectResult().then(result => {
  if (result && result.user) console.log('Signed in via redirect:', result.user.displayName);
}).catch(e => console.error('getRedirectResult error:', e.code, e.message));

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
