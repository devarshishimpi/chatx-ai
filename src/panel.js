document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const dropmenu = document.getElementById("dropmenu");

  dropmenu.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});
