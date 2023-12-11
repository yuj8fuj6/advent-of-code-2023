const fs = require("fs");

function partTwo(file) {
  const lines = fs.readFileSync(file, "utf-8").trim().split("\n");
  return lines.map((line) => {
    const maxCount = {
      red: 0,
      green: 0,
      blue: 0,
    };
    line
      .split(": ")[1]
      .split("; ")
      .forEach((set) => {
        const pulls = set.split(", ");
        return pulls.forEach((pull) => {
          const [count, colour] = pull.split(" ");
          if (maxCount[colour] < Number(count)) {
            maxCount[colour] = Number(count);
          }
        });
      });
    return maxCount.red * maxCount.green * maxCount.blue;
  }).reduce((s, v) => s + v);
}

console.log(partTwo("./test.txt"));
