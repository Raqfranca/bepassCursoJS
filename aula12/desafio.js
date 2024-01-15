(function() {
    /*
    Envolva todo o conteúdo desse arquivo em uma IIFE. - ok
    */

    /*
    Crie um objeto chamado `person`, com as propriedades:
        `name`: String
        `lastname`: String
        `age`: Number
    Preencha cada propriedade com os seus dados pessoais, respeitando o tipo
    de valor para cada propriedade.
    */

    var person = {
        name: "Duda",
        lastname: "Dello Russo",
        age: 25
    }


    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    console.log(Object.keys(person))

    /*
    Crie um array vazio chamado `books`.
    */
     var books = []
   
    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    books.push( 
     {
        name: 'Deuses Americanos',
        pages: 576
     })
     
    books.push({
        name: 'O império do efêmero',
        pages: 352
    })
     
    books.push({
        name: 'Flores partidas',
        pages: 464
    })

    
    /*
    Mostre no console todos os livros.
    */
    
     console.log(books)


    /*
    Remova o último livro, e mostre-o no console.
    */
    
    var bookRemove = books.pop()
    console.log(bookRemove)

    /*
    Mostre no console os livros restantes.
    */
    
    console.log(books)

    /*
    Converta os objetos que ficaram em `books` para strings.
    */

    var booksAsString = JSON.stringify(books);


    /*
    Mostre os livros nesse formato no console:
    */   
    
    console.log(booksAsString);

    /*
    Converta os livros novamente para objeto.
    */

    var booksAsObjects = JSON.parse(booksAsString);

    console.log('Agora os livros são objetos novamente:');
    console.log(booksAsObjects)

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    
    for (var i = 0; i < books.length; i++){
        for (var prop in books[i]){
            console.log(prop + ': ' + books[i][prop])
        }
    }
  
    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    
    var myName = ["D", "u", "d", "a"]

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */

    console.log( '\nMeu nome é:' );
    console.log(myName.join(""))

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    
    console.log( '\nMeu nome invertido é:' );
    console.log(myName.reverse())

    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */

    console.log( '\nAgora em ordem alfabética:' );
    console.log(myName.sort())

})()