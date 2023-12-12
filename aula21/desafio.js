(function(document, window){
    'use strict';
    /*
    O desafio de hoje será um pequeno projeto: um cronômetro!
    As regras para criação do cronômetro são as seguintes:
    1. Crie um arquivo index.html e adicione esse script a ele; - OK
    2. Crie um campo `input` do tipo `text`, e inicie-o com um valor 0 (zero). - OK
    Ele será o nosso cronômetro;
    3. Crie 3 botões para as ações do cronômetro: Start, Stop e Reset; - OK 
    4. Ao clicar em Start, o valor do campo deve ser incrementado de 1 em 1, a
    cada segundo;
    5. Ao clicar em Stop, o cronômetro deve parar de contar;
    6. Ao clicar em Reset, o cronômetro deve zerar e parar de contar.

    Utilize o atributo data-js para nomear o campo e os botões. Você pode
    usar o nome que achar melhor, desde que ele seja semântico, ou seja, o nome
    dado ao elemento HTML deve definir o que o elemento é ou o que ele faz.
    */

    var $buttonStart = document.querySelector('[data-js="buttonStart"]');
    var $buttonStop = document.querySelector('[data-js="buttonStop"]');
    var $buttonReset = document.querySelector('[data-js="buttonReset"]');
    var $inputCounter = document.querySelector('[data-js="inputCounter"]');
    var interval;
    var segundos = 0;
    var minutos = 0;
    var horas = 0;

    function startCounter() {
        if (!interval) {
            interval = setInterval(function() {
                segundos++;

                if (segundos === 60) {
                    segundos = 0;
                    minutos++;

                    if (minutos === 60) {
                        minutos = 0;
                        horas++;
                    }
                }

                $inputCounter.value = (
                    horas.toString().padStart(2, '0') + ':' +
                    minutos.toString().padStart(2, '0') + ':' +
                    segundos.toString().padStart(2, '0')
                );
            }, 1000);
        }
    }

    function stopCounter() {
        clearInterval(interval);
        interval = null;
    }

    function resetCounter() {
        clearInterval(interval);
        interval = null;
        segundos = 0;
        minutos = 0;
        horas = 0;
        $inputCounter.value = '00' + ":" + '00' + ":" + '00';
    }

    $buttonStart.addEventListener('click', startCounter);
    $buttonStop.addEventListener('click', stopCounter);
    $buttonReset.addEventListener('click', resetCounter);


})(document, window);


