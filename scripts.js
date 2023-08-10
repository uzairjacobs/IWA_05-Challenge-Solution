FREE_WARNING = "Free shipping only applies to single customer orders";
BANNED_WARNING = "Unfortunately we do not ship to your country of residence";
NONE_SELECTED = 0;

const customers = 2;
const country = "RSA";
let currency;
let shipping;

let shoes = 300 * 1;
let batteries = 35 * 2;
let toys = 100 * 5;
let pens = 5 * NONE_SELECTED;
let shirts = 150 * NONE_SELECTED;

if (country === "RSA") {
  shipping = 400;
  currency = "R";
  if ((shoes + batteries + pens + shirts + toys) >= 1000 && customers === 1) {
    shipping = 0;
  } 
} 
  
  else if (country === "NAM") {
  shipping = 600;
  currency = "$";
  if ((shoes + batteries + pens + shirts + toys) >= 1000 && customers === 1) {
    shipping = 0;
  }
}
  else if (country === "NK") {
  console.log(BANNED_WARNING);

  } else {
  shipping = 800;
  currency = "$";
}

if (customers != 1 && shipping == 0) {
  console.log(FREE_WARNING);
}



const total = shoes + batteries + toys + pens + shirts + shipping
console.log("Price:", currency + total);