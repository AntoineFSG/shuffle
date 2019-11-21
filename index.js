const shakeWord = word => {
  const letters = word.split('');
  const firts = letters.shift();
  const last = letters.pop();

  return [firts, ...letters.sort(() => Math.random() - 0.5), last].join('');
}

const shake = sentence => sentence.split(' ').map(shakeWord).join(' ');

for (let i = 0; i <= 5; i++)
  console.log(shake('This is because the human mind does not read every letter by itself but the word as a whole'));
