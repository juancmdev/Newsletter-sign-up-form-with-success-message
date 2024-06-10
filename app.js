const form = document.querySelector("#form");

const handleSubmit = (e) => {
  e.preventDefault(); //Prevent the defaul behaviour

  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);

  console.log(data);
};

form.addEventListener("submit", handleSubmit);
