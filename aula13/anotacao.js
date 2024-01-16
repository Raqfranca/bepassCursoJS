// Métodos dos Arrays

// concat() - Concatena um novo valor ao array, sem modificar o array original
var arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
console.log(arr.concat(5));

// unshift() - Adiciona um novo item no início do array
arr.unshift(7);
console.log(arr);

// shift() - Remove o primeiro item do array
arr.shift();
console.log(arr);

// slice() - Não modifica o array original, retorna um novo array com os elementos desejados
console.log(arr.slice(2));

// splice() - Modifica o array original; com um parâmetro, remove itens a partir do índice informado
var resultSplice = arr.splice(9);
console.log(resultSplice);
console.log(arr);

// Com dois parâmetros, especifica o índice e a quantidade de itens a serem removidos
arr.splice(7, 1);
console.log(arr);

// Com três parâmetros, adiciona valores no índice especificado
arr.splice(5, 0, "OK");
console.log(arr);

 /*
 - forEach()

    O método forEach é usado para iterar sobre os elementos de um array. 
    Ele executa uma função de retorno de chamada para cada elemento do array.

    A função pode receber três argumentos: 
    O valor do elemento (item), 
    O índice do elemento (index) e 
    O array em que a iteração está ocorrendo (array).
*/

arr.forEach(function (item, index, array) {
    console.log(item, index, array);
});


/*
 - every()
    O método every verifica se todos os elementos do array atendem a uma determinada condição. 

    Ele retorna true se todos os elementos passarem no teste da função de callback fornecida; caso contrário, 
    retorna false.
*/

var every = arr.every(function (item) {
    return item < 8;
});
console.log(every);

/*
 - some()
    O método some verifica se pelo menos um elemento do array atende a uma condição. 
    
    Ele retorna true se pelo menos um elemento passar no teste da função de callback fornecida; caso contrário, 
    retorna false.
*/


var some = arr.some(function (item) {
    return item % 2 === 0;
});
console.log(some);

/*
 - map()
    O método map cria um novo array com base nos resultados de uma função aplicada a cada elemento do array original.

    Ele não modifica o array original, mas retorna um novo array com os resultados da função aplicada a cada elemento.
*/

var map = arr.map(function (item, index, array) {
    return { index: index, item: item };
});
console.log(map);

/*
 - filter()
    O método filter cria um novo array contendo apenas os elementos que atendem a uma determinada condição. 

    Ele não modifica o array original, mas retorna um novo array com os elementos filtrados.
*/

var pessoas = [
    { nome: 'João', idade: 30 },
    { nome: 'Maria', idade: 22 },
    { nome: 'Carlos', idade: 35 },
    { nome: 'Ana', idade: 18 },
    { nome: 'Pedro', idade: 28 }
  ];
  
  // Filtra pessoas com idade superior a 25 anos
  var pessoasComMaisDe25Anos = pessoas.filter(function (pessoa) {
    return pessoa.idade > 25;
  });
  
  console.log(pessoasComMaisDe25Anos);
  