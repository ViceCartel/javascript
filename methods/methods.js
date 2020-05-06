let rabbit = {};

// when we have keys holding functions as values...
// the resulting property is a method

rabbit.speak = function(line) {
  console.log(`The rabbit says ${line}`);
};
rabbit.speak("I'm alive.");


// explanation 2: one method -speak- held by two objects
// passing a function as a method in two objects.
function speak(line) {
  console.log(`The ${this.type} rabbit says '${line}'`);
}

let whiteRabbit = {type: "white", speak};
let hungryRabbit = {type: "hungry", speak};

whiteRabbit.speak("Oh my ears and whiskers");
hungryRabbit.speak("I could use a carrot right now");
// using a function's call method
// takes the THIS value as its first argument
// further args are treated as normal parameters
speak.call(hungryRabbit, 'Burp!')


// explanation 3: spliting the two objects to hold its own method
let whiteRabbit3 = {
  type: "White",
  speak: function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

whiteRabbit3.speak("Oh my ears and whiskers");

speak.call(whiteRabbit3, 'Another way of calling it');

let hungryRabbit3 = {
  type: "hungry",
  speak: function(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};

hungryRabbit3.speak("I couuld use a carrot right now");
speak.call(hungryRabbit3, 'check on my way');
