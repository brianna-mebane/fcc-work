function getAverage(testScores) {
  let total = 0;

  for (const score of testScores) {
    total += score;
  }

  const average = total / testScores.length;

  return parseFloat(average);
}

function getGrade(score) {
  if (score == 100) {
    return "A+";
  } else if (90 <= score && score <= 99) {
    return "A";
  } else if (80 <= score && score <= 89) {
    return "B";
  } else if (70 <= score && score <= 79) {
    return "C";
  } else if (60 <= score && score <= 69) {
    return "D";
  } else if (0 <= score && score <= 59) {
    return "F";
  }
}

function hasPassingGrade(score) {
  if (getGrade(score) != "F") {
    return true;
  } else return false;
}

function studentMsg(scoresArray, studentScore) {
  const classAverage = getAverage(scoresArray);
  const studentGrade = getGrade(studentScore);

  if (hasPassingGrade(studentScore)) {
    return `Class average: ${classAverage}. Your grade: ${studentGrade}. You passed the course.`;
  }

  return `Class average: ${classAverage}. Your grade: ${studentGrade}. You failed the course.`;
}
