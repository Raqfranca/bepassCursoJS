/*
Crie uma variável qualquer, que receba um array com alguns valores aleatórios
- ao menos 5 - (fica por sua conta os valores do array).
*/

var aleatoria = function(){
    return [78, 'flor', true, 1.78, 'socorro']
}

//console.log(aleatoria()[2]);

/*
Crie uma função que receba um array como parâmetro, e retorne esse array.
*/
// ?

arr = [1,2,3,7,'anjo','socorro'];

function arrayParametro (y){
    return y
};

//console.log(arrayParametro(arr))

/*
Imprima o segundo índice do array retornado pela função criada acima.
*/

console.log(arrayParametro(arr[2]))

/*
Crie uma função que receba dois parâmetros: o primeiro, um array de valores; e o
segundo, um número. A função deve retornar o valor de um índice do array que foi passado
no primeiro parâmetro. O índice usado para retornar o valor, deve ser o número passado no
segundo parâmetro.
*/
// ?

parArray = [25,75,98,14,48];

function doisParametro (par1, par2){
    return par1[par2]
};

console.log(doisParametro(parArray,0))

/*
Declare uma variável que recebe um array com 5 valores, de tipos diferentes.
*/

var cincoValores = [15,48,72,67,32]

/*
Invoque a função criada acima, fazendo-a retornar todos os valores do último
array criado.
*/

console.log(doisParametro(cincoValores,3))

/*
Crie uma função chamada `book`, que recebe um parâmetro, que será o nome do
livro. Dentro dessa função, declare uma variável que recebe um objeto com as
seguintes características:
- esse objeto irá receber 3 propriedades, que serão nomes de livros;
- cada uma dessas propriedades será um novo objeto, que terá outras 3
propriedades:
    - `quantidadePaginas` - Number (quantidade de páginas)
    - `autor` - String
    - `editora` - String
- A função deve retornar o objeto referente ao livro passado por parâmetro.
- Se o parâmetro não for passado, a função deve retornar o objeto com todos
os livros.
*/
// ?

function book (nomeLivro){
    
var listaLivro = {
        'Crepusculo': {
            quantidadePaginas: 416,
            autor: 'Stephenie Meyer',
            editora: 'Intrínseca',
        },
        'Malala': {
            quantidadePaginas: 96,
            autor: 'Adriana Carranca',
            editora: 'Companhia das Letrinhas'
        },
        'Valente': {
            quantidadePaginas: 113,
            autor: 'Vitor Cafaggi',
            editora: 'Panini Comics'
        } 
    }

    if(!nomeLivro){
        return listaLivro
    }

    return listaLivro[nomeLivro];
    // Então eu consigo acessar objetos igual eu acesso os arrays

//Posso escrever tbm por ternário, mas preciso praticar mais ainda
//return !nomeLivro ? listaLivro : listaLivro[nomeLivro]; 
}

//console.log(book('Valente'));
//console.log(book(''))
//console.log(book())

/*
Usando a função criada acima, imprima o objeto com todos os livros.
*/

console.log(book())

/*
Ainda com a função acima, imprima a quantidade de páginas de um livro qualquer,
usando a frase:
"O livro [NOME_DO_LIVRO] tem [X] páginas!"
*/

console.log('O livro Malala tem ' + book('Malala').quantidadePaginas + ' páginas!')


/*
Ainda com a função acima, imprima o nome do autor de um livro qualquer, usando
a frase:
"O autor do livro [NOME_DO_LIVRO] é [AUTOR]."
*/

console.log('O autor do livro Valente é o ' + book('Valente').autor)

/*
Ainda com a função acima, imprima o nome da editora de um livro qualquer, usando
a frase:
"O livro [NOME_DO_LIVRO] foi publicado pela editora [NOME_DA_EDITORA]."
*/

console.log('O livro Crepusculo foi publicado pela editora ' + book('Crepusculo').editora)