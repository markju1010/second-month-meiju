const text = "hiii, memey!!\nhappy 2nd monthsary! <3";
let i = 0;
const typingText = document.getElementById("typing-text");
const mainContent = document.querySelector(".main-content");
const music = document.getElementById("bg-music");

function typeWriter() {
  if (i < text.length) {
    typingText.innerHTML += text.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(showContent, 1000);
  }
}

function showContent() {
  mainContent.classList.remove("hidden");

  // fade-in icons
  document.querySelectorAll(".icon").forEach((icon, index) => {
    setTimeout(() => {
      icon.classList.add("show");
    }, index * 500);
  });

  // start hearts
  setInterval(createHeart, 500);

  // play music
  music.play().catch(() => {
    console.log("Autoplay blocked — user must interact first.");
  });
}

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");
  heart.innerHTML = "💗";
  heart.style.left = Math.random() * 100 + "vw";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

function openSection(id) {
  document
    .querySelectorAll(".section")
    .forEach((sec) => sec.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
}

// start typing when loaded
window.onload = typeWriter;

// Open modal
function openLetter() {
  document.getElementById("letterModal").style.display = "block";
}

// Close modal
function closeLetter() {
  document.getElementById("letterModal").style.display = "none";
}

// Close modal when clicking outside the box
window.onclick = function (event) {
  const modal = document.getElementById("letterModal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};

let slideIndex = 0;
let slideTimer;

function openGallery() {
  document.getElementById("galleryModal").style.display = "block";
  showSlides(slideIndex);
  startAutoSlide();
}

function closeGallery() {
  document.getElementById("galleryModal").style.display = "none";
  clearTimeout(slideTimer);
}

function plusSlides(n) {
  showSlides((slideIndex += n));
  resetAutoSlide();
}

function showSlides(n) {
  const slides = document.querySelectorAll("#galleryModal .slide");
  if (n >= slides.length) {
    slideIndex = 0;
  }
  if (n < 0) {
    slideIndex = slides.length - 1;
  }

  slides.forEach((slide) => (slide.style.display = "none"));
  slides[slideIndex].style.display = "block";
}

function startAutoSlide() {
  slideTimer = setInterval(() => {
    slideIndex++;
    showSlides(slideIndex);
  }, 4000); // change every 4s
}

function resetAutoSlide() {
  clearInterval(slideTimer);
  startAutoSlide();
}

// Close when clicking outside
window.onclick = function (event) {
  const galleryModal = document.getElementById("galleryModal");
  if (event.target === galleryModal) {
    closeGallery();
  }
};

function openFlowers() {
  document.getElementById("flowersModal").style.display = "flex";
}

function closeFlowers() {
  document.getElementById("flowersModal").style.display = "none";
}
