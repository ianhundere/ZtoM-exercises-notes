// .padStart()
// .padEnd()

const fun = (a, b, c, d, e) => {
    console.log(a);
};

fun(1, 2, 3, 4);

Object.entries;
Object.keys;
let obj = {
    username0: 'Santa',
    username1: 'Rudolph',
    username3: 'Mr. Grinch'
};

Object.keys(obj).forEach((key, index) => {
    console.log(key, obj[key]);
});

Object.values(obj).forEach(value => {
    console.log(value);
});

Object.entries(obj).forEach(value => {
    console.log(value);
});
