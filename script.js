console.log("Javascript page code started.");
//hi
var i; var random; var userWins = true;
var user; var computer;
console.log("Variables set.");

console.log("Javascript page code finished.");

function play() {
	console.log("Javascript play code started.");
	setComputer();
	algorithm();
	display();
	console.log("Javascript play code finished.");
}

function setComputer() {
	console.log("Javascript computer setting code started.");
	random = Math.floor(Math.random()*5);
	userWins = true;
	console.log("Computer variables set.");
	if (random == 1) {
		computer = "Rock";
	} else if (random == 2) {
		computer = "Paper";
	} else if (random == 3) {
		computer = "Sciz";
	} else if (random == 4) {
		computer = "Lizard";
	} else if (random == 5) {
		computer = "Spock";
	}
	console.log(computer);
	console.log("Javascript computer setting code finished.");

}
//toby is fatter than Noah, noh noah, eu
function algorithm() {
	console.log("Javascript algorithm code started.");
	if (user == "Rock") {
		if (computer == "Sciz" || computer == "Lizard") {
			userWins = true;
		} else {
			userWIns = false;
		}
	}
	if (user == "Paper") {
		if (computer == "Rock" || computer == "Spock") {
			userWins = true;
		} else {
			userWIns = false;
		}
	}
	if (user == "Sciz") {
		if (computer == "Paper" || computer == "Lizard") {
			userWins = true;
		} else {
			userWIns = false;
		}
	}
	if (user == "Lizard") {
		if (computer == "Spock" || computer == "Paper") {
			userWins = true;
		} else {
			userWIns = false;
		}
	}
	if (user == "Spock") {
		if (computer == "Sciz" || computer == "Rock") {
			userWins = true;
		} else {
			userWIns = false;
		}
	}
	console.log("Javascript algorithm code finished.");
}
//eat git hub
function display() {
	console.log("Javascript display code started.");

	console.log("Javascript display code finished.");
}