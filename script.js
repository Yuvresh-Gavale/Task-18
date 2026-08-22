// BOX-COLOR-ARRANGEMENT
const boxes = document.querySelectorAll(".set-2 div");
boxes.forEach(function (box) {
  box.addEventListener("click", function () {
    box.style.backgroundColor = box.innerText;
  });
});

// PRINT NAME
const input = document.getElementById("input");
const greet = document.querySelector(".enter");
const header = document.querySelector(".set-1 header");
greet.addEventListener("click", function () {
  header.innerText = "Hello👋" + input.value;
});
