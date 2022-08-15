var a;//declarar
var b = 'b';//declarar e inicializar o asignar
b = 'bb'; //asignacion
var a = 'aa'//redeclaracion 

var fruit = 'apple';
console.log(fruit);

function bestFruit(){
    console.log(fruit);
}
bestFruit();

function countries(){
    country = 'Peru'; //si no se declara la variable y esta dentro de una funcion, se coloca scope global
    console.log(country);
}
countries();
console.log(country);