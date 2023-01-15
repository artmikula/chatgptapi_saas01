function betterThanAverage(classPoints, yourPoints) {

    let allPoints = classPoints.concat(yourPoints);

    let numberOfStudents = 0
    let scoreSum = 0
    for ( let i = 0 ; i < allPoints.length ; i++) {
      numberOfStudents ++;
      scoreSum += allPoints[i];
    }
    let average = scoreSum / numberOfStudents;
    if (yourPoints > average) {
      return true;
    } else {
      return false;
    }
    // Your code here
  }

console.log(betterThanAverage([2, 3], 5));

