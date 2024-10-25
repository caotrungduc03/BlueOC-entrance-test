const findTopSum = (array) => {
  if (array.length < 2) return -1;

  let largest = -Infinity;
  let secondLargest = -Infinity;
  array.forEach((num) => {
    if (num > largest) {
      secondLargest = largest;
      largest = num;
    } else if (num > secondLargest) {
      secondLargest = num;
    }
  });

  return largest + secondLargest;
};

const testCases = [
  {
    input: [1, 4, 2, 3, 5],
    expected: 9,
  },
  {
    input: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    expected: 19,
  },
  {
    input: [-7, 2, 3, 4, -1],
    expected: 7,
  },
  {
    input: [10],
    expected: -1,
  },
  {
    input: [],
    expected: -1,
  },
];

function runTests() {
  testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}:`);

    const result = findTopSum(testCase.input);

    if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
      console.log("Test Case Passed");
      console.log(`Output: ${result}\n`);
    } else {
      console.error("Test Case Failed:");
      console.error(`Output: ${result}}`);
      console.error(`Expected: ${testCase.expected}\n`);
    }
  });
}

// CMD: node index.js
runTests();
