//Hoisting 
/*
Quando tenho uma função literal, posso chamar a função e depois declarar ela. 
*/

function myFunction(){
    var number1 = 1;
    var number2 = 2;
    return sum();
    function sum(){
        return number1 + number2
    }
}

console.log(myFunction()) 

// PQ? 

// Quando o JS vai processar o código, ele faz isso:
// Ele pega a função que foi declara no final no código e joga ela para cima. 

function myFunction(){
    function sum(){
        return number1 + number2
    }
    var number1 = 1;
    var number2 = 2;
    return sum();
}

console.log(myFunction()) 

// Mas isso ocorre se a função for LITERAL 

// Isso não funciona: 

/* function myFunction(){
    var number1 = 1;
    var number2 = 2;
    return sum();
    var sum = function sum(){
        return number1 + number2
    }
}
 */
//console.log(myFunction())

// PQ?? 

/*
Quando declaramos uma função anônima para uma variável, o JS vai compilar fazendo o hoisting com a variavel,
mas só vai "lê" o conteúdo quando chegar na linha onde o conteudo está declarado. 
*/

/* function myFunction(){
    var number1 = 1;
    var number2 = 2;
    var sum = undefined;
    return sum ();
    sum = function sum(){
        return number1 + number2
    }
} */

