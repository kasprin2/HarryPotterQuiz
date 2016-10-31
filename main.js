// GLOBAL VARIABLES TO BE RUN BEFORE DOCUMENT IS READY//
var initialized = false;
var questionCount = 0;
var correctCount = 0;
var counter = 1;

// EVENT LISTENERS//

$(document).ready(function() {

	$('button').on('click', function() {
		console.log($('button').text());
		if (initialized === false) {
			setUpQuestion();
			$('.correctCount').hide();
			initialized = true;
		} else {
			if (questionCount < 4) {
				console.log('questionCount: ' + questionCount);
				switch ($('button').text()) {
					case "Submit":
						checkAnswer();
						updateCorrectAnswerStats();
					case "Next Question":
						questionCount++;
						counter++;
						setUpQuestion();
				}
			} else {
				checkAnswer();
				lastQuestion();
				playAgain();
			};
		};

	});
});

// FUNCTIONS FOR EVENT LISTENERS//

function updateCorrectAnswerStats() {
	$('.correctCount').text('Correct Answers: ' + correctCount + ' out of ' + counter);
}

function setUpQuestion() {
	$('button').text('Submit');
	$('h2 , .options').show();
	$('.correctCount').show();
	$('h2').text(quizItems[questionCount].question);
	$('.label-1').text(quizItems[questionCount].answer1);
	$('.label-2').text(quizItems[questionCount].answer2);
	$('.label-3').text(quizItems[questionCount].answer3);
	$('.label-4').text(quizItems[questionCount].answer4);
};

function checkAnswer() {
	var selectedAnswer = $('input:checked').siblings('span').text();

	console.log('selectedAnswer: ' + selectedAnswer);
	console.log('correctAnswer: ' + quizItems[questionCount].correctAnswer);

	if (selectedAnswer === quizItems[questionCount].correctAnswer) {
		console.log('Correct answer!');
		$('.options').hide();
		$('button').text('Next Question');
		correctCount++;
	} else {
		console.log('Wrong answer!');
		$('.options').hide();
		$('button').text('Next Question');
	}

	console.log('correctCount: ' + correctCount);
};

function lastQuestion() {
	$('button').text('Play Again!');
	$('.options').hide();
	$('.correctCount').hide();
	$('h2').text('You got ' + correctCount + ' out of 5 questions right!');
}

function playAgain() {
	initialized = false;
	questionCount = 0;
	correctCount = 0;
	counter = 1;
}

function QuizItem(question, answer1, answer2, answer3, answer4, correctAnswer) {
	this.question      = question;
	this.answer1       = answer1;
	this.answer2       = answer2;
	this.answer3       = answer3;
	this.answer4       = answer4;
	this.correctAnswer = correctAnswer;
}

// OTHER GLOBAL VARIABLES//

var quizItems = [];

quizItems[0] =  new QuizItem(
	'What incantation do you yell when a dementor comes near?',
	'Expecto Patronum!',
	'Expelliarmus!',
	'Wingardium Leviosa!',
	'Avada Kedavra!',
	'Expecto Patronum!'
);

quizItems[1] =  new QuizItem(
	'What spell do you cast when you need to summon an object?',
	'Expelliarmo Object!',
	'Accio Object!',
	'Wingardium Leviosa!',
	'Crucio Object!',
	'Accio Object!'
);

quizItems[2] = new QuizItem(
	'What spell do you cast when you need to get through a locked door?',
	'Expelliarmo Door',
	'Alohomora',
	'Ventus',
	'Impedimenta',
	'Alohomora'
);

quizItems[3] = new QuizItem(
	'What spell would you cast to repel something, for instance, water from eyeglasses?',
	'Imperio',
	'Engorgio',
	'Expelliarmus',
	'Impervius',
	'Impervius'
);

quizItems[4] = new QuizItem(
	'What spell would you cast to erase a memory?',
	'Confundo',
	'Oblivius',
	'Obliviate',
	'Confundiato',
	'Obliviate'
);

// Other possibilities for events

// }
		// } else if ($('button').text()==='Submit') {
		// 	checkAnswer();
		// 	$('.correctCount').text('Correct Answers: ' + correctCount + ' out of ' + counter);
		// } else if ($('button').text()==='Next Question') {
		// 	questionCount++;
		// 	counter++;
		// 	setUpQuestion();
		// } else if (questionCount === 4) {
		// 	lastQuestion();
		// } else if ($('button').text()==='Play Again') {
		// 	playAgain();
		// }


//Other functions
// function newGame() {
// 	console.log("newGame");
// 	$('h1').text('Cast the Spell');
// 	$('h2').text('Directions to game go here');
// };

// function startGame() {
// 	setUpQuestion();
// };

// function runQuiz() {
// 	for (initialized=true; questionCount<=4; questionCount++) {
// 		if ($('button').text()==='Submit') {
// 			checkAnswer();
// 			$('.correctCount').text('Correct Answers: ' + correctCount + ' out of ' + counter);
// 		} else if ($('button').text()==='Next Question') {
// 			questionCount++;
// 			counter++;
// 			setUpQuestion();
// 		} else if (questionCount === 4) {
// 			lastQuestion();
// 		} else if ($('button').text()==='Play Again') {
// 			playAgain();
// 		}
// 		}
// 	}
// }


// function submitAnswer() {
// 	checkAnswer();
// };

// function nextQuestion() {
// 	questionCount++;
// 	setUpQuestion();
// };


// lue of the selected radio button, select it by name with the :checked filter.

// var selected = $("input[type='radio'][name='radAnswer']:checked");
// if (selected.length > 0) {
//     selectedVal = selected.val()








