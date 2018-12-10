


var psyGame = {
    words : ["aerate", "age", "bake", "batter", "blacken", "boil", "bread", "brown", "butterfly", "barbeque", "beat", "blanch", "bone", "brew", "brush", "baste", "bind", "blend", "braise", "broil", "burn", "can", "char-broil", "chunk", "coddle", "cool", "cured", "carmelize", "chill", "churn", "combine", "core", "cut", "char", "chop", "clarify", "congeal", "cream", "debone", "deglaze", "dice", "drain", "decorate", "descale", "dip", "drizzle", "deep fry", "devil", "dough", "dry", "escallop", "ferment", "flambe", "fold", "fricassee", "fry", "fillet", "flavor", "freeze", "frost", "filter", "flip", "French fry", "froth", "garnsih", "grate", "grill", "gel", "gratin", "grind", "glaze", "grease", "hard boil", "heat", "harden", "hull", "hash", "ice", "infuse", "jell", "juice", "julienne", "knead", "layer", "leaven", "macerate", "measure", "mix", "marinate", "melt", "mold", "mash", "microwave", "oil", "oven fry", "overcook", "pan fry", "peel", "pit", "pour", "preserve", "process", "parboil", "percolate", "poach", "precook", "press", "pulp", "pare", "pickle", "pop", "prepare", "pressure cook", "puree", "quarter", "raw", "render", "roll", "reduce", "rise", "rub", "refrigerate", "roast", "salt", "scallop", "scramble", "separate", "shirr", "sieve", "skewer", "slice", "smoke", "soft boil", "steam", "stir", "stuff", "saute", "scoop", "sear", "serve", "shred", "sift", "skim", "sliver", "snip", "souse", "steep", "stir fry", "sweat", "scald", "score", "season", "shell", "shuck", "simmer", "skin", "slow cook", "soak", "sprinkle", "stew", "strain", "sweeten", "uncured", "unmold", "warm", "whip", "wash", "whisk", "wedge"]


}
var currentWord, guesses = [], totalNumberOfGuesses = 0, correctGuesses = [];
var winsCounter = 0;
//outlets
var guessesRemainingNode = document.querySelector(".guessesRemaining");
var guessesNode = document.querySelector(".alreadyGuessed");
var correctGuessedNode = document.querySelector(".word");

function restart() {   
    console.log("restart");
    // select a random word from list of words
    currentWord = psyGame.words[Math.floor(Math.random() * psyGame.words.length)];
    console.warn(currentWord);
    // document.querySelector(".word").innerHTML = currentWord;

    //correct Guesses
    correctGuesses = currentWord.split("").map((word) => "_");

    //displays the current word on the DOM
    correctGuessedNode.innerHTML = correctGuesses.join(" ");

    //generate amount of guesses based on word count
    totalNumberOfGuesses = currentWord.length + 5;
    
    //update remaining guess DOM node
    guessesRemainingNode.innerHTML = totalNumberOfGuesses;

    //clear guesses array
    guesses = [];

    //updates guesses DOM node
    guessesNode.innerHTML = guesses;
}

restart();

//Add global keyup event listener to capture guessed letters
document.addEventListener("keyup", function(event) {
    //check to see if user is out of gueses
    if (totalNumberOfGuesses <= 0) {
        //End game at zero guesses
        return;
        
    }

    var keyPressed = event.key;


    //check to see if guessed letter is in current word
    var foundIndex = currentWord.indexOf(keyPressed);
    
    if (foundIndex !== -1) {
    //replaces underscore with current letter
    console.log(correctGuesses, foundIndex, keyPressed);
    currentWord = correctGuesses.splice(foundIndex, 1, keyPressed);
     //displays correct letter guesses to DOM
     correctGuessedNode.innerHTML = correctGuesses.join(" ");
    }
   

    //add key press to already guessed array
    guesses = guesses.concat([keyPressed]);

    //update DOM already guessed with current already guessed array
    guessesNode.innerHTML = guesses;

    //reduces the guesses counter
    guessesRemainingNode.innerHTML = --(totalNumberOfGuesses);

})

