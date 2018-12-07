var alreadyGuessed = [];

var psyGame = {
    words : ["aerate", "age", "bake", "batter", "blacken", "boil", "bread", "brown", "butterfly", "barbeque", "beat", "blanch", "bone", "brew", "brush", "baste", "bind", "blend", "braise", "broil", "burn", "can", "char-broil", "chunk", "coddle", "cool", "cured", "carmelize", "chill", "churn", "combine", "core", "cut", "char", "chop", "clarify", "congeal", "cream", "debone", "deglaze", "dice", "drain", "decorate", "descale", "dip", "drizzle", "deep fry", "devil", "dough", "dry", "escallop", "ferment", "flambe", "fold", "fricassee", "fry", "fillet", "flavor", "freeze", "frost", "filter", "flip", "French fry", "froth", "garnsih", "grate", "grill", "gel", "gratin", "grind", "glaze", "grease", "hard boil", "heat", "harden", "hull", "hash", "ice", "infuse", "jell", "juice", "julienne", "knead", "layer", "leaven", "macerate", "measure", "mix", "marinate", "melt", "mold", "mash", "microwave", "oil", "oven fry", "overcook", "pan fry", "peel", "pit", "pour", "preserve", "process", "parboil", "percolate", "poach", "precook", "press", "pulp", "pare", "pickle", "pop", "prepare", "pressure cook", "puree", "quarter", "raw", "render", "roll", "reduce", "rise", "rub", "refrigerate", "roast", "salt", "scallop", "scramble", "separate", "shirr", "sieve", "skewer", "slice", "smoke", "soft boil", "steam", "stir", "stuff", "saute", "scoop", "sear", "serve", "shred", "sift", "skim", "sliver", "snip", "souse", "steep", "stir fry", "sweat", "scald", "score", "season", "shell", "shuck", "simmer", "skin", "slow cook", "soak", "sprinkle", "stew", "strain", "sweeten", "uncured", "unmold", "warm", "whip", "wash", "whisk", "wedge"]
}

console.log(psyGame.words[0][0])

document.addEventListener("keyup", function(event) {
    console.log(event.key);
    var addGuess = document.getElementsByClassName("alreadyGuessed");
    console.log(addGuess);
    alreadyGuessed.push(event.key); 
})

console.log(alreadyGuessed);