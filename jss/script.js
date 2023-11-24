// show/hide
function lightOff(){
    document.getElementById('myimg').src="images/pic_bulboff.gif";
}

function lightOn(){
    document.getElementById('myimg').src="images/pic_bulbon.gif";
}

function myFuntion(){
  let x= document.getElementById("fname");
  x.value = x.valu.topUppercase();
}

// time
function showTime(){
  document.getElementById("time").innerHTML=Date();
}
// text change
function textChange(){
  document.getElementById("change").innerHTML="hello word";
}
// java script
document.getElementById("p").innerHTML="my first javascript";

// calculate
document.getElementById("cal").innerHTML=5+6;
// var
let e;
e=6
document.getElementById("h3").innerHTML= e;
// change heading
document.getElementById("one").innerHTML="first heading";
document.getElementById("two").innerHTML="second heading";
document.getElementById("three").innerHTML="third heading";
document.getElementById("four").innerHTML="four heading";
document.getElementById("five").innerHTML="fith heading";
document.getElementById("six").innerHTML="sixth heading";

// javascript
let number1,number2;

number1=4;
number2=6;

number1+=number2;
function javaScript(){
 document.getElementById("sum").innerHTML=number1;
}
// arithmetic
let a,b 
a=5
b=8
a+=b;
function arithMetic(){
  document.getElementById("arith").innerHTML=a;
}

// loading
document.write(29+77);

// Create and display a variable:
let car="fiat";
document.getElementById("varia").innerHTML=car;

// time
function timeAgain(){
  document.getElementById("time").innerHTML=Date();
}

// string
let carName1 = "siam julfiqur"; 
let carName2 = "siam julfiqur";

document.getElementById("volvo").innerHTML=
carName1+ "" +carName2;

// lenght
let any = "amader onno ek onuvuthi amd may name is siam ahmend and your name ki shata bolle valo hoto";
document.getElementById("length").innerHTML=any.length;

// string search
let text = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");
document.getElementById("string").innerHTML = index;

// number
let f = 4.7;
let g = 7;
 document.getElementById("number").innerHTML = f + "<br>" + g;

//  numbr
let h = 555555555555555
let i = 777777777777777

document.getElementById("numbr").innerHTML = h + "<br>" + i;
 

let j=123;
document.getElementById("demo").innerHTML = 
j.toString() + "<br>" +
(123).toString() + "<br>" +
(100 + 23).toString();

// arry
const cars = ["Saab", "Volvo", "BMW"];
document.getElementById("demo").innerHTML = cars;

// switch
let day;
switch (new Date().getDay ()){
  case 0:
    day = "Sunday";
    break;

  case 1:
  day = "Monday";
  break;

  case 2:
    day = "Tuesday";
    break;

  case 3:
    day = "wednesday";
    break;

  case 4:
    day = "thuseday";
    break;

  case 5:
    day = "friday";
    break;
  
  case 6:
    day = "saturday";
    break;

  case 7:
    day = "sunday";
    break;
}

document.getElementById("switch").innerHTML = "Today is " + day;
// loop
const ca = ["BMW", "Volvo", "Saab", "Ford", "Fiat", "Audi"];

let te = "";
for (let i = 0; i < ca.length; i++) {
  te += ca[i] + "<br>";
}

document.getElementById("Loo").innerHTML = te;

        // Create a Map
        const fruits = new Map([
          ["apples", 500],
          ["bananas", 300],
          ["oranges", 200]
        ]);
        
        document.getElementById("map").innerHTML = fruits.get("apples");
// modules
     type="module"
      import message from "./message.js";
      document.getElementById("modu").innerHTML = message();




