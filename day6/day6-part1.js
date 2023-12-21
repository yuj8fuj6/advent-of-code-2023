const fs = require("fs");

function partOne(file) {
  const input = fs.readFileSync(file, "utf-8").split("\n");

  const [, ...time] = input[0]
    .split(" ")
    .filter((x) => x.length)
    .map(Number);

  const [, ...dist] = input[1]
    .split(" ")
    .filter((x) => x.length)
    .map(Number);

  let win = time.reduce((acc, lap, i) => {
    const delta = Math.sqrt(lap * lap - 4 * dist[i]);
    const r1 = (-1 * lap + delta) / -2;
    const r2 = (-1 * lap - delta) / -2;

    const min = Math.floor(Math.min(r1, r2));
    const max = Math.ceil(Math.max(r1, r2)) - 1;

    const count = max - min; 
    acc *= count; 
    return acc
  }, 1);

  //Starts at 1 for reduce function due to multiplication - starting at 0 will always return 0
  return win
}

console.log(partOne("./test.txt"));
