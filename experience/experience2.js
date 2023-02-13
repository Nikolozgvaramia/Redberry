const continueBtn = document.getElementById("continue-btn")

continueBtn.onclick = () => {
    location.href = "../experience/experience2.html"
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
