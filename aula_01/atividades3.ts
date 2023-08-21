namespace atividades3 {
    let nota1: number, nota2: number, nota3: number;
    const peso1: number = 3, peso2: number = 5, peso3: number = 2;

    nota1 = 8, nota2 = 3, nota3 = 0;

    /*if(nota3 = 0){
        situacao = false
    } else {
        situacao = true
    }*/

    let situacao: boolean = nota3 == 0 ? true : false;
    //if (situacao == false)
    if (!situacao && nota2 >= 5) {
        let media: number = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3)
        console.log(`A média final é ${media}`);
    } else {
        console.log(`Aluno não entregou trabalho e sua média foi 0`);
    }
}