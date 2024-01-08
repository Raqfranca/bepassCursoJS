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

  firstChild:
  - Retorna o primeiro nó filho de um elemento.
  - Pode incluir nós de texto ou comentários, além de elementos.

  lastChild:
  - Retorna o último nó filho de um elemento.
  - Também pode incluir nós de texto, comentários ou elementos.

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

  children:
  - Retorna uma coleção HTML de todos os filhos de um elemento.
  - Apenas inclui elementos HTML, excluindo nós de texto ou comentários.

  firstElementChild:
  - Retorna o primeiro elemento filho de um elemento.
  - Ignora nós de texto ou comentários, trazendo apenas elementos HTML. 

  childElementCount: 
  - Retorna o número de elementos filhos de um elemento.
  - Equivalente a element.children.length.

  hasAttribute: 
  - Método que verifica se o elemento possui o atributo especificado.
  - Retorna um valor booleano (true se tiver, false se não tiver).
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
  
  console.log($main.children)
  console.log("HTML")
  console.log($main.firstElementChild)
  console.log($main.childElementCount)
  console.log($main.children.length)
  console.log($main.hasAttribute('class'))
  
  var $main2 = document.querySelector('.main-content') 
  console.log($main2.firstChild.nodeType)
  console.log($main2.firstChild.nodeValue)
  console.log($main2.firstChild.nodeName)
  console.log($main2.firstChild.nextSibling.nodeValue)
  console.log($main2.firstChild.nextSibling.nodeName)

}) ();


