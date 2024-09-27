const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question('Milline on ohutemperatuur: ', temp => {
    let greeting;
    
    if (temp < 4.0) {
        greeting = "jaatumis oht";
    } else {
        greeting = "ei ole jaatumis ohtu";
    }
    
    console.log(greeting);
    rl.close();  
});
