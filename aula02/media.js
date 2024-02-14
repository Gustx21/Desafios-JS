// função para calcular as média
function calcular() {

    // variável declarada para armazenar valores numéricos
    let val1 = document.getElementById('valor1');
    let val2 = document.getElementById('valor2');
    let val3 = document.getElementById('valor3');

    // convertendo para tipo numérico
    val1 = Number(val1.value);
    val2 = Number(val2.value);
    val3 = Number(val3.value);

    const resposta = (val1 + val2 + val3) / 3;

    // condicional para caso o valor seja menor que 0 
    if (val1 < 0 || val2 < 0 || val3 < 0) {
        res.innerHTML = "Digite uma nota a cima de zero."
    }
    else {
        // Resposta caso seja a cima de 10
        res.innerHTML = "Digite uma nota válida.";

        // condicional para caso o valor ultrapasse 10
        if (val1 <= 10 && val2 <= 10 && val3 <= 10) {
            // o 'innerHTML' altera o texto com a média informada
            res.innerHTML = `A média final é ${resposta.toFixed(1)}`; // o 'toFixed()' é para quantidade de casas decimais
        }
    }
}