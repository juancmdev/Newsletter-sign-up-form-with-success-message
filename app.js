const form = document.querySelector("#form");
let emailValue = document.querySelector("#emailValue");
const main = document.querySelector("main");
const successMessaje = document.querySelector(".successMessaje");
const emailTextWarning = document.querySelector(".emailText-warning");

const dismissBtn = document.querySelector("#dismissBtn");
const emailClient = document.querySelector("#emailClient");

emailValue.value = "";

const handleSubmit = (e) => {
  e.preventDefault(); //Prevent the defaul behaviour
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  if (emailValue.value.length === 0 || !validationEmail(data.email)) {
    emailValue.style =
      "background-color: rgba(251, 102, 88, 0.2); border: 1px solid rgba(251, 102, 88)";
    emailTextWarning.style.display = "block";
  } else if (emailValue.value.length > 0) {
    emailValue.style = "background-color: white; border: 1px solid black";
    emailTextWarning.style.display = "none";

    emailClient.innerHTML = data.email;

    main.classList.add("display");
    successMessaje.classList.remove("display");
  }
};

form.addEventListener("submit", handleSubmit);

//Event to Dismiss messaje
dismissBtn.addEventListener("click", () => {
  successMessaje.classList.add("display");
  main.classList.remove("display");
  emailValue.value = "";
});

function validationEmail(email) {
  const regex = /^[a-zA-Z0–9._-]+@[a-zA-Z0–9.-]+\.[a-zA-Z]{2,4}$/;
  return regex.test(email);
}
