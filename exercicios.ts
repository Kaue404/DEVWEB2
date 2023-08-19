//2-) A nota final de um estudante é calculada a partir de três notas atribuídas respectivamente a um trabalho de laboratório, a uma avaliação semestral e a um exame final. A média das três notas mencionadas anteriormente obedece aos pesos a seguir.
//Faça um programa que receba as três notas, calcule e mostre a média ponderada e o conceito que segue a tabela abaixo:

namespace exercicios {
    let nota1: number, nota2: number, nota3: number;
    const lab: number = 2, semestral: number = 3, exafinal: number = 5;

    nota1 = 10, nota2 = 9, nota3 = 8;

    let situacao;
    if (!situacao && nota2 >= 6) {
        let media: number = (nota1 * lab + nota2 * semestral + nota3 * exafinal) / (lab + semestral + exafinal)
        console.log(`A média final é ${media}`);
        if (media >= 8) (media <= 10); {
            console.log(`Tirou A`)
        }
        if (media >= 7) (media < 8); {
            console.log(`Tirou B`)
        }
        if (media >= 6) (media < 7); {
            console.log(`Tirou C`)
        }
        if (media >= 5) (media < 6); {
            console.log(`Tirou D`)
        }
        if (media < 5) {
            console.log(`Tirou E`)
        }
    }
}
