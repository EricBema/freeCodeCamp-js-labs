function isPalindrome(word){
  const wordLowerCase = word.toLowerCase();
  const wordChars = wordLowerCase.split("");
  const reversedChars = wordChars.reverse();
  const reversedWord = reversedChars.join("");
  let palindrome = false

  if(reversedWord === wordLowerCase){
    palindrome = true;
  }

  return palindrome
}


function findPalindromeBreaks(words){
  const indices = [];
  for (let i = 0; i < words.length; i++){
    if (!isPalindrome(words[i])){
      indices.push(i);
    }
  }
  return indices;
}

const sample1 = ["the", "dog", "barked", "the", "dog"];
const sample2 = ["blue", "sky", "blue", "sky", "blue"];

function findRepeatedPhrases(words,phraseLength){
  if (phraseLength > words.length){
    return []
  }
  const chunks = []
  for (let i = 0; i < words.length; i++){
    let phraseWords = words.slice(i, i + phraseLength)
    if(phraseWords.length === phraseLength){
      let phrase = phraseWords.join(" ")
      chunks.push(phrase)
    }
    
  }
  const indices = [];
  for (let i = 0; i < chunks.length; i++){
    if (chunks.indexOf(chunks[i]) !== chunks.lastIndexOf(chunks[i])){
      indices.push(i)
    }
    
  }

  return indices;
}

const sampleTexts = [
  // Text 1: Contains some palindromes and a repeated 2-word phrase ("hello world")
  ["racecar", "hello", "world", "hello", "world"],
  
  // Text 2: All palindromes, no repeated phrases
  ["noon", "kayak", "radar"]
];

const bigSampleTexts = [
  // Text 0: Mixed palindromes & repeated phrases ("the cat", "cat sat")
  ["the", "cat", "sat", "radar", "the", "cat", "sat", "level"],

  // Text 1: Long text with a repeated 3-word phrase ("one two three")
  ["one", "two", "three", "four", "one", "two", "three", "five"],

  // Text 2: All palindromes, zero repeated phrases
  ["racecar", "kayak", "madam", "refer", "noon"],

  // Text 3: Short text (fewer words than phraseLength = 3)
  ["hello", "world"],

  // Text 4: Overlapping phrase sequence ("blue sky blue sky blue")
  ["blue", "sky", "blue", "sky", "blue"]
];


function analyzeTexts(texts, phraseLength){
  if (texts.length === 0){
    return []
  }
  const results = []
  for(let i = 0; i < texts.length; i++){
    const words = {}
    words.palindromeBreaks = findPalindromeBreaks(texts[i]);
    words.repeatedPhrases = findRepeatedPhrases(texts[i],phraseLength)
    results.push(words)
  }
  return results
}


// console.log(analyzeTexts(bigSampleTexts,3))

