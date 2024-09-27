const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Sisestage Leedu perenimi: ', family => {
    let greeting;

    if (family.endsWith("ne")) {
        greeting = "abielus";
    } else if (family.endsWith("te")) {
        greeting = "vallaline";
    } else if (family.endsWith("e")) {
        greeting = "maaramatu";
    } else {
        greeting = "Pole leedulanna perekonnanimi";
    }
    
    console.log(greeting);
    rl.close(); 
});
