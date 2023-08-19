import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function getGreeting(hour: number): string {
    if (hour >= 5 && hour < 12) {
        return "Bom dia";
    } else if (hour >= 12 && hour < 18) {
        return "Boa tarde";
    } else {
        return "Boa noite";
    }
}

function main() {
    rl.question("Digite seu nome: ", (name) => {
        const now = new Date();
        const greeting = getGreeting(now.getHours());
        console.log(`${greeting}, ${name}!`);

        rl.close();
    });
}

main();