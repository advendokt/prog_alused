const readline = require('node:readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



rl.question('Sisestage kirja suurus megabaitides: ', fSize => {
    rl.question('Sisestage kirja teema pealkiri: ', Title => {
        rl.question('Kas kirjaga on kaasas fail (jah/ei): ', Fail => {
            
            const size = parseFloat(fSize);
            const isTitleEmpty = Title.trim() === "";
            const hasAttachment = Fail.toLowerCase() === "jah";
                
            if (isTitleEmpty) {
                console.log("Kiri on spämm")
            } else if (hasAttachment && size > 1) {
                console.log("Kiri on spämm")
            } else {
                console.log("Kiri ei ole spämm")
            }

                
            rl.close();
        });
    });
});


