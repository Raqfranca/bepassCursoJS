// Sync - Quando o software segue uma ordem "cronologica de criação" para rodar os comandos 

// Exemplo:

/* 
(function(){
    'use strict';

    console.log('Eu sou Sync ' + 1);
    console.log('Eu sou Sync ' + 2);
    console.log('Eu sou Sync ' + 3);

}) ();
*/

/*

Async - Quando precisamos processar dados mas eles aguardam algum tipo de ação, por exemplo a 
entrada de dados de um usuario ou o evento de um click, eles não segue o processo natural de rodar
de leitura de software.

*/

/* 
(function(){
    'use strict'

    console.log(0);

    

    console.log('Bacana')


})() 
*/

// Event Loop - Pego que eu entendi é uma tecnica usada para que os eventos Async não travem a tela. 

/*
 Por exemplo: Lembra na ultima aula que tinha alert entrava quando se entra na tela? Então enquanto o usuario não responde 
 o resto da tela não era redenrizado. 

 Colocando o sistema no Async, o acho que não aconteseria isso. 

*/

//setTimeout() - Só é executado uma vez
//clearTimeout()


//setInterval() - Executa até ser informado quando deve parar, se não informar uma fim ele vai executar em loop
//clearInterval()

// Função recursiva 

// Criando um temporizador 

// Utilizar o data-js para utilizar o elemento no JS, não usar class 


(function(document, window){
    'use strict';

    var counter = 0;
    var $button = document.querySelector('[data-js="button"]');
    var temporizador; 

    function timer (){
        console.log('timer', counter++);
    }
    temporizador = setInterval(timer, 1000);

    $button.addEventListener('click', function(){
        clearInterval(temporizador);
    }, false);
    
})(document, window);
















