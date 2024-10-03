const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Mittu taringut on mangus: ', dise =>{
    for(let i = 1; i <= dise; i++){
        let roll = Math.floor(Math.random()* 6 ) + 1;
        
        console.log(`taring ${i}:`, roll);
    } 
    rl.close();
    return
    
})