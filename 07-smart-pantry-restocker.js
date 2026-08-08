const pantry = [
  { sku: "A10", name: "Tomatoes", qty: 4, expires: "2027-01-01", zone: "fridge" },
  { sku: "D43", name: "Pineapples", qty: 2, expires: "2020-01-01", zone: "general" }
];

const rawData = [
  "A10|Tomatoes|5|2027-01-01",
  "B21|Bananas|10|2027-01-01",
  "C32|Eggs|3|2027-01-01|fridge",
  "C32|Eggs|3|2027-01-01",
  "D43|Pineapples|0|2027-01-01",
  "E54|Peppers|-1|2027-01-01|fridge"
];

function parseShipment(rawData){
  const shipment = []
   const skus = []
  
  for (let i =0;  i < rawData.length; i++){
    const slicedData = rawData[i].split("|")
    const obj = {}
    obj.sku = slicedData[0]
    obj.name = slicedData[1]
    obj.qty = parseInt(slicedData[2])
    obj.expires = slicedData[3]
    obj.zone = slicedData[4] ?? 'general'
   if(!skus.includes(obj.sku)){
      shipment.push(obj)
      skus.push(obj.sku);
    }
    
  }

  return shipment
}

function planRestock(pantry, shipment){
  const results = []
 
  for (let i = 0; i < shipment.length; i++){
    const actions = {}
    actions.item = shipment[i]
    if (shipment[i].qty <= 0){
      actions['type'] = 'discard'
    } else if (pantry.length > 0){
      const pantrySku = []
      for (const panSku of pantry){
        pantrySku.push(panSku.sku)
      }
      if (pantrySku.includes(shipment[i].sku)){
        actions['type'] = 'restock'
      } else {
        actions['type'] = 'donate'
      }
    } else {
      actions['type'] = 'donate'
    }
    
    
    results.push(actions)
    
  }
  
  return results
}

function groupByZone(actions){
  const zones = {}
  for (const action of actions){
    const currentZone = action.item.zone;
    if (!(currentZone in zones)){
      zones[currentZone] = [];
      
    } 
    zones[currentZone].push(action);
    

  }
  return zones;
}

function clonePantry(pantry){
  const pantryCopy = structuredClone(pantry)
  return pantryCopy;
}

const data = parseShipment(rawData);
const actionsObj = planRestock(pantry,data);
const zonesObj = groupByZone(actionsObj)

console.log(actionsObj)
console.log(zonesObj)
