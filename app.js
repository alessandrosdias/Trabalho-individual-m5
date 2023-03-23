import readline from "readline"

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function propriedadecss() {

    
    let CSS = [];
    
    let reportCSS = rl.question = "Digite uma propriedade de CSS ou SAIR"
    console.log(reportCSS)
    
    rl.on('line', (addCSS) => {
        CSS.push(addCSS)
        
        if (addCSS.toUpperCase() === "SAIR") {
            CSS.pop()
            console.log(("Propriedades CSS adicionadas\n") + (CSS.sort().join('\n')));
            rl.close()
        }
    });
}

propriedadecss()