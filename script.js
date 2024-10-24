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
    document.getElementById('contact-form').scrollIntoView({ behavior: 'smooth' });

    document.getElementById('mailing-list').checked = true;
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

// function setBackLinks() {
//   const previousPage = document.referrer;

//   const backLinks = document.querySelectorAll(".backLink");

//   backLinks.forEach(link => {
//       if (previousPage) {
//           link.href = previousPage;
//       } else {
//           link.addEventListener("click", function(event) {
//               event.preventDefault();
//               window.history.back(); 
//           });
//       }
//   });
// }

// Submitting "Contact Us Form"
document.addEventListener("DOMContentLoaded", setBackLinks);

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const formData = new FormData(this);
  
  fetch(this.action, {
    method: this.method,
    body: formData,
    headers: {
      'Accept': 'application/json'
    }
  }).then(response => {
    if (response.ok) {
      document.getElementById('success-message').style.display = 'block';
      
      document.getElementById('contact-form').reset();
    } else {
      alert('There was a problem sending your message. Please try again.');
    }
  }).catch(error => {
    alert('Network error. Please check your internet connection and try again.');
  });
});

// Back Buttons
function setBackLinks() {
  const currentPage = window.location.href;
  const backLinks = document.querySelectorAll(".backLink");

  // Get the history stack from session storage
  let historyStack = JSON.parse(sessionStorage.getItem("navigationHistory")) || [];

  // If the current page is the same as the last entry in the history stack, remove it to avoid loops
  if (historyStack.length > 0 && historyStack[historyStack.length - 1] === currentPage) {
    historyStack.pop();
  }

  // Add the current page to the history stack
  historyStack.push(currentPage);
  sessionStorage.setItem("navigationHistory", JSON.stringify(historyStack));

  backLinks.forEach(link => {
    if (historyStack.length > 1) {
      // Set the back link to the previous page in the history stack
      link.href = historyStack[historyStack.length - 2];
    } else {
      // Fallback to default homepage if there is no previous history
      link.href = "/";
    }

    // Optionally handle the click event to update the stack
    link.addEventListener("click", function(event) {
      event.preventDefault();
      if (historyStack.length > 1) {
        historyStack.pop(); // Go back one step in the history
        sessionStorage.setItem("navigationHistory", JSON.stringify(historyStack));
        window.location.href = historyStack[historyStack.length - 1];
      } else {
        window.location.href = "/";
      }
    });
  });
}
