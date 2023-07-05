window.onload = function() {
	increaseDecreaseFont();
}

function increaseDecreaseFont() {
	var elementBody = document.querySelector('body');
	var elementBtnIncreaseFont = document.getElementById('increase-font');
	var elementBtnDecreaseFont = document.getElementById('decrease-font');
	var cookieFontSize = getCookie('font-size');

	// Define o valor do fontSize. Caso não exista o cookie será atribuído 100% como padrão
	if (cookieFontSize != '') {
		var fontSize = parseInt(cookieFontSize);
		elementBody.style.fontSize = fontSize + '%';
	} else {
		var fontSize = 100;
	}

	// Valor de incremento ou decremento. Equivale a 10% do valor do elemento body
	var increaseDecrease = 10;

	// Evento de click para aumentar a fonte
	elementBtnIncreaseFont.addEventListener('click', function(event) {
		fontSize = fontSize + increaseDecrease;
		elementBody.style.fontSize = fontSize + '%';
		
		setCookie('font-size', fontSize);
	});

	// Evento de click para diminuir a fonte
	elementBtnDecreaseFont.addEventListener('click', function(event) {
		fontSize = fontSize - increaseDecrease;
		elementBody.style.fontSize = fontSize + '%';
		
		setCookie('font-size', fontSize);
	});
}