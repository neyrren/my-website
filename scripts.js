/* Mobile menu */
const menuBtn = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');
if (menuBtn && mobileMenu) {
  menuBtn.addEventListener('click', () => mobileMenu.classList.toggle('hidden'));
  // close menu on link click
  mobileMenu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => mobileMenu.classList.add('hidden')));
}


/* Duplicate tracks for seamless loop (skills + projects) */
document.querySelectorAll('.loop-track').forEach(track => {
  track.innerHTML = track.innerHTML + track.innerHTML; // duplicate content
});

/* Expand / collapse project descriptions by clicking the project name */
function toggleDesc(e){
  const card = e.currentTarget.closest('.project-card');
  const desc = card.querySelector('.project-desc');
  desc.classList.toggle('hidden');
}
document.querySelectorAll('.project-card .project-name').forEach(name => {
  name.addEventListener('click', toggleDesc);
});

/* Pause tracks while interacting (better UX) */
document.querySelectorAll('.skills-track, .projects-track').forEach(t => {
  t.addEventListener('mouseenter', ()=> t.style.animationPlayState='paused');
  t.addEventListener('mouseleave', ()=> t.style.animationPlayState='running');
});

//theme toggle functionality
 const toggleBtn = document.getElementById("theme-toggle");
const htmlEl = document.documentElement;

// Load saved theme
if (localStorage.getItem("theme") === "dark") {
  htmlEl.classList.add("dark");
}

toggleBtn.addEventListener("click", () => {
  htmlEl.classList.toggle("dark");
  if (htmlEl.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.setItem("theme", "light");
  }
});


const canvas = document.getElementById("stars");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();
window.addEventListener("resize", resizeCanvas);

let stars = [];
for (let i = 0; i < 120; i++) {
  stars.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    radius: Math.random() * 2 + 0.5,
    dy: Math.random() * 1 + 0.2
  });
}

function drawStars() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  stars.forEach(s => {
    ctx.beginPath();
    ctx.arc(s.x, s.y, s.radius, 0, Math.PI * 2);
    ctx.fill();

    s.y += s.dy;
    if (s.y > canvas.height) {
      s.y = 0;
      s.x = Math.random() * canvas.width;
    }
  });
  requestAnimationFrame(drawStars);
}
drawStars();
