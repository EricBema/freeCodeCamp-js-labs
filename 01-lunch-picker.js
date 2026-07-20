const lunches =  [];

function addLunchToEnd(arr,str){
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.`);
  return arr;
}

addLunchToEnd(lunches, 'Chips');
addLunchToEnd(lunches, 'Spaghetti');
addLunchToEnd(lunches, 'Macaroni');
addLunchToEnd(lunches, 'Nsima');

function addLunchToStart(arr,str){
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.`);
  return arr;
}
console.log(addLunchToStart(lunches,'Mashed Potato'))

function removeLastLunch(arr){
  if (arr.length == 0){
    console.log('No lunches to remove.')
  } else {
    const removedItem = arr.pop();
    console.log(`${removedItem} removed from the end of the lunch menu.`);
  }
  return arr
}

function removeFirstLunch(arr){
  if (arr.length == 0) {
    console.log('No lunches to remove.');
  } else{
    const removedItem = arr.shift();
    console.log(`${removedItem} removed from the start of the lunch menu.`)
  }
  return arr;
}

function getRandomLunch(arr){
  const randomNumber = Math.floor(Math.random() * (arr.length));
  if (arr.length == 0){
    console.log(('No lunches available.'))
  } else {
    const randomLunch = arr[randomNumber];
    console.log(`Randomly selected lunch: ${randomLunch}`)
  }
  return arr;
}

function showLunchMenu(arr){
  if (arr.length == 0){
    console.log('The menu is empty.');
  } else {
    console.log(`Menu items: ${arr.join(', ')}`);
  }
  return arr;
}

showLunchMenu(lunches);

