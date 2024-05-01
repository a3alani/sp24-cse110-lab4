// node part1-question2.js

function sumValues(num1, num2, add) {
  if (add) {
    const result = 0;
    result = num1 + num2;
    console.log("values added", result);
  } else return;

  console.log("final", result);
}

//sumValues(10,10,true);

function discountPrices(prices, discount) {
  let discounted = [];
  let length = prices.length;

  for (let i = 0; i < prices.length; i++) {
    const discountedPrice = prices[i] * (1 - discount);
    //finalPrice = Math.round(discountedPrice * 100) / 100;
    discounted.push(discountedPrice);
  }

  //console.log(i);
  //console.log(discounted);
  //console.log(finalPrice);

  console.log(length);
  console.log(discounted);
  return discounted;
}

discountPrices([100, 200, 300], 0.5);

let student = {
  name: "Ali",
  major: "CE",
  "Grad Year": "2025",
  greet: function () {
    console.log("its me");
  },
  "fav teacher": {
    name: "powell",
    course: "cse 110",
  },
  courseload: ["cse 110", "cse 150b"],
};

console.log(student.name);
console.log(student["Grad Year"]);
console.log(student.greet);
console.log(student["fav teacher"].name);
console.log(student.courseload[0]);

function modifyArray(array, callback) {
  const newArr = [];
  for (let i = 0; i < array.length; i++) {
    newArr.push(callback(array[i]));
  }
  return newArr;
}

function doSome(num) {
  return num * 2;
}

let arr = [1, 2, 3];
let reuslt = modifyArray(arr, doSome);
console.log(reuslt);

function printNums() {
  console.log(1);
  setTimeout(function () {
    console.log(2);
  }, 1000);
  setTimeout(function () {
    console.log(3);
  }, 0);
  console.log(4);
}

printNums()
