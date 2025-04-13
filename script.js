
let currentIndex = 0;
const images = document.querySelectorAll('.slider img');
const totalImages = images.length;

function nextImage() {
  currentIndex = (currentIndex + 1) % totalImages;
  updateSlider();
}

function updateSlider() {
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentIndex * 100}%)`;
}

// Change image every 3 seconds
setInterval(nextImage, 3000);
// Form Submission Alert
document.getElementById("contactForm").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for contacting us! We'll get back to you soon.");
    document.getElementById("contactForm").reset();
});