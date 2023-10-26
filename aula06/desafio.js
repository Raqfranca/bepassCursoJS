/*
Vamos falar um pouco sobre "Futebol". Escolha um campeonato estadual qualquer
para começar o desafio.
Declare uma variável chamada `championship` que receberá o nome do campeonato,
e imprima o nome desse campeonato no console.
*/
// ?

const { Console } = require("console");

var championship = "Paulistão Feminino"

console.log(championship)

/*
Declare uma variável chamada `teams`, que receberá um array com 5 elementos.
Os elementos serão nomes de times do campeonato escolhido, e os nomes devem
estar na ordem em que eles aparecem na tabela no momento da solução desse
desafio.
*/

var teams = ['Santos', 'Ferroviária', 'São José', 'Corinthians', 'Botucatu']

console.log( 'Times que estão participando do campeonato:', teams );

console.log(teams[2])

/*
Crie uma função chamada `showTeamPosition` com as seguintes características:
    - A função deve receber um número por parâmetro;
    - A função deve retornar a frase:
    "O time que está em [POSIÇÃO]º lugar é o [NOME DO TIME].";
    - Onde [POSIÇÃO] é o valor passado por parâmetro e [NOME DO TIME] é o time
    que está nessa posição no array criado acima com os nomes dos times.
    --------------
    Dica: lembre-se que arrays começam no índice zero, então a posição passada
    deve ser sempre um número a mais que o índice do array ;)
    --------------
    - A função só deve retornar a frase acima somente se o time estiver entre
    os 5 primeiros.
    - Se não houver time para a posição passada, deve retornar a mensagem:
    "Não temos a informação do time que está nessa posição."
*/
// ?

function showTeamPosition (posicao){

    var posicaoReal = posicao -1

    if(posicaoReal > 5){
        return "Não temos a informação do time que está nessa posição."
    }else if (posicaoReal < 0){
        return "Informar uma posição valida."
    }

    return "O time que está em " + posicao +"º lugar é o " + teams[posicaoReal] + '.';
}
 
// console.log(showTeamPosition(25))
// console.log(showTeamPosition(1))
// console.log(showTeamPosition(0))

/*
Escolha 4 times do campeonato selecionado e mostre a posição dele, usando a
função acima. Entre esses 4, adicione 1 que não esteja entre os 5 primeiros.
*/

console.log(showTeamPosition(3));
console.log(showTeamPosition(1));
console.log(showTeamPosition(17));
console.log(showTeamPosition(5));

/*
Mostre os números de 20 a 30 no console (inclusive o 30), usando a estrutura de
repetição "while".
*/

var contator = 20;

while(contator <=30){
    console.log(contator)
    contator++;
}

/*
Tbm posso fazer assim:

var num = 20;

while(num <= 30){
    console.log( num++)
}

Forma simplificada, ele vai "imprimir o valor e depois acresentar mais um"

*/
/*
Crie uma função chamada `convertToHex`, com as seguintes características:
    - A função recebe uma cor por parâmetro, do tipo string. Exemplo: "red";
    - Escolha 5 cores que serão convertidas do nome da cor para o seu
    equivalente hexadecimal (pode ser qualquer tom);
    - Usando a estrutura switch, verifique se a cor passada por parâmetro é
    algum hexa escolhido. Se for, retorne a frase:
    "O hexadecimal para a cor [COR] é [HEXADECIMAL].";
    - Se a cor passada por parâmetro não estiver entre as selecionadas, mostre
    a frase:
    "Não temos o equivalente hexadecimal para [COR]."
*/

function convertToHex(cor){
    switch (cor) {
        case 'Vermelho':
            console.log(`O hexadecimal para a ${cor} é #C51605.`);
        break;
        case 'Verde':
            console.log(`O hexadecimal para a ${cor} é #609966.`);
        break
        case 'Amarelo':
            console.log(`O hexadecimal para a ${cor} é #F4E869.`);
        break;
        case 'Rosa':
            console.log(`O hexadecimal para a ${cor} é #F875AA.`);
        break;
        case 'Roxo':
            console.log(`O hexadecimal para a ${cor} é #7752FE.`);
        break;
        default:
        console.log(`Não temos o equivalente hexadecimal para ${cor}.`);
    }
}

/*
Tente mostrar o hexadecimal de 8 cores diferentes usando a função criada acima.
*/

console.log(convertToHex('Azul'))
console.log(convertToHex('Rosa'))
console.log(convertToHex('Branco'))
console.log(convertToHex('Verde'))
console.log(convertToHex('Laranja'))
console.log(convertToHex('Roxo'))
console.log(convertToHex('Amarelo'))
console.log(convertToHex('Laranja'))
   