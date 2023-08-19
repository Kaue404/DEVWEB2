import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getMonthName(monthNumber: number): string {
    const months = [
        "janeiro", "fevereiro", "março", "abril",
        "maio", "junho", "julho", "agosto",
        "setembro", "outubro", "novembro", "dezembro"
    ];

    if (monthNumber >= 1 && monthNumber <= 12) {
        return months[monthNumber - 1];
    } else {
        return "Mês inválido";
    }
}

function main() {
    rl.question("Digite um número entre 1 e 12: ", (input) => {
        const monthNumber = parseInt(input);

        const monthName = getMonthName(monthNumber);
        console.log(`O mês correspondente ao número ${monthNumber} é ${monthName}.`);

        rl.close();
    });
}

main();