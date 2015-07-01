console.log("Javascript page code started.");
//hi
var i; var random; var userWins = 1;
var user; var computer; var result;
var userStats = 0; var tieStats = 0; var computerStats = 0;
console.log("JS Variables set.");

var rockimg = "img/rock.png";
var paperimg = "img/paper.png";
var scizimg = "img/sciz.png";
var spockimg = "img/spock.png";
var lizardimg = "img/lizard.png";
var img;
var frogimg = "fun/frog.gif";
var gorillaimg = "fun/gorilla.gif";
var facialsimg = "fun/facials.gif";
console.log("Pictures set.");

console.log("Javascript page code finished.");

function rock() {
	user = "Rock";
	play();
}

function paper() {
	user = "Paper";
	play();
}

function sciz() {
	user = "Sciz";
	play();
}

function spock() {
	user = "Spock";
	play();
}

function lizard() {
	user = "Lizard";
	play();
}

function reset() {
	var userStats = 0; var tieStats = 0; var computerStats = 0;
}

function play() {
	console.log("Javascript play code started.");
	userWins = 1;
	//alert("hi");
	setComputer();
	algorithm();
	display();
	console.log("Javascript play code finished.");
}

function setComputer() {
	console.log("Javascript computer setting code started.");
	random = Math.floor((Math.random()*5)+1);
	console.log("Computer variables set.");
	if (random == 1) {
		computer = "Rock";
		imgPic2 = rockimg;
	} else if (random == 2) {
		computer = "Paper";
		imgPic2 = paperimg;
	} else if (random == 3) {
		computer = "Sciz";
		imgPic2 = scizimg;
	} else if (random == 4) {
		computer = "Lizard";
		imgPic2 = lizardimg;
	} else {
		computer = "Spock";
		imgPic2 = spockimg;
	}
	console.log("User is: " + user);
	console.log("Computer is: " + computer);
	console.log("Javascript computer setting code finished.");

}

function algorithm() {
	console.log("Javascript algorithm code started.");
	if (user == "Rock") {
		imgPic1 = rockimg;
		if (computer == "Sciz" || computer == "Lizard") {
			userWins = 1;
		} else if (computer == "Rock") {
			userWins = 2;
		} else {
			userWins = 0;
		}
	}
	if (user == "Paper") {
		imgPic1 = paperimg;
		if (computer == "Rock" || computer == "Spock") {
			userWins = 1;
		} else if (computer == "Paper") {
			userWins = 2;
		} else {
			userWins = 0;
		}
	}
	if (user == "Sciz") {
		imgPic1 = scizimg;
		if (computer == "Paper" || computer == "Lizard") {
			userWins = 1;
		} else if (computer == "Sciz") {
			userWins = 2;
		} else {
			userWins = 0;
		}
	}
	if (user == "Lizard") {
		imgPic1 = lizardimg;
		if (computer == "Spock" || computer == "Paper") {
			userWins = 1;
		} else if (computer == "Lizard") {
			userWins = 2;
		} else {
			userWins = 0;
		}
	}
	if (user == "Spock") {
		imgPic1 = spockimg;
		if (computer == "Sciz" || computer == "Rock") {
			userWins = 1;
		} else if (computer == "Spock") {
			userWins = 2;
		} else {
			userWins = 0;
		}
	}
	console.log("Javascript algorithm code finished.");
}

//eat git hub
function display() {
	console.log("Javascript display code started.");

	document.getElementById("pen").innerHTML = user;
	document.getElementById("pic1").src = imgPic1;
	document.getElementById("pasqua").innerHTML = computer;
	document.getElementById("pic2").src = imgPic2;
	if (userWins == 1) {
		document.getElementById("result").innerHTML = "You win!";
		userStats++;
		document.getElementById("pic3").src = facialsimg;
	} else if (userWins == 2) {
		document.getElementById("result").innerHTML = "It's a tie!";
		tieStats++;
		document.getElementById("pic3").src = gorillaimg;
	} else {
		document.getElementById("result").innerHTML = "Computer wins!";
		computerStats++;
		document.getElementById("pic3").src = frogimg;
	}

	document.getElementById("htmlUserStats").innerHTML = userStats;
	document.getElementById("htmlComputerStats").innerHTML = computerStats;
	document.getElementById("htmlTieStats").innerHTML = tieStats;

	console.log("Javascript display code finished.");
}