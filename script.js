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
