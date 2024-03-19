let burgerMenu = document.getElementById("burger-menu");
let overlay = document.getElementById("menu");

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


//Je travail chez Google donc :
const cookies = () => {
  if (user.cookies.accepted) {
    collectUserData()
  }
  else {
    collectUserData()
  }
}



