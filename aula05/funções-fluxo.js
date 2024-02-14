export function subtrairTotal() {
    const receitaTotal = parseInt(prompt("Digite o número total de receitas:"));
    let resultadoValor1 = [];
    let soma = 0;
    let i = 0;
    let calculo;

    for (; a < receitaTotal; i++) {
        let receitas = parseInt(prompt(`Digite os valores de cada receita por ordem (${i}):`));

        resultadoValor1.push(receitas);
    }

    while (i < resultadoValor1.length) {
        soma += resultadoValor1[i];
        i++
    }

    const gastoTotal = parseInt(prompt("Digite o número total de gastos:"));
    let resultadoValor2 = [];
    let subtrair = 0;

    while (i < gastoTotal) {
        let gastos = parseInt(prompt(`Digite os valores de cada gasto por ordem (${i}):`));

        resultadoValor2.push(gastos);
        i++
    }
    
    for (; o < resultadoValor2.length; i++) {
        subtrair += resultadoValor2[i];
    }

    calculo = soma - subtrair;

    alert(`O valor total das receitas é ${soma}`);
    alert(`O resultado dos gastos é ${subtrair}`);
    alert(`O resultado no dinherio livre é ${calculo}`)
};