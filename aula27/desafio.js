/*
Aproveitando a lib DOM que fizemos na semana anterior, crie agora para ela
métodos semelhantes aos que existem no array, mas que sirvam para os
elementos do DOM selecionados.
Crie os seguintes métodos:
- forEach, map, filter, reduce, reduceRight, every e some.

Crie também métodos que verificam o tipo do objeto passado por parâmetro.
Esses métodos não precisam depender de criar um novo elmento do DOM, podem
ser métodos estáticos.

Métodos estáticos não obrigam o uso do `new`, podendo ser usados diretamente
no objeto, como nos exemplos abaixo:
DOM.isArray([1, 2, 3]); // true
DOM.isFunction(function() {}); // true
DOM.isNumber('numero'); // false

Crie os seguintes métodos para verificação de tipo:
- isArray, isObject, isFunction, isNumber, isString, isBoolean, isNull.
O método isNull deve retornar `true` se o valor for null ou undefined.
*/

function DOM(selector) {

    this.element = document.querySelectorAll(selector);

    this.on = function(eventType, callback) {
        Array.from(this.element).forEach(function(element) {
            element.addEventListener(eventType, callback);
        });
    };

    this.off = function(eventType, callback) {
        Array.from(this.element).forEach(function(element) {
            element.removeEventListener(eventType, callback);
        });
    };

    this.get = function() {
        return this.element;
    };

    
    this.forEach = function(callback) {
        Array.from(this.element).forEach(callback);
    };

    this.map = function(callback) {
        return Array.from(this.element).map(callback);
    };

    this.filter = function(callback) {
        return Array.from(this.element).filter(callback);
    };

    this.reduce = function(callback, initialValue) {
        return Array.from(this.element).reduce(callback, initialValue);
    };

    this.reduceRight = function(callback, initialValue) {
        return Array.from(this.element).reduceRight(callback, initialValue);
    };

    this.every = function(callback) {
        return Array.from(this.element).every(callback);
    };

    this.some = function(callback) {
        return Array.from(this.element).some(callback);
    };
}

DOM.isArray = function(obj) {
    return Array.isArray(obj);
};

DOM.isObject = function(obj) {
    return typeof obj === 'object' && obj !== null;
};

DOM.isFunction = function(obj) {
    return typeof obj === 'function';
};

DOM.isNumber = function(obj) {
    return typeof obj === 'number';
};

DOM.isString = function(obj) {
    return typeof obj === 'string';
};

DOM.isBoolean = function(obj) {
    return typeof obj === 'boolean';
};

DOM.isNull = function(obj) {
    return obj === null || obj === undefined;
};

// Exemplos de uso dos métodos estáticos
console.log(DOM.isArray([1, 2, 3])); // true
console.log(DOM.isFunction(function() {})); // true
console.log(DOM.isNumber('numero')); // false

var $a = new DOM('[data-js="link"]');

function handleCLick(e) {
    e.preventDefault();
    console.log('clicou');
    $a.off('click', handleCLick);
}

$a.on('click', handleCLick);

console.log('Elementos selecionados:', $a.get());
console.log('$a é filho de body?', $a.get()[0].parentNode === document.body);
