const date = document.querySelector('.date');
const today = new Date();
const year = today.getFullYear();
const month = today.getMonth() + 1;
const day = today.getDay();
const hour = today.getHours();
const minutes = today.getMinutes();
const seconds = today.getSeconds();
const currentDate = `${day}/${month}/${year}| ${hour}:${minutes}:${seconds} `;

date.innerHTML = currentDate;
