// Function chamada com evento de click
function calcular() {
    // Variáveis armazenando valores inseridos
    let num = document.getElementById('numero');
    const res = document.getElementById('resposta');

    // Declarando variáveis com valores de entrada
    let fatorial = 1;
    let i = 1;
    
    // Convertendo para tipo numérico
    num = Number(num.value);

    // Loop para descobrir o fatorial
    for (; i <= num;) {
        fatorial *= i;
        i++;
    };

    // Acrescentando os valores no conteúdo
    res.innerHTML = `O fatorial de ${num} é ${fatorial}.`
}