var MinhaVar = 'minhavariavel';

function MinhaFunc (y, x){
    return (x + y);
}

// ES 6 ou ES 2015
let num =2;
const PI = 3.14;

var numeros = [1,2,3];
numeros.map(function (valor){
    return valor * 2;

});
 //essa linha é a mesma coisa que o cód de cima ES 20165
numeros.map(valor => valor *2);



class Matematica{
    soma (x, y){
        return x + y;
    }
}

var n1: any = 'dsghd'; //pode usar any ou não precisa tipar a variável
n1 = 4;