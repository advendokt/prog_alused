const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
 
rl.question('Kas soovite valida (ise) voi (loosida)? ', type => {
    if (type == 'ise' || type == 'Ise') {
        rl.question('Kas soovite istuda akna aares (akken) voi (muu) ', choice => {
            if (choice === 'akken') {
                console.log("Valisite istuda akna juures.")
            } else if (choice === 'muu') {
                console.log('Valisite istuda vahekaigukoht.')
            } else{
                console.log("Tehtud vale valik.")
            }
            rl.close();
            return
        })
    

    }else if (type === 'loosida' || type === 'Loosida') {
        
        const random = Math.random();  
        if (random < 0.33) {  
            console.log("Saite istekoha akna juures.");
        } else {  
            console.log("Saite istekoha vahekäigus.");
        }
        rl.close();  
    } else {
        
        console.log("Tehtud vale valik.");
        rl.close();
    }


})