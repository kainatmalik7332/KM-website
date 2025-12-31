/* =====================
   HERO IMAGE SLIDER
===================== */
const heroImages = [
  "images/hero1.jpg",
  "images/hero2.jpg",
  "images/hero3.jpg",
  "images/hero4.jpg"
];

let heroIndex = 0;
const heroImage = document.getElementById("heroImage");

setInterval(() => {
  heroIndex = (heroIndex + 1) % heroImages.length;
  heroImage.src = heroImages[heroIndex];
}, 4000);

/* =====================
   THEME TOGGLE
===================== */
const toggle = document.getElementById("themeToggle");
toggle.addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

/* =====================
   FAQ TOGGLE
===================== */
document.querySelectorAll(".faq-question").forEach(btn => {
  btn.addEventListener("click", () => {
    btn.parentElement.classList.toggle("active");
  });
});

/* =====================
   MODAL FORM
===================== */
function openForm() {
  document.getElementById("formModal").style.display = "block";
}

function closeForm() {
  document.getElementById("formModal").style.display = "none";
}
