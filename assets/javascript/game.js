
var game = {

// Variables 

	win: 0,
	loss: 0,
	randomNumber: null,
	totalScore: null,
	crystalValues: [],
	message:'',


//	Generate random crystal values
//	Math.floor((Math.random()*(max-min+1)) + min)
	start : function() {
		this.totalScore = 0;
		this.randomNumber = Math.floor((Math.random() * 102) + 19);
		this.getCrystalValues();
		$('#random').html(this.randomNumber);
		$('#total-score').html(this.totalScore);
	},

	getCrystalValues : function() {
		for (var i = 0; this.crystalValues.length < 4; i++) {
			var tempValue = Math.floor((Math.random() * 12) + 1);

			// Check to make sure each crystalValues are unique
			
			if (this.crystalValues.includes(tempValue) === false)
				this.crystalValues.push(tempValue);
		}
			console.log(this.crystalValues);
			//assign values from array to crystals
			$('#pink').val(this.crystalValues[0]); 
			$('#blue').val(this.crystalValues[1]);
			$('#yellow').val(this.crystalValues[2]);
			$('#green').val(this.crystalValues[3]);

			//empty out the crystalValues array
			this.crystalValues.splice(0,this.crystalValues.length);
//			console.log(this.crystalValues);
	},

	displayScore : function() {
		var result = this.message + '<br><br>' + 'Wins : ' + this.win + '<br>' + ' Losses : ' + this.loss;
		$('#score').html(result);	 
	},


	checkScore : function() {
		if (this.totalScore === this.randomNumber) {
			this.win++;
			this.message='You Won &#9786;';
			this.displayScore();
			this.start();
		}	
		else if (this.totalScore > this.randomNumber) {
			this.loss++;
			this.message='You Lost &#9785;';  	
			this.displayScore();
			this.start();
		}
	}
};


$(document).ready(function(){
	//start the game
	game.start();
});

//when crystals are clicked
$('.crystal').on('click', function () {
	game.totalScore+=parseInt($(this).val());
	$('#total-score').html(game.totalScore);

	game.checkScore();
})

