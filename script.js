
// Login Button - Click Event

let loginBtn = document.getElementById("loginBtn");
let nameInput = document.getElementById("nameInput");
let emailInput = document.getElementById("emailInput");

let status = document.getElementById("status");
let welcomeMessage = document.getElementById("welcomeMessage");

loginBtn.addEventListener("click", function (event) {

    let name = nameInput.value;
    let email = emailInput.value;

    console.log("Event Type:", event.type);
    console.log("Event Target:", event.target);

    // Name and Email check
    if (name === "" || email === "") {

        status.innerHTML = "Please enter your name and email.";
        welcomeMessage.innerHTML = "";

    } else {

        status.innerHTML = "Logged In";
        welcomeMessage.innerHTML =
            "Welcome " + name + "! You Have Successfully logged in.";
    }
});


// Live Name - Input Event

let liveName = document.getElementById("liveName");
let displayName = document.getElementById("displayName");

liveName.addEventListener("input", function (event) {

    displayName.innerHTML = "Hello, " + event.target.value;

    console.log("Event Type:", event.type);
    console.log("Event Target:", event.target);
    console.log("Input Value:", event.target.value);
});


// Email - Change Event

emailInput.addEventListener("change", function (event) {

    console.log("Event Type:", event.type);
    console.log("Event Target:", event.target);
    console.log("Final Email:", event.target.value);
});


// Form - Submit Event

let userForm = document.getElementById("userForm");
let formMessage = document.getElementById("formMessage");
let eventInfo = document.getElementById("eventInfo");

userForm.addEventListener("submit", function (event) {

    event.preventDefault();

    let formName = document.getElementById("formName").value;
    let formEmail = document.getElementById("formEmail").value;
    let age = document.getElementById("age").value;

    console.log("Event Type:", event.type);
    console.log("Event Target:", event.target);

    // Basic validation

    if (formName === "" || formEmail === "" || age === "") {

        formMessage.innerHTML = "Please fill in all the fields.";

    } else {

        formMessage.innerHTML = "Form submitted successfully!";

        eventInfo.innerHTML =
            "Name: " + formName +
            "<br>Email: " + formEmail +
            "<br>Age: " + age;

        console.log("Name:", formName);
        console.log("Email:", formEmail);
        console.log("Age:", age);
    }
});
