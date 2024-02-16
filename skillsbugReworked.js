window.onload = function() {
let slideIndex = 0;
showSlides();

function showSlides() {
  let slide = document.querySelectorAll(".slideshow-image");
  
  if (slide.length === 0) {
    console.error("No slideshow images found.");
    return;
  }

  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";  
  }
  
  slideIndex++;
  
  if (slideIndex > slide.length) { 
    slideIndex = 1; 
  }
  
  slide[slideIndex - 1].style.display = "block";  

  
  let bottomSlides = document.querySelectorAll("#slideshow-container .slideshow-image");
  for (let i = 0; i < bottomSlides.length; i++) {
      bottomSlides[i].style.display = "none";  
  }
  
  bottomSlides[slideIndex - 1].style.display = "block";


  setTimeout(showSlides, 2000); 
}

let slideIndexCompetitions = 0;
let slideIndexNationals = 0;
let slideIndexAccolades = 0;
showSlidesComp("competitions-slideshow", slideIndexCompetitions);
showSlidesComp("nationals-slideshow", slideIndexNationals);
showSlidesComp("accolades-slideshow", slideIndexAccolades);

function showSlidesComp(slideshowId, slideIndexTwo) {
  let slides = document.getElementById(slideshowId).getElementsByClassName("slideshow-image");
  
  for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  
  slideIndexTwo++;
  
  if (slideIndexTwo > slides.length) { 
      slideIndexTwo = 1; 
  }
  
  slides[slideIndexTwo - 1].style.display = "block";  
  setTimeout(function() {showSlidesComp(slideshowId, slideIndexTwo)}, 2000); 
}


document.getElementById("webLink").addEventListener("click", function() {
  this.href = "https://www.skillsusa.org/";
});

document.getElementById("webLinkTwo").addEventListener("click", function() {
  this.href = "https://youtu.be/98nuUd-t-P8";
});

document.getElementById("webLinkThree").addEventListener("click", function() {
  this.href = "https://www.skillsusa.org/competitions/";
});

};