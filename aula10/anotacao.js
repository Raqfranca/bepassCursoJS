/*
Valores primitivos NÂO são objetos

Tudo que tem propriedade e método são objetos 

***** Revisando ****** 

PROPRIEDADES são características ou atributos de um objeto em JavaScript.  
Essas propriedades podem ser valores simples, como strings, números, booleanos, 
ou até mesmo outras estruturas de dados, como objetos ou arrays.

Exemplo: 

var carro = {
    modelo: "Civic",
    ano: 2022,
    cor: "azul"
};

MÉTODOS são funções associadas a um objeto em JavaScript. 
Eles representam ações que podem ser realizadas pelo objeto. 
Um método é definido da mesma forma que uma função, mas é uma propriedade que contém uma função.

Exemplo: 

var pessoa = {
    nome: "João",
    idade: 30,
    saudacao: function() {
        console.log("Olá, meu nome é " + this.nome + " e eu tenho " + this.idade + " anos.");
    }
};

Por que os .length é considerado uma propriedade e não um método? 

Essa propriedade é chamada de "propriedade" em vez de "método" porque não é uma função que executa uma ação, 
mas sim uma característica que fornece informações sobre o objeto.

Por exemplo, se length fosse um método, seria utilizado da seguinte forma:

console.log(texto.length()); // Isso não é válido, pois length não é uma função
*/

// Wrapper Objects- Contrutores (Criam novos objetos) 

var nome = 'Raquel';

console.log(nome);
console.log(nome.length);

// Utulizando o contrutor nem 
var sobrenome = new String('Oliveira');
console.log('Exemplo com o new')
console.log(sobrenome);
console.log(sobrenome.length)
console.log(sobrenome.valueOf())

/*

O uso do operador new transforma o conteúdo da variável em um objeto, fazendo com que 
ela deixe de ser uma string literal.

Ao utilizar o método valueOf, é possível obter o valor literal novamente.

Por que isso é importante?
O acesso a propriedades e métodos em valores primitivos ocorre porque, nos bastidores, 
o JavaScript transforma essas variáveis em objetos temporariamente e, em seguida, descarta essa alteração.

Essas transformação é chamada de Wrapper Objects

*/

//SEM NEW = Ocorre a conversão do valor da variável.

//Exemplo: 

var years = String(49);

console.log(years);


/*

typeof() - Retorna uma string indicando o tipo de dado de uma expressão

Curiosidade: 

    - typeof é um operador unário

    O que isso significa? 

    É um tipo de operador que atua em apenas um operando.

    Exemplo de outros operadores desse tipo: 

    - Operador de Negação (!)
    - Operador de Incremento e Decremento (++ e --)

*/
console.log(typeof(years));










