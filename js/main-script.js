const generateBtn = document.querySelector(".generate-btn");
const clearFieldsBtn = document.querySelector(".clear-fields-btn");

function generateQR() {
	var qrInput = document.getElementById("qr-input").value;
	var qrCodeImg = document.getElementById("qr-code-img");
	qrCodeImg.src =
		"https://api.qrcode-monkey.com/qr/custom?size=200&data=" +
		encodeURIComponent(qrInput) +
		"&config=%7B%22body%22%3A%22square%22%2C%22eye%22%3A%22frame0%22%2C%22eyeBall%22%3A%22ball0%22%2C%22erf1%22%3A%22qr0%22%2C%22erf2%22%3A%22qr1%22%2C%22erf3%22%3A%22qr2%22%2C%22brf1%22%3A%22qr3%22%2C%22brf2%22%3A%22dots%22%2C%22bodyColor%22%3A%22%23000000%22%2C%22bgColor%22%3A%22%23FFFFFF%22%2C%22eye1Color%22%3A%22%23000000%22%2C%22eye2Color%22%3A%22%23000000%22%2C%22eye3Color%22%3A%22%23000000%22%2C%22eyeBall1Color%22%3A%22%23000000%22%2C%22eyeBall2Color%22%3A%22%23000000%22%2C%22eyeBall3Color%22%3A%22%23000000%22%2C%22gradientColor1%22%3A%22%22%2C%22gradientColor2%22%3A%22%22%2C%22gradientType%22%3A%22linear%22%2C%22gradientOnEyes%22%3A%22false%22%2C%22logo%22%3A%22%22%2C%22logoMode%22%3A%22default%22%2C%22logoBackgroundColor%22%3A%22%23ffffff%22%2C%22logoBackgroundTransparent%22%3A%22false%22%2C%22logoWidth%22%3A%22100%22%2C%22logoHeight%22%3A%22100%22%2C%22logoMargin%22%3A%2210%22%2C%22logoCornerRadius%22%3A%2215%22%2C%22logoBackgroundShadow%22%3A%22true%22%2C%22logoShadow%22%3A%22true%22%2C%22transparent%22%3A%22false%22%2C%22autoColor%22%3A%22true%22%2C%22binarize%22%3A%22false%22%2C%22binarizeThreshold%22%3A%22128%22%2C%22dataPattern%22%3A%22dots%22%2C%22binarizeMethod%22%3A%22threshold%22%7D";
	qrCodeImg.style.display = "inline";

	qrCodeImg.style.border = "2px solid #333";
}

function clearFields() {
	document.getElementById("qr-input").value = "";
	document.getElementById("qr-code-img").src = "";
	document.getElementById("qr-code-img").style.display = "none";
	document.getElementById("qr-code-img").style.border = "none";
}

document
	.getElementById("qr-input")
	.addEventListener("keypress", function (event) {
		if (event.key === "Enter") {
			generateQR();
		}
	});

generateBtn.addEventListener("click", () => {
	generateQR();
});

clearFieldsBtn.addEventListener("click", () => {
	clearFields();
});
