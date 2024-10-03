const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage mittu korda teid aratada: ', serval_time => {
    serval_time = Number(serval_time)
    for(let up = 0; up < serval_time; up++) {
        console.log("Aratus");
    }
    rl.close();
    return
}) 
