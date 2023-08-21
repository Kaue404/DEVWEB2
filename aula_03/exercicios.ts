//2-) A nota final de um estudante é calculada a partir de três notas atribuídas respectivamente a um trabalho de laboratório, a uma avaliação semestral e a um exame final. A média das três notas mencionadas anteriormente obedece aos pesos a seguir.
//Faça um programa que receba as três notas, calcule e mostre a média ponderada e o conceito que segue a tabela abaixo:

namespace exercicios {
    let nota1: number, nota2: number, nota3: number;

    let lab: number = 2, semestral: number = 3, exafinal: number = 5;

    nota1 = 10, nota2 = 9, nota3 = 8;

    const media: number = (nota1 * lab + nota2 * semestral + nota3 * exafinal) / (lab + semestral + exafinal)

    if (media >= 8 && media <= 10) {
        console.log("Conceito: A");
    } else if (media >= 7 && media < 8) {
        console.log("Conceito: B");
    } else if (media >= 6 && media < 7) {
        console.log("Conceito: C");
    } else if (media >= 5 && media < 6) {
        console.log("Conceito: D");
    } else if (media >= 0 && media < 5) {
        console.log("Conceito: E");
    }
}
