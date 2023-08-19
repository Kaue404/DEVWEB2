import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

function findMaxNumber(numbers: number[]): number {
    let max = numbers[0];
    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
    }
    return max;
}

function main() {
    rl.question('Digite o primeiro número: ', (num1) => {
        rl.question('Digite o segundo número: ', (num2) => {
            rl.question('Digite o terceiro número: ', (num3) => {
                const numbers = [parseInt(num1), parseInt(num2), parseInt(num3)];
                const maxNumber = findMaxNumber(numbers);
                console.log(`O maior número é: ${maxNumber}`);
                rl.close();
            });
        });
    });
}

main();
