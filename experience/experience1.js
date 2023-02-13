const continueBtn = document.getElementById("continue-btn")

continueBtn.onclick = () => {
    location.href = "./experience1.html"
}


const positionLabel = document.getElementById("position-label");
const positionInput = document.getElementById("position-input");
const positionP = document.getElementById("position-p");
const employerLabel = document.getElementById("employer-label");
const employerInput = document.getElementById("employer-input")
const employerP = document.getElementById("employer-p")
const greenIcon = document.getElementById("greenIcon")
const redIcon = document.getElementById("redIcon")


const checkPosition = () => {
    positionInputValue = positionInput.value.trim();
    if(positionInputValue === " " || positionInputValue.length < 2) {
        greenIcon.style.visibility = "hidden";
        redIcon.style.visibility = "visible";
        positionInput.style.borderColor = "#EF5050";
    }else {
        greenIcon.style.visibility = "visible";
        redIcon.style.visibility = "hidden";
        positionInput.style.borderColor = "#98E37E"
    }
}

const employerinput = document.getElementById("employer-input");
const greenIcon1 = document.getElementById("greenIcon1")
const redIcon1 = document.getElementById("redIcon1")

const checkEmployer = () => {
    employerInputValue = employerInput.value.trim();
    if(employerInputValue === " " || employerInputValue.length < 2 ) {
        greenIcon1.style.visibility = "hidden";
        redIcon1.style.visibility = "visible";
        employerInput.style.borderColor = "#EF5050"
    }else {
        greenIcon1.style.visibility = "visible";
        redIcon1.style.visibility = "hidden";
        employerInput.style.borderColor = "#98E37E";
    }
}



const startNumberInput = document.getElementById("start-number-input");
const finishNumberInput = document.getAnimations("finish-number-input");

const startcheckDate = () => {
    const startDate = new Date(startNumberInput.value);
    const endDate = new Date(finishNumberInput.value);

    if(startDate <= endDate){
        startNumberInput.style.borderColor = "#98E37E";
        finishNumberInput.style.borderColor = "#98E37E";
        return true;
    }else {
        startNumberInput.style.borderColor = "#EF5050";
        finishNumberInput.style.borderColor = "#EF5050";
        return false
    }
}


const endcheckDate = () => {
    const startDate = new Date(startNumberInput.value);
    const endDate = new Date(finishNumberInput.value);

    if(startDate <= endDate){
        startNumberInput.style.borderColor = "#98E37E";
        finishNumberInput.style.borderColor = "#98E37E";
        return true;
    }else {
        startNumberInput.style.borderColor = "#EF5050";
        finishNumberInput.style.borderColor = "#EF5050";
        return false
    }
}

const position = function(event) {
    const positionn =  document.getElementById("anzor");
    positionn.innerText = event.target.value;
}


const employer = (event) => {
    const employerr = document.getElementById("mumladze");
    employerr.innerText = event.target.value ;
}


