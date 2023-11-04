document.getElementById('rollButton').addEventListener('click',  () => {
    const diceValues = [];
    for (let i = 0; i < 6; i++) {
        diceValues.push(rollDice());
    }
    diceResults(diceValues);
});


let points = 0;
let rolls = 0;

function rollDice() {
    return Math.floor(Math.random() * 6) + 1;
}

function diceResults(diceValues) {
    const diceOne = diceValues[0]
    const diceTwo = diceValues[1]
    const diceThree = diceValues[2]
    const diceFour = diceValues[3]
    const diceFive = diceValues[4]
    const diceSix = diceValues[5]

    const rollResult = diceValues.join(', ');
    document.getElementById('rollResults').textContent = rollResult;
    document.getElementById('dice1').textContent = diceOne;
    document.getElementById('dice2').textContent = diceTwo;
    document.getElementById('dice3').textContent = diceThree;
    document.getElementById('dice4').textContent = diceFour;
    document.getElementById('dice5').textContent = diceFive;
    document.getElementById('dice6').textContent = diceSix;
 

    for (let i = 1; i <= 6; i++) {
        const count = diceValues.filter(die => die === i).length;
        console.log(count)
        if (i === 1) {
            if (count >= 3) {
                points += 1000;
                console.log(points, count)
            }
            points += count * 100;
        } else if (i === 5) {
            points += count * 50;
            console.log(points)
        } else if (count >= 3) {
            points += i * 100;
            console.log(points)
        }
    }
    const straight = [...new Set(diceValues)]
    if (straight.length === 6) {
        points += 1500;
        console.log(points)
    }

    rolls++;



    document.getElementById('totalPoints').textContent = points;
    document.getElementById('rolls').textContent = rolls;



    if (points >= 10000) {
        alert("Winner Winner");
    }
}