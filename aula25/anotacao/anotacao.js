(function(){
    'use strict';

    /*
    Temos a primeira forma de fazer de o querySelector dos elementos e na segunda forma é de um jeito mais 'simplificado' 

    - Não entendi o porque do false no final da função :( 
    */

/*
    var $a = document.querySelector('[data-js="link"]');
    document.querySelector('[data-js="div"]')
    .addEventListener('click', function(event){
    alert('clicou na div');
    }, false); 
*/

/* 
    $a.addEventListener('click', function(event){
    event.preventDefault();
    alert('clicou na a');
    }, false); 
*/

  function on(element, event, callback){
    document.querySelector(element)
    .addEventListener(event, callback, false)
  }

  on('[data-js="link"]', 'click', function(event){
    event.preventDefault();
    alert('clicou na div');
  })

  on('[data-js="div"]', 'click',function(event){
    event.preventDefault();
    alert('clicou na a');
  })
    
})();