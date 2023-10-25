// Declarar uma variável qualquer, que receba um objeto vazio.
 
var objeto = {}

/*
Declarar uma variável `pessoa`, que receba suas informações pessoais.
As propriedades e tipos de valores para cada propriedade desse objeto devem ser:
- `nome` - String
- `sobrenome` - String
- `sexo` - String
- `idade` - Number
- `altura` - Number
- `peso` - Number
- `andando` - Boolean - recebe "falso" por padrão
- `caminhouQuantosMetros` - Number - recebe "zero" por padrão
*/

var pessoa = {
    nome: 'Raquel', 
    sobrenome: 'Oliveira', 
    sexo: 'Feminino', 
    idade: 26, 
    altura: 1.60, 
    peso: 65, 
    andando: false,
    caminhouQuantosMetros: 0
}       
  
/*
Adicione um método ao objeto `pessoa` chamado `fazerAniversario`. O método deve
alterar o valor da propriedade `idade` dessa pessoa, somando `1` a cada vez que
for chamado.
*/

pessoa.aniversario = function(){
    ++pessoa.idade
}

/*
Adicione um método ao objeto `pessoa` chamado `andar`, que terá as seguintes
características:
- Esse método deve receber por parâmetro um valor que representará a quantidade
de metros caminhados;
- Ele deve alterar o valor da propriedade `caminhouQuantosMetros`, somando ao
valor dessa propriedade a quantidade passada por parâmetro;
- Ele deverá modificar o valor da propriedade `andando` para o valor
booleano que representa "verdadeiro";
*/

pessoa.andar = function(metros){
    pessoa.caminhouQuantosMetros += metros
    pessoa.andando =  true
}

//console.log(pessoa.andar(100))
//console.log(pessoa.andando)
// console.log(pessoa.caminhouQuantosMetros)

/*
Adicione um método ao objeto `pessoa` chamado `parar`, que irá modificar o valor
da propriedade `andando` para o valor booleano que representa "falso".
*/

pessoa.parar = function(){
    pessoa.andando =  false
}

// console.log(pessoa.parar())
// console.log(pessoa.andando)

/*
Crie um método chamado `nomeCompleto`, que retorne a frase:
- "Olá! Meu nome é [NOME] [SOBRENOME]!"
*/

pessoa.nomeCompleto = function(){
    return "Olá! Meu nome é " + pessoa.nome + " " + pessoa.sobrenome + "!"
}

//console.log(pessoa.nomeCompleto())

/*
Crie um método chamado `mostrarIdade`, que retorne a frase:
- "Olá, eu tenho [IDADE] anos!"
*/

pessoa.mostrarIdade = function(){
    return "Olá, eu tenho " + pessoa.idade + " anos !"
}

//console.log(pessoa.mostrarIdade())

/*
Crie um método chamado `mostrarPeso`, que retorne a frase:
- "Eu peso [PESO]Kg."
*/

pessoa.mostrarPeso = function(){
    return "Eu peso " + pessoa.peso + "Kg."
}

//console.log(pessoa.mostrarPeso())

/*
Crie um método chamado `mostrarAltura` que retorne a frase:
- "Minha altura é [ALTURA]m."
*/

pessoa.mostrarAltura = function(){
    return "Minha altura é " + pessoa.altura + "m."
}

//console.log(pessoa.mostrarAltura())

/*
Agora vamos brincar um pouco com o objeto criado:
Qual o nome completo da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.nomeCompleto())
//Olá! Meu nome é Raquel Oliveira!
/*
Qual a idade da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.mostrarIdade())
//

/*
Qual o peso da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.mostrarPeso())
//

/*
Qual a altura da pessoa? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

console.log(pessoa.mostrarAltura())
//

/*
Faça a `pessoa` fazer 3 aniversários.
*/

console.log(pessoa.aniversario());
console.log(pessoa.aniversario());
console.log(pessoa.aniversario());

/*
Quantos anos a `pessoa` tem agora? (Use a instrução para responder e
comentários inline ao lado da instrução para mostrar qual foi a resposta
retornada)
*/

console.log(pessoa.mostrarIdade())
//

/*
Agora, faça a `pessoa` caminhar alguns metros, invocando o método `andar` 3x,
com metragens diferentes passadas por parâmetro.
*/

console.log(pessoa.andar(100));
console.log(pessoa.andar(300));
console.log(pessoa.andar(500));
//

/*
A pessoa ainda está andando? (Use a instrução para responder e comentários
inline ao lado da instrução para mostrar qual foi a resposta retornada)
*/

pessoa.mostrarAndando = function(){
    if (pessoa.andando === true){
        return "Estou andando"
    }else{
        return "Estou parada"
    }
};

console.log(pessoa.mostrarAndando());

/*
Se a pessoa ainda está andando, faça-a parar.
*/

console.log(pessoa.parar())

/*
E agora: a pessoa ainda está andando? (Use uma instrução para responder e
comentários inline ao lado da instrução para mostrar a resposta retornada)
*/

console.log(pessoa.mostrarAndando());

/*
Quantos metros a pessoa andou? (Use uma instrução para responder e comentários
inline ao lado da instrução para mostrar a resposta retornada)
*/

pessoa.mostrarMetrosAndandos = function(){
    return "Andei " + pessoa.caminhouQuantosMetros + "m."
};

console.log(pessoa.mostrarMetrosAndandos());

/*
Agora vamos deixar a brincadeira um pouco mais divertida! :D
Crie um método para o objeto `pessoa` chamado `apresentacao`. Esse método deve
retornar a string:
- "Olá, eu sou o [NOME COMPLETO], tenho [IDADE] anos, [ALTURA], meu peso é [PESO] e, só hoje, eu já caminhei [CAMINHOU QUANTOS METROS] metros!"

Só que, antes de retornar a string, você vai fazer algumas validações:
- Se o `sexo` de `pessoa` for "Feminino", a frase acima, no início da
apresentação, onde diz "eu sou o", deve mostrar "a" no lugar do "o";
- Se a idade for `1`, a frase acima, na parte que fala da idade, vai mostrar a
palavra "ano" ao invés de "anos", pois é singular;
- Se a quantidade de metros caminhados for igual a `1`, então a palavra que
deve conter no retorno da frase acima é "metro" no lugar de "metros".
- Para cada validação, você irá declarar uma variável localmente (dentro do
método), que será concatenada com a frase de retorno, mostrando a resposta
correta, de acordo com os dados inseridos no objeto.
*/


// Agora, apresente-se ;)

pessoa.apresentacao = function(){
    var pronome; 
    var ano;
    var metro;

    if(pessoa.sexo === "Feminino"){
        pronome = 'a'
    }else {
        pronome = 'o' 
    };  

    if(pessoa.idade >= 1){
        ano = 'anos'
    }else {
        ano = 'ano' 
    }; 

    if(pessoa.caminhouQuantosMetros >= 1){
        metro = 'metros'
    }else {
        metro = 'metro' 
    }; 

    return 'Olá, eu sou ' 
        + pronome 
        + " " 
        + pessoa.nome 
        + " " 
        + pessoa.sobrenome 
        + ', tenho ' 
        + pessoa.idade 
        + ' ' 
        + ano 
        + ', ' 
        + pessoa.altura 
        + ' de altura, ' 
        + 'meu peso é ' 
        + pessoa.peso 
        + "Kg" 
        +" e só hoje eu já caminhei " 
        + pessoa.caminhouQuantosMetros 
        + ' ' 
        + metro 
        + '!'
}

console.log(pessoa.apresentacao());
