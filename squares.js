var NUM_SQUARES = 12;

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
	var squareLoopingOrder = ['#one', '#two', '#three', '#four',
				  '#four', '#five', '#six', '#twelve', '#eleven', 
				  '#ten', '#nine', '#eight', '#seven'];
	var counter = 1;
	
	//start a timed interval, that will execute the code within it every x milliseconds
	setInterval(function () {
		//change the css color attribute of the html elements, with a looping effect
		for(var i=0; i<NUM_SQUARES; i++) {
			var color = colors[(counter + i) % NUM_SQUARES];
			$(squareLoopingOrder[i]).css('background-color', color);
		}
		
		//increase the counter until it reaches 4, then reset the counter
		if (counter < 12) {
			counter++;
		} else {
			counter = 1;
		}
	}, 100);
}