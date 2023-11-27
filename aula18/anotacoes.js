// Continuação das expressões regualres

// [] - Lista, traz o resultado da lista de caracteres 

// () - Grupo e captura 

// \w - Representa os caracteres

// \d - Representa digitos númericos 

// \s -  Representa a captura de espaços em branco

// \t - Representa a tabulação, basicamente é o espaço feito pelo tab, mas o \s também captura esse espaço. 

// /\n - Representa a captura de quebra de linha, meu texto não tem nenhum exemplo disso :(

var texto = 'Padrões 56598987 simples (148) são construídos utilizando os caracteres que (156) você deseja encontrar (789871) correspondências diretas. Por exemplo, o padrão /abc/ encontra combinações de caracteres em strings apenas quando os caracteres  forem encontrados juntos e na ordem especificada. Esse padrão será encontrado com sucesso nas strings "Olá, você conhece o abc?" e "Os mais recentes aviões evoluíram do slabcraft.". Em ambos os casos, a correspondência estará no subconjunto abc. Porém, o padrão não será encontrado no texto "Grab crab" pois apesar de conter os mesmos caractes do padrão, estes não aparecem na ordem especificada.';

console.log(texto.match(/\s/g));

// /\n - Representa a captura de quebra de linha, meu texto não tem nenhum exemplo disso :(

console.log(texto.match(/\n/g));

// . - QUalquer caracter menos a quebra de linha 

console.log(texto.match(/./g));

// Diferença entre o \w e o . - O \w vai capturar a sequencia de caractere e o . tbm conta o espaço branco
// Caso queira um resultado parececido com o ., precisa,ps colocar \s para capturar o espaço.

console.log(texto.match(/.............../g));

console.log(texto.match(/\w\w\w\w\w\w\w\w\s\w/g));

// Caracteres de negação '^', quando eu quero que ele não me retorne um valor com uma seguencia de caracteres. 

console.log('Negação');
console.log(texto.match(/[^aeiou]/g));

// \W - Ele nega alfanúmericos 
// Ele captura caracter com pontuação. 

console.log('Ele captura caracteres com pontuação.');
console.log(texto.match(/\W/g));

// \S - Qualquer caracter que não seja espaço branco 

console.log(texto.match(/\S/g));

// \D - Ele nega números e só captura letras 
// Ele captura caracter com pontuação

console.log('Nega numeros');
console.log(texto.match(/\D/g));

// \S - Não captura espaços em branco

console.log('Sem espaçoes em branco');
console.log(texto.match(/\S/g));

//Captura de todos os caracteres + espaços em branco

console.log('Tudão');
console.log(texto.match(/[\S\s]/g));

// --------------REPETIDORES --------------------- //  

console.log('Repetidores');
// Explicação estou falando que quero pegar numeros "\d" e nas chaves {2,3} estou passando que deve repitir essa 
// captura duas vezes e no máximo 3. 
// Seria como: console.log(texto.match(/\d\d\d/g));
console.log(texto.match(/\d{2,3}/g));

// Intervalo aberto 
// Explicação estou falando que quero pegar numeros "\d" e nas chaves {2,3} estou passando que deve repitir essa 

console.log('Repetidores com intervalo aberto');
// no minimo 2
console.log(texto.match(/\d{2,}/g));
// exatamente 2 
console.log(texto.match(/\d{2}/g));

//Opcional - Significa que é opcional ter o outro caracter, ele vai me trazer o retorno com e 
// e sem o que foi informado como opcional. 

//Retorna todos espaço em branco + o unico espaço em branco seguido de número que ele encontrou
console.log('Com Opcional');
console.log(texto.match(/\s\d?/g));

//Retorna o unico espaço em branco seguido de número que ele encontrou
console.log('Sem Opcional');
console.log(texto.match(/\s\d/g));













