(function(){
    'use strict'
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE. - OK
    2. Adicione a diretiva 'use strict'; - OK 
    3. Crie um arquivo index.html e adicione esse script à ele. - OK 
    */

    /*
    Em todos os exercícios desse desafio, nós vamos utilizar expressões
    regulares! Para isso, iremos usar o texto abaixo. Coloque-o em uma
    variável chamada `text`:
    "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de "O Centauro de Luvas", foi um militar, político, abolicionista e monarquista brasileiro."
    */
    
    var text = "Manuel Marques de Sousa, Conde de Porto Alegre (Rio Grande, 13 de junho de 1804 – Rio de Janeiro, 18 de julho de 1875), apelidado de O Centauro de Luvas, foi um militar, político, abolicionista e monarquista brasileiro."

    /*
    Vamos começar com umas brincadeiras fáceis :D
    Troque o nome "Manuel Marques de Sousa" pelo seu nome, e mostre o resultado
    no console:
    */

    var myName = "Joana Alvez Lima"; 
    var newText = text.replace(/Manuel Marques de Sousa/g, myName);

    console.log( 'Adicionando seu nome no texto: ' + newText );
    

    /*
    Agora, substitua a palavra "brasileiro" por sua cidade natal e mostre no
    console.
    Ex: Se você for da São Paulo, substitua por "paulista".
    */

    var christmasCity = "de Mogi das Cruzes"; 
    var newText = text.replace(/brasileiro/g, christmasCity);

    console.log( 'Trocando naturalidade: ' + newText );
    
    /*
    Substitua todos os números por um traço `-`. Cada caractere de número deve
    ser um traço. Mostre o resultado no console:
    */

    var dash = "-"; 
    var newText = text.replace(/[0-9]/g, dash );

    console.log( 'Trocando números por -:' + newText);
    
    /*
    Substitua todas as letras (somente letras) de "D" maiúsculo até "h"
    minúsculo por "0" (número zero). Mostre o resultado no console:
    */

    var zero = 0; 
    var newText = text.replace(/[D-Za-h]/g, zero );

    console.log( 'Trocando de "D" a "h" por "0": ' + newText );
    
    /*
    Substitua todos os "A" (maiúsculos ou minúsculos) por "4".
    Mostre o resultado no console:
    */

    var four = 4; 
    var newText = text.replace(/A|a/g, four );

    console.log( 'Trocando "A" e "a" por "4": '  + newText);

    /*
    Substitua a frase "O Centauro de Luvas", deixando-a em caixa alta, usando
    o método `toUpperCase()`. Mostre o resultado no console:
    */

    var newText = text.replace(/O Centauro de Luvas/g, function(capturaTotal){
        return capturaTotal.toLocaleUpperCase();
    });

    console.log( '"O Centauro de Luvas" em caixa alta:' + newText );
    
    /*
    Agora iremos substituir as datas no formato "13 de junho de 1804" para
    "13/06/1804". A primeira coisa a fazer é criar uma função chamada
    `getMonthNumber`, que irá receber um parâmetro (será o nome do mês) e deverá
    retornar o número correspondente a esse mês.
    Ex: Se o usuário entrar com "março", deve retornar "03" (em string mesmo).
    Números com menos de dois dígitos devem ter um zero na frente.
    Crie então a função e mostre no console os retornos para os meses de março,
    setembro e dezembro.
    Use um console.log para cada mês, usando a frase:
    "O mês de [NOME DO MÊS] é representado pelo número [NÚMERO DO MÊS]."
    */

    function getMonthNumber(monthName){
        var month = {
            'janeiro': '01',
            'fevereiro': '02',
            'março':'03',
            'abril': '04',
            'maio': '05',
            'junho': '06',
            'julho': '07,',
            'agosto': '08',
            'setembro': '09',
            'outubro': '10',
            'novembro': '11',
            'dezembro': '12'
        } 
        return month[monthName];
    };

    var monthName = 'março'; 
    var monthNumber = getMonthNumber(monthName);
    console.log('O mês de ' + monthName + ' é representado pelo número '+ monthNumber + ' .');

    var monthName = 'setembro'; 
    var monthNumber = getMonthNumber(monthName);
    console.log('O mês de ' + monthName + ' é representado pelo número '+ monthNumber + ' .');
    
    var monthName = 'dezembro'; 
    var monthNumber = getMonthNumber(monthName);
    console.log('O mês de ' + monthName + ' é representado pelo número '+ monthNumber + ' .');

    /*
    Agora, declare uma variável chamada `regexDate` que irá receber a expressão
    regular que irá fazer o match com as datas. Crie grupos de captura para o
    dia, o mês e o ano. Para os meses, você pode fazer o match somente com os
    meses que estão no texto, não precisa adicionar todos.
    Com o que vimos até agora, você consegue fazer :D
    Mostre a regex no console.
    */

    var regexDate = /(\d\d) de (junho|julho) de (\d\d\d\d)/g;

    console.log( 'Regex que vai fazer o match com as datas do texto: ' + regexDate );

    /*
    Agora crie a função que irá fazer o replace dos dados. A função será chamada
    de `replaceDate`. Ela deve retornar a data no formato:
    "[DIA]/[MÊS]/[ANO]"
    Após criar a função, faça o replace das datas no texto, mostrando no
    console o resultado.
    */

    //Isso daqui eu não entendi direito não, tentar refazer amanha :) 

    function replaceDate(regex, day, month, year){
        return day + "/" + getMonthNumber(month) + '/' + year;
    };

    console.log(text.replace(regexDate, replaceDate));
    
})()
