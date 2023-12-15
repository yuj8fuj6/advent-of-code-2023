const fs = require("fs");

function partOne(file) {
  const lines = fs.readFileSync(file, "utf-8").split("\n");
  const input = lines.map((x) => x.replace(/  /g, " 0"));

  const result = input.reduce((acc, row) => {
    const [, cards] = row.split(": ");
    const [winners, myCards] = cards.split(" | ");

    const point = myCards
      .split(" ")
      .filter((card) => winners.includes(card)).length;
    const value = point === 0 ? 0 : Math.pow(2, point - 1);
    return acc + value; 
  }, 0);
  return result; 
}

console.log(partOne("./test.txt"));
