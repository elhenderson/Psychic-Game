var data = {
    words : ["aerate", "age", "bake", "batter", "blacken", "boil", "bread", "brown", "butterfly", "barbeque", "beat", "blanch", "bone", "brew", "brush", "baste", "bind", "blend", "braise", "broil", "burn", "can", "char broil", "chunk", "coddle", "cool", "cured", "carmelize", "chill", "churn", "combine", "core", "cut", "char", "chop", "clarify", "congeal", "cream", "debone", "deglaze", "dice", "drain", "decorate", "descale", "dip", "drizzle", "deep fry", "devil", "dough", "dry", "escallop", "ferment", "flambe", "fold", "fricassee", "fry", "fillet", "flavor", "freeze", "frost", "filter", "flip", "french fry", "froth", "garnsih", "grate", "grill", "gel", "gratin", "grind", "glaze", "grease", "hard boil", "heat", "harden", "hull", "hash", "ice", "infuse", "jell", "juice", "julienne", "knead", "layer", "leaven", "macerate", "measure", "mix", "marinate", "melt", "mold", "mash", "microwave", "oil", "oven fry", "overcook", "pan fry", "peel", "pit", "pour", "preserve", "process", "parboil", "percolate", "poach", "precook", "press", "pulp", "pare", "pickle", "pop", "prepare", "pressure cook", "puree", "quarter", "raw", "render", "roll", "reduce", "rise", "rub", "refrigerate", "roast", "salt", "scallop", "scramble", "separate", "shirr", "sieve", "skewer", "slice", "smoke", "soft boil", "steam", "stir", "stuff", "saute", "scoop", "sear", "serve", "shred", "sift", "skim", "sliver", "snip", "souse", "steep", "stir fry", "sweat", "scald", "score", "season", "shell", "shuck", "simmer", "skin", "slow cook", "soak", "sprinkle", "stew", "strain", "sweeten", "uncured", "unmold", "warm", "whip", "wash", "whisk", "wedge"],

    // variables
    currentWord: "",
    guesses : [],
    totalNumberOfGuesses : 0,
    correctGuesses : [],
    currentWordArray: [], 
    availableLetters : [], 
    winsCounter : 0

}


var view = {
    //outlets
    guessesRemainingNode: document.querySelector(".guessesRemaining"),
    guessedNode : document.querySelector(".alreadyGuessed"),
    correctGuessesNode : document.querySelector(".word"),
    winsNode : document.querySelector(".wins"),
    
    update : function(node, data) {
        console.log(this[node]);
        this[node].innerHTML = data
    }
}


function winNotice() {
    setTimeout (function() {
        document.querySelector(".winNotice").style.display = "none"; }, 7000); 
}

function loseNotice() {
    setTimeout (function() {
        document.querySelector(".loseNotice").style.display = "none"; }, 7000);
    }

// function michaelButton() {
//     setTimeout (function() {
//         document.querySelector(".michaelScott").style.display = "none"; }, 10000);
// }

//resets and initializes the game
function restart() {   
    // select a random word from list of words
    data.currentWord = data.words[Math.floor(Math.random() * data.words.length)];
    console.warn(data.currentWord);
    // document.querySelector(".word").innerHTML = data.currentWord;


    //splits current word into an array
    data.currentWordArray = data.currentWord.split("");

    var lettersExpression = /[a-z]/

    data.availableLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

    
    //Replaces characters with underscores if not a space
    data.correctGuesses = data.currentWordArray.map( function (letter) {
        if (letter === " ") return " ";
        return "_";
    } );

    //displays the current word on the DOM
    // "correctGuessesNode".innerHTML = data.correctGuesses.join(" ");
    view.update("correctGuessesNode", data.correctGuesses.join(" "));

    //generate amount of guesses based on word count
    data.totalNumberOfGuesses = data.currentWord.length + 5;
    
    //update remaining guess DOM node
    view.update("guessesRemainingNode", data.totalNumberOfGuesses);

    //clear guesses array
    data.guesses = [];

    //updates guesses DOM node
    // "guessedNode".innerHTML = data.guesses;
    view.update("guessedNode", data.guesses);

    // "winsNode".innerHTML = data.winsCounter;
    view.update("winsNode", data.winsCounter);

}

restart();

function shutUpMichael() {
    document.querySelector(".no").pause();
    document.querySelector(".no").currentTime = 0;
    document.querySelector(".michaelScott").style.display = "none";
}


var keyPressed;
//Add global keyup event  listener to capture guessed letters
document.addEventListener("keyup", function(event) {
    //check to see if user is out of gueses
    //End game at zero guesses
    if (data.totalNumberOfGuesses <= 0) return
        
    //Changes all key presses to lowercase
    keyPressed = event.key.toLowerCase();

    //check to see if guessed letter is in current word
    data.currentWordArray.map(function (currentLetter, currentIndex, originalArray) { 
        if (currentLetter != keyPressed) return 
        data.correctGuesses.splice(currentIndex, 1, keyPressed);
        //displays correct letter guesses to DOM
        // "correctGuessesNode".innerHTML = data.correctGuesses.join(" ");
        view.update("correctGuessesNode", data.correctGuesses.join(" "));
    })

    //add key press to already guessed array
    data.availableLetters.map(function (currentLetter, currentIndex) { 
        if (currentLetter != keyPressed) return 
        data.guesses = data.guesses.concat([keyPressed]);
        
        //update DOM already guessed with current already guessed array
        // "guessedNode".innerHTML = data.guesses;
        view.update("guessedNode", data.guesses.join(" "));
        
        //reduces the guesses counter
        // "guessesRemainingNode".innerHTML = --(data.totalNumberOfGuesses);
        view.update("guessesRemainingNode", --(data.totalNumberOfGuesses));

        //replace found keypress with $#%@&^
        data.availableLetters[currentIndex] = "$#%@&*^";

    
    })

    //alerts "You lose!" and calls restart function at 0 guesses left
    if (data.totalNumberOfGuesses === 0) {
        loseNotice();
        // michaelButton();
        restart();
        document.querySelector(".no").play();
        document.querySelector(".michaelScott").style.display = "inline-block";
        document.querySelector(".loseNotice").innerHTML = `You lose :(   The correct word was ${data.currentWord}`;
        document.querySelector(".winNotice").style.display = "none";
        document.querySelector(".loseNotice").style.display = "block";
    }

    //alerts win statement, updates win counter, and calls restart function upon guessing correctly
    if (data.correctGuesses.join("") === data.currentWord) {
        document.querySelector(".wow").play();
        // "correctGuessesNode".innerHTML = data.currentWord;
        view.update("correctGuessesNode", data.currentWord);
        ++data.winsCounter;
        document.querySelector(".winNotice").innerHTML = `You won!  The correct word was ${data.currentWord}`;
        document.querySelector(".loseNotice").style.display = "none";
        document.querySelector(".winNotice").style.display = "block";
        winNotice();
        restart ();
        
    }

    //updates win counter on screen
    // "winsNode".innerHTML = data.winsCounter;
    view.update("winsNode", data.winsCounter);

})





