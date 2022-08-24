var minhaVar = 'minha variavel';
function minhaFuncao(x, y) {
    return x + y;
}
var num = 2;
var PI = 3.14;
var numeros = [1, 2, 3];
//esse código é igual ao de baixo;
numeros.map(function (valor) {
    return valor * 2;
});
numeros.map(function (valor) { return valor * 2; });


var Matematica = /** @class */ (function () {
    function Matematica() {
    }
    Matematica.prototype.soma = function (x, y) {
        return x + y;
    };
    return Matematica;
}());
