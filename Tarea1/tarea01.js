'use strict'
function calculateAge(birdYear) {

    let age = 2023 - birdYear;
    alert("Tu edad es: " + age + ".");
  }

let birdYearUser = Number(prompt('Año de nacimiento:'));
calculateAge(birdYearUser);