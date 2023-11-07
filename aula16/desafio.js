    (function(){
    'use strict';
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE. - OK
    2. Adicione a diretiva 'use strict'; - ok
    3. Crie um arquivo index.html e adicione esse script à ele. - ok
    */

    /*
    Declare uma variável chamada `name` que receba seu primeiro nome.
    Mostre no console todas as letras do seu nome separadas, com a frase:
    - "[LETRA] é a [POSIÇÃO]ª letra do meu nome."
    Ex: no caso do nome ser "Fernando", deve mostrar as frases:
    - "F é a 1ª letra do meu nome."
    - "e é a 2ª letra do meu nome."
    E assim por diante, até a última.
    */

    var name = "Raquel"; 

    console.log( 'As letras do seu nome são:' );

    //Só por que estamos utilizamos o FOR, podemos declarar duas variaveis juntas
    // O "clean" seria usar um var para cada variavel. 

    for (var index = 0, nameLen = name.length; index < nameLen; index++) {
        var posicao = index + 1
        console.log( name.charAt(index) + ' é a ' + posicao + 'ª letra do meu nome.')
    }

    /*
    - Declare uma variável chamada `fullName`, que receba seu nome completo,
    escrito no formato de slug (caixa baixa e palavras separadas por um traço).
    Ex: o nome "Fernando Daciuk" ficaria "fernando-daciuk"
    - Faça a primeira letra de cada nome ficar em caixa alta, e troque o traço
    por um espaço.
    - Detalhe: o código que você escrever abaixo deve funcionar para qualquer
    nome, então fique à vontade para usar as artimanhas que já viu até agora no
    curso para fazer isso funcionar corretamente :)
    - Mostre no console o nome no formato slug, e o resultado final. Use um
    console.log para cada formato.
    */
    
    var fullName = 'raquel-oliveira-santos'

    console.log('Meu nome em slug: ' + fullName )

    var nameParts = fullName.split('-');
    var convertedName = '';

    //console.log(nameParts);

    for (var index = 0, nameLen = nameParts.length; index < nameLen; index++) {
        // Capitalize a primeira letra de cada palavra
        var capitalizedWord = nameParts[index].charAt(0).toUpperCase() + nameParts[index].slice(1);;
        
        convertedName += capitalizedWord + ' ';

      }
      
      // Remova o espaço extra no final e exiba o nome convertido
      console.log('Nome convertido a partir de um slug: ' + convertedName.trim());
      
    /*
    Forma do professor - Bem mais simples 

      var newFullName = fullName.split('-').map(function(name){
        return name.charAt(0).toUpperCase() + name.slice(1);
      }).join(' ');

      console.log(nemFullName); 
    
    */ 

    /*
    - Crie um array com 5 nomes. Reduza esses nomes a uma única string, separando
    cada nome por vírgula. Entre o penúltimo e o último nome, o separador deve
    ser um "e". No final, concatene com a frase: " são meus amigos.".
    O resultado final deve ficar mais ou menos assim:
    - "João, Maria, Roberto, Pedro e Marcos são meus amigos."
    - Detalhe: o código abaixo deve funcionar com um array de qualquer tamanho.
    5 nomes foi somente uma sugestão ;)
    */

    //var friends = ['João', 'Maria', 'Roberto', 'Pedro', 'Marcos'];

    var friends = ['Ana', 'Breno', 'Flavio'];

    var myFriends = friends.slice(0, -1).join(', ') + ' e ' + friends.slice(-1) + ' são meus amigos.';
    console.log(myFriends);

    /*
    Usando o replace(), faça a string "Roberto" virar "Roberta".
    Mostre o resultado no console.
    */

    var name = 'Roberto';
    var newName = name.replace('to', 'ta');
    console.log(newName);
    
    /*
    Mostre no console a parte "nando" da string "Fernando". Use o método que
    faz a busca do final para o início da string.
    */

    var name = 'Fernando';
    var partName = name.slice(3,8);
    console.log( 'Parte de uma string: ' + partName );
    

    /*
    Declare uma variável chamada `myName`, que receba o seu primeiro nome,
    escrito de forma natural.
    Mostre no console esse nome, mas com as letras intercalando entre maiúsculas
    e minúsculas.
    - Detalhe: o código abaixo deve funcionar da mesma forma para qualquer nome,
    de qualquer tamanho, escrito de qualquer forma.
    Ex.: Nomes que deveriam funcionar: "Fernando", "RoBertO", "gabriEla", etc.
    */

    var myName = "RaQUEl"
    var strangerName = '';

    for (var index = 0, nameLen = myName.length; index < nameLen; index++) {
      if (index % 2 === 0) {
        strangerName += myName[index].toUpperCase();
      } else {
        strangerName += myName[index].toLowerCase();
      }
    }

    console.log( 'Nome com letras intercaladas entre caixa alta e baixa:' + strangerName );
    
})()
