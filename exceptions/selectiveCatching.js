// inheritance -extends-
// The new error class extends Error.
// It doesn't define its own constructor, which means that it inherits the Error constructor
// ...which expects a string as arg.
//-infact it doesn't define anything at all.. the class is empty .
// InputError objects behave like Error objects, axcept that they have a different class by which we can recognize them
class InputError extends Error {}

function promptDirection(question) {
  let result = prompt(question);
  if (result.toLowerCase() == "left") return "L";
  if (result.toLowerCase() == "right") return "R";
  throw new InputError("Invalid direction: " + result);
}

// the for(;;) construct is a way to intentionally create a loop that doesn't terminate on its own.
// breaking is only when a valid direction is given
// This will catch only instances of InputError and allow unrelated exceptions through. 

 for (;;) {
   try {
     let dir = promptDirection("Where?");
     console.log("You chose ", dir);
     break;
   } catch (e) {
     if (e instanceof InputError) {
       console.log("Not a valid direction. Try again.");
     } else {
       throw e;
     }
   }
 }
