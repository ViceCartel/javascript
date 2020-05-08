// watch closely even the commented lines
/*
let empty = {};
console.log(empty.toString);
console.log(empty.toString());

console.log(Object.getPrototypeOf({}) == Object.prototype);
*/


// creating an object with a specific prototype
// property -speak- is short form of writing a meethod
let protoRabbit = {
  speak(line) {
    console.log(`The ${this.type} rabbit says '${line}'`);
  }
};
let killerRabbit = Object.create(protoRabbit);
killerRabbit.type = "killer";
killerRabbit.speak("SKREEEE!")
// checking for property -toString- in protoRabbit
// create a null obect to remove -toString-
console.log("toString" in Object.create(protoRabbit))
//protoRabbit.type = "killer";
//protoRabbit.speak("SKREEE...");
//console.log(Object.getPrototypeOf(killerRabbit))
//protoRabbit.speak.call(protoRabbit, "SKREEE>>>")
