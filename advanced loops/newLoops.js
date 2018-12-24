const basket = ['apples', 'oranges', 'grapes'];
const detailedBasket = {
    apples: 5,
    oranges: 10,
    grapes: 1000
};

// 1 for
for (let i = 0; i < basket.length; i++) {
    console.log(basket[i]);
}

// 2 forEach
basket.forEach(item => {
    console.log(item);
});

// for of
// iterating - arrays, strings
for (item of basket) {
    console.log(item);
}

// for in - properties (look into object)
// enumerating - objects
for (item in detailedBasket) {
    console.log(item);
}
