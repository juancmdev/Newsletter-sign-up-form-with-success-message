const form = document.querySelector("#form");
const main = document.querySelector("main");
const successMessaje = document.querySelector(".successMessaje");

const dismissBtn = document.querySelector("#dismissBtn");
const emailClient = document.querySelector("#emailClient");

const handleSubmit = (e) => {
  e.preventDefault(); //Prevent the defaul behaviour

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log(data.email);
  emailClient.innerHTML = data.email;

  main.classList.add("display");
  successMessaje.classList.remove("display");
};

form.addEventListener("submit", handleSubmit);

//Event to Dismiss messaje
dismissBtn.addEventListener("click", () => {
  successMessaje.classList.add("display");
  main.classList.remove("display");
});
