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

function runSequence(config,cycles){
  for (let j = 0; j<cycles; j++){

    if (config['phases'].length === 0){
        console.log('No phases found');
        break;
      } else if (config.fault === true){
        console.log('Faulted phase!');
        break;
      } 

    for (const phase of config['phases']){
      
      

      for (let i=0; i<config.phases.length; i++){
        
        if (config.phases[i]['duration'] <= 0){
          console.log('Invalid phase detected')
        
        } else {
          console.log(`Switching to ${config.phases[i]['color']} for ${config.phases[i]['duration']} s`)
          
        }
        
      }
      break;
      
    }
  }
}

// runSequence(config4,5) ;

function generateTimeline(config,cycles){
  let count = 0
  let timeStampArray = []

  for (let i = 0; i < cycles; i++){
    if (config['phases'].length === 0){
      break
    }
    for(let j=0; j<config.phases.length;j++){
      count += config.phases[j]['duration']
      timeStampArray.push(count);
    }
    
  } 
  return timeStampArray;

}

// console.log(generateTimeline(config4,1))