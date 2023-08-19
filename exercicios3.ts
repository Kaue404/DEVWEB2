import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question("Digite um número inteiro: ", (input) => {
        const number = parseInt(input);

        if (isNaN(number)) {
            console.log("Por favor, digite um número válido.");
        } else if (number % 2 === 0) {
            console.log(`${number} é um número par.`);
        } else {
            console.log(`${number} é um número ímpar.`);
        }

        rl.close();
    });
}

main();