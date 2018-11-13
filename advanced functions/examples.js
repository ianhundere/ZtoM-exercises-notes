// function first() {
//     var greet = 'Hi';
//     function second() {
//         alert(greet);
//     }
//     return second;
// }

// var newFunc = first();
// newFunc();

const first = () => {
  const greet = "Hi";
  const second = () => {
    alert(greet);
  };
  return second;
};

const newFunc = first();

// Closures - a function ran. the function executed. it's never going to execute again.
// BUT it's going to remember that there are references to those variables.
// so the child scope always has access to the parent scope. Children always have access to
// the parent scope, but parents don't have access to their children.

// Currying - process of converting a function that takes multiple arguments into a function 
// that takes them one at a time.
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
curriedMultiply(3);

// Compose - the act of putting two functions together to form a third function where the output 
// of one function is the input of the other.
const compose = (f, g) => (a) => f(g(a));

const sum = (num) => + 1;

compose(sum, sum)(5);

// Avoiding Side Effects, so that you have functional purity. You want your function to be deterministic.
// that is, the input or parameters in the function always return the same value.

var a = 1;
function b() {
  a = 2;
}