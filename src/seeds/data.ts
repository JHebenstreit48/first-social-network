const names = [

];

const appDescriptions = [
];

// Get a random item given an array
export const getRandomArrItem = (arr: any) => arr[Math.floor(Math.random() * arr.length)];

// Gets a random full name
export const getRandomName =() =>
  `${getRandomArrItem(names)} ${getRandomArrItem(names)}`;

// Function to generate random assignments that we can add to student object.
export const getRandomAssignments = (int: number) => {
  const results = [];
  for (let i = 0; i < int; i++) {
    results.push({
      name: getRandomArrItem(appDescriptions),
      score: Math.floor(Math.random() * (99 - 70 + 1) + 70),
    });
  }
  return results;
};
