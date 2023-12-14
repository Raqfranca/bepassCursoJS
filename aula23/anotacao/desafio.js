/*
Vamos desenvolver mais um projeto. A ideia é fazer uma mini-calculadora.
As regras são:

- Deve ter somente 1 input, mas não deve ser possível entrar dados nesse input
diretamente;
- O input deve iniciar com valor zero;
- Deve haver 10 botões para os números de 0 a 9. Cada botão deve ser um número;
- Deve haver 4 botões para as operações principais: soma (+), subtração(-),
multiplicação(x) e divisão(÷);
- Deve haver um botão de "igual" (=) que irá calcular os valores e um botão "CE"
que irá limpar o input, deixando-o com valor 0;

- A cada número pressionado, o input deve atualizar concatenando cada valor
digitado, como em uma calculadora real;
- Ao pressionar um botão com uma das 4 operações, deve aparecer o símbolo da
operação no input. Se o último caractere no input já for um símbolo de alguma
operação, esse caractere deve ser substituído pelo último pressionado.
Exemplo:
- Se o input tem os valores: "1+2+", e for pressionado o botão de
multiplicação (x), então no input deve aparecer "1+2x".
- Ao pressionar o botão de igual, o resultado do cálculo deve ser mostrado no
input;
- Ao pressionar o botão "CE", o input deve ficar zerado.
*/

document.addEventListener("DOMContentLoaded", function () {
    const input = document.getElementById("display");
    let currentValue = "0";

    function updateDisplay() {
        input.value = currentValue;
    }

    function appendValue(value) {
        if (currentValue === "0") {
            currentValue = value;
        } else {
            currentValue += value;
        }
        updateDisplay();
    }

    function setOperator(operator) {
        const lastChar = currentValue.slice(-1);
        if (["+","-","*","/"].includes(lastChar)) {
            currentValue = currentValue.slice(0, -1);
        }
        appendValue(operator);
    }

    function calculate() {
        try {
            currentValue = eval(currentValue).toString();
            updateDisplay();
        } catch (error) {
            input.value = "Error";
            currentValue = "0";
        }
    }

    function clearDisplay() {
        currentValue = "0";
        updateDisplay();
    }

    const buttons = document.querySelectorAll('[data-js="button"]');
    buttons.forEach(button => {
        button.addEventListener("click", () => {
            const buttonText = button.textContent;
            if (buttonText === "=") {
                calculate();
            } else if (buttonText === "CE") {
                clearDisplay();
            } else {
                appendValue(buttonText);
            }
        });
    });
});
