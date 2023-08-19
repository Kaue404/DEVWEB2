import * as readline from 'readline';

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function main() {
    rl.question("Digite o primeiro número: ", (firstInput) => {
        const firstNumber = parseFloat(firstInput || '0');

        rl.question("Digite o segundo número: ", (secondInput) => {
            const secondNumber = parseFloat(secondInput || '0');

            rl.question("Digite o terceiro número: ", (thirdInput) => {
                const thirdNumber = parseFloat(thirdInput || '0');

                rl.question("Digite o quarto número: ", (fourthInput) => {
                    const fourthNumber = parseFloat(fourthInput || '0');

                    const numbers = [firstNumber, secondNumber, thirdNumber, fourthNumber];

                    if (numbers[0] > numbers[1] || numbers[1] > numbers[2]) {
                        console.log("Os três primeiros números devem estar em ordem crescente.");
                        rl.close();
                        return;
                    }

                    const sortedNumbers = numbers.sort((a, b) => b - a);

                    console.log("Números em ordem decrescente:", sortedNumbers);
                    rl.close();
                });
            });
        });
    });
}

main();