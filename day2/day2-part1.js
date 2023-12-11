const fs = require("fs");

const maxNumber = {
  red: 12,
  green: 13,
  blue: 14,
};

function partOne(file) {
  const lines = fs.readFileSync(file, "utf-8").trim().split("\n");
  return lines
    .map((line) => {
      return line
        .split(": ")[1]
        .split("; ")
        .map((set) => {
          const pulls = set.split(", ");
          return pulls.every((pull) => {
            const [count, colour] = pull.split(" ");
            return maxNumber[colour] >= Number(count);
          });
        })
        .every((play) => play);
    })
    .reduce((sum, result, index) => {
      return result ? sum + (index + 1) : sum;
    }, 0);
}

// Principle behind Reduce 
// function reducer(accumulator, currentValue, index) {
//   const returns = accumulator + currentValue;
//   console.log(
//     `accumulator: ${accumulator}, currentValue: ${currentValue}, index: ${index}, returns: ${returns}`,
//   );
//   return returns;
// }

console.log(partOne("./test.txt"));
