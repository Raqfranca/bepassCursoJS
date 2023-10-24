// Crie uma função que receba dois argumentos e retorne a soma dos mesmos.

function soma(x,y){
    return x+y
}

// Declare uma variável que receba a invocação da função criada acima, passando dois números quaisquer por argumento, 
//e somando `5` ao resultado retornado da função.

var invocaSoma = (soma(8,9))+5;

console.log(invocaSoma);

// Qual o valor atualizado dessa variável?
// 22

// Declare uma nova variável, sem valor.

var novaVariavel; 

/*
Crie uma função que adicione um valor à variável criada acima, e retorne a string:
    O valor da variável agora é VALOR.
Onde VALOR é o novo valor da variável.
*/

novaVariavel = 7;

function monstrandoValor(){
    return "O valor da variável agora é " + novaVariavel + '.' + ' Onde ' + novaVariavel +' é o novo valor da variável.'
} 

// Invoque a função criada acima.

console.log(monstrandoValor());

// Qual o retorno da função? (Use comentários de bloco).

/*
O valor da variável agora é 7. 
Onde 7 é o novo valor da variável.
*/

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos;
2. Se qualquer um dos três argumentos não estiverem preenchidos, a função deve retornar a string:
    Preencha todos os valores corretamente!
3. O retorno da função deve ser a multiplicação dos 3 argumentos, somando `2` ao resultado da multiplicação.
*/

function tresArgumentos(x,y,z){
    if(x == null || y == null || z == null){
        return "Preencha todos os valores corretamente!"
    }else{
        return (x*y*z)+2
    }
}

// Invoque a função criada acima, passando só dois números como argumento.

console.log(tresArgumentos(7,5))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//Preencha todos os valores corretamente!

// Agora invoque novamente a função criada acima, mas passando todos os três argumentos necessários.

console.log(tresArgumentos(7,5,9))

// Qual o resultado da invocação acima? (Use comentários para mostrar o valor retornado).

//317 

/*
Crie uma função com as seguintes características:
1. A função deve receber 3 argumentos.
2. Se somente um argumento for passado, retorne o valor do argumento.
3. Se dois argumentos forem passados, retorne a soma dos dois argumentos.
4. Se todos os argumentos forem passados, retorne a soma do primeiro com o segundo, e o resultado, dividido pelo 
terceiro.
5. Se nenhum argumento for passado, retorne o valor booleano `false`.
6. E ainda, se nenhuma das condições acima forem atendidas, retorne `null`.
*/

/* function muitosIf(x,y,z){
    if(y == null || z == null){
        return x
    }else if( z == null){
        return x + y
    }else if ( x == null || y == null || z == null){
        return false
    }else if (x, y, z){
        return (x+y)/z
    }else{
        return 'null'
    }
} */

function muitosIf(x,y,z){
    if(x || y == null || z == null){
        return x
    }else if(x || y || z == null){
        return x + y
    }else if ( x == null || y == null || z == null){
        return false
    }else if (x, y, z){
        return (x+y)/z
    }else{
        return 'null'
    }
} 


// Invoque a função acima utilizando todas as possibilidades (com nenhum argumento, com um, com dois e com três.) 
//Coloque um comentário de linha ao lado da função com o resultado de cada invocação.

console.log(muitosIf(2))
//2


console.log(muitosIf(2,3))
// Errado 