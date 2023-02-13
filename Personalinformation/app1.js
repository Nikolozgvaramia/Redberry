const form = document.getElementById("form")
const namelabel = document.getElementById("namelabel")
const firstName = document.getElementById("firstname")
const lastName = document.getElementById("lastname")
const nameP = document.getElementById("name-p")
const surnameP = document.getElementById("surname-p")
const greenIcon = document.getElementById("greenIcon")
const redIcon = document.getElementById("redIcon")


const continueButton = document.getElementById("continueButton")


continueButton.onclick = () => {
    location.href = "../experience/experience.html"
}

const checkLetter = /^[აბგდევზთიკლმნოპჟრსტუფქღყშჩცძწჭხჯჰ]+$/

const checkname = () => {
    const firstNameValue = firstName.value.trim();

if(firstNameValue === " " || firstNameValue.length < 2 || !firstNameValue.match(checkLetter)) {
    nameP.style.color = "#EF5050"; 
    firstName.style.borderColor = "#EF5050";
    greenIcon.style.visibility = "hidden";
    redIcon.style.visibility = "visible";
}else {
    nameP.style.color = "#2E2E2E";
    firstName.style.broderColor = "#98E37E";
    greenIcon.style.visibility = "visible";
    redIcon.style.visibility = "hidden";
}
}

const checkLastName = () => {
    
    const lastNameValue = lastName.value.trim();

        if(lastNameValue  === " " || lastNameValue.length < 2 || !lastNameValue.match(checkLetter) ) {

            surnameP.style.color = "#EF5050";
            lastName.style.color = "hidden"
            lastName.style.borderColor = "#EF5050";
            greenIcon.style.visibility = "hidden";
            redIcon.style.visibility = "visible";
        }else {
            surnameP.style.color = "#2E2E2E"; 
            lastName.style.borderColor = "hidden";
            lastName.style.broderColor = "#98E37E";
            greenIcon.style.visibility = "visible";
            redIcon.style.visibility = "hidden";
        }
    }

//

const emailRegex = /^[a-zA-Z]+[0123456789]+@redberry.ge$/


const emailForm =  document.getElementById("email-form")
const emailLabel = document.getElementById("email-label")
const emailInput = document.getElementById("email-input")
const emailP = document.getElementById("email-p")
const emailGreenIcon = document.getElementById("email-greenIcon")
const emailRedIcon = document.getElementById("email-RedIcon")

const checkemail = () => {
    

    console.log(emailInput.value)
    if(emailInput.value === " " || emailInput.value.length < 2 || !emailInput.value.match(emailRegex)){
        emailLabel.style.color = "hidden";
        emailLabel.style.color = "#E52F2F";
        emailInput.style.borderColor = "hidden";
        emailInput.style.borderColor = "#E52F2F";
        emailGreenIcon.style.visibility = "hidden";
        emailRedIcon.style.visibility = "visible";
    }else {
        emailLabel.style.color = "hidden";
        emailLabel.style.color = " #98E37E";
        emailInput.style.borderColor = "hidden";
        emailInput.style.borderColor = "#98E37E";
        emailRedIcon.style.visibility = "hidden";
        emailGreenIcon.style.visibility = "visible";
    }    
}



const checkMobile = /^995[0-9]{9}$/ 

const numberLabel = document.getElementById("number-label");
const numberInput = document.getElementById("number-input");
const numberGreenIcon = document.getElementById("number-greenIcon");
const numberRedIcon = document.getElementById("number-redIcon");


const checkNumber = () => {
    const numberInputValue = numberInput.value.trim();
    if(numberInputValue === " " || !numberInputValue.match(checkMobile)) {
        numberInput.style.borderColor = "#EF5050";
        numberGreenIcon.style.visibility  = "hidden";
        numberRedIcon.style.visibility = "visible";
    }else {
        numberInput.style.borderColor = "#98E37E";
        numberGreenIcon.style.visibility = "visible";
        numberRedIcon.style.visibility = "hidden";
    }
}


const anzor = function(event) {
    const name  =  document.getElementById("anzor");
    name.innerText = event.target.value;

}



const mumladze = (event) => {
    const mumladzesurname = document.getElementById("mumladze");
    mumladzesurname.innerText = event.target.value ;
}


const email = (event) => {
    const useremail = document.getElementById("email");
    useremail.innerText = event.target.value ;
}

const phoneNumber = (event) => {
    const phoneNumber = document.getElementById("phonenumber");
    phoneNumber.innerText = event.target.value ;
}


const aboutyou = (event) => {
    const  aboutyouelement = document.getElementById("aboutyou")
    aboutyouelement.innerText = event.target.value ;
}

// const photo = (event) => {
//     const photo1 = document.getElementById("photo");
//     photo1.innerText = event.target.value ;
// }


const loadPhoto = function(event) {
    const image = document.getElementById('uploadimg');
    // console.log(event.target.files[0])
    image.src=URL.createObjectURL(event.target.files[0]);

};