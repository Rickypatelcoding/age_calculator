const btnEl = document.querySelector("#calculate");
const inputEl = document.querySelector('#dob');
const resultEl = document.querySelector("#result");
const errorEl = document.querySelector(".error");

function calculate() {
    const dob = inputEl.value;

    if (dob === "") {
        errorEl.innerHTML = "Please enter a date of birth";
        errorEl.style.display = "block";
        resultEl.innerHTML = "";
        return;
    }

    const birthdayDate = new Date(dob);
    const currentDate = new Date();

    if (birthdayDate > currentDate) {
        errorEl.innerHTML = "Please enter a valid date of birth";
        errorEl.style.display = "block";
        resultEl.innerHTML = "";
        return;
    }

    const age = getAge(birthdayDate, currentDate);
    resultEl.innerHTML = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
    errorEl.style.display = "none";
}

function getAge(birthdayDate, currentDate) {
    let age = currentDate.getFullYear() - birthdayDate.getFullYear();
    const monthDiff = currentDate.getMonth() - birthdayDate.getMonth();

    // Check if birthday hasn't occurred yet this year
    if (
        monthDiff < 0 || 
        (monthDiff === 0 && currentDate.getDate() < birthdayDate.getDate())
    ) {
        age--;
    }

    return age;
}

btnEl.addEventListener("click", calculate);
