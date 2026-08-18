const inventory = []

function findProductIndex(productName){
  const product = productName.toLowerCase();

  for (let i = 0; i < inventory.length; i++){
    if (inventory[i].name === product){
      return i
    }
  }

  return -1
}

// const test = findProductIndex('Potato');
// console.log(test)

function addProduct(productObj){
  const index = findProductIndex(productObj.name);
  
  productObj.name = productObj['name'].toLowerCase();

  if (index === -1){
    inventory.push(productObj);
    console.log(`${productObj.name} added to inventory`)
  } else {
    inventory[index].quantity += productObj.quantity;
    console.log(`${productObj.name} quantity updated`)
  }
  
  
}

// const test = addProduct({
//     name: 'BEANS',
//     quantity: 75
//   })

// console.log(inventory)

function removeProduct(productName, quantity){
  const idx = findProductIndex(productName);

  if (idx === -1){
    console.log(`${productName.toLowerCase()} not found`)
  } 
  else if (inventory[idx].quantity < quantity){
    console.log(`Not enough ${productName.toLowerCase()} available, remaining pieces: ${inventory[idx].quantity}`)
  } 
  else {
    inventory[idx].quantity -= quantity;
    console.log(`Remaining ${productName.toLowerCase()} pieces: ${inventory[idx].quantity}`)
    if (inventory[idx].quantity === 0){
      inventory.splice(idx,1);
    }
  }

}