// Picks the first word and prints to top of the page

// var wordToGuess = document.querySelector(".word").innerHTML = psyGame.words[Math.floor(Math.random() * psyGame.words.length)];

// //letter count for the first word

// letterCount = wordToGuess.length;

// //calculates guesses remaining for the first word

// guessesCounter = document.querySelector(".guessesRemaining").innerHTML = letterCount + 5;

// //Ties wins variable to the wins HTML

// document.querySelector(".wins").innerHTML = winsCounter;

//clicking the button picks a new word

// document.querySelector(".newWord").onclick = function() {   
//       //  document.querySelector(".word").innerHTML = test;
//      wordToGuess = psyGame.words[Math.floor(Math.random() * psyGame.words.length)];
//         document.querySelector(".word").innerHTML = wordToGuess;

//         //letter count for the new button word
//         letterCount = wordToGuess.length;

//         //calculates guesses remaining for button words

//        guessesCounter =  document.querySelector(".guessesRemaining").innerHTML = letterCount + 5;

//         //clears the HTML for letters already guessed and replaces the alreadyGuessed array with a blank one
//        document.querySelector(".alreadyGuessed").innerHTML = "";
//        alreadyGuessed = [];

//        for (j=0;j<wordToGuess.length;j++){
//     	blnk = blnk.concat(str2);;
//         }
//         // document.querySelector(".word").innerHTML = blnk[2];
//         document.querySelector(".word").innerHTML = blnk;
//     }


//keeps track of letters guessed

// document.addEventListener("keyup", function(event) {
//     var z = alreadyGuessed.push(event.key);
//     keyRecord = event.key;
//     document.querySelector(".alreadyGuessed").innerHTML = alreadyGuessed;

//     //reduces the guesses counter
//     document.querySelector(".guessesRemaining").innerHTML = guessesCounter--;
//     console.log(keyRecord);



//     // var letterMatch = wordToGuess;




//     //loops through the word for a match
//     // for (i = 0; i < wordToGuess.length; i++) {
//     //     wordToGuess.replaceAt(i, "_");

//     //     if (event.key === wordToGuess.charAt(i)) {
//     //         console.log("hwat");
//     //     }
// // }
// })



// String.prototype.replaceAt=function(index,replacement){
// 	return this.substring(0,index)+replacement+this.substring(index+replacement.length);
// };

    // var blnk= "";
    // var str2= "_ ";
    // for (j=0;j<wordToGuess.length;j++){
    // 	blnk = blnk.concat(str2);
    // }
    // // document.querySelector(".word").innerHTML = blnk[2];
    // document.querySelector(".word").innerHTML = blnk;

// function myFunction() {
// 	// // var poop = keyRecord;
//     // // var str = wordToGuess.charAt(i);
//     // var blnk= "";
//     // var str2= "_ ";
//     // for (j=0;j<wordToGuess.length;j++){
//     // 	blnk = blnk.concat(str2);;
//     // }
//     // // document.querySelector(".word").innerHTML = blnk[2];
//     // document.querySelector(".word").innerHTML = blnk;

//     for(i=0;i<wordToGuess.length;i++){
//     	var res = wordToGuess.charAt(i);
        
//     	if (res==keyRecord){	
//             blnk=blnk.replaceAt(i,keyRecord);
//             document.querySelector(".word").innerHTML = res;
//             console.log("what")
//         }
//     }
// }


// myFunction();

// if (keyRecord === "a") {
//     for (i = 0; wordToGuess.length; i++) {
//     if (wordToGuess.charAt(i) === keyRecord) {
//         console.log("how");
// }
// }
// }

// var alphabetLetters = /^[a-zA-Z]*$/;

// var test = "a"

// var found = test.match(alphabetLetters);

// if (keyRecord === found) {
//     console.log('why');
// }

// console.log(found);