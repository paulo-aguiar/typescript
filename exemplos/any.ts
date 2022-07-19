// a propriedade any não é uma boa prática
// any é um tipo que pode receber qualquer tipo

let valorAny: any;  

valorAny = 3;
valorAny = 'quatro';
valorAny = true;

let valorString1: string = 'teste';
valorString1 = valorAny;  // aceita qualquer tipo, inclusive uma string 
let valorString2: string = 'testao';
valorString2 = valorAny;

function somarString(string1: string, string2: string) {
  console.log(string1 + string2)
}

somarString(valorString1, valorString2)
somarString('Olá, ', 'como vai?')
