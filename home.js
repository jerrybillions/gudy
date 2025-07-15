/*const images = ["ww.jpg", "sgg", "fashion-clothing-hangers-show.jpg", "q.jpg", "q1.jpg", "q3.jpg"];
let currentIndex = 0;

function showSlide(index) {
  const img = document.getElementById("Slide-Image");
  img.src = images[index];

 document.getElementById("Slide text").innerText = texts[index];
 
}

function nextSlide() {
  currentIndex = (currentIndex + 1) % images.length;
  showSlide(currentIndex);
}

function prevSlide() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  showSlide(currentIndex);
}

// Optional: Auto-slide every 3 seconds
setInterval(nextSlide, 5000);
*/

let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlide(i) {
  slides.forEach((slide) => slide.classList.remove('active'));
  slides[i].classList.add('active');
}

function nextSlide() {
  index = (index + 1) % slides.length;
  showSlide(index);
}
function prevSlide() {
  index = (index - 1) % slides.length;
  showSlide(index);
}

setInterval(nextSlide, 8000); // Change slide every 3 seconds



  let currentIndex = 0;
  const slider = document.getElementById('reviewSlider');
  const totalReviews = slider.children.length;

  function updateSlider() {
    slider.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  function nextReview() {
    currentIndex = (currentIndex + 1) % totalReviews;
    updateSlider();
  }

  function prevReview() {
    currentIndex = (currentIndex - 1 + totalReviews) % totalReviews;
    updateSlider();
  }

