const projectBtns = document.querySelectorAll('.project-button');
const projectDetails = document.querySelectorAll('.project-details');

projectBtns.forEach(btn =>
  btn.addEventListener('click', e => toggleProjectDetails(e))
);

function toggleProjectDetails() {}
