const daySelect = document.getElementById("day-select");
const monthSelect = document.getElementById("month-select");
const yearSelect = document.getElementById("year-select");

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31];
const months = ["Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];
const years = [
  1920, 1921, 1922, 1923, 1924, 1925, 1926, 1927, 1928, 1929,
  1930, 1931, 1932, 1933, 1934, 1935, 1936, 1937, 1938, 1939,
  1940, 1941, 1942, 1943, 1944, 1945, 1946, 1947, 1948, 1949,
  1950, 1951, 1952, 1953, 1954, 1955, 1956, 1957, 1958, 1959,
  1960, 1961, 1962, 1963, 1964, 1965, 1966, 1967, 1968, 1969,
  1970, 1971, 1972, 1973, 1974, 1975, 1976, 1977, 1978, 1979,
  1980, 1981, 1982, 1983, 1984, 1985, 1986, 1987, 1988, 1989,
  1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999,
  2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009,
  2010, 2011, 2012, 2013, 2014, 2015, 2016, 2017, 2018, 2009,
  2020, 2021, 2022,
];

const months1 = { Jan: "Jan", Mar: "Mar", Mai: "Mai", Jul: "Jul", Ago: "Ago", Out: "Out", Dez: "Dez" };
const months2 = { Abr: "Abr", Jun: "Jun", Set: "Set", Nov: "Nov" };

const ehBissexto = (year) => {
  if( (year%400 == 0) || (year%4==0 && year%100!=0) ) {
    return true;
  } else {
    return false;
  }
};

const filterDays = (item) => {
  if (monthSelect.options[monthSelect.selectedIndex].text === "Fev") {
    if (ehBissexto(yearSelect.options[yearSelect.selectedIndex].value)) {
      if (item <= 29) return item;
    } else {
      if (item <= 28) return item;
    }
  } else if (months2[monthSelect.options[monthSelect.selectedIndex].text]) {
    if (item <= 30) return item;
  } else if (months1[monthSelect.options[monthSelect.selectedIndex].text]) {
    return item;
  }
};

const filters = () => { 
  years.forEach((item) => {
    const option = new Option(item, item);
    yearSelect.options[yearSelect.options.length] = option;
  });
  
  days.filter((item) => filterDays(item)).forEach((item) => {
    const option = new Option(item, item);
    daySelect.options[daySelect.options.length] = option;
  });
  
  months.forEach((item) => {
    const option = new Option(item, item);
    monthSelect.options[monthSelect.options.length] = option;
  });
}

filters();

daySelect.addEventListener("change", () => filters());
monthSelect.addEventListener("change", () => filters());
yearSelect.addEventListener("change", () => filters());

const nameContainer = document.getElementById("inputName");
const emailContainer = document.getElementById("inputEmail");
const passwordContainer = document.getElementById("inputPassword");
const passwordConfirmContainer = document.getElementById("inputConfirmPassword");
const checkYes = document.getElementById("flexRadioDefault1");
const checkNo = document.getElementById("flexRadioDefault2");
const btnSubmit = document.getElementById("submit-btn");

const emailRegex = /\S+@\S+\.\S+/;
const emailHelp = document.getElementById("emailHelp");
const nameHelp = document.getElementById("nameHelp");
const passwordHelp = document.getElementById("passwordHelp");
const passwordConfirmHelp = document.getElementById("passwordConfirmHelp");

const monthHelp = document.getElementById("monthHelp");
const yearHelp = document.getElementById("yearMonth");
const dayHelp = document.getElementById("dayMonth");

const validaNome = () => {
  if (nameContainer.value.length > 10) {
    return true;
  } else {
    return false;
  }
};

const validaEmail = () => {
  if (emailRegex.test(emailContainer.value)) {
    return true;
  } else {
    return false;
  }
};

const validaPassword = () => {
  if (passwordContainer.value.length > 6) {
    return true;
  } else {
    return false;
  }
};

const validaConfirmPassword = () => {
  if (passwordConfirmContainer.value === passwordContainer.value) {
    return true;
  } else {
    return false;
  }
};

const validaDaySelect = () => {
  if (daySelect.options[daySelect.selectedIndex].value != "Dia") {
    return true;
  } else {
    return false;
  }
};

const validaMonthSelect = () => {
  if (monthSelect.options[monthSelect.selectedIndex].value != "Mês") {
    return true;
  } else {
    return false;
  }
};

const validaYearSelect = () => {
  if (yearSelect.options[yearSelect.selectedIndex].value != "Ano") {
    return true;
  } else {
    return false;
  }
};

const validaPolicy = () => {
  return checkYes.checked;
};

const validar = () => {
  if (
    validaNome() && validaEmail() && validaPassword() &&
    validaDaySelect() && validaMonthSelect &&
    validaYearSelect && validaPolicy()
  ) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
};

checkNo.addEventListener("input", () => {
  validar();
});

checkYes.addEventListener("input", () => {
  validar();
});

nameContainer.addEventListener("input", () => {
  if (validaNome()) {
    nameContainer.style.borderColor = "black";
    nameHelp.innerText = null;
  } else {
    nameContainer.style.borderColor = "red";
    nameHelp.style.color = "red";
    nameHelp.innerText = "Nome inválido";
  }
  validar();
});

emailContainer.addEventListener("input", () => {
  if (validaEmail()) {
    emailContainer.style.borderColor = "black";
    emailHelp.innerText = null;
  } else {
    emailContainer.style.borderColor = "red";
    emailHelp.style.color = "red";
    emailHelp.innerText = "Email inválido";
  }
  validar();
});

passwordContainer.addEventListener("input", () => {
  if (validaPassword()) {
    passwordContainer.style.borderColor = "black";
    passwordHelp.innerText = null;
  } else {
    passwordContainer.style.borderColor = "red";
    passwordHelp.style.color = "red";
    passwordHelp.innerText = "Senha inválido";
  }
  validar();
});

passwordConfirmContainer.addEventListener("input", () => {
  if (validaConfirmPassword()) {
    passwordConfirmContainer.style.borderColor = "black";
    passwordConfirmHelp.innerText = null;
  } else {
    passwordConfirmContainer.style.borderColor = "red";
    passwordConfirmHelp.style.color = "red";
    passwordConfirmHelp.innerText = "A senha não confere!";
  }
  validar();
});

daySelect.addEventListener("click", () => {
  if (validaDaySelect()) {
    daySelect.style.borderColor = "black";
    dayHelp.innerText = null;
  } else {
    daySelect.style.borderColor = "red";
    dayHelp.style.color = "red";
    dayHelp.innerText = "Campo obrigatório";
  }
  validar();
});

monthSelect.addEventListener("click", () => {
  if (validaMonthSelect()) {
    monthSelect.style.borderColor = "black";
    monthHelp.innerText = null;
  } else {
    monthSelect.style.borderColor = "red";
    monthHelp.style.color = "red";
    monthHelp.innerText = "Campo obrigatório";
  }
  validar();
});

yearSelect.addEventListener("click", () => {
  if (validaYearSelect()) {
    yearSelect.style.borderColor = "black";
    yearHelp.innerText = null;
  } else {
    yearSelect.style.borderColor = "red";
    yearHelp.style.color = "red";
    yearHelp.innerText = "Campo obrigatório";
  }
  validar();
});
