// arrow functions

function add(a, b) {
  return a + b;
}

const add = (a, b) => a + b;

add(a, b => {
  a + b;
});

add(a, b => a + b);

// Symbol

var sym1 = Symbol();
var sym2 = Symbol("foo");
var sym3 = Symbol("foo");

// default arguments

function greet(name = "", age = 30, pet = "cat") {
  return `Hello ${name} you seem to be ${age -
    10}. What a lovely ${pet} you have`;
}

// Template strings

const name = "Sally";
const age = 34;
const pet = "horse";
const greetingBest = `Hello ${name} you seem to be ${age -
  10}. What a lovely ${pet} you have`;

// Object Properties

const a = "Simon";
const b = true;
const c = {};

const obj = {
  a: a, // declaration unnecessary if the property and value are the same
  b: b,
  c: c
};

// so you could remove the property/key name like below.

const obj = {
  a,
  b,
  c
};

const name = "john snow";

const obj = {
  [name]: "hello",
  ["ray" + "smith"]: "hihi",
  [1 + 2]: "hihi"
};

// Destructuring

const obj = {
  player: "bobby",
  experience: 100,
  wizardLevel: false
};

const player = obj.player;
const experience = obj.experience;
let wizardLevel = obj.wizardLevel;

const { player, experience } = obj;
let { wizardLevel } = obj;
