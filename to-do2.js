var signUp1 = document.querySelector("#sign-up-btn1");
var signIn1 = document.querySelector("#sign-in-btn1");
var signUpForm = document.querySelector("#sign-up-form");
var signInForm = document.querySelector("#sign-in-form");
var inputIn = document.querySelector("#input-in");
var inputUp = document.querySelector("#input-up");
var passwordIn = document.querySelector("#password-in");
var passwordUp = document.querySelector("#password-up");
var formUp = document.querySelector(".form-up");
var formIn = document.querySelector(".form-in");
var upCancel = document.querySelector("#up-cancel");
var nameTaken = document.querySelector("#user-taken");
var passwordRules = document.querySelector(".password-errors");

var name = "";
var password = "";
var userData = {};
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "0123456789";



//on clicking the sign up button,the sign up form will pop up
signUp1.onclick = function () {
	formUp.style.transform = "scale(1)";
	formUp.style.transition = "transform 0.5s ease-in-out";
	//the sign up and sign in forms must not pop up at the same time on clicking both both buttons;
	formIn.style.transform = "scale(0)";
	formIn.style.transition = "transform 0.01s ease-in-out";

}

upCancel.onclick = function () {
	formUp.style.transform = "scale(0)";
	formUp.style.transition = "transform 0.01s ease-in-out";
	passwordRules.style.display = "none";
}


signIn1.onclick = function () {
	formIn.style.transform = "scale(1)";
	formUp.style.transform = "scale(0)";
	formUp.style.transition = "transform 0.5s ease-in-out";
	formIn.style.transition = "transform 0.5s ease-in-out";
	passwordRules.style.display = "none";

}

inputUp.oninput = function () {
	name = inputUp.value;
};
passwordUp.oninput = function () {
	password = passwordUp.value;
};

//there must be no spaces in the username input when signing up
for (var i = 0; i < name.length; i++) {
	if (name[i] == " ") {
		alert("no spaces");
	}
}
//there must be no spaces in the password input when signing up
for (var i = 0; i < password.length; i++) {
	if (name[i] == " ") {
		alert("no spaces");
	}
}

signUpForm.onclick = function (event) {
	if (inputUp.value != "" && passwordUp.value != "") {
		//checking for at least one UpperCase, lowerCase letter and numerical value in the password
		var symbols = [];
		var capitalLetter = [];
		var smallLetter = [];
		var numericalValue = [];
		for (var i = 0; i < password.length; i++) {
			for (var j = 0; j < specialCharacters.length; j++) {
				if (password[i] == specialCharacters[j]) {
					symbols.push(password[i]);
				}
			}
			for (var k = 0; k < numbers.length; k++) {
				if (password[i] == numbers[k]) {
					numericalValue.push(password[i]);
				}
			}
			if (password[i] == password[i].toUpperCase()) {
				capitalLetter.push(password[i]);
			}
			if (password[i] == password[i].toLowerCase()) {
				smallLetter.push(password[i]);
			}
		}
		if (
			symbols.length >= 1 &&
			capitalLetter.length >= 1 &&
			smallLetter.length >= 1 &&
			numericalValue.length >= 1
		) {
			//getting the data from the local storage
			var getData = JSON.parse(localStorage.getItem(name));
			//if there is nothing in the local storage
			if (getData == null) {
				userData[name] = password;
				localStorage.setItem(name, JSON.stringify(userData));
				event.preventDefault();
				window.location.href="todo.html";
			}
			//checking if the new username doesn't already exist in the local storage
			else {
				if (name.valueOf() in getData) {
					nameTaken.style.display = "block";
					event.preventDefault();
				} 
				
			}
		}
		// if one of the password requirements is not met
		else {
			passwordRules.style.display = "block";
			event.preventDefault();
		}
	}
}
