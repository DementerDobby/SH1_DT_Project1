function toggleMenu() {
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("content");
  var menuToggle = document.querySelector(".menu-toggle");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
    content.style.marginLeft = "0";
    menuToggle.innerHTML = "☰";
  } else {
    sidebar.style.width = "250px";
    content.style.marginLeft = "250px";
    menuToggle.innerHTML = "✕";
  }
}
