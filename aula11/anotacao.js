//do /while

//Exemplo de while

var counter = 1

 while(counter < 10){
    console.log(counter++ );
 }

 // Qual a diferença de for e while? 

 /*
 FOR:

 O loop for é geralmente utilizado quando você sabe antecipadamente quantas vezes deseja que o bloco de código seja executado.

Ele possui uma sintaxe mais compacta e específica para definir a inicialização, a condição de continuação e a expressão de 
incremento/decremento em uma única linha.

Exemplo:
*/
 console.log("Exemplo FOR");

 for (let i = 0; i < 5; i++) {
   console.log(i);
 }

/* 
While:

O loop while é usado quando você não sabe quantas vezes o bloco de código deve ser repetido antecipadamente e a repetição 
depende de uma condição booleana.

Ele possui uma sintaxe mais flexível, com a condição de continuação sendo verificada antes da execução do bloco de código.
 */

//Exemplo:

    console.log("Exemplo While");

     let i = 0;
     while (i < 5) {
       console.log(i);
       i++;
     }

