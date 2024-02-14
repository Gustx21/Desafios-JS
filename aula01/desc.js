// função para o evento
function clicar() {
    // variáveis armazena os valores inseridos nos ID's
    let valorProduto = window.document.getElementById('num').value;
    let resultado = window.document.getElementById('resultado');

    // condição para um intervalo no valor
    if (valorProduto >= 150 && valorProduto <= 300) {

        // operação para acrescentar o desconto
        let valorDesconto = (15 / 100) * valorProduto;
        resultado.innerHTML = `Desconto aplicado. Valor do produto é ${valorDesconto}.`;
    }
    else {
        resultado.innerText = 'O valor não se aplica ao desconto.';
    }
}

// evento para chamar a função após o clique
btn.addEventListener('click', clicar);