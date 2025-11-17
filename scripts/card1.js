document.addEventListener("DOMContentLoaded", () => {
  const input = document.querySelector("input");

  input.addEventListener("keyup", (e) => {
    if (e.key === "Enter") {
      const nombre = input.value.trim().toLowerCase();

      if (nombre === "andres fabricio" || nombre === "andrés fabricio") {
        window.location.href = "/pages/dame5.html";
      } else {
        alert("Nombre incorrecto. No eres Andrés Fabricio.");
      }
    }
  });
});
