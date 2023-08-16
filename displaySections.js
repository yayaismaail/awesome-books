const section1 = document.querySelector(".section1");
const list = document.querySelector(".list");
const form = document.querySelector(".form-section");
list.addEventListener("click", () => {
  form.classList.add("hideform");
  section1.style = "display: block";
  section1.classList.remove("hideform");
  form.style = "display: none";
});

const add = document.querySelector(".addnew");
add.addEventListener("click", () => {
  section1.classList.add("hideform");
  form.classList.remove("hideform");
  form.style = "display: block";
  section1.style = "display: none";
});
