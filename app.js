const form = document.querySelector("#form");
let emailValue = document.querySelector("#emailValue");
const main = document.querySelector("main");
const successMessaje = document.querySelector(".successMessaje");
const emailTextWarning = document.querySelector(".emailText-warning");

const dismissBtn = document.querySelector("#dismissBtn");
const emailClient = document.querySelector("#emailClient");

emailValue.value = "";
const myArr = [];

const myFunct = () => {
  return emailValue.addEventListener("keyup", (e) => {
    //console.log(emailValue.value);
    myArr.push(emailValue.value);
    console.log("MyArray" + myArr[myArr.length - 1]);
  });
};

const email = myFunct();

console.log("Myfunc: " + email);

const handleSubmit = (e) => {
  e.preventDefault(); //Prevent the defaul behaviour

  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue.value.length === 0 || regex.test(email)) {
    emailValue.style =
      "background-color: rgba(251, 102, 88, 0.2); border: 1px solid rgba(251, 102, 88)";
    emailTextWarning.style.display = "block";
  } else if (emailValue.value.length > 0) {
    console.log(emailValue);

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);

    console.log(data.email);
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

const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
console.log(regex.test(email));
