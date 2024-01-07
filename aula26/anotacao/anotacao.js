(function(){
 'use strict';

 /*
  DOM - Porque se chama API do DOM? 

  parentNode:
  - Propriedade que informa qual é o elemento pai da tag que foi selecionada.

  childNodes:
  - Retorna todos os filhos da tag selecionada em uma NodeList.
  - Inclui quebras de linha,"enter", como filhos.
  - A NodeList não é um array, mas pode ser acessada de forma semelhante.

  nextSibling: 
  - Retorna o irmão seguinte do elemento atual no DOM. 

  previousSibling:
  - Retorna o irmão anterior do elemento atual no DOM.

  nodeType:
  - Retorna um número que representa o tipo de nó.
    Exemplos:
      1: Elemento HTML
      3: Texto
      4: CDATA Section - Representa uma seção CDATA, que é usada para incluir blocos de texto que não devem ser interpretados como markup.
      8: Comment - Representa um comentário no HTML.
      7: Processing Instruction - Representa uma instrução de processamento.
      9: Document - Representa todo o documento HTML.
      10: Document Type Declaration (DTD) - Representa a declaração de tipo de documento, geralmente encontrada no início do documento HTML.
      11: Document Fragment - Representa um fragmento de documento que pode conter nós sem ter um nó pai direto no documento.

  nodeValue: 
  - Retorna o valor do nó.
  - Para elementos HTML, geralmente é nulo.
  - Para nós de texto, contém o texto do nó.
  - Consigo retornar comentários no código, eles tbm são considerados nós

  nodeName: 
  - Retorna o nome da tag HTML associada ao nó.
  - Para nós de texto, retorna #text.
  - Para nós de comentário, retorna #comment

  Dica: Para verificar se uma propriedade é suportada pelos navegadores, você pode utilizar o site https://caniuse.com/. 
  Isso é útil para garantir a compatibilidade do seu código em diferentes ambientes.
  
*/

  var $main = document.querySelector('.main');
  console.log($main.parentNode)
  console.log($main.childNodes)
  console.log($main.firstChild)
  console.log($main.lastChild)
  console.log($main.nextSibling)
  console.log($main.previousSibling)
  console.log($main.nodeType)
  console.log($main.firstChild.nodeType)

  var $main2 = document.querySelector('.main-content') 
  console.log($main2.firstChild.nodeType)
  console.log($main2.firstChild.nodeValue)
  console.log($main2.firstChild.nodeName)
  console.log($main2.firstChild.nextSibling.nodeValue)
  console.log($main2.firstChild.nextSibling.nodeName)

}) ();

