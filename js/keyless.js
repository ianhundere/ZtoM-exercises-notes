let answer = (parseInt(prompt('How old are you?')));
if (answer === 18) {
    alert("congrats on your first year of driving. enjoy the ride!");
}

else if (answer > 18) {
    alert("power on. enjoy the ride!");
}

else if (answer < 18) {
    alert("sorry, you are too young to drive this car. powering off");
}