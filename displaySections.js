const section1 = document.querySelector('.section1');
const list = document.querySelector('.list');
list.classList.remove('hideform');
const form = document.querySelector('.form-section');
form.classList.add('hideform');
const contact = document.querySelector('.contactUs');
contact.classList.add('hideform');

list.addEventListener('click', () => {
  form.classList.add('hideform');
  contact.classList.add('hideform');
  section1.classList.remove('hideform');
});

const add = document.querySelector('.addnew');
add.addEventListener('click', () => {
  section1.classList.add('hideform');
  contact.classList.add('hideform');
  form.classList.remove('hideform');
});

const contactUs = document.querySelector('.contact');
contactUs.addEventListener('click', () => {
  form.classList.add('hideform');
  section1.classList.add('hideform');
  contact.classList.remove('hideform');
});
