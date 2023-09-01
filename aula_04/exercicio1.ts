namespace exercicio1 {
    let lista: number[] = [2, 7, 1, 3, 40];
    let soma: number = 0;

    for (let i = 1; i <= lista.length; i++) {
        soma += lista[i]
    }

    console.log("A soma dos números é: ", soma);
}