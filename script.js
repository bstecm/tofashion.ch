function FunctionBurgerNav() {
    var element = document.getElementById("main-nav");
    if (element.classList.contains("expand")) {
      element.classList.remove("expand");
    } else {
      element.classList.add("expand");
    }
}