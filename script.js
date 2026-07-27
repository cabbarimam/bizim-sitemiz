
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
    try {
      await music.play();
      musicButton.textContent = "⏸ Müziği Kapat";
    } catch (_) {}
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
    const days = Math.floor(diff / 86400000);
    diff %= 86400000;
    const hours = Math.floor(diff / 3600000);
    diff %= 3600000;
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
  document.getElementById("letterButton").textContent =
    letter.classList.contains("open") ? "Mektubu Kapat" : "Mektubu Aç";
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
  "078a369f-ba70-423e-85d2-a3811245a9c2.JPEG",
  "205CB7B8-91D8-498B-B180-737CF2FDBF98.JPEG",
  "2282b4ff-9d69-4fff-8b86-77ca34480a21.JPEG",
  "60e5f0a4-4eac-4e5c-857f-c5850aaadbbf.JPEG",
  "6cecd463-8915-474d-8ec1-3f9539dddbcc.JPEG",
  "8F0B5BBA-B770-4F21-9689-C9C2A0E39066.JPEG",
  "927F1C53-930E-40DB-82F4-4A14D97E69D2.JPEG",
  "E674A355-186F-4CE9-B410-9C0DEC385396.JPEG",
  "IMG_0052.JPEG",
  "IMG_0078.JPEG",
  "IMG_0087.JPEG",
  "IMG_0104.JPEG",
  "IMG_0150.JPEG",
  "IMG_0181.JPEG",
  "IMG_0269.JPEG",
  "IMG_0321.JPEG",
  "IMG_0344.JPEG",
  "IMG_0511.JPEG",
  "IMG_0734.JPEG",
  "IMG_0746.JPEG",
  "IMG_0853.JPEG",
  "IMG_0888.JPEG",
  "IMG_1083.JPEG",
  "IMG_1253.JPEG",
  "IMG_1400.JPEG",
  "IMG_1425.JPEG",
  "IMG_1426.JPEG",
  "IMG_1440.JPEG",
  "IMG_1480.JPEG",
  "IMG_1530.JPEG",
  "IMG_1533.JPEG",
  "IMG_1557.JPEG",
  "IMG_1563.JPEG",
  "IMG_1590.JPEG",
  "IMG_1877.JPEG",
  "IMG_1891.JPEG",
  "IMG_1997.JPEG",
  "IMG_2121.JPEG",
  "IMG_2187.JPEG",
  "IMG_2221.JPEG",
  "IMG_2256.JPEG",
  "IMG_2371.JPEG",
  "IMG_2376.JPEG",
  "IMG_2381.JPEG",
  "IMG_2456.JPEG",
  "IMG_2482.JPEG",
  "IMG_2608.JPEG",
  "IMG_2668.JPEG",
  "IMG_2836.JPEG",
  "IMG_2862.JPEG",
  "IMG_2910.JPEG",
  "IMG_3076.JPEG",
  "IMG_3096.JPEG",
  "IMG_3100.JPEG",
  "IMG_3210.JPEG",
  "IMG_3563.JPEG",
  "IMG_4870.JPG",
  "IMG_4871.JPG",
  "IMG_4879.JPG",
  "IMG_4898.JPEG",
  "IMG_5759.JPG",
  "IMG_6344.JPEG",
  "IMG_6367.JPEG",
  "IMG_7063.JPEG",
  "IMG_7216.JPEG",
  "IMG_9345.JPG",
  "IMG_9451.JPEG",
  "IMG_9463.JPEG",
  "IMG_9541.JPEG",
  "IMG_9883.JPEG",
  "IMG_9895.JPEG",
  "a096a3fa-07fb-4bd2-8150-40685a427c65.JPEG"
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
