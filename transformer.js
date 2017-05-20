function transformers (teams) {
  var autobots = [];
  var decepticons = [];
  var numberOfBattles;
  var A_score = 0;
  var A_survivors = [];
  var D_score = 0;
  var D_survivors = [];
  for (var i = 0; i < teams.length; i++) {
    if (teams[i][1] == 'A') {
      autobots.push(teams[i]);
    } else if (teams[i][1] == 'D') {
      decepticons.push(teams[i]);
    }
  }
  // sorted by rank
  // assumption: higher rank fight higher rank first, followed by lower rank
  autobots.sort(function(a, b) {return b[6] - a[6]});
  decepticons.sort(function(a, b) {return b[6] - a[6]})
  
  numberOfBattles = Math.min(autobots.length, decepticons.length);

  var i = 0;
  var j = 0;
  while (i < autobots.length && j < decepticons.length ) {
    if (autobots[i][0] == 'Optimus Prime' && decepticons[j][0] != 'Predaking') {
      A_score++;
      A_survivors.push(autobots[i][0]);
    } else if (autobots[i][0] != 'Optimus Prime' && decepticons[j][0] == 'Predaking') {
      D_score++;
      D_survivors.push(decepticons[j][0])
    }
    // courage & strength
    // assumption: ran away acount as Survivors
    else if (autobots[i][7] - decepticons[j][7] >= 4 || autobots[i][2] - decepticons[i][2] >= 3) {
      A_score++;
      A_survivors.push(autobots[i][0]);
      D_survivors.push(decepticons[j][0]);
    } else if (decepticons[j][7] - autobots[i][7] >= 4 || decepticons[j][2] - autobots[i][2] >= 3) {
      D_score++;
      A_survivors.push(autobots[i][0]);
      D_survivors.push(decepticons[j][0])
    }
    // skills
    else if (autobots[i][9] - decepticons[j][9] >= 3) {
      A_score++;
      A_survivors.push(autobots[i][0]);
    } else if (decepticons[j][9] - autobots[i][9] >= 3) {
      D_score++;
      D_survivors.push(decepticons[j][0]);
    }
    // overall
    else if (autobots[i][2] + autobots[i][3] + autobots[i][4] + autobots[i][5] + autobots[i][8] > decepticons[j][2] + decepticons[j][3] + decepticons[j][4] + decepticons[j][5] + decepticons[j][8]) {
      A_score++;
      A_survivors.push(autobots[i][0]);
    } else if (autobots[i][2] + autobots[i][3] + autobots[i][4] + autobots[i][5] + autobots[i][8] < decepticons[j][2] + decepticons[j][3] + decepticons[j][4] + decepticons[j][5] + decepticons[j][8]) {
      D_score++;
      D_survivors.push(decepticons[j][0]);
    }
    i++;
    j++;
  }
  // Survivors
  while (i < autobots.length) {
    A_survivors.push(autobots[i][0]);
    i++;
  }
  while (j < decepticons.length) {
    D_survivors.push(decepticons[j][0]);
    j++;
  }

  console.log(numberOfBattles + " battle");
  if (A_score > D_score) {
    console.log("Winning team (Autobots): " + A_survivors);
    console.log("Survivors from the losing team (Decepticons): " + D_survivors);
  } else if (A_score < D_score) {
    console.log("Winning team (Decepticons): " + D_survivors);
    console.log("Survivors from the losing team (Autobots): " + A_survivors);
  } else {
    console.log("Tie");
  }
}

var teams = [
  ['Soundwave', 'D', 8, 9, 2, 6, 7, 5, 6, 10],
  ['Bluestreak', 'A', 6, 6, 7, 9, 5, 2, 9, 7],
  ['Hubcap', 'A', 4, 4, 4, 4, 4, 4, 4, 4]
];
transformers(teams)
