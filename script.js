
/*
function media(n1, n2){
    var nota1 = n1
    var nota2 = n2
    var media = (nota1 + nota2)/2
    //console.log(media)

    return media;
}

var resultado = media(6, 7)

 var m = media;

 var resultado2 = m(2,3)

console.log(resultado)

console.log(resultado2)
*/
/*
var media = function (n1,n2) { // Função Anônima
    return (n1 + n2) / 2
}

//var m = media(5,6) 

console.log(media(5,6)) 
*/

var media = (n1,n2) => { // Arrow Function
    return (n1 + n2) / 2
}
console.log(media(2,3))