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
var name = "";
var password = "";
var userData = {};
var specialCharacters = "!\"#$%&'()*+,-./:;<=>?@[]^_`{|}~";
var numbers = "0123456789";
/*
signUp1.onclick=function() {
    formUp.style.display="block";
}

signIn1.onclick=function() {
    formIn.style.display="block"
}*/
inputUp.oninput = function() {
	name = inputUp.value;
};
passwordUp.oninput = function() {
	password = passwordUp.value;
};
for (var i = 0; i < name.length; i++) {
	if (name[i] == " ") {
		alert("no spaces");
	}
}
for (var i = 0; i < password.length; i++) {
	if (name[i] == " ") {
		alert("no spaces");
	}
}

signUpForm.onclick = function(event) {
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
			var getData = JSON.parse(localStorage.getItem("theData"));
			if (getData == null) {
				userData[name] = password;
				localStorage.setItem("theData", JSON.stringify(userData));
			} else {
				if (name.valueOf() in getData) {
					alert("username exists");
				} else {
					userData[name] = password;
					localStorage.setItem("theData", JSON.stringify(userData));
				}
			}
		} else {
			alert("passoword error");
		}
	}
};
