const numDice = parseInt(process.argv[2]);

const rollDice = (numDice) => {
  const rolls = [];
  for (let i = 0; i < numDice; i++) {
    const roll = Math.floor(Math.random() * 6) + 1;
    rolls.push(roll);
  }
  return rolls;
};

const diceRolls = rollDice(numDice);
const diceRollsString = diceRolls.join(", ");

console.log(`Rolled ${numDice} dice: ${diceRollsString}`);
