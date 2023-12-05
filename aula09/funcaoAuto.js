// IIFE - Uma função auto executável

/*
Isso é uma função anonima: 

function() {
    return 1+ 2
}; 

Nunca vamos utilizar ela assim, pq não estamos passando nenhum nome ou colocando ela em uma vaviavel
Quando a função está dessa forma, ela não consegue ser chamada. 

Mas podemos tranformar ela em função auto executável

Estava dando um erro que eu não conseguia usar a função auto junto com outras, mas descobri que foi por conta do hoisting 
que ocorre na outra função 

Vantagem: Deixa tudo dentro do escopo local, por isso usamos IIFE nos exercicios 

*/

(function() {
    console.log(1 + 2);
})();

