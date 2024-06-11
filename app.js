const form = document.querySelector("#form");
const main = document.querySelector("main");
const successMessaje = document.querySelector(".successMessaje");

const dismissBtn = document.querySelector("#dismissBtn");

const handleSubmit = (e) => {
  e.preventDefault(); //Prevent the defaul behaviour

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log(data.email);

  //   main.classList.add("display");
  //   successMessaje.classList.remove("display");
};

form.addEventListener("submit", handleSubmit);
