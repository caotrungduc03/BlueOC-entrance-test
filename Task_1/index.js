const findMostFrequent = (array) => {
  if (array.length === 0) return [];

  const lengths = array.map((str) => str.length);

  const lengthFrequencies = {};
  lengths.forEach((length) => {
    lengthFrequencies[length] = (lengthFrequencies[length] || 0) + 1;
  });

  let maxFrequency = 0;
  for (const length in lengthFrequencies) {
    if (lengthFrequencies[length] > maxFrequency) {
      maxFrequency = lengthFrequencies[length];
    }
  }

  const mostFrequentStrings = array.filter(
    (_str, index) => lengthFrequencies[lengths[index]] === maxFrequency
  );

  return mostFrequentStrings;
};

const testCases = [
  {
    input: ["a", "ab", "abc", "cd", "def", "gh"],
    expected: ["ab", "cd", "gh"],
  },
  {
    input: ["a", "b", "c", "d"],
    expected: ["a", "b", "c", "d"],
  },
  {
    input: ["apple", "banana", "cherry", "date", "fig"],
    expected: ["banana", "cherry"],
  },
  {
    input: ["1"],
    expected: ["1"],
  },
  {
    input: [],
    expected: [],
  },
];

function runTests() {
  testCases.forEach((testCase, index) => {
    console.log(`Test Case ${index + 1}:`);

    const result = findMostFrequent(testCase.input);

    if (JSON.stringify(result) === JSON.stringify(testCase.expected)) {
      console.log("Passed!");
      console.log(`Output: ${JSON.stringify(result)}\n`);
    } else {
      console.error("Failed!");
      console.error(`Output: ${JSON.stringify(result)}`);
      console.error(`Expected: ${JSON.stringify(testCase.expected)}\n`);
    }
  });
}

// CMD: node index.js
runTests();
