/*
Os operadores de adição e subtração tem duas formas abreviadas:

var soma = 0;
soma++;

Os operadores ++ e -- causam efeito colateral, alterando o valor original da variável soma para 1 (no exemplo 
acima), sem precisar usar o operador de atribuição =.

A segunda forma abreviada é assim:

var soma = 0;
soma += 1;

Que é o mesmo que fazer isso:

var soma = 0;
soma = soma + 1;

No caso, eu pego todo o valor da variável soma (zero), adiciono 1 e atribuo novamente à variável soma. Assim ela 
fica com o valor atualizado: 1.

Para multiplicação e divisão, funciona igual o segundo exemplo que mostrei:

var mult = 3;
mult *= 3;

Nesse caso, da multiplicação, a variável mult foi declarada com o valor 3. Depois eu peguei todo o valor dela, 
e multipliquei por 3, atribuindo o resultado à ela novamente.

Seria o mesmo que fazer:

var mult = 3;
mult = mult * 3;

Agora a variável mult tem o valor 9. 

*/