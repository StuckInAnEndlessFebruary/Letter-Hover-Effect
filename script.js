document.querySelectorAll(".header > span").forEach((element) => {
  element.addEventListener("mouseover", () => bounce(element));
});
function bounce(letter) {
  if (!letter.classList.contains("bounce")) {
    letter.classList.add("bounce");
    setTimeout(function () {
      letter.classList.remove("bounce");
    }, 1000);
  }
}
