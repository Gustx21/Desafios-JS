export function subtrairTotal() {
    const receitaTotal = parseInt(prompt("Digite o número total de receitas:"));
    let resultadoValor1 = [];
    let soma = 0;
    let calculo;

    for (let i = 0; i < receitaTotal; i++) {
        let receitas = parseInt(prompt(`Digite os valores de cada receita por ordem (${i + 1}):`));

        resultadoValor1.push(receitas);
    }

    resultadoValor1.forEach(function(item1, indece1) {
        return soma += resultadoValor1[indece1];
    });

    const gastoTotal = parseInt(prompt("Digite o número total de gastos:"));
    let resultadoValor2 = [];
    let subtrair = 0;

    for (let i = 0; i < gastoTotal;) {
        let gastos = parseInt(prompt(`Digite os valores de cada gasto por ordem (${i + 1}):`));

        resultadoValor2.push(gastos);
        i++
    }

    resultadoValor2.forEach(function(item2, indece2) {
        return subtrair += resultadoValor2[indece2];
    });

    calculo = soma - subtrair;

    alert(`O resultado do dinheiro livre é ${calculo}`);
};