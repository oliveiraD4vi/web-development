const psswdInput = document.getElementById("inputPassword");
const emailInput = document.getElementById("inputEmail");
const submitBtn = document.getElementById("submit-button");

const validar = () => {
  const emailRegex = /\S+@\S+\.\S+/;
  const emailHelp = document.getElementById("emailHelp");
  const psswdHelp = document.getElementById("passwordHelp");

  if (psswdInput.value.length > 5 && psswdInput.value.length <= 20 && emailInput.value.length > 0) {
    psswdHelp.innerText = null;
    psswdInput.style.borderColor = "#ced4da";

    if (emailRegex.test(emailInput.value)) {
      submitBtn.disabled = false;
      emailHelp.innerText = null;
      emailInput.style.borderColor = "#ced4da";
    } else {
      submitBtn.disabled = true;
      emailHelp.style.color = "red";
      emailInput.style.borderColor = "red";
      emailHelp.innerText = "Email inválido";
    }
  } else if (psswdInput.value.length > 5 && psswdInput.value.length <= 20) {
    psswdHelp.innerText = null;
    psswdInput.style.borderColor = "#ced4da";
  } else {
    submitBtn.disabled = true;
    psswdHelp.style.color = "red";
    psswdInput.style.borderColor = "red";
    psswdHelp.innerText = "Senha inválido";
  }
};

emailInput.addEventListener("input", validar);
psswdInput.addEventListener("input", validar);
