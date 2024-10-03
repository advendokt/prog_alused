const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Mittu poialpoissi tahab ounu: ", Parv => {
    let totalApples= 14;
    for(let i = 1; i <= Parv; i++){
        let roll = Math.floor(Math.random() * 2) + 1;

        totalApples -= roll

    
        console.log(`Poialpoiss ${i} sai ${roll} ouna.`)
    }
    console.log(`Lumivalkekes jai ${totalApples} ouna.`)
    rl.close()
    return
})