


var psyGame = {
    words : ["aerate", "age", "bake", "batter", "blacken", "boil", "bread", "brown", "butterfly", "barbeque", "beat", "blanch", "bone", "brew", "brush", "baste", "bind", "blend", "braise", "broil", "burn", "can", "char broil", "chunk", "coddle", "cool", "cured", "carmelize", "chill", "churn", "combine", "core", "cut", "char", "chop", "clarify", "congeal", "cream", "debone", "deglaze", "dice", "drain", "decorate", "descale", "dip", "drizzle", "deep fry", "devil", "dough", "dry", "escallop", "ferment", "flambe", "fold", "fricassee", "fry", "fillet", "flavor", "freeze", "frost", "filter", "flip", "french fry", "froth", "garnsih", "grate", "grill", "gel", "gratin", "grind", "glaze", "grease", "hard boil", "heat", "harden", "hull", "hash", "ice", "infuse", "jell", "juice", "julienne", "knead", "layer", "leaven", "macerate", "measure", "mix", "marinate", "melt", "mold", "mash", "microwave", "oil", "oven fry", "overcook", "pan fry", "peel", "pit", "pour", "preserve", "process", "parboil", "percolate", "poach", "precook", "press", "pulp", "pare", "pickle", "pop", "prepare", "pressure cook", "puree", "quarter", "raw", "render", "roll", "reduce", "rise", "rub", "refrigerate", "roast", "salt", "scallop", "scramble", "separate", "shirr", "sieve", "skewer", "slice", "smoke", "soft boil", "steam", "stir", "stuff", "saute", "scoop", "sear", "serve", "shred", "sift", "skim", "sliver", "snip", "souse", "steep", "stir fry", "sweat", "scald", "score", "season", "shell", "shuck", "simmer", "skin", "slow cook", "soak", "sprinkle", "stew", "strain", "sweeten", "uncured", "unmold", "warm", "whip", "wash", "whisk", "wedge"]

    
}
var currentWord, guesses = [], totalNumberOfGuesses = 0, correctGuesses = [], currentWordArray, availableLetters, winsCounter = 0;

var indexOfSpace;

//outlets
var guessesRemainingNode = document.querySelector(".guessesRemaining");
var guessesNode = document.querySelector(".alreadyGuessed");
var correctGuessedNode = document.querySelector(".word");
var winsNode = document.querySelector(".wins");


function restart() {   
    // select a random word from list of words
    currentWord = psyGame.words[Math.floor(Math.random() * psyGame.words.length)];
    console.warn(currentWord);
    // document.querySelector(".word").innerHTML = currentWord;


    //splits current word into an array
    currentWordArray = currentWord.split("");

    var lettersExpression = /[a-z]/

    

    correctGuesses = currentWordArray.map( function (letter) {
        if (letter === " ") return " ";
        return "_";
    } );


    //correct Guesses


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

    winsNode.innerHTML = winsCounter;

    availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
}

restart();




var keyPressed;
//Add global keyup event  listener to capture guessed letters
document.addEventListener("keyup", function(event) {
    //check to see if user is out of gueses
    if (totalNumberOfGuesses <= 0) {
        //End game at zero guesses
        return;
        
    }

 
    

    keyPressed = event.key.toLowerCase();
    var foundIndex;
    


    //check to see if guessed letter is in current word

    currentWordArray.map(function (currentLetter, currentIndex, originalArray) { 
        

        if (currentLetter != keyPressed) return 
            
        correctGuesses.splice(currentIndex, 1, keyPressed);
        //displays correct letter guesses to DOM
        correctGuessedNode.innerHTML = correctGuesses.join(" ");
        
    })

    // replaces the available letters array with a character that cannot be entered
    


    //add key press to already guessed array
    availableLetters.map(function (currentLetter, currentIndex) { 
        
        if (currentLetter != keyPressed) return 

        guesses = guesses.concat([keyPressed]);
                
        //update DOM already guessed with current already guessed array
        guessesNode.innerHTML = guesses;
        
        //reduces the guesses counter
        guessesRemainingNode.innerHTML = --(totalNumberOfGuesses);

        //replace found keypress with $#%@&^
        availableLetters[currentIndex] = "$#%@&*^";
    })
    console.log(winsCounter, totalNumberOfGuesses, guesses);
    
    if (totalNumberOfGuesses === 0) {
        alert("You lose!")
        restart();
    }

    if (correctGuesses.join("") === currentWord) {
        correctGuessedNode.innerHTML = currentWord;
        ++winsCounter;
        alert(`You guessed the word correctly: ${currentWord}`);
        restart ();
        
    }
    
    winsNode.innerHTML = winsCounter;

})





