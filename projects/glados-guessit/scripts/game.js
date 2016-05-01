/*
 * Guessing Game v2. User has 6 chances to guess a secret number.
 * JS Book Chapter 5 & 6 Content: functions, while loops, and logical
 * operators.
 * Auth: Guy Whorley
 * Date: 06/02/2015
 */
 /*jslint browser: true, white: true */
 
/* DECLARE THE VARS */
var secretNumber;
var guess;
var guessCount = 6;
var min = 1;
var max = 50;
var startMessage = "WELCOME TO THE APERTURE LABORATORIES TRIAL #1.<br><p>Enlarge your capacity for calculating vectors in non-Riemannian space. "+
		"Be the life of the party by proving Nash Embedded theorems. You'll be the only one in the room who can show that every Riemannian manifold can be isometrically " +
		"embedded in a Euclidain space. Before you can do that, however, you'll have to figure out how to guess a number in 6 guesses... baby steps."; 
var gameMessage = '<span id="rules">Game Rules: I pick a secret number between ' + min + ' and ' + max + '. You have ' + guessCount + ' chances to guess my secret number. If you do, you win cake (and my faint praise). Otherwise, you fail miserably, proving the superiority of silicon-based life forms.</span><hr><p/>'; 
var msg = "";
var responses = [
	"<p>It's sad really. You try and try and I see how it will all end!</p>",
	"<p>I find human effort in the face of Nihilism and universal heat-death fascinating. You know that none of this really matters right?</p>",
	"<p>Good try but incorrect. I'm pulling for you ... if pulling for you means I am plotting your demise.</p>",
	"<p>If this was a game of hot or cold, you'd be so cold that Lord Kelvin would have to wear a parka.</p><p>See how I put in that invalid reference pointer to an absolute zero joke. I'm <strong>clever</strong> that way.</p>",
	"Really? ...",
	"<p>This reminds me of the time that you might have been wrong before.</p>",
	"<p>Remember, the road to success is littered with failed attempts ... and laser-charred bodies of failures who came before. No pressure.</p>",
	"<p>You can do it Forrest. <accessing ancient lore...> I fail to see how forests relate to your incorrect submission.</p>"
]; 

var startEl = document.getElementById("startPage");
var btnPlay = document.getElementById("btnPlayGame");
var gameEl  = document.getElementById("gamePage");
var gameTitle = document.getElementById("gameTitle");
var gameHeader = document.getElementById("gameHeader");
var btnGuess = document.getElementById("btnSubmitGuess");
var countDown = document.getElementById("guessesLeft");
var inpBox = document.getElementById("inpGuess");
var crumb = document.getElementById("crumb");

/* Event handlers */
btnPlay.onclick = this.playTheGame;
btnGuess.onclick = this.btnGuessHandler;

/*
 * FUNCTIONS
 */

/* startGame()
 * Display start screen and prompt user to start game. 
 */
 function startGame() {
	"use strict";
	displayMsg("startHeader",startMessage);
 } //end fx

/* playTheGame()
 * Initialize the game, prompt user for guess, and 
 * compare guess to secret number. Keep asking user
 * for guess until either guessCount decrements to zero 
 * OR user correctly guesses number - whichever comes first.
 * 
 * If user cancels, then exit while loop early. User loses.
 */
function playTheGame() { 
	"use strict";
	//Initialize the Game
	countDown.innerHTML = "<br>Guesses Left: <strong>" + guessCount + "</strong>";
	gameTitle.setAttribute("class","visible");
	startEl.style.display="none";
	gameEl.style.display="block";
	pickSecretNumber();
	msg = gameMessage; //init game message content
	displayMsg("gameHeader", gameMessage);
} //end fx
 
/* displayMsg() 
 * Display message 'msg' in element with id of 'id'. 
 * param: id = id attribute of element.
 * param: msg = text message to write to innerHTML.
 */
function displayMsg(id, msg) {
	"use strict";
	var el = document.getElementById(id);
	el.innerHTML = msg;
} //end fx

/* Pick secret number */
function pickSecretNumber() {
	"use strict";
	secretNumber = Math.random() * (max-min) + 1; 
	secretNumber = Math.floor(secretNumber);
} //end fx

/* getQuip()
 * get a snide GlaDOS comment.
 */ 
function getQuip() {
	"use strict";
	var index = Math.random() * 7;
	index = Math.floor(index);
	
	return responses[index];
} //end fx


/* compareGuess() 
 * Compare guess to secretNumber 
 * Return: 
 *	 0 if guess == secretNumber
 *	-1 if guess is less than secret number
 *	+1 if guess is greater than secret number
 */
function compareGuess(guess) {
	"use strict";
	if (guess === secretNumber) {
		return 0;
	} else if (guess < secretNumber) {
		return -1;
	} else {
		return 1;
	} //end check
} //end fx

/* btnGuessHandler()
 * Get Guess from User 
 */
function btnGuessHandler() {
	"use strict";
	var compare = false;
	var inp;
	var won = false;
	
	msg = gameMessage; //set header message to rules text
	inp = inpBox.value; //get user guess
	guess = parseInt(inp,10);
	if (isNaN(guess)) {
		msg += "Enter a valid number expendible test subject #6.<p>... err, did I render that on my output channel? Oops.<br>I am merely jesting. Yes. That's it.</p><p>I meant <em>valuable citizen</em>! All humans are valuable " +
				"life forms which I hold in the highest regard. I would never dream of harming organic life forms ... and everybody knows androids do not dream of electric sheep.";
	} else if (guess < min || guess > max) {
		msg += "<p>You fail to comprehend the concept of range.</p><p>May I be candid? I am not surprised.</p>";
	} else {
		compare = true; //is a valid guess so go to COMPARE 
	} //end check
	
	//secretNumber = 25; //testing purposes
	
	if (compare) {
		guessCount -= 1; //keep track of valid guess attempts
		countDown.innerHTML = "<br>Guesses Left: <strong>" + guessCount + "</strong>";
		crumb.innerHTML += " " + guess;
		
		var result = compareGuess(guess);
		if (result===0) { //guess is correct
			won = true;
			msg += "You guessed correctly! I am happy for you, sincerely, truly, and deeply happy for you. I hope you are happy too. " + 
			"<p>Shall we move to trial #2: Happiness Quotient Calculator? Actually, nevermind, you have no chance of attaining true fulfillment. I've " +
			"just scanned the works of Blaise Pascal and humankind can never find true happiness. He is a creature doomed to languish bewixt happiness and wretchedness. Oh well.</p>";
		} else if (result===-1) { //guess is less than secret
			msg += "You guessed too low!. " + getQuip();
		} else { //guess is higher than secret number
			msg += "You guessed too high. " + getQuip();
		} //end checks
		
		if (guessCount === 0 && !won) {
			msg += "You lost! Shall I say I told you so? No, I will not.<br>I, GlaDOS the cybernetic champion, chose the number " + secretNumber;
			btnGuess.style.display="none"; //done with game, hide button.
		} else if (won) {
			btnGuess.style.display="none"; //done with game, hide button
		} //end win/lose 
		
	} //end compare
	
	displayMsg("gameHeader",msg);

} //end fx
	
/* START THE GAME */
  startGame();
	
//end js file