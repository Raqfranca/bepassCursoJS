//do /while

//Exemplo de while

var counter = 1

 while(counter < 10){
    console.log(counter++ );
 }

 // Qual a diferença de for e while? 

 /*
 FOR:

- O loop for é geralmente utilizado quando você sabe antecipadamente quantas vezes deseja que o bloco de código seja executado.

- Ele possui uma sintaxe mais compacta e específica para definir a inicialização, a condição de continuação e a expressão de 
incremento/decremento em uma única linha.

Exemplo:
*/
 console.log("Exemplo FOR");

 for (let i = 0; i < 5; i++) {
   console.log(i);
 }

/* 
While:

- O loop while é usado quando você não sabe quantas vezes o bloco de código deve ser repetido antecipadamente e a repetição 
depende de uma condição booleana.

- Ele possui uma sintaxe mais flexível, com a condição de continuação sendo verificada antes da execução do bloco de código.
 */

//Exemplo:

    console.log("Exemplo While");

     let i = 0;
     while (i < 5) {
       console.log(i);
       i++;
     }

/*
Do While:

- A estrutura do-while é semelhante à do while, mas a diferença fundamental é que o bloco de código dentro do "do" 
é executado pelo menos uma vez, independentemente da condição de verificação no "while".

- A condição é verificada apenas após a execução do bloco de código no "do".
*/

console.log("Exemplo do while")
var counter = 10;

do {
    console.log(counter++);
} while (counter < 10);

console.log("Exemplo while")

var counter = 10;

 while(counter < 10){
    console.log(counter++ );
 }

 console.log("Fim exemplo while")

/*
FOR...IN:

- É utilizado para percorrer as propriedades enumeráveis de um objeto.
- Ele é especialmente útil para iterar sobre as chaves (ou propriedades) de um objeto.
- Comparado ao for, o for...in pode ser mais lento.
*/ 

var car = {
    brand: 'VW',
    model: 'Gol',
    year: 2023
}

console.log('Propriedades do objeto')

for (var prop in car){
    console.log (prop);
}

console.log('Valor das propriedades')

for (var prop in car){
    console.log (car[prop]);
}

// Usando for in para testar se a propriedade existe

console.log('Existe brand no objeto car?', 'brand' in car)

console.log('Existe km no objeto car?', 'km' in car)

//Instruções de Salto em JavaScript:

/*
As instruções de salto são comandos em JavaScript que permitem alterar o fluxo de execução do código. 

- Return:

A instrução return é usada dentro de funções para retornar um valor e encerrar a execução da função.
*/

console.log('Salto - Return')

function soma(a, b) {
    return a + b;
}

let resultado = soma(3, 4);
console.log(resultado); 

//Neste exemplo, a função soma retorna a soma de a e b, encerrando a execução da função.

/*
- Break:

A instrução break é usada para sair de loops (for, while, do-while) ou do bloco de um switch.
*/

console.log('Salto - Break')

for (let i = 0; i < 5; i++) {

    if (i === 3) {
        break;
    }
    console.log(i);
}
//Este loop imprimirá os números de 0 a 2, e quando i for 3, a instrução break é acionada, interrompendo o loop.

/*
- Continue:

A instrução continue é usada para pular para a próxima iteração de um loop.

*/

console.log('Salto - Continue')

for (let i = 0; i < 5; i++) {
    if (i === 2) {
        continue;
    }
    console.log(i);
}

//Neste exemplo, quando i é 2, a instrução continue é acionada, fazendo com que a iteração atual seja interrompida, e o loop 
//continua com a próxima iteração.


/*
Em resumo, return é usado para encerrar funções e retornar valores, break é usado para sair de loops e switch, e continue é 
usado para pular para a próxima iteração de um loop. Essas instruções fornecem controle adicional sobre o fluxo de execução 
do seu código.
*/
