const toplink = document.getElementById("top-link");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 200) {
    toplink.style.visibility = "visible";
    toplink.style.opacity = 1;
  } else {
    toplink.style.visibility = "hidden";
    toplink.style.opacity = 0;
  }
}
