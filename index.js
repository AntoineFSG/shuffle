const shakeWord = word => {
  const letters = word.split('');
  const last = letters.pop();

  return [letters.shift(), ...letters.sort(() => Math.random() - 0.5), last].join('');
}

const shuffle = sentence => sentence.split(' ').map(shakeWord).join(' ');

for (let i = 0; i <= 5; i++)
  console.log(shuffle('This is because the human mind does not read every letter by itself but the word as a whole'));
