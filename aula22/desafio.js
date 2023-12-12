/*
Crie dois objetos, que serão duas pessoas. Cada um deve ter as propriedades
`name` e `lastName`, preenchidos com o nome e sobrenome da pessoa.
*/
  
var pessoa1 = {
    nome: 'Vanessa', 
    sobrenome: 'Wolf', 
} 

var pessoa2 = {
    nome: 'Michal', 
    sobrenome: 'Wolf', 
} 

/*
Agora crie uma função chamada `getFullName` que retorne as propriedades
`name` e `lastName` dos objetos acima, formando um nome completo.
A função não deve receber nenhum parâmetro, mas as propriedades `name` e
`lastName` devem ser dinâmicas.
A mesma função deve servir para as duas pessoas (ou qualquer outra que for
criada).
Depois disso, invoque essa função, mostrando no console o nome completo das
pessoas que foram criadas anteriormente, passando as pessoas acima como
contexto da função. Use um console.log por pessoa.
*/

console.log( 'O nome das pessoas é:' );

function getFullName() {
    return this.nome + ' ' + this.sobrenome;
}

console.log(getFullName.call(pessoa1));
console.log(getFullName.call(pessoa2));

/*
Crie uma função chamada `sum`. Essa função pode receber uma lista de
parâmetros variável, e deverá retornar a soma de todos eles.
Não use estruturas de repetição para somar os argumentos.
Na primeira linha, dentro da função, deixe um console.log para mostrar todos
os parâmetros passados para essa função.
*/

function sum(...args) {
    console.log(args); 
    return args.reduce((acc, value) => acc + value, 0);
}

/*
Mostre no console que a função acima funciona, invocando-a em 3 console.log
diferentes, com quantidades variáveis de parâmetros passados.
*/

var resultado = sum(10, 20, 100, 800, 900, 5000, 10000);

console.log( 'Somar alguns números:', resultado );

/*
Declare uma variável chamada `userEntry`, que irá receber alguns valores
entrados pelo usuário. Mostre para o usuário a seguinte frase:
"Entre com alguns números que serão somados:"
*/

var userEntry = prompt("Entre com alguns números que serão somados:");

/*
Mostre no console o valor entrado pelo usuário:
*/

console.log( 'Entrada do usuário: ', userEntry );

/*
Crie uma função chamada `justNumbers`, que recebe por parâmetro uma string
e remove tudo o que não for número, retornando um array somente com os números
da string. Mostre a representação em string dessa função no console.
*/

function justNumbers(str) {
    var numerosEncontrados = str.match(/\d+/g);
    return numerosEncontrados ? numerosEncontrados.map(Number) : [];
}

console.log( 'Função que limpa entrada do usuário (somente números):' );

var resultado1 = justNumbers("7998gfhdydyt54646");
console.log(resultado1); 

var resultado2 = justNumbers("8797554");
console.log(resultado2); 

var resultado3 = justNumbers("aaaaaaaaaaaa");
console.log(resultado3);

var resultado4 = justNumbers("79879,8797,13455,gfhgfh,787,uihuh");
console.log(resultado4); 

/*
Usando a função acima, faça a limpeza dos valores entrados pelo usuário,
atribuindo o resultado à uma variável `numbers`.
*/

var numbers = justNumbers(userEntry);

console.log( 'Entrada do usuário limpa. Somente números: ', numbers);

/*
Agora com o array de números, utilize a função `sum` para somar todos os
números desse array e mostre o resultado no console.
*/

var resultadoDaSoma = sum(...numbers);

console.log('Somar números entrados pelo usuário: ', resultadoDaSoma);
