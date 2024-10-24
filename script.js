const btnCalculate = document.querySelector("#btn");

btnCalculate.addEventListener("click", calculateTax);

function calculateTax(e){
    e.preventDefault();

    const income = document.querySelector("#income").value;
    const result = document.querySelector(".par");

    if (income === "" || income < 0) {
        Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Enter your total taxable income!',
        })  
    }
    else if (document.querySelector("#resident").checked === true) {
        if (income <= 18200) {
            result.textContent = "Nil";
        }
        else if (income >= 18201 && income <= 45000) {
            let classOne = (income - 18200) * 0.19;
            result.textContent = "$ " + classOne.toFixed(2);
        }
        else if (income >= 45001 && income <= 120000) {
            let classTwo = (income - 45000) * 0.325 + 5092;
            result.textContent = "$ " + classTwo.toFixed(2);           
        }
        else if (income >= 120001 && income <= 180000) {
            let classThree = (income - 120000) * 0.37 + 29467;
            result.textContent = "$ " + classThree.toFixed(2);
        }
        else if (income >=180001) {
            let classFour = (income - 180000) * 0.45 + 51667;
            result.textContent = "$ " + classFour.toFixed(2);
        }
    }
    else if (document.querySelector("#foreigner").checked === true) {
        if (income <= 120000) {
            let incomeOne = income * 0.325;
            result.textContent = "$ " + incomeOne.toFixed(2);
        }
        else if (income >= 120001 && income <= 180000) {
            let incomeTwo = (income - 120000) * 0.37 + 39000;
            result.textContent = "$ " + incomeTwo.toFixed(2);
        }
        else if (income >=180001) {
            let incomeThree = (income - 180000) * 0.45 + 61200;
            result.textContent = "$ " + incomeThree.toFixed(2);
        }
    }
    else if (document.querySelector("#workingHoliday").checked === true) {
        if (income <= 45000) {
            let amountOne = income * 0.15;
            result.textContent = "$ " + amountOne.toFixed(2);
        }
        else if (income >= 45001 && income <= 120000) {
            let amountTwo = (income - 45000) * 0.325 + 6750;
            result.textContent = "$ " + amountTwo.toFixed(2);
        }
        else if (income >= 120001 && income <= 180000) {
            let amountThree = (income - 120000) * 0.37 + 31125;
            result.textContent = "$ " + amountThree.toFixed(2);
        }
        else if (income >=180001) {
            let amountFour = (income - 180000) * 0.45 + 53325;
            result.textContent = "$ " + amountFour.toFixed(2);
        }
    }
    else {
        Swal.fire({
            icon: 'error',
            title: 'Error...',               
            text: 'Select your residency status!',
        })
    }

}


