const submitButton = document.getElementById("form-submit-btn");
const tzeetInput = document.getElementById("tzeet-form-input");
const counter = document.getElementById("counter");

tzeetInput.addEventListener('input', (e) => inputChange(e.target.value));

const inputChange = (value) => {
  // Limitar o tamanho, de fato, e não apenas mostrar
  // if (value.length > 140) {
  //   tzeetInput.value = tzeetInput.value.substring(0, 140);
  // }

  if (value.length > 0) {
    submitButton.disabled = false;
    counter.innerText = 140 - value.length;
  } else {
    counter.innerText = null;
  }

  if (value.length > 0) {
    counter.style.color = "rgb(0, 0, 0)";
  }
  
  if (140 - value.length <= 40) {
    counter.style.color = "rgb(255, 200, 0)";
  }

  if (value.length > 140) {
    submitButton.disabled = true;
    counter.style.color = "rgb(255, 0, 0)";
  }
};

const onSubmit = () => {
  console.log("submit");
};
