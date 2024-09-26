const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Mittu ainepunkti sul on nadalas: ', ainepunktid => {
    rl.question('Mittu tundi uhe ainepunktiks: ', ainetunnid => {
        rl.question('Mittu nadalat see kestab: ', week => {
            let tunnid = (ainepunktid * ainetunnid)
            let weekH = (tunnid / week)
            weekH = Math.round(weekH)
            console.log(weekH)
        
            rl.close()
        })
    })
    

})