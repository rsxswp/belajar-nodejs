// import { helloWorld } from "./helloWorld";
import { helloWorld } from "./helloWorld.js";
import { diskonBarang } from "./diskonBarang.js";

import _ from "lodash";

const data = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];

const bilanganGenap = _.filter(data, (n) => n % 2 == 0);
console.log("genap = ", bilanganGenap);

const nilai20 = _.filter(data, function (n) {
  return n > 10;
});

const dataMap = _.map(data, (item) => {
  return item * 7;
});

console.log("data map = ", dataMap);

console.log("nilai lebih dari 10 = ", nilai20);
