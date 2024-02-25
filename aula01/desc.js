// Declarando função para o evento de 'click'
const btn = window.document.getElementById('btn');

// Função para o evento
function calcular() {
    // Variáveis armazena os valores inseridos nos ID's
    let valorProduto = window.document.getElementById('num').value;
    let resultado = window.document.getElementById('resultado');

    // Condição para um intervalo no valor
    if (valorProduto >= 150 && valorProduto <= 300) {

        // Operação para acrescentar o desconto
        let valorDesconto = (15 / 100) * valorProduto;
        resultado.innerHTML = `Desconto aplicado. Valor do produto é ${valorDesconto}.`;
    }
    else {
        resultado.innerText = 'O valor não se aplica ao desconto.';
    }
}

// Evento para chamar a função após o clique
btn.addEventListener('click', calcular);