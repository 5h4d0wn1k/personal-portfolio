'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}




// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");
const notification = document.getElementById("notification");

// Add event to all form input fields for input validation
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // Check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}

form.addEventListener("submit", function (e) {
  e.preventDefault();

  // Get form data
  const formData = new FormData(form);

  // AJAX request for form submission
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://formspree.io/f/xpzgbzgk", true);
  xhr.setRequestHeader("Accept", "application/json");

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      // Form submission complete
      if (xhr.status === 200 || xhr.status === 201) {
        // Form submission successful
        notification.innerText = "Thanks for contacting Nikhil! He will respond to you as soon as possible.";
      } else {
        // Form submission failed
        notification.innerText = "Form submission failed. Please try again later.";
      }

      // Show the notification
      notification.style.display = "block";

      // Close the notification after 5 seconds (5000 milliseconds)
      setTimeout(function () {
        notification.style.display = "none";
      }, 1000);
    }
  };

  // Send form data
  xhr.send(formData);
});




// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

//eye button

const projectEyeIcons1 = document.querySelectorAll('.project1-eye-icon');

// GitHub link for your projects
const githubLink1 = 'https://github.com/5h4d0wn1k/A-Secure-Warning-Platform-From-Web-Attacks-Using-Machine-Learning';

// Add click event listener to each eye icon
projectEyeIcons1.forEach(icon => {
    icon.addEventListener('click', function(event) {
        // Prevent the default behavior of the click event
        event.preventDefault();
        // Open the GitHub link in a new tab or window
        window.open(githubLink1, '_blank');
    });
});

const projectEyeIcons2 = document.querySelectorAll('.project2-eye-icon');

// GitHub link for your projects
const githubLink2 = 'https://github.com/5h4d0wn1k/Decentralized_cloud_storage';

// Add click event listener to each eye icon
projectEyeIcons2.forEach(icon => {
    icon.addEventListener('click', function(event) {
        // Prevent the default behavior of the click event
        event.preventDefault();
        // Open the GitHub link in a new tab or window
        window.open(githubLink2, '_blank');
    });
});

const projectEyeIcons3 = document.querySelectorAll('.project3-eye-icon');

// GitHub link for your projects
const githubLink3 = 'https://github.com/5h4d0wn1k/personal-portfolio';

// Add click event listener to each eye icon
projectEyeIcons3.forEach(icon => {
    icon.addEventListener('click', function(event) {
        // Prevent the default behavior of the click event
        event.preventDefault();
        // Open the GitHub link in a new tab or window
        window.open(githubLink3, '_blank');
    });
});
