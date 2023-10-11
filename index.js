//exercitiul 1 
/// Creati un loop care sa numere de la 0 pina la 10 folosint for, wihle si do while.

const nr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i=0;
//========== for ==============

for (let i = 0; i <= 10; i++) {
    console.log(i);
  }

// //========== while ==============

let n = 0;
while (n <= 10) {
  console.log(n);
  n++;
}

// //========== do while ==============
let m = 0;
do {
  console.log(m);
  m++;
} while (m <= 10);


//exercitiul 2
//Creati un loop fara conditie care sa indeplineasca doar de 5 ori folosind for

console.log("Loop fără condiție de 5 ori:");
for (let i = 0; i < 5; i++) {
  console.log("pas " + (i + 1));
}

//exercitiul 3
//Creati un loop care sa afiseze in consola fiecare element dintr-un array

console.log("Afișare elementelor din array:");
const num = [1,2,3,4,5,6,7,8]
num.forEach((num) => {
  console.log(num);
});


//exercitiul 4
//Creati un for loop care sa afiseze pe rand fiecare litera dintr-un string.
const text = "Nicoleta";
console.log("Afișare litere:");
for (let i = 0; i < text.length; i++) {
  console.log(text[i]);
}

// exercitiul 5 
//Sa folositi metodele: 
     //map
     //filter
     //indexOf
     //findIndex
     //every
     //some
     //flat
     //forEach
     //find
     //concat
     //includes


//================ map ==========
const arr = [1,2,3,4,5,6,7,8,9]
const triplu = arr.map((item) =>{
    return item * 3
})
console.log("Instructiunea map:");
console.log(triplu)

//=============== filter =========
const numerePare = arr.filter((item) =>{
  return item % 2 === 0;
})
console.log("Instructiunea filter:");
console.log(numerePare); 

//=============== indexOf =========
const idx = arr.indexOf(4)
console.log("Instructiunea indexOf:");
console.log('Indexul', idx)

//=============== every =========
const every = arr.every((item) => {
    return item < 10
})
console.log("Instructiunea every:");
console.log(every)

//=============== some =========
const maiMareDecat5 = arr.some((item) =>{
  return item >5
});
console.log("Instructiunea some:");
console.log("Cel putin ul element mai mare decat 5:", maiMareDecat5);


//=============== flat =========
const array = [[1,2,3],4,[5,6],7]
console.log("Instructiunea flat:");
console.log('array1', array.flat())

//=============== forEach =========
console.log("forEach:");
arr.forEach((item) => {
  console.log(item);
});

//=============== find =========
const found = arr.find((item) => {
  return item > 8
})
console.log("Instructiunea find:");
console.log('Numar mai mare decat 8:', found)

//=============== concat =========
const arr1 = [1,2];
const arr2 = [3,4];
const concatenat = [...arr1, ...arr2];
console.log("concatinare:", concatenat);

//=============== includes =========
const include = arr.includes(7);
console.log("conține 7?:", include);