import React from "react";
// import Component from "./component";
// import Navbar from "./components/navbar";
import Header from "./components/header";

// const App = () => {
  // return <div>Agar Isko Bana Liya To PP ka Lawada Chusega aur Marwayega Bhi.</div>;
// };

// *************************************************  Variables *************************************************  
// var a = 22;
// console.log(a);

// var b = 22;
// b = 40;
// b = 50;
// var b = 100;
// console.log(b);

//let 
// let a = 22;
// a = 44;
// a = 5000;

// console.log(a);

//const

// const c = 10;
// const d = 50;
// console.log(d);

//************************************************* Functions ************************************************* 

// function func2() {
//   const a = 30;
//   console.log(a);
// }

// func2();

//arrow function 
// const func1 = () => {
//   console.log("This is the data from function");
// };
// function2();

// function func3(a = 20, b = 30) {
//   console.log(a + b);
// }
// func3();

// function func4(a = 20, b = 30) {
//   console.log(a + b);
// }
// func4();

//************************************************* Arrays *************************************************

const App = () => {
  // const aa = "Apple";
  // const bb = "Banana";
  // const fruit = [aa, bb];
  // const number = [23, 4, 34, 34, 34];
  // const number = [23, 4, 34, "example", 34];
  // const number = ["Banana", "Apple", "Pineapple"];
  // const cars = ["Volvo", "Toyota", "Mercedes"];
  // console.log(number);
  // console.log(number[3]);
  // console.log(number.length);
  // const a = number.join(" ");
  // const a = number.sort();
  // const b = number.push("smt else");
  // const b = number.shift();
  // const b = number.unshift("Orange");
  // console.log(number);
  // const b = number.concat(cars);
  // number.splice(2,2, "Orange", "Mango");
  // const sn = number.slice(2);
  // console.log(number);

  // return <div>App {fruits}</div>;
  // return <div>App {aa+bb}</div>
  // return <div>{sn}</div>
  // return <div>App{b} </div>;
  
  //******************************************************** MAP **************************************************
  // function addition() {
  //   const a = 20;
  //   const b = 20;
  //   return a + b;
  //   // console.log(a + b);
  // }
  // addition();

  // var a = [43, 4, 3, 34, 34];

  // const b = a.map(function multiply(x) {
  //   return x * 2;
  // });
  // console.log(b);

  // const b = a.map((x) => x * 2);
  // console.log(b);

  //******************************************************** Filter **************************************************
  // var b = a.filter(x => x > 20);
  // console.log(b);

//************************************************* Combining Methods **************************************************
  // var c = a.map(x => x / 2).filter(x => x > 12)
  // console.log(c);
  
//************************************************* Reduce Method **************************************************

  // var b = a.reduce((acc, curr) => {
  //   return acc + curr
    // return curr;
    // return acc;
  // }, 20)
  // console.log(b);

  return <div>
    {/* App */}
    {/* <Navbar /> */}
    <Header />
  </div>
}



export default App;