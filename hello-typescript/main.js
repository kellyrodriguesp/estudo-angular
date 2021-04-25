var MinhaVar = 'minhavariavel';
function MinhaFunc(y, x) {
    return (x + y);
}
// ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
//essa linha é a mesma coisa que o cód de cima ES 20165
numeros.map(function (valor) { return valor * 2; });
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
var n1 = 'dsghd'; //pode usar any ou não precisa tipar a variável
n1 = 4;
