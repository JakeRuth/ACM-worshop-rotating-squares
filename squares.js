$(function() {
	setSquareSize();
	startSquareAnimation();
});

function setSquareSize () {
	//get the height of the window in pixels (int)
	var windowHeight = $(window).height();
	var windowWidth = $('body').width();
	
	//get all of the html elements with the class attribute 'square'
	var squares = $('.square');
	
	//set the css property min-height for the squares
	squares.css('min-height', windowHeight / 2);
	
	//set the width of the squares
	squares.css('width', windowWidth / 6 - 10);
}

//add an event listeners function to resize the squares when the window
//changes height
window.onresize = function () {
	setSquareSize();
}

function startSquareAnimation () {
	var colors = ['maroon', 'red', 'orange', 'yellow', 
				  'greenyellow', 'green', 'lightblue', 'blue', 
				  'indigo', 'purple', 'magenta', 'pink'];
	var counter = 1;
	
	//start a timed interval, that will execute the code within it every x milliseconds
	setInterval(function () {
		//change the css color attribute of the html elements, with a looping effect
		$('#one').css('background-color', colors[(counter) % 12]);
		$('#two').css('background-color', colors[(counter + 1) % 12]);
		$('#three').css('background-color', colors[(counter + 2) % 12]);
		$('#four').css('background-color', colors[(counter + 3) % 12]);
		$('#five').css('background-color', colors[(counter + 4) % 12]);
		$('#six').css('background-color', colors[(counter + 5) % 12]);
		$('#twelve').css('background-color', colors[(counter + 6) % 12]);
		$('#eleven').css('background-color', colors[(counter + 7) % 12]);
		$('#ten').css('background-color', colors[(counter + 8) % 12]);
		$('#nine').css('background-color', colors[(counter + 9) % 12]);
		$('#eight').css('background-color', colors[(counter + 10) % 12]);
		$('#seven').css('background-color', colors[(counter + 11) % 12]);
		
		//increase the counter until it reaches 4, then reset the counter
		if (counter < 12) {
			counter++;
		} else {
			counter = 1;
		}
	}, 100);
}