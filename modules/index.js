// Your code goes here!

// Importing functions
import { modulo, percentage, percentageOf, difference } from "./percentage.js";

import { fixRoundingErrors, calculateAspectRatio } from "./aspect-ratio.js";

// Selecting elements

// Modulo functionality
const moduloForm = document.querySelector("#modulo-form");
const moduloOne = document.querySelector("#modulo_1");
const moduloTwo = document.querySelector("#modulo_2");
const moduloResult = document.querySelector("#modulo_result");

moduloForm.addEventListener("input", (e) => {
  moduloResult.value = modulo(+moduloOne.value, +moduloTwo.value);
});

// Percentage functionality
const percentageForm = document.querySelector("#percentage-form");
const percentageOne = document.querySelector("#percentage_1");
const percentageTwo = document.querySelector("#percentage_2");
const percentageResult = document.querySelector("#percentage_result");

percentageForm.addEventListener("input", (e) => {
  percentageResult.value = percentage(
    +percentageOne.value,
    +percentageTwo.value
  );
});

// PercentageOf functionality
const percentageOfForm = document.querySelector("#percentageOf-form");
const percentageOfOne = document.querySelector("#percentageOf_1");
const percentageOfTwo = document.querySelector("#percentageOf_2");
const percentageOfResult = document.querySelector("#percentageOf_result");

percentageOfForm.addEventListener("input", (e) => {
  percentageOfResult.value = percentageOf(
    +percentageOfOne.value,
    +percentageOfTwo.value
  );
});

// Difference functionality
const differenceForm = document.querySelector("#difference-form");
const differenceOne = document.querySelector("#difference_1");
const differenceTwo = document.querySelector("#difference_2");
const differenceResult = document.querySelector("#difference_result");

differenceForm.addEventListener("input", (e) => {
  differenceResult.value = percentageOf(
    +differenceOne.value,
    +differenceTwo.value
  );
});

const aspectForm = document.getElementById("aspect-form");
const newWidth = document.getElementById("ratio_result-width");
const newHeight = document.getElementById("ratio_result-height");
aspectForm.addEventListener("change", (e) => {
  let result;
  const input = [
    document.getElementById("ratio_1"),
    document.getElementById("ratio_2"),
  ];
  switch (e.target.id) {
    case "ratio_result-width":
      result = newHeight;
      result.value = calculateAspectRatio(
        Number(input[0].value),
        Number(input[1].value),
        newWidth.value,
        "w"
      );
    case "ratio_result-height":
      result = newWidth;
      result.value = calculateAspectRatio(
        Number(input[0].value),
        Number(input[1].value),
        newHeight.value,
        "h"
      );
  }
});
