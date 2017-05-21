// Random target score
var targetScore = [50, 59, 45, 63, 57, 84, 73];

//Random Gem points
var dScore = [1, 4, 8];
var rScore = [2, 5, 9];
var aScore = [3, 6, 10];
var eScore = [4, 7, 11];

var startScore = 0;
var wins = 0;
var losses = 0;

window.onload = function() {



	$("#diamond").on("click", function() {
		diamondScore = dScore[Math.floor(Math.random() * dScore.length)];
	$("#total").val(startScore + diamondScore);


	});

	$("#ruby").on("click", function() {
		rubyScore = rScore[Math.floor(Math.random() * rScore.length)];
	$("#total").val(startScore + rubyScore);
	});

	$("#amethyst").on("click", function() {
		amethystScore = aScore[Math.floor(Math.random() * aScore.length)];
	$("#total").val(startScore + amethystScore);
	});

	$("#emerald").on("click", function() {
		emeraldScore = eScore[Math.floor(Math.random() * eScore.length)];
	$("#total").val(startScore + emeraldScore);


	});

$("#total").html("Total Score: " + startScore);
console.log(startScore)
start()
};

function start() {
// random score is chosen
	chosenScore = targetScore[Math.floor(Math.random() * targetScore.length)];
	$("#target").html("Target Score: " + chosenScore);

if (total === chosenScore) {
wins++;
	$("#wins").html("Wins: " + wins);
start();

}
else if (total > chosenScore) {
	losses++;
	$("#losses").html("Losses: " + losses);
start();
}



};
