const scrambleWordsWithSplice = sentence => {
  const scrambledSentence = sentence
    .split(" ")
    .map(word => {
      return word.split("");
    })
    .map(arr => {
      let arrTemp = [...arr];
      for (let i = 0; i < arr.length - 3; i += 2) {
        arrTemp.splice(i + 1, 2, arr[i + 2], arr[i + 1]);
      }
      return arrTemp;
    })
    //going back to a sentence
    .map(letters => {
      return letters.join("");
    })
    .join(" ");
  return scrambledSentence;
};

console.log(
  scrambleWordsWithSplice(
    "This is because the human mind does not read every letter by itself but the word as a whole, it works for absolutely any sentence !"
  )
);
