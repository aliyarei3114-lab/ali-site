document.addEventListener("DOMContentLoaded", () => {
  const startBtn = document.getElementById("startBtn");
  const step1 = document.getElementById("step1");
  const step2 = document.getElementById("step2");

  startBtn.addEventListener("click", () => {
    step1.classList.remove("active");

    setTimeout(() => {
      step2.classList.add("active");
    }, 500);
  });
});