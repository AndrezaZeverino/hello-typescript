// Utilizando TS
var minhaVar = 'minha variavel';
function minhaFunc(x, y) {
    return x + y;
}
// ES 6 ou ES 2015
var num = 2;
var PI = 3.14;
//MAP é muito usado 
var numeros = [1, 2, 3];
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });
// OS DOIS CÓDIGOS ACIMA FAZEM A MESMA COISA. 
var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
