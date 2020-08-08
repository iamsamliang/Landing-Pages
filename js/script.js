// Change navbar color when scrolling
var myNav = document.querySelector("#header");
window.onscroll = function () {
  if (
    document.body.scrollTop >= 20 ||
    document.documentElement.scrollTop >= 20
  ) {
    console.log(document.body.scrollTop);
    myNav.classList.add("nav-colored");
  } else {
    myNav.classList.remove("nav-colored");
  }
};

// Carousel to display images
var slideIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("my-slides");
  var y = document.getElementsByClassName("name");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    y[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > x.length) {
    slideIndex = 1;
  }
  x[slideIndex - 1].style.display = "";
  y[slideIndex - 1].style.display = "";
  setTimeout(carousel, 2000); // Change image every 2 seconds
}
