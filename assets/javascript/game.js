var alreadyGuessed = [];
var winsCounter = 0;


var psyGame = {
    words : ["aerate", "age", "bake", "batter", "blacken", "boil", "bread", "brown", "butterfly", "barbeque", "beat", "blanch", "bone", "brew", "brush", "baste", "bind", "blend", "braise", "broil", "burn", "can", "char-broil", "chunk", "coddle", "cool", "cured", "carmelize", "chill", "churn", "combine", "core", "cut", "char", "chop", "clarify", "congeal", "cream", "debone", "deglaze", "dice", "drain", "decorate", "descale", "dip", "drizzle", "deep fry", "devil", "dough", "dry", "escallop", "ferment", "flambe", "fold", "fricassee", "fry", "fillet", "flavor", "freeze", "frost", "filter", "flip", "French fry", "froth", "garnsih", "grate", "grill", "gel", "gratin", "grind", "glaze", "grease", "hard boil", "heat", "harden", "hull", "hash", "ice", "infuse", "jell", "juice", "julienne", "knead", "layer", "leaven", "macerate", "measure", "mix", "marinate", "melt", "mold", "mash", "microwave", "oil", "oven fry", "overcook", "pan fry", "peel", "pit", "pour", "preserve", "process", "parboil", "percolate", "poach", "precook", "press", "pulp", "pare", "pickle", "pop", "prepare", "pressure cook", "puree", "quarter", "raw", "render", "roll", "reduce", "rise", "rub", "refrigerate", "roast", "salt", "scallop", "scramble", "separate", "shirr", "sieve", "skewer", "slice", "smoke", "soft boil", "steam", "stir", "stuff", "saute", "scoop", "sear", "serve", "shred", "sift", "skim", "sliver", "snip", "souse", "steep", "stir fry", "sweat", "scald", "score", "season", "shell", "shuck", "simmer", "skin", "slow cook", "soak", "sprinkle", "stew", "strain", "sweeten", "uncured", "unmold", "warm", "whip", "wash", "whisk", "wedge"]


}
var btnNewWord=" ";

var letterCount=0;

var guessesCounter = 0;

var keyRecord;


// Picks the first word and prints to top of the page

var wordToGuess = document.querySelector(".word").innerHTML = psyGame.words[Math.floor(Math.random() * psyGame.words.length)];

//letter count for the first word

letterCount = wordToGuess.length;

//calculates guesses remaining for the first word

guessesCounter = document.querySelector(".guessesRemaining").innerHTML = letterCount + 5;

//Ties wins variable to the wins HTML

document.querySelector(".wins").innerHTML = winsCounter;

//clicking the button picks a new word

document.querySelector(".newWord").onclick = function() {   
      //  document.querySelector(".word").innerHTML = test;
     wordToGuess = psyGame.words[Math.floor(Math.random() * psyGame.words.length)];
        document.querySelector(".word").innerHTML = wordToGuess;

        //letter count for the new button word
        letterCount = btnNewWord.length;

        //calculates guesses remaining for button words

       guessesCounter =  document.querySelector(".guessesRemaining").innerHTML = letterCount + 5;

        //clears the HTML for letters already guessed and replaces the alreadyGuessed array with a blank one
       document.querySelector(".alreadyGuessed").innerHTML = "";
       alreadyGuessed = [];
    }


//keeps track of letters guessed

document.addEventListener("keyup", function(event) {
    var z = alreadyGuessed.push(event.key);
    keyRecord = event.key;
    document.querySelector(".alreadyGuessed").innerHTML = alreadyGuessed;

    //reduces the guesses counter
    document.querySelector(".guessesRemaining").innerHTML = guessesCounter--;
    console.log(keyRecord);



    // var letterMatch = wordToGuess;


    //loops through the word for a match
    for (i = 0; i < wordToGuess.length; i++) {
        var index = i;
        if (event.key === wordToGuess.charAt(index)) {
            console.log("hwat");
        }
}
})

// var str = "jkbadkjbawdkhbawdkhb sdkjnalkwjd";


// for (i = 0; i < str.length; i++) {
//     var index = i;
//     // console.log(str.charAt(index));
//     if (keyRecord === str.charAt(index)) {
//         console.log("hwat");
//     }
// }

// console.log(keyRecord);