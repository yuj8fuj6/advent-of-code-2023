const fs = require("fs");

function partTwo(file) {
  const lines = fs.readFileSync(file, "utf-8").trim().split("\n");
  // .filter((n) => n);
  const rows = lines.length;
  const cols = lines[0].length;

  const gearsDict = {};

  const findGears = (str, num, i, j) => {
    for (let k = 0; k < str.length; k++) {
      j = j === -1 ? 0 : j;
      const char = str.charAt(k);
      if (char === "*") {
        const ind = `${i} - ${j + k}`;
        gearsDict[ind] = gearsDict[ind]
          ? [...gearsDict[ind], parseInt(num)]
          : [parseInt(num)];
      }
    }
  };

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const n = "" + lines[i][j];
      if (isNaN(n)) continue;

      let num = n;
      while (++j < cols) {
        if (Number.isInteger(parseInt(lines[i][j]))) num += lines[i][j];
        else break;
      }

      const top =
        i === 0 ? "" : lines[i - 1].substring(j - num.length - 1, j + 1);
      const btm =
        i === rows - 1 ? "" : lines[i + 1].substring(j - num.length - 1, j + 1);
      const lft = lines[i][j - num.length - 1] || "";
      const rgt = lines[i][j] || "";

      findGears(top, num, i - 1, j - num.length - 1);
      findGears(btm, num, i + 1, j - num.length - 1);
      findGears(lft, num, i, j - num.length - 1);
      findGears(rgt, num, i, j);
    }
  }
  const values = Object.values(gearsDict)
    .filter((x) => x.length === 2)
    .map((x) => x[0] * x[1])
    .reduce((acc, s) => acc + s, 0);
  return values
}

console.log(partTwo("./test.txt"));
