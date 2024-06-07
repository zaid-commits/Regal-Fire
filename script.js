// You can add any interactivity or animations here
// For example, you can create a smooth scrolling effect

const menuLinks = document.querySelectorAll('.menu a');

// menuLinks.forEach(link => {
//     link.addEventListener('click', (e) => {
//         e.preventDefault();
//         const targetId = e.target.getAttribute('href');
//         const targetElement = document.querySelector(targetId);
//         targetElement.scrollIntoView({ behavior: 'smooth' });
//     });
// });


// const toggleMenu = document.querySelector('.toggle-menu');
// const menu = document.querySelector('.menu');

// toggleMenu.addEventListener('click', () => {
//     menu.classList.toggle('active');
// });

//code for the counter 

// <script>
// document.addEventListener('DOMContentLoaded', () => {
//     const counters = document.querySelectorAll('.counter');

//     counters.forEach(counter => {
//         const updateCounter = () => {
//             const target = +counter.getAttribute('data-target');
//             const count = +counter.innerText;

//             const increment = target / 200; // Adjust the speed of the counter here

//             if (count < target) {
//                 counter.innerText = Math.ceil(count + increment);
//                 setTimeout(updateCounter, 1);
//             } else {
//                 counter.innerText = target;
//             }
//         };

//         updateCounter();
//     });
// });
// </script>

// script.js
document.onreadystatechange = function () {
    if (document.readyState === "complete") {
      // Hide loader when page is fully loaded
      hideLoader();
    } else {
      // Show loader when page is loading
      showLoader();
    }
  };
  
  function showLoader() {
    document.querySelector('.loader-wrapper').style.display = 'flex';
  }
  
  function hideLoader() {
    document.querySelector('.loader-wrapper').style.display = 'none';
  }
  


// var i = 0;
// var txt = 'Lorem ipsum typing effect!'; /* The text */
// var speed = 50; /* The speed/duration of the effect in milliseconds */

// function typeWriter() {
//   if (i < txt.length) {
//     document.getElementById("demo").innerHTML += txt.charAt(i);
//     i++;
//     setTimeout(typeWriter, speed);
//   }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const faqItems = document.querySelectorAll(".faq");

//     faqItems.forEach(function(item) {
//         item.addEventListener("click", function() {
//             // Toggle the active class on the clicked FAQ item
//             this.classList.toggle("active");
//         });
//     });
// });

// const faqItems = document.querySelectorAll('.faq-item');

// faqItems.forEach(item => {
//     const faqQuestion = item.querySelector('.faq-question');
//     const faqAnswer = item.querySelector('.faq-answer');

//     faqQuestion.addEventListener('click', () => {
//         item.classList.toggle('active');
//         faqAnswer.style.display = item.classList.contains('active') ? 'block' : 'none';
//     });
// });


document.addEventListener("DOMContentLoaded", function () {
    const faqItems = document.querySelectorAll(".faq-item");

    faqItems.forEach(function (faqItem) {
        const question = faqItem.querySelector(".faq-question");

        question.addEventListener("click", function () {
            faqItem.classList.toggle("active");
        });
    });
});
