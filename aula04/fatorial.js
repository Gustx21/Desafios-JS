// function chamada com evento de click
function calcular() {
    // variáveis armazenando valores inseridos
    let num = document.getElementById('numero');
    const res = document.getElementById('resposta');

    // declarando variáveis com valores para entrar no if
    let fatorial = 1;
    let i = 1;
    
    // convertendo para tipo numérico
    num = Number(num.value);

    // loop para descobrir o fatorial
    for (; i <= num;) {
        fatorial *= i;
        i++;
    };

    // acrescentando os valores no conteúdo
    res.innerHTML = `O fatorial de ${num} é ${fatorial}.`
}