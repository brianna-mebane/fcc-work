const config1 = {
  fault: false,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 4 }
  ]
};

const config2 = {
  fault: false,
  phases: [
    { color: "red", duration: 3 },
    { color: "yellow", duration: -2 },
    { color: "green", duration: 6 }
  ]
};

const config3 = {
  fault: true,
  phases: [
    { color: "green", duration: 5 },
    { color: "yellow", duration: 2 },
    { color: "red", duration: 6 }
  ]
};

const config4 = {
  fault: false,
  phases: []
};

function runSequence(config, cycles) {
    const phases = config.phases;

    if (config.fault) {
        console.log("Faulted phase!");
        return;
    } else if (phases.length == 0) {
        console.log("No phases found");
        return;
    } else {
        let cycleCounter = 0;
        while (cycleCounter < cycles) {
            let i = 0;
            while (i < phases.length) {
                if (phases[i].duration <= 0) {
                    console.log("Invalid phase detected");
                } else {
                    console.log(`Switching to ${phases[i].color} for ${phases[i].duration} s`);
                }
                i += 1;
            }

            cycleCounter += 1;
        }
    }
}


// runSequence(config1, 1);
// runSequence(config1, 2);
// runSequence(config2, 1);
// runSequence(config3, 2);
// runSequence(config4, 5);

function generateTimeline(config, cycles) {
  const timeSlip = [];
  const phases = config.phases;
  let time = 0;


  let cycleCounter = 0;
  while (cycleCounter < cycles) {
    let i = 0;
    while (i < phases.length) {
      time += phases[i].duration;
      timeSlip.push(time);
  
      i += 1;
    }
    cycleCounter += 1;
  }

  return timeSlip;
}

// generateTimeline(config1, 1);
// generateTimeline(config1, 2);
// generateTimeline(config2, 1);
// generateTimeline(config3, 2);
// generateTimeline(config4, 5);