(function(){
    'use strict'
    /*
    1. Envolva todo o conteúdo desse desafio em uma IIFE. - OK
    2. Adicione a diretiva 'use strict'; - OK
    3. Crie um arquivo index.html e adicione esse script à ele. - Ok
    */

    /*
    Crie uma função chamada `cleanCPF`, que receba um CPF por parâmetro, e
    retorne esse CPF limpo (somente os números).
    Usando os CPFs abaixo, mostre no console que a limpeza funciona para todos
    eles! Use um console.log para cada CPF.
    - "049-214 3421-1"
    - "210.458.522-05"
    - "735 500 794 - 22"
    - "101.123-131x32"
    */

    var CPF1 = '049-214 3421-1'; 
    var CPF2 = '210.458.522-05';
    var CPF3 = "735 500 794 - 22";
    var CPF4 = "101.123-131x32";

    function cleanCPF (CPF){
        return CPF.replace(/\D/g, '');
    }

    console.log( 'Limpando CPFs:' );
    console.log(cleanCPF(CPF1));
    console.log(cleanCPF(CPF2));
    console.log(cleanCPF(CPF3));
    console.log(cleanCPF(CPF4));
    

    /*
    Usando os CPFs limpos acima, deixe-os com a formatação correta de CPF.
    Ex.: "999.999.999-99"
    Mostre o resultado no console.
    */

    function formattingCPF (CPF){
       // return CPF.replace(/\d{3}'-'\d{3}'-'\d{3}'-'/g, );
       return CPF.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
    }

    console.log( '\nFormatando CPFs corretamente:' );
    let cpfLimpo1 = cleanCPF(CPF1);
    let cpfFormatado1 = formattingCPF(cpfLimpo1);
    console.log(cpfFormatado1);

    let cpfLimpo2 = cleanCPF(CPF2);
    let cpfFormatado2 = formattingCPF(cpfLimpo2);
    console.log(cpfFormatado2);

    let cpfLimpo3 = cleanCPF(CPF3);
    let cpfFormatado3 = formattingCPF(cpfLimpo3);
    console.log(cpfFormatado3);

    let cpfLimpo4 = cleanCPF(CPF4);
    let cpfFormatado4 = formattingCPF(cpfLimpo4);
    console.log(cpfFormatado4);

    /*
    Crie uma expressão regular que faça match com as palavras "junho" ou "julho",
    usando o mínimo de caracteres possíveis na regex.
    Para garantir que a regex funciona, teste-a usando o método match. Se houver
    o match, o método retorna um array com os matches. Caso contrário, ele
    retornará null.
    Mostre no console o resultado do match para a frase:
    "Os meses de janeiro, junho e julho começam com a letra j."
    O resultado deve ser:
    ["junho", "julho"]
    */
    
    // expressão regular = Regex que é uma abreviação de Regular expression

    const regexJunhoJulho = /\b[jJ]u[nl]ho\b/g;

    const phrase = "Os meses de janeiro, junho e julho começam com a letra j.";

    const resultRegexJunhoJulho = phrase.match(regexJunhoJulho);

    console.log( 'Match com as palavras "junho" ou "julho" para a frase "Os meses de janeiro, junho e julho começam com a letra j.' );
    console.log(resultRegexJunhoJulho);

    /*
    Crie uma expressão regular que faça o match com a abertura de uma tag
    HTML qualquer.
    Ex.: "<div>", "<section>", "<blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><section><blockquote>Texto <img /></blockquote></section></div>"
    O resultado deve ser:
    ["<div>", "<section>", "<blockquote>"]
    */

    const regexTagHTML = /<\w+>/g;

    const example = "<div><section><blockquote>Texto <a></a><img /></blockquote></section></div>";

    const resultRegexTagHTML = example.match(regexTagHTML);

    console.log( '\nMatch com a abertura de uma tag HTML:' );
    
    console.log(resultRegexTagHTML);

    /*
    Crie uma expressão regular que faça o match com uma tag HTML vazia, casando
    com a abertura e fechamento da tag.
    Ex.: "<div></div>", "<section></section>", "<blockquote></blockquote>".
    Use o método match e faça o teste com a marcação abaixo:
    "<div><ul><li></li><li></li><li><span></span></li></ul></div>"
    O resultado deve ser:
    ["<li></li>", "<li></li>", "<span></span>"]
    */

    const regexTagHTML1 = /<\w+><\/\w+>/g;

    const example1 = "<div><ul><li></li><li></li><li><a>teste :)</a><span></span></li></ul></div>";

    const resultRegexTagHTML1 = example1.match(regexTagHTML1);

    console.log( 'Match com tags HTML vazias (abertura e fechamento da tag):' );

    console.log(resultRegexTagHTML1);

    /*
    Vamos complicar um pouco agora :D

    Crie uma expressão regular que faça o match com um texto existente dentro de
    uma tag HTML. O texto deve ser capturado e substituído por:
    'O texto dentro da tag "[NOME DA TAG]" é "[TEXTO]"'

    Use a marcação abaixo para fazer o replace:
    "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>"

    A marcação deve permanecer como está, somente o texto deve ser substituído.
    No replace, utilize quebras de linha para deixar uma tag por linha.

    O resultado deve ser esse:
    <h1>O texto dentro da tag "h1" é "Título da página"</h1>
    <p>O texto dentro da tag "p" é "Este é um parágrafo"</p>
    <footer>O texto dentro da tag "footer" é "Rodapé"</footer>

    Uma dica: faça o match aos poucos. Para facilitar o teste, use o site
    https://regex101.com/#javascript e verifique se as capturas estão
    corretas, para depois aplicar no código ;)
    */

    const example2 = "<h1>Título da página</h1><p>Este é um parágrafo</p><footer>Rodapé</footer>";

    const regexTagHTML2 = example2.replace(/<(\w+)>(.*?)<\/\1>/g, 'O texto dentro da tag "$1" é "$2"\n');

    console.log( '\nFazer replace dos textos das tags:' );

    console.log(regexTagHTML2);

})()