document.addEventListener("DOMContentLoaded", () => {
    const rollButton = document.getElementById("rollButton");
    const totalPointsElement = document.getElementById("totalPoints");

    let totalPoints = 0;

    rollButton.addEventListener("click", rollDice);

    function rollDice() {
        let rollValues = [];
        for (let i = 0; i < 6; i++) {
            const dieValue = Math.floor(Math.random() * 6) + 1;
            rollValues.push(dieValue);
        }

        const points = calculatePoints(rollValues);
        totalPoints += points;
        totalPointsElement.textContent = totalPoints;

        if (totalPoints >= 10000) {
            alert("You won");
        }
    }

    function calculatePoints(rollValues) {
        let points = 0;

        for (const value of rollValues) {
            if (value === 1) {
                points += 100;
            } else if (value === 5) {
                points += 50;
            }
        }

        const counts = Array(7).fill(0);
        for (const value of rollValues) {
            counts[value]++;
        }

        for (let i = 1; i <= 6; i++) {
            if (counts[i] >= 3) {
                if (i === 1) {
                    points += 1000;
                } else {
                    points += i * 100;
                }
                counts[i] -= 3;
            }
        }
        for (let i = 1; i <= 6; i++) {
            if (counts[i] >= 3) {
                if (i === 2) {
                    points += 1000;
                } else {
                    points += i * 100;
                }
                counts[i] -= 3;
            }
        }

        return points;
    }
});

    // let scoreTotal = 0
    // let diceOne = Math.floor(Math.random() * 6) + 1;
    // let diceTwo = Math.floor(Math.random() * 6) + 1;
    // let diceThree = Math.floor(Math.random() * 6) + 1;
    // let diceFour = Math.floor(Math.random() * 6) + 1;
    // let diceFive = Math.floor(Math.random() * 6) + 1;
    // let diceSix = Math.floor(Math.random() * 6) + 1;
    
    // let rollValue =( diceOne + diceTwo + diceThree + diceFour + diceFive + diceSix )
    // console.log(rollValue)
    
    // console.log(diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix)
    // return diceOne, diceTwo, diceThree, diceFour, diceFive, diceSix

  
//   diceGenerator()

//   function displayDice(e, diceGenerator){
//     let dice1 = document.createElement('Dice1');
//     dice1.innerHTML = diceGenerator().value
//   }



// function calculatePoints(rollValue) {
//     let points = 0;

//     for (const value of rollValue) {
//         if (value === 1) {
//             points += 100;
//         } else if (value === 5) {
//             points += 50;
//         }
//     }

//     const counts = Array(7).fill(0);
//     for (const value of rollValue) {
//         counts[value]++;
//     }

//     for (let i = 1; i <= 6; i++) {
//         if (counts[i] >= 3) {
//             if (i === 1) {
//                 points += 1000;
//             } else {
//                 points += i * 100;
//             }
//             counts[i] -= 3;
//         }
//     }

//     return points;
// }
// });
// for (let i = 1; i <= 6; i++) {
//     const count = diceValues.filter(die => die === i).length;
//     console.log(count)
//     if (i === 1) {
//         if (count >= 3) {
//             points += 1000;
//             //count -= 3;
//             console.log(points, count)
//         }
//         points += count * 100;
//     } else if (i === 5) {
//         points += count * 50;
//     } else if (count >= 3) {
//         points += i * 100;
//     }
// }