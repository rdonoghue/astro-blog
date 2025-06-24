console.log("Argh, the revenge");
document.querySelector(".hamburger").addEventListener("click", () => {
  console.log("All the argh");

  document.querySelector(".nav-links").classList.toggle("expanded");
});
