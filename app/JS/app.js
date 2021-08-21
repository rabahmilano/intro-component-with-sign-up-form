const fName = document.querySelector(".f-name");
const lName = document.querySelector(".l-name");
const email = document.querySelector(".email");
const password = document.querySelector(".password");
const formulaire = document.querySelector(".formulaire");

const strings = [fName, lName, password];

formulaire.addEventListener("submit", function (e) {
  e.preventDefault();
  email.previousElementSibling.classList.remove("show");
  email.nextElementSibling.classList.remove("show");

  const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
  const result = regex.test(email.value.trim());

  if (!result) {
    email.previousElementSibling.classList.add("show");
    email.nextElementSibling.classList.add("show");
  }

  strings.forEach((item) => {
    item.previousElementSibling.classList.remove("show");
    item.nextElementSibling.classList.remove("show");
    if (item.value.trim() == "") {
      console.log(item.nextElementSibling);
      item.previousElementSibling.classList.add("show");
      item.nextElementSibling.classList.add("show");
    }
  });
});
