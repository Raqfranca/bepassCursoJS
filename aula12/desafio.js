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
        name: "Raquel",
        lastname: "Lopes",
        age: 36
    };


    /*
    Mostre no console, em um array, todas as propriedades do objeto acima.
    Não use nenhuma estrutura de repetição, nem crie o array manualmente.
    */

    console.log( 'Propriedades de "person":' );
    var propertiesArray = Object.keys(person);
    console.log(propertiesArray);

    /*
    Crie um array vazio chamado `books`.
    */
    
    var books = [];

    /*
    Adicione nesse array 3 objetos, que serão 3 livros. Cada livro deve ter a
    seguintes propriedades:
    `name`: String
    `pages`: Number
    */
    
    books.push({
        name: "Crepusculo",
        pages: 416
    });
    
    books.push({
        name: "Malala",
        pages: 96
    });
    
    books.push({
        name: "Valente",
        pages: 113
    });

    /*
    Mostre no console todos os livros.
    */
    
    console.log( 'Lista de livros: ', books );

    /*
    Remova o último livro, e mostre-o no console.
    */
    
    var lastBook = books.pop();
    console.log( 'Livro que está sendo removido: ' + lastBook.name );

    /*
    Mostre no console os livros restantes.
    */
    
    var books = books

    console.log( 'Agora sobraram somente os livros:' + books );

    /*
    Converta os objetos que ficaram em `books` para strings.
    */

    var booksAsString = books.map(function(book) {
        return JSON.stringify(book);
    });
    
    //console.log(booksAsString);
    
    /*
    Mostre os livros nesse formato no console:
    */   
    
    console.log( 'Livros em formato string:' + booksAsString );

    /*
    Converta os livros novamente para objeto.
    */

    var booksAsObjects = booksAsString.map(function(bookString) {
        return JSON.parse(bookString);
    });
    
    console.log(booksAsObjects)

    //console.log( 'Agora os livros são objetos novamente:' + booksAsObjects );

    /*
    Mostre no console todas as propriedades e valores de todos os livros,
    no formato abaixo:
        "[PROPRIEDADE]: [VALOR]"
    */
    // ?

    /*
    Crie um array chamado `myName`. Cada item desse array deve ser uma letra do
    seu nome. Adicione seu nome completo no array.
    */
    // ?

    //console.log( '\nMeu nome é:' );

    /*
    Juntando todos os itens do array, mostre no console seu nome.
    */
    // ?

    //console.log( '\nMeu nome invertido é:' );

    /*
    Ainda usando o objeto acima, mostre no console seu nome invertido.
    */
    // ?

    //console.log( '\nAgora em ordem alfabética:' );
    /*
    Mostre todos os itens do array acima, odenados alfabéticamente.
    */
    // ?

})()