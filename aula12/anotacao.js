/*
Objetos 
- São mutáveis
- Manipulados por referência: Significa que eu posso referenciar ele em outro lugar e conseguir fazer alterações 
no objetos
*/
console.log('Criando os objetos')

var obj = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
}

console.log(obj)

var obj2 = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
}

console.log(obj2)

//Mutavel - Consigo mudar o valor 

console.log('Modificando o objeto')

obj.prop1 = 'Propriedade 1'
console.log(obj)

console.log('Deletando uma propriedade do objeto')
delete obj.prop3
console.log(obj)

console.log('Exemplo de manipulação com referencia')

var objCopy = obj
console.log(objCopy === obj)

objCopy.prop1 = 'Nova prop1'

console.log(objCopy)
console.log(obj)

/*
Existe 3 formar de criar objetos: 
- Forma literal (forma mais rapida) 
- Contrutor(new)  
- Object.create()
*/

//Literal 
var objLiteral = {
    prop1: 'prop1',
    prop2: 'prop2',
    prop3: 'prop3'
}

//Contrutor 
var newObj = new Object()
console.log(newObj)

// Usando a função do Object - Passei null pq não quero que ele crie um objeto com um prototype especifico. 
var objNovo = Object.create(null)
console.log(objNovo)

// Métodos de objetos 

// Object.keys - Retorna um array contendo as chaves do objeto
console.log('Método Object.keys');
console.log(Object.keys(obj));

// obj2.isPrototypeOf(obj4) - Verifica se obj2 tem uma relação de herança com obj4.
var obj4 = Object.create(obj2);
console.log(obj2.isPrototypeOf(obj4));

// JSON.stringify - Transforma o objeto em um JSON
var  objJson = JSON.stringify(obj)
console.log(objJson)

// JSON.parse - Transforma uma string JSON de volta para um objeto
var objParse = JSON.parse(objJson)
console.log(objParse)

/*
Métodos de Arrays 
- push(): Adiciona um ou mais itens ao final do array.
- pop(): Remove o último item do array.
- join(): Converte o array em uma string, utilizando o separador especificado.
- reverse(): Inverte a ordem dos elementos no array.
- sort(): Ordena os elementos do array.
*/

var planetas = ['Mercúrio', 'Vênus', 'Terra', 'Marte', 'Júpiter', 'Saturno', 'Urano', 'Netuno'];

console.log('Exemplo push')
planetas.push('Plutão')
console.log(planetas)

console.log('Exemplo pop')
planetas.pop()
console.log(planetas)

console.log('Exemplo join')
console.log(planetas.join(", "))

console.log('Exemplo reverse')
planetas.reverse();
console.log(planetas)

console.log('Exemplo sort')
planetas.sort();
console.log(planetas)