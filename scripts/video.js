const video = document.getElementById("bg-video");

video.removeAttribute("loop");

video.controls = false;

video.addEventListener("ended", () => {
  video.pause();
  video.currentTime = video.duration;

  video.addEventListener("play", (e) => {
    e.preventDefault();
    video.pause();
  });

  video.addEventListener("click", () => {
    video.pause();
  });
});

const elements = document.querySelectorAll(".scroll-anim");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
        observer.unobserve(entry.target); // Para que no repita la animación
      }
    });
  },
  {
    threshold: 0.2, // La animación se dispara cuando se ve el 20%
  }
);

elements.forEach((el) => observer.observe(el));
