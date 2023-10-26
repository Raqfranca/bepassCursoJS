/*
Operador de módulo - % para saber o resto da divisão

Consigo utilizar para saber se o número e par ou impar

*/ 
var divisao = 10/2
console.log(divisao)

var modulo = 10%2
console.log(modulo)

//Exemplo de uso com while 

num = 0 

while(num <= 20){
    (num)%2 === 0 ? console.log(num + ' é par'): '' ;
    ++num
}


/*Arrays é um tipo de objeto, a diferença é que no objeto vc consegue escolher o indice e o array são sempre numeros.

objeto = {
    prop1: 'string',
    prop2: 23,
    prop4: true
}

array = [
   0: 'Santos', 
   1: false, 
   2: 7, 
   3: 1.75 
]
*/

/*
Propriedades do Array

-Length - informar quantos itens/parametros tem no array

*/

arr = ['Santos', false,  7, 1.75, function(){ }]

//console.log(arr.length)

/*
Exemplo do Array com While

Achei meio confuso essa exemplo kk 
*/
 
var qntArr = arr.length;

while(qntArr > 0){
    console.log(arr[--qntArr]);
}

console.log(qntArr)

/*
Formar de adicionar itens no array: sobrescrever e metodod push 

- Push(): Parecido com o git, empurrarr as atualizações para o array 

Exemplo:
*/

arr.push('Deu certo?', 25, 30, false)

console.log(arr);

/*
FOR

Qual é a sintaxe do for em JavaScript?

Basicamente, o loop for contém três expressões específicas seguidas da declaração do bloco de códigos que serão executados enquanto a condição for verdadeira. As expressões devem ser separadas por ponto e vírgula. A sintaxe da estrutura for em JavaScript é:

for ( [expressão inicial]; [expressão condicional]; [atualização da expressão inicial] ) {
	// um ou vários comandos a serem executados //
	declaração;
}
﻿

Onde:

    expressão inicial: corresponde à declaração da variável ou à atribuição de qual é o valor inicial utilizado. Vale dizer que também pode ser atribuída uma expressão para inicializar a variável;
    expressão condicional: é uma expressão em que é feito um teste para constatar se a condição é verdadeira para, então, executar o código correspondente ou sair da estrutura de repetição;
    atualização da expressão inicial: é a alteração da variável utilizada na primeira expressão;
    declaração: uma instrução específica ou um conjunto de instruções para executar determinada ação.

    
*/