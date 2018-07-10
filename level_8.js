let i = [123, 234, 345, 456];

let j = i[0] > 200;
let k = i[1] > i[3];
let l = i[2] > 300;

console.log(j, k, l);

let h = prompt("what number for first data in array");

if (h == 123) {
    alert("this is data array number 0");
    alert("You have strong memory!")
} else if (h == 234) {
    alert("this is data array number 1");
    alert("You have strong memory!")
} else if (h == 345) {
    alert("this is data array number 2");
    alert("You have strong memory!")
} else if (h == 456) {
    alert("this is data array number 3");
    alert("You have strong memory!")
} else {
    alert("please open the level_8.js file first");
}