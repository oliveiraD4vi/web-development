const psswdInput = document.getElementById("inputPassword");
const emailInput = document.getElementById("inputEmail");
const submitBtn = document.getElementById("submit-button");

const validaEmail = () => {
  const emailRegex = /\S+@\S+\.\S+/;

  if (emailRegex.test(emailInput.value)) {
    return true;
  } else {
    return false;
  }
};

const validaPassword = () => {
  if (psswdInput.value.length > 6) {
    return true;
  } else {
    return false;
  }
};

const validar = () => {
  if (validaEmail() && validaPassword()) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
};

psswdInput.addEventListener("input", () => {
  const passwordHelp = document.getElementById("passwordHelp");

  if (validaPassword()) {
    psswdInput.style.borderColor = "black";
    passwordHelp.innerText = null;
  } else {
    psswdInput.style.borderColor = "red";
    passwordHelp.style.color = "red";
    passwordHelp.innerText = "Senha inválido";
  }
  validar();
});

emailInput.addEventListener("input", () => {
  const emailHelp = document.getElementById("emailHelp");

  if (validaEmail()) {
    emailInput.style.borderColor = "black";
    emailHelp.innerText = null;
  } else {
    emailInput.style.borderColor = "red";
    emailHelp.style.color = "red";
    emailHelp.innerText = "Email inválido";
  }
  validar();
});
