namespace exercicio3 {
    let num: number = 100;
    let index: number = 1;
    let arrayDiv3: number[] = [];
    do {
        if (index % 3 == 0) {
            console.log(index);
            arrayDiv3.push(index);
        }
        index++
    } while (index <= num)
    console.log(arrayDiv3);
    for (let i = 0; i <= arrayDiv3.length; i++) {
        console.log(arrayDiv3[i]);
    }
}