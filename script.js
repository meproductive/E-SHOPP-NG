const menu = document.querySelector(".menu");
const cartcontent = document.querySelector(".cart-content");
const searchdpcontent = document.querySelector(".search-dp-content");

const dpbtn = document.querySelector(".dp-btn");
const bagdpbtn = document.querySelector(".bag-dp-btn");
const respicon = document.querySelector(".resp-icon");
const respxicon = document.querySelector(".resp-x-icon");

respicon.addEventListener("click", function() {
  menu.classList.toggle("active");
  document.addEventListener("click", function (e) {
      if (!e.composedPath().includes(respicon) &&
          !e.composedPath().includes(menu)
          )
respxicon.addEventListener("click", function() {
  menu.classList.remove("active");
      });
  });
});


bagdpbtn.addEventListener("click", function() {
  cartcontent.classList.toggle("active");
  document.addEventListener("click", function (c) {
    if (!c.composedPath().includes(bagdpbtn) &&
        !c.composedPath().includes(cartcontent)
      ) {
          cartcontent.classList.remove("active");
      }
  });
});

dpbtn.addEventListener("click", function() {
  searchdpcontent.classList.toggle("active");
  document.addEventListener("click", function (b) {
    if (!b.composedPath().includes(dpbtn) &&
        !b.composedPath().includes(searchdpcontent)
      ) {
          searchdpcontent.classList.remove("active");
      }
  });
});


let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

function imaFunction() {
  document.getElementById("iamDropdown").classList.toggle("show");
}

windows.onclick = function(event) {
  if (!event.target.matches('.drop-btn')) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}


