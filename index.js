const scrambleWordsWithSplice = sentence => {
  //breaking down the sentence in an array of arrays of letters and shuffling the letters in each array
  const shuffledArraysOfLetters = sentence
    .split(" ")
    .map(word => {
      return word.split("");
    })
    .map(arr => {
      let arrTemp = [...arr];
      for (let i = 0; i < arr.length - 3; i += 2) {
        arrTemp.splice(i + 1, 2, arr[i + 2], arr[i + 1]);
      }
      console.log(arrTemp);
      //replacing the original array with its shuffled copy
      return arrTemp;
    });
  //going back to a sentence
  const shuffledSentence = shuffledArraysOfLetters
    .map(letters => {
      return letters.join("");
    })
    .join(" ");
  return shuffledSentence;
};

console.log(
  scrambleWordsWithSplice(
    "This is because the human mind does not read every letter by itself but the word as a whole"
  )
);
