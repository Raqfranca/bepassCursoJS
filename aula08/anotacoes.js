/*
Preciso revisar isso, achei meio confuso :/
Sempre nomear as funções, não criar mais função anomimas em var. 
Colocar o mesmo nome da var na função. 

Assim como array, as funções tbm são um tipo de objeto e possuem propriedades, tipo name

Exemplo: 
*/ 

var sum = function calculateSum(par1, par2){
    return par1 + par2  
}
console.log(sum.name)

/*
Programação funcionaL 

Funções de primeira classe = objetos, conseguimos manipular do mesmo jeito. 
*/ 

//Objeto literais 
var car ={
    marca: 'Fiat',
    modelo: 'Uno' 
};

// Função literal 

function soma(x,y){
    return x + y
}

// Posso colocar um objeto como retorno da função

function retornoObjeto(){
    return {
        name: 'Sorte',
        idade: '22'
    }
}
console.log(retornoObjeto());

function retornoObjetoVar(){
    var umObjeto = {
        name: 'Sorte',
        idade: '22'
    }
    return umObjeto
}
console.log(retornoObjetoVar());

// Função dentro da função 

function adicionar(x){
    return function(y){
        return x + y;
    }; 
}

var add = adicionar(2);
console.log(add(3))
