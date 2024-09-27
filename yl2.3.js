const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisesta oma sugu (M, m või N, n): ', sex => {
    rl.question('Sisesta oma vanus: ', age => {
        rl.question('Sisesta treeningu tüüp (1 - tervisetreening, 2 - põhivastupidavuse treening, 3 - intensiivne aeroobne treening): ', type => {
            let maxPulse;
            if (sex === 'M' || sex === 'm') {
                maxPulse = 220 - age;
            } else if (sex === 'N' || sex === 'n') {
                maxPulse = 206 - (0.88 * age);
            } else {
                console.log("Tundmatu sugu.");
                rl.close();
                return
            }
            
            let maxRate, minRate;
            if (type === "1") {
                minRate = maxPulse * 0.50
                maxRate = maxPulse * 0.70
            } else if(type === "2") {
                minRate = maxPulse * 0.70
                maxRate = maxPulse * 0.80
            } else if (type === "3") {
                minRate = maxPulse * 0.80
                maxRate = maxPulse *0.87
                
            }else {
                console.log("Tundmatu treeningu tüüp.");
                rl.close();
                return;
            }

            console.log(`Pulsisagedus peaks olema vahemikus ${Math.round(minRate)} kuni ${Math.round(maxRate)}`)
            rl.close();

        })
    })
})