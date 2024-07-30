const globalContactMessage =document.getElementById('contact-message');

function learnMore() {
    alert("Learn more about how we can help you protect your kids online.");
}

function encryptData(data, secretKey) {
    return CryptoJS.AES.encrypt(JSON.stringify(data), secretKey).toString();
}
const secretKey = "j}uu}|!rS'S:,P1PW#aFZhGS8oIB54";


function joinMailingList() {
    const contact = document.getElementById('contact');
    const contactMessage =document.getElementById('contact-message');
    contact.scrollIntoView({ behavior: 'smooth' });
    contactMessage.placeholder = 'I want to join the mailing list!'
}

function navJoinMailingList(event) {
    event.preventDefault();
    const contact = document.getElementById('contact');
    const contactMessage =document.getElementById('contact-message');
    contact.scrollIntoView({ behavior: 'smooth' });
    contactMessage.placeholder = 'I want to join the mailing list!'
}

function goToDonatePage(event) {
    event.preventDefault();
    const donatePage = 'donate.html'
    window.location.href = donatePage;
}

function goToHomePage(event) {
    event.preventDefault();
    const homePage = 'index.html'
    window.location.href = homePage;
}

function donateJoinMailingList(event) {
    event.preventDefault();
    const mailingListPage = 'index.html#contact'
    window.location.href = mailingListPage;
    window.onload = function() {
        const contactMessage = document.getElementById('contact-message');
        contactMessage.placeholder = 'I want to join the mailing list!'
    }
}

function decryptData(encryptedData, secretKey) {
    const bytes = CryptoJS.AES.decrypt(encryptedData, secretKey);
    return JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
    //save to local storage:

    const contactName = document.getElementById('contact-name');
    const contactEmail = document.getElementById('contact-email');
    const jsonContacts = decryptData(localStorage.getItem("contacts"), secretKey);
    jsonContacts.push({
        name : contactName.value,
        email : contactEmail.value,
    });
    const encryptedData = encryptData(jsonContacts, secretKey);
    localStorage.setItem("contacts", encryptedData);
    //clear boxes
    contactName.value = "";
    contactEmail.value = "";
});

document.getElementById('mobile-menu').addEventListener('click', function() {
    const navList = document.getElementById('nav-links');
    navList.classList.toggle('active');
});

document.getElementById('nav-links').addEventListener('click', function() {
    const navList = document.getElementById('nav-links');
    navList.classList.toggle('active')
});

//document.getElementById('donate-logo').addEventListener('click', goToHomePage())

// document.getElementById('contact-nav-link').addEventListener('click', joinMailingList())

// document.getElementById('donate-nav-link').addEventListener('click', goToDonatePage())