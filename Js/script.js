function getGrade() {
	let score = document.getElementById("input").value;
	let result = document.getElementById("output");
	if (25 < score && score <= 30) {
		result.innerHTML = "You got an 'A' Excellent !";
	} else if (20 < score && score <= 25) {
		result.innerHTML = "You got  'B' Great !";
	} else if (15 < score && score <= 20) {
		result.innerHTML = "You got  'c' Aim Higher.";
	} else if (10 < score && score <= 15) {
		result.innerHTML = "You got  'D' you need to steady.";
	} else if (5 < score && score <= 10) {
		result.innerHTML = "You got  'E' You have failed .";
	} else if (0 < score && score <= 5) {
		result.innerHTML = "You got 'F' You  failed";
	} else {
		window.alert("Invalid score.please enter a numerical greade.");
	}
}
