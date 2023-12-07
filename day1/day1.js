const fs = require("fs");

const data = fs.readFileSync("./test.txt", "utf-8").trim().split("\n");

var sum = 0; 
var firstDigit = ""; 
var lastDigit = ""; 
var number = 0; 

for(const line of data){
  for (let i = 0; i < line.length; i ++ ){
    if (! isNaN(Number(line[i]))){
      firstDigit = line[i]
      break
    }
  }
  for (let i = line.length -1; i >=0; i-- ){
      if (! isNaN(Number(line[i]))){
      lastDigit = line[i]
      break
    }
  }
  number = Number(firstDigit + lastDigit)
  sum += number; 
}

console.log(sum);
