// Continuação das expressões regualres

// [] - Lista, traz o resultado da lista de caracteres 

// () - Grupo e captura 

// \w - Representa os caracteres

// \d - Representa digitos númericos 

// \s -  Representa a captura de espaços em branco

// \t - Representa a tabulação, basicamente é o espaço feito pelo tab, mas o \s também captura esse espaço. 

// /\n - Representa a captura de quebra de linha, meu texto não tem nenhum exemplo disso :(

var texto = 'Padrões simples são construídos utilizando os caracteres que você deseja encontrar correspondências diretas. Por exemplo, o padrão /abc/ encontra combinações de caracteres em strings apenas quando os caracteres  forem encontrados juntos e na ordem especificada. Esse padrão será encontrado com sucesso nas strings "Olá, você conhece o abc?" e "Os mais recentes aviões evoluíram do slabcraft.". Em ambos os casos, a correspondência estará no subconjunto abc. Porém, o padrão não será encontrado no texto "Grab crab" pois apesar de conter os mesmos caractes do padrão, estes não aparecem na ordem especificada.';

console.log(texto.match(/\s/g));

// /\n - Representa a captura de quebra de linha, meu texto não tem nenhum exemplo disso :(

console.log(texto.match(/\n/g));

// . - QUalquer caracter menos a quebra de linha 

console.log(texto.match(/./g));

// Diferença entre o \w e o . - O \w vai capturar a sequencia de caractere e o . tbm conta o espaço branco
// Caso queira um resultado parececido com o ., precisa,ps colocar \s para capturar o espaço.

console.log(texto.match(/.............../g));

console.log(texto.match(/\w\w\w\w\w\w\w\w\s\w/g));

// Caracteres de negação ^, quando eu não quero que retorno um valor com esse resultado. 

console.log(texto.match(/[^aeiou]/g));

// \W - Ele nega alfanúmericos 
// Ele captura caracter com pontuação. 

console.log(texto.match(/\W/g));

// \S - Qualquer caracter que não seja espaço branco 

console.log(texto.match(/\S/g));
















