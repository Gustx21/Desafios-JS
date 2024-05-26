// Escopo global 
const res = document.getElementById("res");

// Adicionando evento no clique do botão
const input = document.querySelector(".btn");
input.addEventListener("click", calculaNota);

// função para calcular as média
function calculaNota() {
    // variável declarada para armazenar valores numéricos
    let val1 = document.getElementById('valor1');
    let val2 = document.getElementById('valor2');
    let val3 = document.getElementById('valor3');

    // convertendo para tipo numérico
    val1 = Number(val1.value);
    val2 = Number(val2.value);
    val3 = Number(val3.value);

    const resposta = (val1 + val2 + val3) / 3;

    // condicional para caso o valor seja inválido 
    if (val1 > 10 || val2 > 10 || val3 > 10) {
        res.innerHTML = "Valor inválido.";
        return;
    };

    if (val1 < 0 || val2 < 0 || val3 < 0) {
        res.innerHTML = "Valor inválido.";
        return;
    };
    
    exibirNota(resposta.toFixed(1)); // o 'toFixed()' é para quantidade de casas decimais
}

function exibirNota(resposta) {
    res.innerHTML = resposta;
}