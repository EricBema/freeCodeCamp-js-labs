const maize = {
  containerId: 50,
  destination: 'Lilongwe',
  weight: 12500,
  unit: 'lb',
  hazmat: false
}

const rice = { containerId: 68, destination: "Salinas", weight: 101, unit: "lb", hazmat: true }

const kaya = { weight: NaN }

function normalizeUnits(manifest) {
  const newManifest = {...manifest};
  let normalizedWeight = newManifest.weight*0.45;
  let normalizedUnit = 'kg';
  
  if (newManifest.unit === 'lb'){
    newManifest.weight = normalizedWeight;
    newManifest.unit = normalizedUnit;
  }
  return newManifest;
}

function validateManifest(manifest){
  const newManifest = {...manifest};
  const errors = {};
  if (!Object.hasOwn(newManifest,'containerId')){
    errors.containerId = 'Missing'
  } else if (newManifest.containerId <= 0 || !Number.isInteger(newManifest.containerId)){
    errors.containerId = 'Invalid';
  }
  
  if (!Object.hasOwn(newManifest,'destination')){
    errors.destination = 'Missing'
  } else if (typeof newManifest.destination !==  'string' || newManifest.destination.trim() === ''){
    errors.destination = 'Invalid';
  }

  if (!Object.hasOwn(newManifest,'weight')){
    errors.weight = 'Missing'
  } else if (newManifest.weight <= 0 || Number.isNaN(newManifest.weight) || typeof newManifest.weight !== 'number'){
    errors.weight = 'Invalid';
  }

  if (!Object.hasOwn(newManifest,'unit')){
    errors.unit = 'Missing'
  } else if (newManifest.unit !== 'kg' && newManifest.unit !== 'lb'){
    errors.unit = 'Invalid';
  }

  if (!Object.hasOwn(newManifest,'hazmat')){
    errors.hazmat = 'Missing'
  } else if (typeof newManifest.hazmat !==  'boolean'){
    errors.hazmat = 'Invalid';
  }
  
  return errors;
}

function processManifest(manifest){
  const isValid = validateManifest(manifest);
  let normalizedManifest = normalizeUnits(manifest);
  let normalizedWeight = normalizedManifest.weight;

  if (Object.keys(isValid).length === 0){
    console.log(`Validation success: ${manifest.containerId}`);
    console.log(`Total weight: ${normalizedWeight} kg`);
  } else {
    console.log(`Validation error: ${manifest.containerId}`);
    console.log(validateManifest(manifest));
  }
  return isValid;
}

console.log(validateManifest(kaya))