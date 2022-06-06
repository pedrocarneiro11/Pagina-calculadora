function insert(x) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + x;
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
}
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1);
    // função back precisa apagar apenas o ultimo elemento da string
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
        // comando eval computa a operação 
    }
    else{
        document.getElementById('resultado').innerHTML = "Nada...";
    }
}