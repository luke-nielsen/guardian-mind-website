const mobileMenu = document.getElementById('mobileMenu');

function toggleMenu() {
    mobileMenu.classList.toggle('active');
}

function menuRemove() {
    mobileMenu.classList.remove('active');
  }

  function navigateHome() {

  }

function joinMailingList() {
    var textarea = document.getElementById('contact-message');
    textarea.placeholder = 'I want to join the mailing list!';
  }

  window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('joinMailingList') === 'true') {
        joinMailingList();
    }
  }

  document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll(".falling-element");
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target); 
        }
      });
    });
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  });

  document.getElementById("why-stripe").addEventListener("click", function(){
    var stripeInfo = document.getElementsByClassName("stripe-info")[0]; // Target the first element in the collection
    if (stripeInfo) { // Check if the element exists
        stripeInfo.classList.toggle("hidden-section");
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".order-faqs h3");

  questions.forEach(question => {
      question.addEventListener("click", function () {
          const answer = this.nextElementSibling;

          // Toggle the display of the answer
          if (answer.style.display === "none" || answer.style.display === "") {
              answer.style.display = "block";
              this.classList.add("active");
          } else {
              answer.style.display = "none";
              this.classList.remove("active");
          }
      });
  });
});