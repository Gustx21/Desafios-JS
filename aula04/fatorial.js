// Function chamada com evento de click
function calcular() {
    // Variáveis armazenando valores inseridos
    const num = document.getElementById('numero');
    
    // Declarando variáveis com valores de entrada
    let fatorial = 1;
    
    // Convertendo para tipo numérico
    num = Number(num.value);
    
    // Loop para descobrir o fatorial
    for (let i = 1; i <= num;) {
        fatorial = fatorial * i;
        i++;
    };

    exibir();
}

function exibir() {
    const res = document.getElementById('resposta');

    // Acrescentando os valores no conteúdo
    res.innerHTML = `O fatorial de ${num} é ${fatorial}.`;
}