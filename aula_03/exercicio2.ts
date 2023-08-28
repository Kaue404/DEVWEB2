namespace exercicio2 {
    let lista: number[] = [2, 7, -1, 3, 40, 12];
    let maior: number = lista[0]

    for (let i = 1; i <= lista.length; i++) {
        if (maior > lista[i]) {
            maior = lista[i]
        }
    }
    console.log(maior)
    console.log(Math.max(...lista));
}