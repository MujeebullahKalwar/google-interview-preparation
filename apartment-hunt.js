const Blocks = [
  { gym: false, school: true, store: false },
  { gym: true, school: false, store: false },
  { gym: true, school: true, store: false }, // answer
  { gym: false, school: true, store: false },
  { gym: false, school: true, store: true },
];

const Reqs = ["gym", "school", "store", "office"];

let fatherDistance = 0;
let resultant;
let index;

Blocks.forEach((block) => {
  let totalDist = 0;
  if (block[Reqs[0]]) {
    totalDist = totalDist + 3;
  }
  if (block[Reqs[1]]) {
    totalDist = totalDist + 2;
  }
  if (block[Reqs[2]]) {
    totalDist = totalDist + 1;
  }
  if (totalDist >= fatherDistance) {
    fatherDistance = totalDist;
    resultant = block;
    index = Blocks.indexOf(block);
  }
});
console.log({
  fatherDistance,
  resultant,
  index,
});
