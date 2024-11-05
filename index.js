// # 1. Utgå ifrån array nedanför. Skriv ut namnet på index-position 3. Vilket namn skrivs ut och varför?

const names = ["Zlatan", "Beckham", "Zidane", "Maradona", "Pele", "Ronaldo"];

console.log("#1. ", names[3]);

// # 2. I samma array, lägg till namnet "Drogba" i slutet av arrayen med hjälp av push(). Vad är returvärdet av den metoden?
let returnValue = names.push("Drogba");
console.log("#2.", returnValue);

// # 3. Lägg nu till namnet "Figo" i börja av arrayen. Vilken metod använder du för att gära det och vad är returnvärdet av den metoden?
const newLength = names.unshift("Figo");
console.log("#3.", newLength);
console.log("#3.", names);

// # 4. Ta nu bort det sista namnen från array med pop(). Logga ut returvärdet av den metoden.
returnValue = names.pop();
console.log("#4.", names);
console.log("#4.", returnValue);

// # 5. Vid det här laget så bör du ha motsvarande array nedan. Hur kan du flytta namnet "Ronaldo" från sluten av arrayen till början av arrayen? Visa i kod samt förklara varför du gör som du gör.

console.log("#5 before.", names);
let ronaldo = names.pop(); // Jag vet att ronaldo ligger sist i arrayen därav namnet på variablen.
names.unshift(ronaldo);
console.log("#5 after.", names);

// # 7. Utgå från arrayen nedan. Använd metoden includes() för att kontrollera om "Messi" finns i arrayen. Vad blir resultatet, och vad innebär det?

const players = [
  "Zlatan",
  "Beckham",
  "Zidane",
  "Ronaldo",
  "Romario",
  "Maradona",
];

const isMessiHere = players.includes("Messi"); // Returnera sant eller falsk om, i det här fallet, messi finns i arrayen eller inte.
console.log("#7. Is Messi here? ", isMessiHere);

// # 8. Kontrollera om "Zlatan" finns i "players"-arrayen med includes(). Om han finns, logga ut en bekräftande text, t.ex. "Zlatan är med i listan!" Annars loggar du ut "Zlatan är inte med i listan."

const isZlatanHere = players.includes("Zlatan");

if (isZlatanHere) {
  console.log("#8.", "Zlatan är med i listan!");
} else {
  console.log("#8.", "Zlatan är inte med i listan.");
}

// # 9. Skriv ut indexet för "Maradona" i arrayen "players" med hjälp av indexOf(). Vad är resultatet och varför?

let index = players.indexOf("Maradona");
console.log("#9.", index); // Vi får 5 som resultat. Det innebär att maradona befinner sig på indexposition 5 i arrayen.

// # 10. Använd indexOf() för att försöka hitta indexet för "Messi" i "players". Vad returnerar indexOf() när elementet inte finns i arrayen, och hur kan den informationen vara användbar?

index = players.indexOf("Messi");
console.log("#10.", index); // Om index är -1 så vet vi garanterat att elementet inte finns och då kan vi vida åtgärder för att kanske lägga till elementet eller så.

// # 11. Kombinera alla namn i "players" till en sträng där varje namn är separerat med ett kommatecken och ett mellanslag (, ). Använd join() för att göra detta och logga resultatet.

let playersAsALongString = players.join(", ");
console.log("#11.", playersAsALongString);

// # 12. Använd join() för att skapa en sträng av alla namn i "players", separerade med ett " - ". Vilket resultat får du?

playersAsALongString = players.join(" - ");
console.log("#12.", playersAsALongString);

// # 13. Använd splice() för att ta bort "Beckham" och "Zidane" från "players". Logga resultatet och beskriv hur splice() fungerar i detta fall.

players.splice(1, 2);
console.log("#13.", players);

// # 14. Lägg till spelaren "Ronaldinho" på indexposition 2 i "players" med splice(). Vilken förändring sker i arrayen och vad returnerar splice()?

returnValue = players.splice(2, 0, "Ronaldinho");
console.log("#14.", players);
console.log("#14.", returnValue);

// # 15. Kombinera indexOf() och splice() för att ta bort "Ronaldo" från arrayen, oavsett var i listan han befinner sig.

let indexOfRonaldo = players.indexOf("Ronaldo");

if (indexOfRonaldo >= 0) {
  players.splice(indexOfRonaldo, 1);
}

console.log("#15.", players);

// # 16. Använd slice() för att skapa en ny array från "players" som innehåller de tre första spelarna. Logga ut den nya arrayen och förklara varför slice() inte påverkar den ursprungliga arrayen.

const playersV2 = [
  "Ronaldo",
  "Figo",
  "Zlatan",
  "Beckham",
  "Zidane",
  "Maradona",
  "Pele",
];

const shortListOfPlayers = playersV2.slice(0, 3); // startindex inkluderas i kopieringen men slutindexet exkluderas, vilket betyder att vi endast kopierar fram TILL slutindexpositionen.
console.log("#16.", shortListOfPlayers);

// #17. Skapa en ny array med slice() som innehåller alla spelare från index 2 och framåt i "players". Vad innehåller den nya arrayen, och vad blir kvar i "players"?

const anotherShortListOfPlayers = playersV2.slice(2);
console.log("#17.", anotherShortListOfPlayers);
console.log("#17.", playersV2);

// #18. Använd metoden with() för att ersätta spelaren på indexposition 1 i "players" med "Mbappé". Vad returnerar with()-metoden och påverkas den ursprungliga arrayen?

returnValue = playersV2.with(1, "Mbappé");
console.log("#18.", playersV2);
console.log("#18.", returnValue); // Det här är en kopia av ursprungsarray inklusive ändringen vi gjorde. Ursprungsarrayen är oförändrad.

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

// #31. Skriv en while-loop som itererar genom arrayen numbers och loggar varje tal tills summan av de loggade talen överstiger 25.

let anotherNumbers = [5, 8, 12, 20, 3];

index = 0;
let sum = 0;

while (sum < 25) {
  const number = anotherNumbers[index]; // Mellanlagrar numret i en variable som återskapas i varje iteration. Jag gör det för att jag tycker det är mer läsbart.
  console.log("#31.", number);
  sum += number;
  index++;
}

console.log("#31.", "Summan är inte längre mindre än 25: " + sum);
