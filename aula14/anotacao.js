// reduce() - Reduz um array, não retorna um array, mas sim um valor com o item reduzido

// Exemplo 1: Reduzindo um array de números
var arr = [1, 2, 3, 4, 5, 6, 7];

var reduce = arr.reduce(function(acumulado, atual, index, array){
    return acumulado + atual;
},0);//Aqui nesse zero, estou informando que o acumulado vai começar com 0, caso não informe um valor o js 
//vai pegar primeiro do array como acumulado e o segundo como o atual 

/* 
O que ele está fazendo?
A função reduce() percorre o array, acumulando os valores.
O valor inicial do acumulado é 0 (especificado como segundo argumento).
A cada iteração, o acumulado é somado ao valor atual do array.

1º - 0 + 1 = 1
2º - 1 + 2 = 3 (acumulado vira 3 e soma com o próximo valor)
3º - 3 + 3 = 6 
4º - 6 + 4 = 10
5º - 10 + 5 = 15
6º - 15 + 6 = 21 
7º - 21 + 7 = 28
*/

console.log(reduce);

/*
Exemplo 2: Reduzindo um array de caracteres da direita para a esquerda

O reduceRight faz a mesma coisa que o reduce mas começa em uma direção diferente
*/

var arr2 = ['H', 'o', 'j', 'e'];

var reduceRight = arr2.reduceRight(function(acumulado, atual, index, array){
    return acumulado + atual;
});

console.log(reduceRight);

/*
indexOf() - Retorna o índice do valor verificado no array. Se não encontrar, retorna -1.
*/
console.log(arr.indexOf(3)); 
console.log(arr.indexOf('7987')); // Retorna -1, pois '7987' não está no array

// Podemos passar um segundo parâmetro para o indexOf, indicando a partir de qual índice procurar.
console.log(arr.indexOf(3, 3)); // Verifica se 3 existe a partir do índice 3

// lastIndexOf - Similar ao indexOf, mas começa a procurar do final do array.
console.log(arr.lastIndexOf(3)); 

/*
Array.isArray() - Verifica se o objeto é um array, retornando um valor booleano.
Usado para distinguir arrays de outros tipos de objetos.
Por que usar? O typeof retorna 'object' quando o elemento é um array, pois um array é uma forma especial de objeto.
No entanto, typeof não diferencia objetos primitivos de arrays, resultando em 'object' para ambos.
Array.isArray() é mais preciso ao verificar se um objeto é realmente um array.
*/

console.log(Array.isArray(arr)); 
