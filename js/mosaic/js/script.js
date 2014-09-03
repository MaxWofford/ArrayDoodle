function onStart() {
	generateMosaic(hexToNum(getRandomColor()))
}

function generateMosaic(baseColor) {
	clearContainer();
	for (var n = 0; n < 10; n++) {
		for (var i = 0; i < 10; i++) {
			var tile = document.createElement('div');
			tile.style.cssText = 'display: inline-block; width: 10%; height: 10%; background-color:' + numToHex(baseColor + (n * 100) + (i * 10)) + ';'
			document.getElementById('container').appendChild(tile);
		};
	};
}

function generateGradient() {
	clearContainer();
	//var order = {a,b,c};
	for (var n = 0; n < 10; n++) {
		for (var i = 0; i < 10; i++) {
			var tile = document.createElement('div');
			tile.style.cssText = 'display: inline-block; width: 10%; height: 10%; background-color: rgb(' + (Math.ceil(n * 25.5)) + ',' + (Math.ceil(i * 25.5)) + ',255' + ');'
			document.getElementById('container').appendChild(tile);
		};
	};
}

//Random color generation is from https://stackoverflow.com/questions/1484506/random-color-generator-in-javascript
function getRandomColor() {
    var letters = '0123456789ABCDEF'.split('');
    var color = '';
    for (var i = 0; i < 6; i++ ) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    console.info('Random generated color is #', color);
    document.getElementById('seed').innerText = '#' + color;
    document.getElementById('seed').style.color = color;
    return color;
}

function numToHex(number) {
	var hex = number.toString(16);
	return hex.length == 1 ? "0" + hex : hex;
}

function hexToNum(hex) {
	return parseInt(hex, 16);
}

function rgbToHex(r, g, b) {
	console.info( 'rgb(', r, g, b, ') converted to #',numToHex(r),numToHex(g),numToHex(b));
	return "#" + numToHex(r) + numToHex(g) + numToHex(b);
}

function hexToRgb(hex) {

}

function clearContainer() {
	while(document.getElementById('container').firstChild) {
		document.getElementById('container').removeChild(document.getElementById('container').firstChild)
	}
}