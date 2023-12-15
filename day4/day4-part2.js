const fs = require("fs");

function partTwo(file) {
  const lines = fs.readFileSync(file, "utf-8").split("\n");
  const input = lines.map((x) => x.replace(/  /g, " 0"));

  const cardCount = new Array(lines.length).fill(1);

  input.forEach((row, index) => {
    const [, cards] = row.split(": ");
    const [winners, myCards] = cards.split(" | ");

    const point = myCards
      .split(" ")
      .filter((card) => winners.includes(card)).length;

    if (point) {
      for (let i = index + 1; i < index + 1 + point; i++) {
        if (cardCount[i]) {
          cardCount[i] += cardCount[index] || 0;
        }
      }
    }
  });

  const sum = cardCount.reduce((sum, card) => sum + card);
  return sum;
}

console.log(partTwo("./test.txt"));
