const fs = require("fs");

const mapXtoY = (mapping, X) => {
  let Y = -1; 
  for(const row of mapping){
    const [end, start, count] = row.split(" ").map(Number); 
    if(X >= start && X <= start + count){
      Y = end - start + X;
      break; 
    }
  }
  return Y === -1 ? X : Y
}

function partOne(file) {
  const lines = fs.readFileSync(file, "utf-8").split("\n\n");

  const inputSeeds = lines[0]
    .split("seeds: ")
    .filter((x) => x)[0]
    .split(" ")
    .map((x) => parseInt(x.trim()));

  let [, ...seedToSoil] = lines[1].split("\n");
  let [, ...soilToFertilizer] = lines[2].split("\n");
  let [, ...fertilizerToWater] = lines[3].split("\n");
  let [, ...waterToLight] = lines[4].split("\n");
  let [, ...lightToTemp] = lines[5].split("\n");
  let [, ...tempToHum] = lines[6].split("\n");
  let [, ...humToLoc] = lines[7].split("\n");

  let result = inputSeeds
    .map((n) => mapXtoY(seedToSoil, n))
    .map((n) => mapXtoY(soilToFertilizer, n))
    .map((n) => mapXtoY(fertilizerToWater, n))
    .map((n) => mapXtoY(waterToLight, n))
    .map((n) => mapXtoY(lightToTemp, n))
    .map((n) => mapXtoY(tempToHum, n))
    .map((n) => mapXtoY(humToLoc, n));

  return(Math.min(...result));
}

console.log(partOne("./test.txt"));
