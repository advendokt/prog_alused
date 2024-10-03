const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Siestage ringide arv: ', rings => {
    let totalCarrots = 0;
    for(let i = 2; i <= rings; i+= 2 ) {
        totalCarrots += i;
    }
    console.log('Saadavate porgandite koguarv:', totalCarrots);
    rl.close();
    return;

})