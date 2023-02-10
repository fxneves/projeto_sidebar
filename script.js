const body = document.body;
const button = document.querySelectorAll("button");
const paragraph = document.querySelectorAll("p");
const img = document.querySelectorAll(".noone");

button.forEach((item) => {
  item.addEventListener("click", () => {
    if ((body.contains = "body")) {
      body.classList.toggle("body");

      paragraph.forEach((item) => {
        item.classList.toggle("remove");
      });

      img.forEach((item) => {
        item.classList.toggle("remove");
      });
    }
  });
});
