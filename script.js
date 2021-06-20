const input = document.querySelector("input");
const button = document.querySelector(".btn");
const emailDiv = document.querySelector(".email");
const p = document.createElement("p");

const emailFormat =
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

function validateForm(e) {
  if (!input.value && !input.value.match(emailFormat)) {
    e.preventDefault();
    e.stopPropagation();
    p.innerText = "Please enter a valid email address";
    p.classList.add("error");
    emailDiv.append(p);
    button.classList.add("e");
  } else return;
}

button.addEventListener("click", validateForm);
