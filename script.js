const projectBtns = document.querySelectorAll('.project-button');
const projectDetails = document.querySelectorAll('.project-details');

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
