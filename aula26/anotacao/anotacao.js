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

  .appendChild(element):
  - Adiciona um elemento como filho ao elemento selecionado.
  - Se o elemento já existir em outro lugar, ele é movido para a nova posição.

  .insertBefore(node, beforeWhom):
  - Insere um nó antes de outro nó específico.
  - Recebe dois parâmetros: o nó a ser inserido e o nó antes do qual será inserido.

  .cloneNode(deep):
  - Clona um nó existente no DOM.
  - O parâmetro deep é um valor booleano que determina se também deve ser clonado o conteúdo interno do elemento. 

  .hasChildNodes():
  - Verifica se o elemento possui nós filhos.
  - Retorna um valor booleano (true se tiver filhos, false se não tiver).

  .removeChild(child):
  - Remove um nó filho específico do elemento pai.
  - Recebe como parâmetro o nó filho a ser removido.

  .replaceChildren(newChild):
  - Substitui todos os filhos de um elemento pelos fornecidos.

  .createTextNode(text):
  - Cria um novo nó de texto com o texto especificado.
  - Usado para criar conteúdo de texto que pode ser adicionado a um elemento.

  .createElement(tagName):
  - Cria um novo elemento HTML com a tag especificada.
  - Útil para criar elementos que podem ser adicionados à estrutura do DOM.
  
  className:
  - No JavaScript, o atributo class do HTML é representado por className.
  - className funciona como um getter e setter para a classe do elemento.
  - Retorna e define a classe como uma string.

  .setAttribute(name, value):
  - Define ou adiciona um novo atributo a um elemento HTML.
  - Pode ser usado para manipular qualquer atributo, incluindo Id e Class.

  .getAttribute(name):
  - Obtém o valor de um atributo específico de um elemento HTML.
  - Útil para recuperar valores de atributos, incluindo Id e outros.
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

  $main.appendChild

  var $mainContent = document.querySelector('.main-content') 
  console.log($mainContent.firstChild.nodeType)
  console.log($mainContent.firstChild.nodeValue)
  console.log($mainContent.firstChild.nodeName)
  console.log($mainContent.firstChild.nextSibling.nodeValue)
  console.log($mainContent.firstChild.nextSibling.nodeName)

  var $mainHeader = document.querySelector('.main-header')

  //$mainContent.appendChild($mainHeader);

  var $fistText = $mainContent.firstChild;
  var $fisTitle = $mainHeader.firstChild;
  $mainHeader.insertBefore($fistText, $fisTitle)

  var $cloneMainHeader = $mainHeader.cloneNode(true);
  $mainContent.appendChild($cloneMainHeader);
  console.log(document.querySelectorAll('.main-header').length);

  var $h1 = $mainHeader.firstElementChild;
  console.log($h1.hasChildNodes());

  $mainHeader.removeChild($h1)

  var $mainFooter = document.querySelector('.main-footer');

  //$main.replaceChildren($cloneMainHeader, $mainFooter);

  var  newTextNode = document.createTextNode('Febre e muita dor:(')

  $main.appendChild(newTextNode);

  var $newP = document.createElement('p')
  $newP.appendChild(newTextNode)

  $main.appendChild($newP);

  console.log($main.className)
  console.log($main.getAttribute('class'))
  console.log($main.setAttribute('data-js'))



}) ();


