// document.addEventListener("DOMContentLoaded", function () {
//   const carousel = document.querySelector(".main-unlearn-image");
//   const items = document.querySelectorAll(".unlearn-image");
//   let currentIndex = 0;
//   let intervalId = null;

//   function showNextItem() {
//     currentIndex = (currentIndex + 1) % items.length;
//     carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
//   }

//   function startCarousel() {
//     if (window.innerWidth < 768) {
//       intervalId = setInterval(showNextItem, 3000);
//     }
//   }

//   function stopCarousel() {
//     if (intervalId) {
//       clearInterval(intervalId);
//       intervalId = null;
//       carousel.style.transform = `translateX(0)`;
//     }
//   }

//   function checkScreenSize() {
//     if (window.innerWidth < 768) {
//       if (!intervalId) startCarousel();
//     } else {
//       stopCarousel();
//     }
//   }

//   window.addEventListener("resize", checkScreenSize);

//   // Initial check
//   checkScreenSize();
// });
