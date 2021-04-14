const submissions = [
  {
    name: "Jane",
    score: 95,
    date: "2020-01-24",
    passed: true,
  },
  {
    name: "Joe",
    score: 77,
    date: "2018-05-14",
    passed: true,
  },
  {
    name: "Jack",
    score: 59,
    date: "2019-07-05",
    passed: false,
  },
  {
    name: "Jill",
    score: 88,
    date: "2020-04-22",
    passed: true,
  },
];

function addSubmission(array, newName, newScore, newDate) {
  array.push({
    name: newName,
    score: newScore,
    date: newDate,
    passed: newScore >= 60 ? true : false,
  });
}
addSubmission(submissions, "John", 50, "2020-04-13");
addSubmission(submissions, "Jake", 92, "2020-04-13");
console.log(submissions);

function deleteSubmissionByIndex(array, index) {
  array.splice(index, 1);
}
deleteSubmissionByIndex(submissions, 1);
console.log(submissions);

function deleteSubmissionByName(array, name) {
  let index = array.findIndex((array) => array.name === name);
  array.splice(index, 1);
}
deleteSubmissionByName(submissions, "Jill");
console.log(submissions);

function editSubmission(array, index, score) {
  let edit = index;
  let editScore = score;
  array[edit].score = editScore;
  if (editScore >= 60) {
    array[edit].passed = true;
  } else {
    array[edit].passed = false;
  }
}
editSubmission(submissions, 1, 40);
console.log(submissions[1]);

function findSubmissionByName(array, name) {
  let find = array.find((array) => array.name === name);
  return find;
}
console.log(findSubmissionByName(submissions, "John"));

//notworking
/* function findLowestScore(array) {
  let lowest = array[0].score;
  for (i = 0; i < array.length; i++) {
    console.log(lowest);
    if (lowest > array.score) {
      let lowest = array.score;
    }
  }
  return lowest
}
*/

const findLowestScore = (array) => {
  let lowest = array[0];
  array.forEach(function (submission) {
    if (lowest.score > submission.score) {
      lowest = submission;
    }
  });
  return lowest;
};
console.log(findLowestScore(submissions));

//workingnow
function findAverageScore(array) {
  let total = 0;
  let average;
  for (let submission of array) {
    total += submission.score;
  }
  average = total / array.length;
  return average;
}
console.log(findAverageScore(submissions));

function filterPassing(array) {
  return array.filter((submission) => submission.passed);
}
console.log(filterPassing(submissions));

function filter90AndAbove(array) {
  return array.filter((submission) => submission.score >= 90);
}
console.log(submissions);
console.log(filter90AndAbove(submissions));
