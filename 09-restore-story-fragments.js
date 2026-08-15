const shuffledFragments = [
  { id: 15, text: "and, after a time, passed the place where the Hare was sleeping." },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 11, text: "and to make the Tortoise feel very deeply how ridiculous it was for him to try a race with a Hare," },
  { id: 7, text: "but for the fun of the thing he agreed." },
  { id: 19, text: "The Hare now ran his swiftest," },
  ,
  { id: 1, text: "A Hare was making fun of the Tortoise one day for being so slow." },
  { id: 14, text: "The Tortoise meanwhile kept going slowly but steadily," },
  { id: 9, text: "marked the distance and started the runners off." },
  ,
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 17, text: "and when at last he did wake up," },
  { id: 2, text: '"Do you ever get anywhere?" he asked with a mocking laugh.' },
  { id: 12, text: "he lay down beside the course to take a nap" },
  ,
  { id: 8, text: "So the Fox, who had consented to act as judge," },
  { id: 20, text: "but he could not overtake the Tortoise in time." },
  { id: 5, text: "I'll run you a race and prove it.\"" },
  { id: 6, text: "The Hare was much amused at the idea of running a race with the Tortoise," },
  ,
  { id: 13, text: "until the Tortoise should catch up." },
  { id: 10, text: "The Hare was soon far out of sight," },
  { id: 12, text: "he lay down beside the course to take a nap" },
  { id: 18, text: "the Tortoise was near the goal." },
];

function compactFragments(frags){
  const cleanedFrags = [];
  for (const frag of frags){
    if (frag !== undefined){
      cleanedFrags.push(frag)
    }
  }
  if (frags.length !== cleanedFrags.length ){
    console.log('[COMPACTED]')
  }
  
  return cleanedFrags;
}

const compactedShuffledFragments = compactFragments(shuffledFragments);

function sortFragments(compactFrags){
  const sortFrags = [...compactFrags]

  for (let i = 0; i < sortFrags.length; i++){
    for (let j = 0; j < (sortFrags.length - i - 1); j++){
      if (sortFrags[j].id > sortFrags[j + 1].id){

        let temp = sortFrags[j];
        sortFrags[j] = sortFrags[j + 1];
        sortFrags[j + 1] = temp
      }
    }
  }

  return sortFrags;
}

const sortedFragments = sortFragments(compactedShuffledFragments);

function dedupeFragments(sortedArray){
  const seenIds = [];
  const dedupedFrags = []

  for(let i = 0; i < sortedArray.length; i++){
    if (!seenIds.includes(sortedArray[i].id)){
      seenIds.push(sortedArray[i].id);
      dedupedFrags.push(sortedArray[i])
    } else {
      console.log('[DEDUPED] Found a Duplicate')
    }
  }

  return dedupedFrags
}

const dedupedFragments = dedupeFragments(sortedFragments);

function fillMissingFragments(sortedArray){
  const results = [];
  
  for (let i = 0; i < sortedArray.length - 1; i ++){
    results.push(sortedArray[i])
    if( (sortedArray[i + 1].id - sortedArray[i].id) > 1){
      for (let j = sortedArray[i].id + 1; j < sortedArray[i + 1].id; j ++){
        results.push({
        id: j,
        text: '[...]'
      })
      console.log('[FILLED]')
      }
    }
  }
  results.push(sortedArray[sortedArray.length - 1]);

  return results
}

const filledFragments = fillMissingFragments(dedupedFragments);

function assembleStory(sortedArray){
  const sentence = []
  for (const frag of sortedArray){
    sentence.push(frag.text);
  }

  return sentence.join('\n')
}

console.log(assembleStory(filledFragments))



