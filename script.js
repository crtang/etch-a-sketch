
function initialize() {
	for (var i = 0; i < 16; i++) {
		$("#contain").append("<div class='row'></div");
	}

	for (var i = 0; i < 16; i++) {
		$(".row").append("<div class='grid'></div");
	}

	$(".row").height(String(800.0/16) + "px");
	$(".grid").width(String(800.0/16) + "px");
	$(".grid").height(String(800.0/16) + "px");

	$(".grid").mouseenter(function() {
		$(this).css("background-color", "#000000");
	});
};

function change_size() {
	$("#contain").empty();

	var input = prompt("Enter a number N to create an N x N grid: ");

	for (var i = 0; i < Number(input); i++) {
		$("#contain").append("<div class='row'></div>");
	};

	for (var j = 0; j < Number(input); j++) {
		$(".row").append("<div class='grid'></div>");
	};

	$(".row").height(String(800.0/Number(input)) + "px");
	$(".grid").width(String(800.0/Number(input)) + "px");
	$(".grid").height(String(800.0/Number(input)) + "px");

	$(".grid").mouseenter(function() {
		$(this).css("background-color", "#000000");
	});
};

function clear() {
	$(".grid").css("background-color", "#ffffff");
};

function generateColor() {
	var color = "#";

	for (var i = 0; i < 6; i++) {
		var x = Math.floor(Math.random() * 16);

		if (9 < x < 16) {
			switch(x) {
				case 10: 
					x = "a";
					break;

				case 11:
					x = "b";
					break;

				case 12:
					x = "c";
					break;

				case 13:
					x = "d";
					break;

				case 14:
					x = "e";
					break;

				case 15:
					x = "f";
					break;
			}
		}

		color += String(x);
	}

	return color;
};

function rainbow() {
	$(".grid").mouseenter(function() {
		$(this).css("background-color", generateColor());
	});
};

function random_color() {
	var color = "#";

	for (var i = 0; i < 6; i++) {
		var x = Math.floor(Math.random() * 16);

		if (9 < x < 16) {
			switch(x) {
				case 10: 
					x = "a";
					break;

				case 11:
					x = "b";
					break;

				case 12:
					x = "c";
					break;

				case 13:
					x = "d";
					break;

				case 14:
					x = "e";
					break;

				case 15:
					x = "f";
					break;
			}
		}

		color += String(x);
	}

	$(".grid").mouseenter(function() {
		$(this).css("background-color", color);
	});
};

$(document).ready(function() {
	$("body").append("<div id='contain'></div>");

	initialize();

	$("#change-size").click(function() {
		return change_size();
	});

	$("#clear").click(function() {
		return clear();
	});

	$("#rainbow").click(function() {
		return rainbow();
	});

	$("#random-color").click(function() {
		return random_color();
	});

	$("#etch-a-sketch").click(function() {
		return etch_a_sketch();
	});
});




