const fs = require("fs");

const findSymbol = (str) => {
  if (str?.length && str.split("").find((x) => isNaN(x) && x !== ".")) {
    return true;
  }
  return false;
};

function partOne(file) {
  const lines = fs.readFileSync(file, "utf-8").trim().split("\n");
  // .filter((n) => n);
  const rows = lines.length;
  const cols = lines[0].length;

  const foundPartNumbers = [];

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

      if (
        findSymbol(top) ||
        findSymbol(btm) ||
        findSymbol(lft) ||
        findSymbol(rgt)
      ) {
        foundPartNumbers.push(Number(num));
      }
    }
  }
  return foundPartNumbers.reduce((acc, v) => acc + v);
}

console.log(partOne("./test.txt"));
