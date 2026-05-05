/* ============================================================
   LATTITUDE — workout-data.js
   Men's Physique Cut-Phase 5-Day Split
   Calibrated for 200+ lb intermediate male on a caloric deficit.
   Cut-phase principles: maintain strength, 8–15 rep ranges,
   60–90 sec rest, 1–2 RIR on most working sets.
   ============================================================ */

window.WORKOUT_DAYS = [

  /* ── MONDAY ─────────────────────────────────────────────── */
  {
    id: 'mon', abbr: 'MON',
    name: 'BACK WIDTH',
    muscleGroup: 'Lats · Teres · Rear Delt',
    duration: '65 min',
    goal: 'Lat sweep & V-taper width',
    exerciseCount: 6,
    setCount: 19,
    cardio: {
      icon: '🚶',
      type: 'Incline Treadmill Walk',
      duration: '35 min',
      detail: '10–12% incline · 3.0–3.5 mph · steady fat-burn zone'
    },
    sections: [
      {
        title: 'COMPOUND PULL',
        exercises: [
          {
            name: 'Wide-Grip Lat Pulldown',
            sets: 4, reps: '10–12', weight: '120 lbs', rest: '75 sec',
            notes: 'Pronated grip, hands just outside shoulder width. Lean back ~10°. 3-sec eccentric on every rep.',
            rir: '1–2',
            cue: 'Think elbows driving down to your hip pockets — not hands pulling. Chest tall, shoulders packed away from ears. Control the ascent: 3-second negative every rep. Feel the lat fully lengthen at the top before you pull again.'
          },
          {
            name: 'Wide-Grip Pull-Up',
            sets: 3, reps: 'AMRAP (target 6–10)', weight: 'Bodyweight', rest: '90 sec',
            notes: 'Full dead-hang at the bottom every rep. Chin clears bar at top. Zero kipping or momentum.',
            rir: '0–1',
            cue: 'Before you pull, depress your scapula — that slight "shoulder drop" engages the lat before the arm. Lead with elbows, not hands. Slow 3-second descent builds the most lat thickness. Dead hang between reps.'
          }
        ]
      },
      {
        title: 'LAT ISOLATION',
        exercises: [
          {
            name: 'Straight-Arm Cable Pulldown',
            sets: 3, reps: '12–15', weight: '45 lbs', rest: '60 sec',
            notes: 'Slight elbow bend locked throughout. Hinge forward at hips. Rope or straight bar.',
            rir: '1–2',
            cue: 'Arms stay straight — this is lat isolation, not a tricep move. Imagine bending a bar. Full lat lengthening at the top, hard contraction at the bottom. Exhale as you pull down. The hinge forward increases lat stretch range.'
          },
          {
            name: 'Single-Arm DB Row',
            sets: 4, reps: '10–12 each side', weight: '80 lbs', rest: '75 sec',
            notes: 'Brace on bench. Drive elbow straight back and slightly toward your hip. No torso rotation.',
            rir: '1',
            cue: 'Your arm is just a hook — the lat does the work, not the bicep. Drive the elbow toward your back hip. Full stretch at the bottom (let the shoulder drop). Go heavy; this is a primary size exercise. Rep 12 should be a genuine grind.'
          },
          {
            name: 'Cable Pullover',
            sets: 3, reps: '12–15', weight: '50 lbs', rest: '60 sec',
            notes: 'Rope or bar attachment at high pulley. Stand facing stack, arms overhead. Nearly straight arms throughout.',
            rir: '1–2',
            cue: 'Stand back far enough that your arms are fully extended overhead — that\'s the full lat stretch. Pull through a wide arc down to your hips. Keep abs braced to isolate the lats from the chest. The lower lat sweep is what gives Men\'s Physique its V-taper.'
          }
        ]
      },
      {
        title: 'REAR DELT',
        exercises: [
          {
            name: 'Face Pull',
            sets: 2, reps: '15–20', weight: '30 lbs', rest: '45 sec',
            notes: 'Rope at eye level. External rotate hard at peak. Elbows high and wide at finish.',
            rir: '2',
            cue: 'Pull to your forehead, not your chin. At peak: elbows up and wide, hands behind ears. Hold 1 second. This protects your shoulder capsule from all the vertical and horizontal pulling volume. Non-negotiable finishing work — don\'t skip it.'
          }
        ]
      }
    ]
  },

  /* ── TUESDAY ─────────────────────────────────────────────── */
  {
    id: 'tue', abbr: 'TUE',
    name: 'SHOULDERS',
    muscleGroup: 'Front · Lateral · Rear Delt',
    duration: '60 min',
    goal: 'Shoulder width, cap & 3D round',
    exerciseCount: 6,
    setCount: 20,
    cardio: {
      icon: '🚴',
      type: 'Stationary Bike',
      duration: '30 min',
      detail: 'Moderate resistance · RPE 6–7 · low-impact active recovery cardio'
    },
    sections: [
      {
        title: 'COMPOUND PRESS',
        exercises: [
          {
            name: 'Seated DB Overhead Press',
            sets: 4, reps: '10–12', weight: '55 lbs each', rest: '90 sec',
            notes: 'Seat fully upright (90°). Neutral spine. Elbows at ~70° (not flared). Stop just before lockout.',
            rir: '1–2',
            cue: 'Drive dumbbells up and arc slightly inward at the top — not straight up. Keep your core braced so your low back doesn\'t arch. Lower to ear level, not below, to maintain delt tension and protect the AC joint. This is the primary mass builder for the session.'
          },
          {
            name: 'Arnold Press',
            sets: 3, reps: '12', weight: '40 lbs each', rest: '75 sec',
            notes: 'Start palms facing you at chin height. Rotate outward as you press up. Full range, deliberate pace.',
            rir: '1–2',
            cue: 'The rotation recruits all three delt heads across one movement. Take 4 full seconds per rep — slow is the point. Don\'t rush the rotation. This is excellent cap-building work on a cut because the time under tension is high even at moderate weight.'
          }
        ]
      },
      {
        title: 'LATERAL DELT FOCUS',
        exercises: [
          {
            name: 'Cable Lateral Raise',
            sets: 4, reps: '15', weight: '15 lbs', rest: '60 sec',
            notes: 'Single cable at lowest position, crosses in front of body. Lead with elbow. Slight forward torso lean (10°).',
            rir: '1',
            cue: 'Cable creates constant tension through the full ROM — no dead zone at the bottom like dumbbells. Lead with your elbow, not your wrist. Raise to ear level. Pause 1 second at the top. The forward lean shifts load more squarely onto the lateral head.'
          },
          {
            name: 'DB Lateral Raise Drop Set',
            sets: 3, reps: '12 → 8 drop', weight: '25 lbs → 15 lbs', rest: '90 sec',
            notes: 'Do 12 reps at 25 lbs. Without resting, drop to 15 lbs for 8 more reps. Both DBs ready before starting.',
            rir: '0',
            cue: 'Set 1 (25 lbs) should reach true failure at rep 12. Drop fast — under 5 seconds. Set 2 (15 lbs) catches the delt when it\'s already fully fatigued, forcing deep fiber recruitment. This extra stimulus is exactly what creates the "capped" delt look. Own the burn.'
          }
        ]
      },
      {
        title: 'REAR DELT',
        exercises: [
          {
            name: 'Rear Delt Cable Fly',
            sets: 3, reps: '15–20', weight: '10 lbs', rest: '60 sec',
            notes: 'High cables crossed (left hand takes right cable and vice versa). Arms parallel to floor. Slight elbow bend.',
            rir: '2',
            cue: 'Arms parallel to the floor throughout — don\'t let elbows drop. Think about pulling your shoulder blades together at the peak. Hold 1 second. Rear delt development creates the 3D roundness that makes shoulders look complete from every angle on stage.'
          },
          {
            name: 'Face Pull',
            sets: 3, reps: '15–20', weight: '30 lbs', rest: '45 sec',
            notes: 'Rope at eye level. External rotate at peak. Elbows high and wide at finish position.',
            rir: '2',
            cue: 'Pull to your forehead. Elbows high at the finish — hands behind ears. This hits rear delt and external rotators simultaneously. Following two pressing exercises, this is the corrective health work that keeps your shoulders balanced and injury-free long-term.'
          }
        ]
      }
    ]
  },

  /* ── WEDNESDAY ───────────────────────────────────────────── */
  {
    id: 'wed', abbr: 'WED',
    name: 'CHEST & TRICEPS',
    muscleGroup: 'Upper Pec · Tricep · Front Delt',
    duration: '65 min',
    goal: 'Upper chest fullness & arm detail',
    exerciseCount: 6,
    setCount: 19,
    cardio: {
      icon: '🚶',
      type: 'Incline Treadmill Walk',
      duration: '35 min',
      detail: '10–12% incline · 3.0–3.5 mph · post-chest fat oxidation window'
    },
    sections: [
      {
        title: 'CHEST PRESS',
        exercises: [
          {
            name: 'Incline DB Press',
            sets: 4, reps: '10–12', weight: '70 lbs each', rest: '90 sec',
            notes: 'Bench at 30–45°. Full ROM — deep stretch at bottom. Elbows at ~70°, not flared. Stop just before lockout.',
            rir: '1–2',
            cue: 'Set the bench at 30–45° — not higher or it shifts to front delt. Lower until you feel the chest stretch across your pec. Drive up and slightly inward, like you\'re hugging a barrel. Upper chest is the visual priority for Men\'s Physique — this is your primary mass exercise.'
          }
        ]
      },
      {
        title: 'CHEST ISOLATION',
        exercises: [
          {
            name: 'Cable Fly Low-to-High',
            sets: 3, reps: '12–15', weight: '25 lbs', rest: '60 sec',
            notes: 'Cables at lowest position. Arc upward and inward. Hands cross slightly above eye level at peak.',
            rir: '1–2',
            cue: 'The angle hits the upper-inner pec — the hardest part to develop. Feel the full stretch at the start. Arc inward and slightly upward, converging at eye level. Slight elbow bend throughout (locked, not stiff). Hold the squeeze for 1 second. This carves the chest definition that shows in a mandatory front pose.'
          },
          {
            name: 'Flat DB Fly',
            sets: 3, reps: '12–15', weight: '40 lbs each', rest: '60 sec',
            notes: 'Slight fixed elbow bend throughout. Lower to a deep stretch. This is isolation — control every inch.',
            rir: '1–2',
            cue: 'Think hugging a large tree. Lower slowly to a deep pec stretch — feel it across your whole chest at the bottom. Don\'t go so far that it strains your shoulder. Arc back up with control. The stretch position is where the most hypertrophy stimulus occurs. Never rush the descent.'
          }
        ]
      },
      {
        title: 'TRICEP',
        exercises: [
          {
            name: 'Tricep Rope Pushdown',
            sets: 4, reps: '12–15', weight: '55 lbs', rest: '60 sec',
            notes: 'Elbows pinned to sides throughout. Split the rope at the bottom for full lateral head contraction.',
            rir: '1',
            cue: 'Elbows stay locked at your sides — only the forearms move. Split the rope apart at the bottom and hold 1 second. Full extension on every rep. The lateral head gives the horseshoe appearance. Don\'t lean forward or swing to add weight — that defeats the purpose.'
          },
          {
            name: 'Overhead Cable Extension',
            sets: 3, reps: '12–15', weight: '40 lbs', rest: '60 sec',
            notes: 'Rope or single bar. Face away from stack. Full overhead stretch at top, full extension at bottom.',
            rir: '1–2',
            cue: 'The long head of the tricep only reaches full stretch when the arm is overhead. This is why this exercise exists in the program. Elbows point forward — don\'t let them flare wide. Prioritize the top-of-movement stretch; that\'s the growth position for this exercise.'
          },
          {
            name: 'Diamond Push-Up Burnout',
            sets: 2, reps: 'AMRAP to failure', weight: 'Bodyweight', rest: '60 sec',
            notes: 'Hands in diamond shape under sternum. Elbows track back and tight throughout. Go to true failure.',
            rir: '0',
            cue: 'This is a burnout — commit to failure. Diamond hands under your sternum, elbows track backward (not flaring). Keep your core rigid. When you can\'t complete full reps, drop to knee push-ups to extend the set. The pump you get from this is the best finisher for tricep fullness on a cut.'
          }
        ]
      }
    ]
  },

  /* ── THURSDAY ────────────────────────────────────────────── */
  {
    id: 'thu', abbr: 'THU',
    name: 'BACK THICKNESS & BICEPS',
    muscleGroup: 'Mid-Back · Rhomboids · Bicep',
    duration: '65 min',
    goal: 'Back density, thickness & arm size',
    exerciseCount: 6,
    setCount: 20,
    cardio: {
      icon: '🚶',
      type: 'Easy Walk (Outdoors)',
      duration: '20 min',
      detail: 'Flat ground · conversational pace · active recovery only · no incline'
    },
    sections: [
      {
        title: 'COMPOUND ROW',
        exercises: [
          {
            name: 'Barbell Bent-Over Row',
            sets: 4, reps: '8–10', weight: '185 lbs', rest: '90 sec',
            notes: 'Hinge to ~45°. Overhand pronated grip. Pull bar to lower chest. Brace hard before every rep.',
            rir: '1–2',
            cue: 'Set your back before you touch the bar — big breath, abs tight, chest up. Hinge to 45° and hold that angle for the entire set. Pull the bar into your lower chest, elbows flare slightly for thickness emphasis. This builds the dense, wide mid-back that creates the illusion of a smaller waist.'
          },
          {
            name: 'Seated Cable Row',
            sets: 4, reps: '10–12', weight: '160 lbs', rest: '75 sec',
            notes: 'Close-grip neutral handle. Full forward lean and protraction at start. Pull to lower abdomen.',
            rir: '1',
            cue: 'Sit tall. Let the weight pull you into full shoulder protraction and forward lean at the start — that\'s the full stretch. Row to your lower abs, driving your chest forward as you pull. Squeeze and hold 1 sec. Full ROM every rep; partial reps here are wasted sets.'
          },
          {
            name: 'Chest-Supported DB Row',
            sets: 3, reps: '12 each side', weight: '60 lbs each', rest: '75 sec',
            notes: 'Incline bench at ~45°. Chest on pad throughout. Removes momentum completely. Full ROM critical here.',
            rir: '1–2',
            cue: 'The chest support eliminates all cheating — this is pure back. Lower dumbbells to full arm extension and feel the lat stretch. Drive elbows back and high. Heavy enough that rep 12 is a hard grind. This is excellent on a cut because the controlled ROM maximizes tension without needing huge weights.'
          }
        ]
      },
      {
        title: 'BICEP',
        exercises: [
          {
            name: 'Alternating DB Curl',
            sets: 4, reps: '12 each side', weight: '35 lbs', rest: '60 sec',
            notes: 'Supinate fully as you curl — pinky leads at the top. Pause 1 sec. Alternate arms. Zero body English.',
            rir: '1–2',
            cue: 'Start with a neutral grip. As you curl, rotate your wrist so the pinky leads at the top (full supination). That supination is what maximally activates the bicep peak. Lower slowly — 3-second descent. No swing, no body lean. If you need momentum, the weight is too heavy.'
          },
          {
            name: 'Incline DB Curl',
            sets: 3, reps: '12–15', weight: '25 lbs', rest: '60 sec',
            notes: 'Set bench to 45–60°. Arms hang directly behind torso at start. Full long-head stretch.',
            rir: '1–2',
            cue: 'The incline position places the bicep in a pre-stretched state — this specifically targets the long head (the peak). Don\'t let your elbows drift forward as you curl. Lower all the way to a full hang at the bottom. The stretch position is the entire point of doing this variation. Don\'t shortcut the ROM.'
          },
          {
            name: 'Hammer Curl',
            sets: 2, reps: '15 each side', weight: '30 lbs', rest: '45 sec',
            notes: 'Neutral (thumbs-up) grip throughout. Targets brachialis and brachioradialis. Finishing pump work.',
            rir: '2',
            cue: 'Neutral grip the entire way — don\'t supinate. Moderate pace, focus on the squeeze at the top. The brachialis sits underneath the bicep and pushes it up when developed — this is what creates arm thickness from the side. Excellent finishing pump work to end the bicep session.'
          }
        ]
      }
    ]
  },

  /* ── FRIDAY ──────────────────────────────────────────────── */
  {
    id: 'fri', abbr: 'FRI',
    name: 'LEGS & CORE',
    muscleGroup: 'Quad · Ham · Glute · Abs',
    duration: '70 min',
    goal: 'Leg fullness · oblique-neutral core',
    exerciseCount: 7,
    setCount: 21,
    cardio: {
      icon: '🪜',
      type: 'Stair Climber',
      duration: '25 min',
      detail: 'Moderate pace · RPE 7 · glute & ham activation after the leg session'
    },
    sections: [
      {
        title: 'COMPOUND LEGS',
        exercises: [
          {
            name: 'Leg Press',
            sets: 4, reps: '12–15', weight: '270 lbs', rest: '90 sec',
            notes: 'Feet shoulder-width, mid-platform. Full ROM — knees past 90°. Don\'t lock out at the top.',
            rir: '1–2',
            cue: 'Feet shoulder-width in the middle of the platform. Lower until knees come past 90° — full stretch. Drive through your heels. Stop just before the knees lock out to maintain quad tension throughout the set. Higher reps on a cut keep the metabolic stimulus high without loading the spine.'
          },
          {
            name: 'Romanian Deadlift',
            sets: 4, reps: '10–12', weight: '185 lbs', rest: '90 sec',
            notes: 'Hip hinge — not a squat. Soft knees throughout. Push hips back until you feel the hamstring stretch before reversing.',
            rir: '1–2',
            cue: 'This is a hinge, not a squat. Push your hips as far back as possible before the bar passes your knees. Soft knees, bar stays close. You\'ll feel the hamstring pull taut — that\'s your reversal cue. Big hamstring stretch equals big hamstring growth. Never sacrifice depth for weight.'
          }
        ]
      },
      {
        title: 'ISOLATION LEGS',
        exercises: [
          {
            name: 'Seated Leg Curl',
            sets: 4, reps: '12–15', weight: '100 lbs', rest: '75 sec',
            notes: 'Seated version preferred over lying (more hamstring range). Full ROM. 1-sec pause at peak contraction.',
            rir: '1',
            cue: 'The seated position stretches the hamstring at both the knee and hip, giving more total range than the lying version. Curl fully. At the peak — pause 1 second. Slow eccentric: 3 seconds back up. Hamstring tears happen on the eccentric phase — treat the lowering portion with respect.'
          },
          {
            name: 'Walking DB Lunge',
            sets: 3, reps: '12 each leg', weight: '50 lbs each', rest: '90 sec',
            notes: 'Upright torso. Long stride to bias the glute. Back knee drops within 1" of floor. Drive through front heel.',
            rir: '1–2',
            cue: 'Upright torso — not leaning forward. Long stride to shift load to the glute. Back knee drops to within an inch of the floor — earn that full ROM. Drive through the front heel to stand. This exercise hits quads, hamstrings, glutes, and unilateral stability simultaneously. Heavy enough that legs 10–12 are a real challenge.'
          }
        ]
      },
      {
        title: 'CORE (oblique-neutral)',
        exercises: [
          {
            name: 'Hanging Leg Raise',
            sets: 3, reps: '12–15', weight: 'Bodyweight', rest: '60 sec',
            notes: 'Posterior pelvic tilt at the top activates lower abs. Controlled descent. Raise straight (no lateral deviation). Oblique-neutral by design.',
            rir: '1–2',
            cue: 'Don\'t just raise your legs — posteriorly tilt your pelvis at the top (lower back rounds slightly). That\'s the move that fully contracts the lower abs. Control the descent. Raise straight up, not to either side — this keeps the movement oblique-neutral. No swinging.'
          },
          {
            name: 'Cable Crunch',
            sets: 2, reps: '15–20', weight: '60 lbs', rest: '60 sec',
            notes: 'Kneeling. Hands behind head — arms don\'t pull. Round your spine downward. Oblique-neutral: no rotation.',
            rir: '2',
            cue: 'Hands behind your head — let your spine do the work. Round your back downward at the peak, shortening the rectus abdominis. No twisting left or right — this is oblique-neutral. Hold the peak contraction for 1 second. Your core should be doing all the work; your arms just hold the rope.'
          },
          {
            name: 'Plank Hold',
            sets: 1, reps: '60 sec', weight: 'Bodyweight', rest: '60 sec',
            notes: 'Elbows under shoulders. Neutral spine — no hip sag, no piking. Breathe through the hold.',
            rir: 'N/A',
            cue: 'Stack: elbows under shoulders, hips level with your spine, abs braced as if about to take a punch, glutes squeezed. Don\'t hold your breath — breathe steadily through it. The point is stabilization quality, not just endurance. If your hips sag or pike, end the set early.'
          }
        ]
      }
    ]
  },

  /* ── SATURDAY ────────────────────────────────────────────── */
  {
    id: 'sat', abbr: 'SAT',
    name: 'ACTIVE RECOVERY',
    muscleGroup: 'Full Body · Low Intensity',
    duration: 'Flexible',
    goal: 'Movement, blood flow & enjoyment',
    exerciseCount: 0,
    setCount: 0,
    isRecovery: true,
    recoveryType: 'active',
    recoveryOptions: [
      { icon: '🏄', label: 'Surfing', desc: 'Full-body coordination and core stabilization in a low-stress environment. Paddling builds rear delt endurance.' },
      { icon: '🏃', label: 'Running', desc: '20–40 min easy run at a conversational pace. Don\'t race yourself — keep it at RPE 5 or below.' },
      { icon: '🥾', label: 'Hiking', desc: 'Great natural quad and glute activation while being completely low-impact on the joints. Bonus: outdoor sunlight.' },
      { icon: '🏊', label: 'Swimming', desc: 'Best full-body recovery activity available. Zero joint stress, promotes active blood flow and muscle flushing.' }
    ],
    recoveryTips: [
      'Keep intensity at RPE 4–5 max. This is not a training day — active, not grinding.',
      'Aim for 30–90 minutes of movement depending on energy and soreness levels.',
      'Prioritize hydration and hit your protein target even on non-training days.',
      'Outdoor sunlight boosts testosterone, serotonin, and improves sleep quality — all helpful on a cut.',
      'A light walk after dinner counts. Any movement is better than none.'
    ]
  },

  /* ── SUNDAY ──────────────────────────────────────────────── */
  {
    id: 'sun', abbr: 'SUN',
    name: 'FULL REST',
    muscleGroup: 'Recovery · CNS Reset',
    duration: 'All day',
    goal: 'Supercompensation & mental reset',
    exerciseCount: 0,
    setCount: 0,
    isRecovery: true,
    recoveryType: 'rest',
    recoveryTips: [
      'Muscle is built during recovery — today is where the gains from this week are cemented.',
      'Sleep 8–9 hours. Growth hormone peaks during deep sleep stages 3 and 4.',
      'Eat at or slightly above your deficit target today to support tissue repair.',
      'Light stretching or foam rolling is fine. Avoid anything that causes systemic fatigue.',
      'No guilt about inactivity. Full rest is part of the program — not a cheat.',
      'Mental recovery matters as much as physical. Do something you genuinely enjoy today.',
      'Prep your meals for the week ahead. Consistency in nutrition is 80% of a successful cut.'
    ]
  }

];
