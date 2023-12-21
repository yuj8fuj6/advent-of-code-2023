const fs = require("fs");

function partTwo(file) {
  const input = fs.readFileSync(file, "utf-8").split("\n");

  const time = Number(
    input[0]
      .split(" ")
      .filter((x) => x.length && Number(x))
      .join(""),
  );

  const dist = Number(
    input[1]
      .split(" ")
      .filter((x) => x.length && Number(x))
      .join(""),
  );

    const delta = Math.sqrt(time * time - 4 * dist);
    const r1 = (-1 * time + delta) / -2;
    const r2 = (-1 * time - delta) / -2;

    const min = Math.floor(Math.min(r1, r2));
    const max = Math.ceil(Math.max(r1, r2)) - 1;

    const count = max - min;

    return count
}

console.log(partTwo("./test.txt"));
