// Aprendendo a usar parametros no IIEF 
// Essa aula tá sem som não consegui entender nada kkk 
// 3 formas de se comunicar com o usuario pela tela do navegador 

/*
Diferença entre usar getElementsBy... e querySelector/querySelectorAll 

No getElementsBy... quando vc inclui um novo elemento, ele contabiliza aquela mudança, 

Diferente do querySelector que fica estático, para incluir uma mudança vc deve atribuir novamente o elemento a ele.
Para usar o querySelector, devemos chamar o elemento igual quando vamos estilizar no css.


Aqui é bem parecido com esse código:
onClick={(e) =>
    {
        e.preventDefault()
        resyncAccesscode(
        user.hikId
        )
    }

Você tem um metodo que faz o lister do botão e coloca um callback para fazer a página não enviar a informação. 

//Ainda não entendi como funciona o callback :/ 

$button.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Fome :)')
}, false);



*/

(function(){
    'Use Strict';

    var clienteCiente = alert('Estou ciente dos risco e desejo continuar');

})(window);

(function(){
    'Use Strict';

    var name = prompt("Qual seu nome?")

    if (name)
        console.log('Olá ' + name);
    else
        console.log('Sem nome');

})(window);


(function(){
    'Use Strict';

   var del = confirm ('Deseja realmente excluir?');

    if (del)
        console.log ('Excluido com sucesso!', del);
    else 
        console.log ('Ação cancelada', del);

})(window);









