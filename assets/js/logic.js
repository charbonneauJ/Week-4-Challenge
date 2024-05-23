const student = document.getElementById('student-names');
const grade = document.getElementById('grades');
const comment = document.getElementById('msg');
const saveButton = document.getElementById('save');

function saveLastGrade() {
  // Save related form data as an object
  const studentGrade = {
    student: student.value,
    grade: grade.value,
    comment: comment.value.trim(),
  };
  // Use .setItem() to store object in storage and JSON.stringify to convert it as a string
  localStorage.setItem('studentGrade', JSON.stringify(studentGrade));
}

function renderLastGrade() {
  // Use JSON.parse() to convert text to JavaScript object
  const lastGrade = JSON.parse(localStorage.getItem('studentGrade'));
  // Check if data is returned, if not exit out of the function
  if (lastGrade !== null) {
    document.getElementById('saved-name').innerHTML = lastGrade.student;
    document.getElementById('saved-grade').innerHTML = lastGrade.grade;
    document.getElementById('saved-comment').innerHTML = lastGrade.comment;
  }
}

saveButton.addEventListener('click', function (event) {
  event.preventDefault();
  saveLastGrade();
  renderLastGrade();
});

// The init() function fires when the page is loaded
function init() {
  // When the init function is executed, the code inside renderLastGrade function will also execute
  renderLastGrade();
}
init();


///////so what I've done so far was take the HTML from 25 and started trying to change all the named stuff to the new names for the blog website. I changed the HTML but
//////still need to do the css and js. Idk what the form.css and form.js are for? Idk what form they're talking about. Re-read.
/////I think the plan is to try to match the first bit with the functionality of 25 and then go from there?