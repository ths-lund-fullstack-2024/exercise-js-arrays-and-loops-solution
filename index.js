// # 21. Skriv en for-loop som letar efter det största talet i numbers. Logga det största värdet.

const numbers = [5, 8, 12, 20, 3];

let biggestNumber = 0; // Set this value to 0 just to have something to compare the first value to.

for (const number of numbers) {
  if (number > biggestNumber) {
    biggestNumber = number;
  }
}

console.log(`#21. The biggest number is ${biggestNumber}`);

// #22. Skapa en ny array som heter doubledNumbers. Använd en for-loop för att fylla doubledNumbers med varje tal i numbers multiplicerat med 2.

const doubledNumbers = [];

for (const n of numbers) {
  doubledNumbers.push(n * 2);
}

console.log("#21.", numbers);
console.log("#21.", doubledNumbers);

// #29. Skapa en array words med några ord i den, (exempel nedan). Använd en for-loop för att logga varje ord tillsammans med dess längd (antal bokstäver).

const words = ["banana", "apple", "kiwi", "strawberry", "peach"];

for (const w of words) {
  const numberOfCharacters = w.length;
  console.log(`#29. Word: ${w}. It has ${numberOfCharacters} characters.`);
}

// #30. Använd words-arrayen ovan och en for-loop för att bygga en ny sträng som består av de första bokstäverna i varje ord. Logga ut den nya strängen.

let newStr = "";

for (const word of words) {
  newStr += word[0];
}

console.log(`#30. ${newStr}`);
