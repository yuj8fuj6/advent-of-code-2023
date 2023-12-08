const fs = require("fs");

const data = fs.readFileSync("./test2.txt", "utf-8").trim().split("\n");

const digits = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
];

let left, right;
let sum = 0; 

for (const line of data){
    for (let i = 0; i < line.length; i++) {
      if(! Number(left)){
        if(Number(line[i])){
          left = Number(line[i])
        } else {
          for (const digit of digits){
            if(line.substring(i).startsWith(digit)){
              left = digits.indexOf(digit); 
            }
          }
        }
      }
    }
    for (let i = line.length - 1; i >= 0; i--) {
     if (!Number(right)) {
       if (Number(line[i])) {
         right = Number(line[i]);
       } else {
         for (const digit of digits) {
           if (line.substring(i).startsWith(digit)) {
             right = digits.indexOf(digit);
           }
         }
       }
     }
    }
    sum += (left*10 + right);
    left = 0; 
    right = 0;  
}

console.log(sum)