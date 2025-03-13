const projectBtns = document.querySelectorAll('.project-button');
const projectDetails = document.querySelectorAll('.project-details');

const form = document.querySelector('form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');

const nameError = document.querySelector('#name-error');
const emailError = document.querySelector('#email-error');
const messageError = document.querySelector('#message-error');
const successMessage = document.querySelector('#success-message');

projectBtns.forEach((btn, ind) =>
  btn.addEventListener('click', e => toggleProjectDetails(e, ind))
);

function toggleProjectDetails(e, ind) {
  const selectedProject = projectDetails[ind];
  selectedProject.classList.toggle('hide');

  if (!selectedProject.classList.contains('hide')) {
    projectBtns[ind].innerHTML = 'Hide Details';
  } else {
    projectBtns[ind].innerHTML = 'Show Details';
  }
}

form.addEventListener('submit', submitForm);

function submitForm(e) {
  e.preventDefault();
  nameError.textContent = '';
  emailError.textContent = '';
  messageError.textContent = '';

  const name = document.forms['contactForm']['name'].value;
  const email = document.forms['contactForm']['email'].value;
  const message = document.forms['contactForm']['message'].value;

  let isValid = true;

  if (name.trim() === '') {
    nameError.textContent = 'Please enter your name.';
    isValid = false;
  }

  if (email.trim() === '' || !validateEmail(email)) {
    emailError.textContent = 'Please enter a valid email address.';
    isValid = false;
  }

  if (message.trim() === '') {
    messageError.textContent =
      'Oops! Looks like you forgot to write something!';
    isValid = false;
  }

  if (isValid) {
    successMessage.textContent = 'Form submitted successfully!';

    nameInput.value = '';
    emailInput.value = '';
    messageInput.value = '';
  }
}

function validateEmail(email) {
  const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return re.test(String(email));
}
