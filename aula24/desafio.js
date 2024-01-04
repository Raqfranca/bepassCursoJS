/*
Nossa calculadora agora está funcional! A ideia desse desafio é modularizar
o código, conforme vimos na aula anterior. Quebrar as responsabilidades
em funções, onde cada função faça somente uma única coisa, e faça bem feito.

- Remova as duplicações de código;
- agrupe os códigos que estão soltos em funções (declarações de variáveis,
listeners de eventos, etc);
- faça refactories para melhorar esse código, mas de forma que o mantenha com a
mesma funcionalidade.
*/

// querySelector
var $visor = document.querySelector('[data-js="visor"]');
var $buttonsNumbers = document.querySelectorAll('[data-js="button-number"]');
var $buttonsOperations = document.querySelectorAll('[data-js="button-operation"]');
var $buttonCE = document.querySelector('[data-js="button-ce"]');
var $buttonEqual = document.querySelector('[data-js="button-equal"]');

// ClickEvent e Listener
function addClickEventToButtons(elements, handler) {
  Array.prototype.forEach.call(elements, function (button) {
    button.addEventListener('click', handler, false);
  });
}

addClickEventToButtons($buttonsNumbers, handleClickNumber);
addClickEventToButtons($buttonsOperations, handleClickOperation);
$buttonCE.addEventListener('click', handleClickCE, false);
$buttonEqual.addEventListener('click', handleClickEqual, false);

// Funções

function handleClickNumber() {
  $visor.value += this.value;
}

function handleClickOperation() {
  $visor.value = removeLastItemIfItIsAnOperator($visor.value);
  $visor.value += this.value;
}

function handleClickCE() {
  $visor.value = '0';
}

function isLastItemAnOperation(number) {
  var operations = ['+', '-', 'x', '÷'];
  var lastItem = number.slice(-1);
  return operations.includes(lastItem);
}

function removeLastItemIfItIsAnOperator(number) {
  return isLastItemAnOperation(number) ? number.slice(0, -1) : number;
}

function performOperation(firstValue, operator, lastValue) {
  switch (operator) {
    case '+':
      return Number(firstValue) + Number(lastValue);
    case '-':
      return Number(firstValue) - Number(lastValue);
    case 'x':
      return Number(firstValue) * Number(lastValue);
    case '÷':
      return Number(firstValue) / Number(lastValue);
    default:
      return 0;
  }
}

function handleClickEqual() {
    $visor.value = removeLastItemIfItIsAnOperator($visor.value);
    var allValues = $visor.value.match(/\d+[+x÷-]?/g);
    $visor.value = allValues.reduce(function (accumulated, current) {
      var lastOperator = isLastItemAnOperation(accumulated) ? accumulated.slice(-1) : '';
      return performOperation(accumulated.slice(0, -1), lastOperator, removeLastItemIfItIsAnOperator(current));
    });
  }
  
