document.addEventListener("DOMContentLoaded", function () {
  document
    .querySelector(".contrast-toggle")
    .addEventListener("click", function () {
      document.body.classList.toggle("high-contrast");
    });
});
