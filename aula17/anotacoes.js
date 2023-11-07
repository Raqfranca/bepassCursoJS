//Expressões Regulares

// Site: https://regex101.com/ 

// Formato litegal de regex

var regex = /m/;

console.log(regex);

var texto = 'Padrões simples são construídos utilizando os caracteres que você deseja encontrar correspondências diretas. Por exemplo, o padrão /abc/ encontra combinações de caracteres em strings apenas quando os caracteres  forem encontrados juntos e na ordem especificada. Esse padrão será encontrado com sucesso nas strings "Olá, você conhece o abc?" e "Os mais recentes aviões evoluíram do slabcraft.". Em ambos os casos, a correspondência estará no subconjunto abc. Porém, o padrão não será encontrado no texto "Grab crab" pois apesar de conter os mesmos caractes do padrão, estes não aparecem na ordem especificada.';

console.log(texto.match(/abc/g));

console.log(texto.match(/abc | são | [abc]/g));

//console.log(texto.match(/\w/g));

console.log(texto.match(/\d/g));

var text = '879879879879jhuuftftftfyfdkbsdakbdkjabbkkbkj  khsjakhgjkhgjhajhgjhjghg  ansdkjgjbsdjab'

console.log(text.match(/\d/g));

