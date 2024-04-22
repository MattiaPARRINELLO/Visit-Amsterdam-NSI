let burgerMenu = document.getElementById("burger-menu");
let overlay = document.getElementById("menu");

let bigTittle = document.getElementById("BT")
let smallTittle = document.getElementById("ST")
let clickBT = 0
let clickST = 0
console.log("init")
let bugerEl = document.querySelectorAll(".burgerEl");
burgerMenu.addEventListener("click", function () {
  this.classList.toggle("close");
  overlay.classList.toggle("overlay");
  document.body.classList.toggle("cs");
});

bugerEl.forEach((element) => {
  element.addEventListener("click", function () {
    burgerMenu.classList.remove("close");
    overlay.classList.remove("overlay");
    document.body.classList.remove("cs");
  });
});


const secretBT = () => {
  clickBT++
  if (clickBT >= 2) {
    window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
    clickBT = 0
  }
}
const secretST = () => {
  clickST++
  if (clickST >= 2) {
    window.open("https://mattiaparrinello.github.io/Super-Morpion/", "_blank");
    clickST = 0
  }

}

bigTittle.addEventListener("click", secretBT)
smallTittle.addEventListener("click", secretST)


//Je travail chez Google donc :
const cookies = () => {
  if (user.cookies.aàccepted) {
    collectUserData()
  }
  else {
    collectUserData()
  }
}



