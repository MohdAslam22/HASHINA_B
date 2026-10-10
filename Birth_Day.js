/* ================================================= */
/* PARTICLES */
/* ================================================= */

for (let i = 0; i < 100; i++) {
  const p = document.createElement("div");

  p.className = "particle";

  p.style.left = Math.random() * 100 + "%";

  p.style.animationDuration = 5 + Math.random() * 10 + "s";

  p.style.animationDelay = Math.random() * 8 + "s";

  document.body.appendChild(p);
}

/* ================================================= */
/* SCENE NAVIGATION */
/* ================================================= */

function nextScene(number) {
  document.querySelectorAll(".scene").forEach((scene) => {
    scene.classList.remove("active");
  });

  const target = document.getElementById("scene" + number);

  target.classList.add("active");
}

/* ================================================= */
/* HIDDEN HEART GAME */
/* ================================================= */

const heartArea = document.getElementById("heartArea");

const symbols = [
  "✦",
  "◇",
  "○",
  "✧",
  "◆",
  "☆",
  "♡",
  "△",
  "✦",
  "○",
  "◇",
  "✧",
  "☆",
  "◆",
  "♡",
  "○",
  "✦",
  "◇",
];

symbols.forEach((symbol, index) => {
  const button = document.createElement("button");

  button.className = "hidden-item";

  button.innerText = symbol;

  button.style.left = 5 + Math.random() * 88 + "%";

  button.style.top = 5 + Math.random() * 85 + "%";

  button.onclick = () => {
    showToast("Nope 😏 Keep searching...");

    button.style.transform = "scale(.5)";

    button.style.opacity = ".3";
  };

  heartArea.appendChild(button);
});

/* REAL HEART */

const realHeart = document.createElement("button");

realHeart.className = "hidden-item real";

realHeart.innerText = "❤️";

realHeart.style.left = 5 + Math.random() * 88 + "%";

realHeart.style.top = 5 + Math.random() * 80 + "%";

realHeart.onclick = () => {
  realHeart.innerText = "💗";

  showToast("❤️ HEART FOUND! MISSION 01 COMPLETE");

  setTimeout(() => {
    nextScene(3);
  }, 1200);
};

heartArea.appendChild(realHeart);

/* ================================================= */
/* PASSWORD */
/* ================================================= */

function checkPassword() {
  const input = document.getElementById("password").value.trim().toUpperCase();

  const error = document.getElementById("passwordError");

  if (input === "ASLAM") {
    error.innerHTML = "✓ ACCESS GRANTED";

    error.style.color = "#00ff9d";

    document.querySelector(".lock").classList.add("glitch");

    showToast("🔓 ACCESS GRANTED");

    setTimeout(() => {
      nextScene(4);
    }, 1000);
  } else {
    error.innerHTML = "✕ ACCESS DENIED — Hint: Her name.";

    error.style.color = "#ff4d6d";
  }
}

/* Enter key */

document.getElementById("password").addEventListener("keydown", function (e) {
  if (e.key === "Enter") {
    checkPassword();
  }
});

/* ================================================= */
/* HEART SYNC */
/* ================================================= */

let syncing = false;

function startSync() {
  if (syncing) return;

  syncing = true;

  const sync = document.getElementById("sync");

  const bar = document.getElementById("progressBar");

  const text = document.getElementById("syncText");

  sync.classList.add("connected");

  let progress = 0;

  const interval = setInterval(() => {
    progress++;

    bar.style.width = progress + "%";

    text.innerText = "SYNC: " + progress + "%";

    if (progress === 100) {
      clearInterval(interval);

      text.innerHTML = '<span class="green">SYNC COMPLETE ❤️</span>';

      setTimeout(() => {
        nextScene(5);
      }, 1200);
    }
  }, 35);
}

/* ================================================= */
/* TOAST */
/* ================================================= */

function showToast(message) {
  const toast = document.getElementById("toast");

  toast.innerText = message;

  toast.classList.add("show");

  setTimeout(() => {
    toast.classList.remove("show");
  }, 2200);
}

/* ================================================= */
/* FINAL EASTER EGG */
/* ================================================= */

function dontPress() {
  showToast("I literally told you not to press it... 😏");

  document.body.classList.add("glitch");

  setTimeout(() => {
    document.body.classList.remove("glitch");
  }, 500);

  setTimeout(() => {
    fireworks();
    confetti();
  }, 500);

  setTimeout(() => {
    showToast("🎆 HAPPY BIRTHDAY HASHINA ❤️");
  }, 2200);
}

/* ================================================= */
/* CONFETTI */
/* ================================================= */

function confetti() {
  for (let i = 0; i < 140; i++) {
    const c = document.createElement("div");

    c.className = "confetti";

    c.style.left = Math.random() * 100 + "%";

    c.style.background = [
      "#ff2fa4",
      "#9b5cff",
      "#00e5ff",
      "#ffe66d",
      "#00ff9d",
      "#ffffff",
    ][Math.floor(Math.random() * 6)];

    c.style.animationDuration = 2 + Math.random() * 4 + "s";

    document.body.appendChild(c);

    setTimeout(() => {
      c.remove();
    }, 6500);
  }
}

/* ================================================= */
/* FIREWORKS */
/* ================================================= */

function fireworks() {
  for (let i = 0; i < 15; i++) {
    setTimeout(() => {
      const f = document.createElement("div");

      f.className = "firework";

      f.style.left = 10 + Math.random() * 80 + "%";

      f.style.top = 10 + Math.random() * 55 + "%";

      document.body.appendChild(f);

      setTimeout(() => {
        f.remove();
      }, 1300);
    }, i * 180);
  }
}


function dontPress() {
  showToast("I literally told you not to press it... 😏");

  document.body.classList.add("glitch");

  setTimeout(() => {
    document.body.classList.remove("glitch");
  }, 500);

  setTimeout(() => {
    fireworks();
    confetti();
  }, 500);

  // Play birthday song
  const song = document.getElementById("birthdaySong");

  if (song) {
    song.currentTime = 0;

    song.play().catch((error) => {
      console.log("Song playback failed:", error);
      showToast("Tap again to play the birthday song 🎵");
    });
  }

  setTimeout(() => {
    showToast("🎆 HAPPY BIRTHDAY HASHINA ❤️");
  }, 2200);
}


function dontPress() {
  showToast("I literally told you not to press it... 😏");

  document.body.classList.add("glitch");

  setTimeout(() => {
    document.body.classList.remove("glitch");
  }, 500);

  // Show both birthday photos
  const photos = document.getElementById("birthdayPhotos");

  if (photos) {
    photos.classList.add("show");
  }

  // Fireworks and confetti
  setTimeout(() => {
    fireworks();
    confetti();
  }, 500);

  // Play birthday song
  const song = document.getElementById("birthdaySong");

  if (song) {
    song.currentTime = 0;

    song.play().catch((error) => {
      console.log("Song playback failed:", error);
      showToast("Tap again to play the birthday song 🎵");
    });
  }

  setTimeout(() => {
    showToast("🎆 HAPPY BIRTHDAY HASHINA ❤️");
  }, 2200);
}

/* ================================================= */
/* INIT */
/* ================================================= */
