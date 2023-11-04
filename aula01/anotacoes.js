/* Tipod de dados em JS */

/*
var

    Declara uma variável, opcionalmente, inicializando-a com um valor.
Experimental let

    Declara uma variável local de escopo do bloco, opcionalmente, inicializando-a com um valor.
Experimental const

    Declara uma constante de escopo de bloco, apenas de leitura.

*/

var exibeMensagem = function() {
    if(true) { 
        var escopoFuncao = 'Caelum'; 
        let escopoBloco = 'Alura';

       console.log(escopoBloco); // Alura 
   } 
   console.log(escopoFuncao); // Caelum 
   console.log(escopoBloco); 
}

// String - Todo texto é uma string, mas outro valores também poder ser se os coloquar entre aspas simples.  

var status = 'concluido';
var numeroGol = '17';
var cifrao = '$'

// Number - Declaração de número, não precisa ter aspas, esse consjunto inclui os números inteiros 

var number1 = 1;
var number2 = 2;
var number3 =46654789; 

// Float number - São os número com casas decimais, também não precisa de aspas para declarar.

var numberFloat = 5.5;

// Boolena - Representa os valores verdadeiro (true) ou falso (false). Para declarar, usar as palavras em inglês sem aspas

var valorVerdeiro = true;
var valorFalso = false;
 
// Array - Estrutura que permite armazenar vários valores em um único referência.

let myVariable = [1,'Bob','Steve',10]

/*Object - são como uma espécie de "super variáveis" que armazenam uma "coleção de valores" referenciados 
por nome, e que podem ser recuperados para serem utilizados em diversas outras partes de um programa. 

                    *******Em JavaScript qualquer tipo de dado é um objeto.*******

Cada item dessa "coleção de valores", é chamado de propriedade. 
Cada propriedade é composta por um par de "nome: valor". 
Quando uma propriedade armazena uma função, ela se torna o que chamamos de MÉTODO.
*/

// Exemplo de um objeto literal: 

    var album = {
      title: "Renaissance",
      artist: "Beyoncé",
      released: 2022,
      showInfo: function() {
        console.log("Título do álbum: " + this.title + " Lançado em: " + this.released);
      }
    };
/*
Os operadores de adição e subtração tem duas formas abreviadas, também não precisa de aspas para declarar


var soma = 0;
soma++;

Os operadores ++ e -- causam efeito colateral, alterando o valor original da variável soma para 1 (no exemplo 
acima), sem precisar usar o operador de atribuição =.

A segunda forma abreviada é assim:

var soma = 0;
soma += 1;

Que é o mesmo que fazer isso:

var soma = 0;
soma = soma + 1;

No caso, eu pego todo o valor da variável soma (zero), adiciono 1 e atribuo novamente à variável soma. Assim ela 
fica com o valor atualizado: 1.

Para multiplicação e divisão, funciona igual o segundo exemplo que mostrei:

var mult = 3;
mult *= 3;

Nesse caso, da multiplicação, a variável mult foi declarada com o valor 3. Depois eu peguei todo o valor dela, 
e multipliquei por 3, atribuindo o resultado à ela novamente.

Seria o mesmo que fazer:

var mult = 3;
mult = mult * 3;

Agora a variável mult tem o valor 9. 

*/