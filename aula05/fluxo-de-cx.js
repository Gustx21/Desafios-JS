import { subtrairTotal } from './teste2.js';

const operação = parseInt(prompt("Digite o número da operação:\n1. subtrair\n2. Sair"));

switch (operação) {
    case 1:
        subtrairTotal();
        break;
    case 2:
        alert("Saindo.");
        break
    default:
        alert("Digite um número válido.");
}
