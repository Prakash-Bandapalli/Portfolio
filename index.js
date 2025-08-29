window.addEventListener("scroll", () => {
  var header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 0);
});
var menu = document.querySelector(".menuHolder");
var closeBtn = document.querySelector(".close-btn");
var menuBtn = document.querySelector(".menu-btn");
menuBtn.addEventListener("click", () => {
  menu.classList.add("active");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
});
var year = new Date().getFullYear();
document.querySelector(".year").innerHTML = year;
//load more function
let loadMoreBtn = document.querySelector("#load-more");
let currentItem = 3;
loadMoreBtn.onclick = () => {
  var boxes = [...document.querySelectorAll(".container .box-container .box")];
  for (var i = currentItem; i < currentItem + 3; i++) {
    if (boxes[i]) {
      boxes[i].style.display = "inline-block";

      // Animate newly revealed boxes
      gsap.to(boxes[i], {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 0.6,
        ease: "back.out(1.2)",
      });
    }
  }
  currentItem += 3;
  if (currentItem >= boxes.length) {
    loadMoreBtn.style.display = "none";
  }
};
