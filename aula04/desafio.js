/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/

var isTruthy = function (y) {
var  tipo 
    if (y) { 
        tipo = true
    }else{
        tipo = false 
    };
    return tipo
}

//Outra forma 

var isTruthy2 = function (z) {
    return !!z;
}
 
//console.log(isTruthy2(0))

//console.log(isTruthy(0))

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.

/* console.log(isTruthy(0))

console.log(isTruthy(-0))

console.log(isTruthy(null))

console.log(isTruthy(""))

console.log(isTruthy(''))

console.log(isTruthy(undefined))

console.log(isTruthy(NaN)) */

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/

// console.log(isTruthy(10))

/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/

var carro = {
    marca: "Honda", 
    modelo: "Civic", 
    placa: "ANJ1O48", 
    ano: 2019, 
    cor: "Vermelho", 
    quantasPortas: 4,
    assentos: 5,
    quantidadePessoas: 0
}

//console.log(carro)

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/

carro.mudarCor = function(novaCor){
    carro.cor = novaCor
}

// console.log(mudarCor('Branco'));
// console.log(carro.cor);

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/

carro.obterCor = function(){
    return carro.cor 
}

//console.log(carro.obterCor());

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/

carro.obterModelo = function(){
    return carro.modelo 
}

//console.log(carro.obterModelo());

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/

carro.obterMarca = function(){
    return carro.marca 
}

//console.log(carro.obterMarca());

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/

carro.obterMarcaModelo = function(){
    return 'Esse carro é um ' + carro.marca + ' ' + carro.modelo + '.' 
}

//console.log(carro.obterMarcaModelo());

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:

- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.

- O método deve retornar a frase: "Já temos [X] pessoas no carro!"

- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"

- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"

- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/

/*

MINHA FORMA DE FAZER, ERRADO PQ NÃO RETORNA A FRASE = "o CARRO JÁ ESTÁ LOTADO"

carro.adicionarPassageiros = function(y){
    var frase;
    var resultado;

    resultado = 5-y;

    if(y >= 5){
        frase = 'O carro já está lotado!'
    }else if (y < 5){
        frase = "Já temos " + y +" pessoas no carro!" 
    } 
    
    if (resultado > 1){
        frase = 'Só cabem mais ' + resultado + ' pessoas!'
    } else if (resultado ===1 ){
        frase = 'Só cabe mais ' + resultado + ' pessoa!'
    }

    return frase
}
*/
// console.log(carro.adicionarPassageiros(5))
// console.log(carro.adicionarPassageiros(30))
// console.log(carro.adicionarPassageiros(4))

carro.adicionarPessoas = function(numeroPessoas){
    var totalPessoas = carro.quantidadePessoas + numeroPessoas

    if(carro.quantidadePessoas === carro.assentos && totalPessoas >= carro.assentos){
        return 'O carro já está lotado!'
    }

    if ( totalPessoas > carro.assentos){
        var quantasPessoasCabem = carro.assentos - carro.quantidadePessoas;
        var pluralOuSingular = quantasPessoasCabem === 1 ? ' pessoa' : ' pessoas';
        return 'Só cabem mais ' + quantasPessoasCabem + pluralOuSingular + ' ! ';
    }
    
    carro.quantidadePessoas += numeroPessoas;

    return 'Já temos ' + carro.quantidadePessoas + ' pessoas no carro ';
}

// console.log(carro.adicionarPessoas(2))
// console.log(carro.adicionarPessoas(2))
// console.log(carro.adicionarPessoas(1))
// console.log(carro.adicionarPessoas(7))
// console.log(carro.adicionarPessoas(9))

/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/

console.log(carro.obterCor());

// Mude a cor do carro para vermelho.

console.log(carro.mudarCor("Rosa"));

// E agora, qual a cor do carro?

console.log(carro.obterCor());

// Mude a cor do carro para verde musgo.

console.log(carro.mudarCor("Verde musgo"));

// E agora, qual a cor do carro?

console.log(carro.obterCor());

// Qual a marca e modelo do carro?

console.log(carro.obterMarcaModelo());

// Adicione 2 pessoas no carro.

console.log(carro.adicionarPessoas(2))

// Adicione mais 4 pessoas no carro.

console.log(carro.adicionarPessoas(4))


// Faça o carro encher.

console.log(carro.adicionarPessoas(3))


// Tire 4 pessoas do carro.

console.log(carro.adicionarPessoas(-4))

// Adicione 10 pessoas no carro.

console.log(carro.adicionarPessoas(10))

// Quantas pessoas temos no carro?

console.log(carro.quantidadePessoas)