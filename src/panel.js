document.addEventListener("DOMContentLoaded", function () {
  const menu = document.getElementById("menu");
  const dropmenu = document.getElementById("dropmenu");

  dropmenu.addEventListener("click", function () {
    menu.classList.toggle("hidden");
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const dropdownToggle = document.querySelector(
    ".relative.inline-block.ml-auto button",
  );
  const dropdownMenu = document.querySelector(
    ".relative.inline-block.ml-auto .absolute",
  );

  dropdownToggle.addEventListener("click", function () {
    dropdownMenu.classList.toggle("hidden");
  });

  document.addEventListener("click", function (event) {
    if (
      !dropdownToggle.contains(event.target) &&
      !dropdownMenu.contains(event.target)
    ) {
      dropdownMenu.classList.add("hidden");
    }
  });
});
