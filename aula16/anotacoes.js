// Use Strict - Usado para corrigir erros do ECMAScript 3.

/*Exemplo: O caso de declarar variavel sem a palavra var, quando fazemos isso a vaviavel
fica no escopo global, quando usamos 'use strict', esse bug não acontece porque ele vai apontar um erro. 

Impotante utilizar 'use strict', principalmente quando vamos codar em código compartilhado.
*/

/*
Lembrando, quando criamos o IIFE, jogamos todo o nosso código dentro de uma função, 
fazendo com o que com as nossas variaveis sejam sempre locais, mas isso não resolve o 
bug de declarar a variavel sem var.  
*/
//Exemplo pratico: 

/*
(function(){
    myLastName= "França :)"
    console.log(myLastName);
})();

(function(){
    'use strict';
    myName = "Raquel :)"
    console.log(myName);
})();
*/

//Outra funcionalidade é quando estamos 


//Com New - Estamos estanciando o objeto e não consigos acessar os dados como se eles fossem variavel. 

/* (function(){

    function Person(name, lastName, age){
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    console.log( new Person('Jorge', 'Capadocia', 57));
})(); */

// Sem New - Chamos igual uma função e conseguimos acessar as imformações igual variaveis locais 
/* 
(function(){

    function Farm(animal1, animal2, animal3){
        this.animal1 = animal1;
        this.animal2 = animal2;
        this.animal3 = animal3;
    }

    console.log(Farm('Cow','Dog','Cat'));
})();

console.log(animal1, animal2, animal3); */

// Sem New mas com 'use Strict' - ele transforma o this em undefined, normalmente ele é underfined
/* 

(function(){
    'use strict';
    function Food(food1, food2, food3){
        this.food1 = food1;
        this.food2 = food2;
        this.food3 = food3;
    }

    console.log(Food('Popcorn', 'Rice', 'Apple'));
})();

console.log(food1, food2, food3);
*/

// Delete: Utilizado para deletar propriedade de objetos, 
//no 'use strict' ele retorna um erro e fora ele retorna falso

//No meu teste node ele não retornou falso, mas no console do brower sim (:

/* (function(){
    'use strict'
    var obj = {
        prop1: 'prop1',
        prop2: 'prop2',
        prop3: 'prop3'
    };
    console.log(delete obj.prop1)
    console.log(delete obj)
}) */

// Em função não podemos ter parametros duplicados e em objetos não podemos ter priedades duplicadas.
// Com 'use strict' - ele aponta um erro, sem ele ignora um dos valores declarados. 

////////////////////////////////////// PROPRIEDADES DO OBJETO STRING /////////////////////////////

// Lenght - Igual array informa a quantidade de caracteres 
console.log('Amanda'.length);

//charAt() - Retorna o caractere informado no parametro
console.log('Amanda'.charAt(3));

