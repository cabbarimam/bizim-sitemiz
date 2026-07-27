
const opening = document.getElementById("opening");
const music = document.getElementById("music");
const musicButton = document.getElementById("musicButton");

document.getElementById("enterButton").addEventListener("click", async () => {
  opening.classList.add("hidden");
  try {
    await music.play();
    musicButton.textContent = "⏸ Müziği Kapat";
  } catch (_) {}
});

musicButton.addEventListener("click", async () => {
  if (music.paused) {
    try { await music.play(); musicButton.textContent = "⏸ Müziği Kapat"; } catch (_) {}
  } else {
    music.pause();
    musicButton.textContent = "🎵 Müziği Aç";
  }
});

const weddingDate = new Date("2027-04-24T18:00:00+03:00");
const firstMeeting = new Date("2024-05-12T00:00:00+03:00");

function updateCounters() {
  const now = new Date();
  let diff = weddingDate - now;
  if (diff <= 0) {
    document.getElementById("countdown").innerHTML = "<h3>Bugün bizim en güzel günümüz! 💍❤️</h3>";
  } else {
    const days = Math.floor(diff / 86400000); diff %= 86400000;
    const hours = Math.floor(diff / 3600000); diff %= 3600000;
    const minutes = Math.floor(diff / 60000);
    const seconds = Math.floor((diff % 60000) / 1000);
    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = hours;
    document.getElementById("minutes").textContent = minutes;
    document.getElementById("seconds").textContent = seconds;
  }
  const togetherDays = Math.max(0, Math.floor((now - firstMeeting) / 86400000));
  document.getElementById("together").textContent = `Yollarımız kesişeli ${togetherDays} gün oldu. ❤️`;
}
updateCounters();
setInterval(updateCounters, 1000);

document.getElementById("letterButton").addEventListener("click", () => {
  const letter = document.getElementById("letter");
  letter.classList.toggle("open");
  document.getElementById("letterButton").textContent = letter.classList.contains("open") ? "Mektubu Kapat" : "Mektubu Aç";
});

document.getElementById("loveButton").addEventListener("click", (event) => {
  document.getElementById("loveMessage").classList.add("show");
  const rect = event.currentTarget.getBoundingClientRect();
  const cx = rect.left + rect.width / 2;
  const cy = rect.top + rect.height / 2;
  for (let i = 0; i < 42; i++) {
    const heart = document.createElement("span");
    heart.className = "burst-heart";
    heart.textContent = Math.random() > .35 ? "❤️" : "💖";
    heart.style.left = `${cx}px`;
    heart.style.top = `${cy}px`;
    const angle = Math.PI * 2 * i / 42;
    const distance = 100 + Math.random() * 260;
    heart.style.setProperty("--x", `${Math.cos(angle) * distance}px`);
    heart.style.setProperty("--y", `${Math.sin(angle) * distance}px`);
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 1800);
  }
});

for (let i = 0; i < 95; i++) {
  const star = document.createElement("i");
  star.className = "star";
  star.style.left = `${Math.random() * 100}vw`;
  star.style.top = `${Math.random() * 100}vh`;
  star.style.animationDelay = `${Math.random() * 2}s`;
  star.style.opacity = .25 + Math.random() * .75;
  document.getElementById("stars").appendChild(star);
}

setInterval(() => {
  const petal = document.createElement("span");
  petal.className = "petal";
  petal.textContent = Math.random() > .3 ? "🌹" : "🌸";
  petal.style.left = `${Math.random() * 100}vw`;
  petal.style.animationDuration = `${7 + Math.random() * 6}s`;
  petal.style.setProperty("--drift", `${-100 + Math.random() * 200}px`);
  document.getElementById("petals").appendChild(petal);
  setTimeout(() => petal.remove(), 14000);
}, 1200);

const photos = [
  "assets/photos/foto-01.jpeg",
  "assets/photos/foto-02.jpeg",
  "assets/photos/foto-03.jpeg",
  "assets/photos/foto-04.jpeg",
  "assets/photos/foto-05.jpeg",
  "assets/photos/foto-06.jpeg",
  "assets/photos/foto-07.jpeg",
  "assets/photos/foto-08.jpeg",
  "assets/photos/foto-09.jpeg",
  "assets/photos/foto-10.jpeg",
  "assets/photos/foto-11.jpeg",
  "assets/photos/foto-12.jpeg",
  "assets/photos/foto-13.jpeg",
  "assets/photos/foto-14.jpeg",
  "assets/photos/foto-15.jpeg",
  "assets/photos/foto-16.jpeg",
  "assets/photos/foto-17.jpeg",
  "assets/photos/foto-18.jpeg",
  "assets/photos/foto-19.jpeg",
  "assets/photos/foto-20.jpeg",
  "assets/photos/foto-21.jpeg",
  "assets/photos/foto-22.jpeg",
  "assets/photos/foto-23.jpeg"
];
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
let currentPhoto = 0;

function showPhoto(index) {
  currentPhoto = (index + photos.length) % photos.length;
  lightboxImage.src = photos[currentPhoto];
}
document.querySelectorAll(".gallery-item").forEach((item) => {
  item.addEventListener("click", () => {
    showPhoto(Number(item.dataset.index));
    lightbox.showModal();
  });
});
document.getElementById("closeLightbox").addEventListener("click", () => lightbox.close());
document.getElementById("prevPhoto").addEventListener("click", () => showPhoto(currentPhoto - 1));
document.getElementById("nextPhoto").addEventListener("click", () => showPhoto(currentPhoto + 1));
lightbox.addEventListener("click", (event) => {
  if (event.target === lightbox) lightbox.close();
});
document.addEventListener("keydown", (event) => {
  if (!lightbox.open) return;
  if (event.key === "ArrowLeft") showPhoto(currentPhoto - 1);
  if (event.key === "ArrowRight") showPhoto(currentPhoto + 1);
});
