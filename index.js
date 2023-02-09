// Iteration 1: Names and Input

let hacker1 = "Calvin";
console.log(`The driver's name is ${hacker1}`);

let hacker2 = "Kang";
console.log(`The navigator's name is ${hacker2}`);

// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters`);
  } else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`);
  } else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
  }

// Iteration 3: Loops

console.log(hacker1.toUpperCase().split("").join(" "));

console.log(hacker2.split("").reverse().join(""));

if (hacker1 < hacker2) {
  console.log(`The driver's name goes first.`);
} else if (hacker1 > hacker2) {
  console.log(`Yo, the navigator goes first definitely.`);
} else {
  console.log(`What?! You both have the same name?`);
}

// Bonus 1

let longText = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi dapibus iaculis consectetur. Praesent nunc lacus, imperdiet non ante luctus, facilisis lobortis ante. Proin eget fringilla nibh. Etiam neque mauris, fringilla in felis sed, finibus bibendum dolor. Donec nec mi ac justo ultrices dignissim. Nunc nec pharetra augue. Praesent ac ex lectus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Vivamus ultrices quam eros, quis gravida diam posuere ac. Integer neque dolor, tincidunt et nunc quis, facilisis eleifend quam. Donec luctus libero in massa pharetra euismod. Morbi non nisi ut felis eleifend dignissim aliquam sit amet nisi. Nunc pharetra quam et nisi aliquam, eu pellentesque eros accumsan. Praesent enim risus, ornare sit amet elit quis, fringilla interdum erat. Ut luctus egestas ornare. Quisque consectetur orci et nunc dictum, eget molestie est pretium. Donec aliquet ligula eget turpis euismod, id pellentesque turpis laoreet. In congue velit in urna convallis dapibus. Mauris lacinia ante in commodo feugiat. Aliquam mauris velit, vulputate eget nunc quis, cursus condimentum leo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Pellentesque commodo velit at maximus mollis. Donec egestas tristique turpis a aliquet. Proin pulvinar diam turpis. Fusce eu ex ullamcorper, iaculis turpis at, dapibus urna. Aliquam felis purus, maximus ac odio at, gravida egestas neque. Mauris sollicitudin ante eget consectetur ultricies. Nulla nunc lacus, volutpat non felis ac, cursus placerat sapien. Pellentesque fringilla velit ut ligula gravida condimentum. Fusce luctus sed sapien eget congue. Nam venenatis nisi at nibh elementum, nec venenatis purus hendrerit. Phasellus et tortor nunc. Nulla fermentum, massa sed blandit molestie, libero lectus vehicula urna, eu rutrum sem arcu eu dui. Aenean tempus vestibulum felis vitae mattis. Suspendisse potenti. Nunc cursus tristique pulvinar. Cras faucibus nisi sed arcu volutpat, posuere mattis mauris pulvinar. Aenean egestas at eros molestie lobortis."

console.log(longText.split(" ").length);

console.log(longText.match(/ et /g).length);

// Bonus 2

let phraseToCheck = "amor roma";

if (phraseToCheck === phraseToCheck.split("").reverse().join("")) {
  console.log(`It's a palindrome!`);
} else {
  console.log(`It's not a palindrome :(`);
}