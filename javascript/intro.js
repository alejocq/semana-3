//VAR, LET, CONST
/* var a = 1;
let b = 2;

if(true){
    var a = 3;
    let b = 4;
    console.log(a)
    console.log(b)

}
console.log(a)
console.log(b) */

//FOR IN
let colores = ['blanco', 'negro', 'gris'];
console.log("FOR")
for(var i = 0; i < colores.length; i++ ){
    console.log(colores[i])
}
console.log("FOR IN")
for (let i in colores){
    console.log(i, colores[i])
}

//FOR OF
console.log("FOR OF")
for(let color of colores){
    console.log(color)
}

//FOR EACH
console.log("FOR EACH")
function muestraColor(color, pos){
    console.log(pos, color)
}


//colores.forEach(muestraColor);

colores.forEach(function (color, pos){
    console.log(pos, color)
})

//Funciones flecha
colores.forEach( (color, pos) => {
    console.log(pos, color)
})

colores.forEach(color => {
    console.log(color)
})

let suma = (n1, n2) => n1 + n2;

console.log(suma(1, 5))

//Funciones Recursivas

function factorial(numero){
    if(numero === 1){
        return 1
    } else {
        return numero * factorial(numero-1)
    }
}
let f5 = factorial(5)
console.log(f5)


//Objetos y Arrays

let mascotas = ['pez', 'perro']

let pelicula = {
    titulo: 'The expendables',
    duracion: 120,
    descripcion: 'Descripcion de la pelicula'
}

let prop = 'titulo';

console.log(pelicula.titulo);
console.log(pelicula['titulo']);
/* console.log(pelicula.prop); */
console.log(pelicula[prop]);

//Añadir un elemento al array
mascotas.push('Ninfa');
//Sacar ultimo elemento
let ultimaMascota = mascotas.pop()
console.log(ultimaMascota)

//Añadir un nuevo elemento al principio del array
mascotas.unshift(ultimaMascota);
console.log(mascotas)
//Elimina en la primera posicion
let primeraMascota = mascotas.shift()
console.log(primeraMascota)

//Elimina e inserta en las posiciones borradas
mascotas.splice(1, 2, primeraMascota)
console.log(mascotas)
let copiaMascotas = mascotas
copiaMascotas.push('perro')
console.log(mascotas)

//Metodo 1 para clonar arrays
let copiaMascotas1 = [].concat(mascotas);
copiaMascotas1.push('serpiente');
console.log(copiaMascotas1)

//Metodo 2 (spread operator)
let copiaMascotas2 = [...mascotas];
console.log(copiaMascotas2)

//Desestructuracion
/* let titulo = pelicula.titulo;
let descripcion = pelicula.descripcion
let duracion = pelicula.duracion */

let {titulo: t, descripcion, duracion} = pelicula
console.log('Titulo ' + t + ', Descripcion ' + descripcion + ', Duracion ' + duracion)

//let [ ,pez, ninfa, periquito] = mascotas
let [pez, ...resto] = mascotas
console.log(pez)
console.log(resto)

let peli1 = Object.assign({}, pelicula)
peli1.titulo = "Ejemplo"
console.log(peli1)

let peli2 = {...pelicula, descripcion: "Cambiando la descripcion"};
console.log(peli2)

console.log(`Titulo:   ${t}  , Descripcion   ${descripcion}  , Duracion   ${duracion}`)

//Funciones constructoras y Prototype
function Pelicula(titulo, descripcion, duracion, estreno){
    this.titulo = titulo
    this.descripcion = descripcion
    this.duracion = duracion
    this.estreno = estreno
    /* this.estaEstrenada = function(){
        return new Date().getFullYear() >= this.estreno
    } */
}
Pelicula.prototype.estaEstrenada = function(){
    return new Date().getFullYear() >= this.estreno
}
let peli100 = new Pelicula('Pelicula100', 'una descripcion', 100, 2000)
let peli101 = new Pelicula('Pelicula101', 'una descripcion', 101, 2020)

console.log(peli100.estaEstrenada())
console.log(peli101.estaEstrenada())

// 'Penny...'.repeat(3) => Penny....Penny...Penny...

String.prototype.repeat = function(numero){
    /* var repeticiones = ""
    for(let i = 0; i < numero; i++){
        repeticiones += this //This se refiere a lo que llama a la funcion (Penny)
    }    
    return repeticiones */
    return new Array(numero+1).join(this);
}
console.log('Penny...'.repeat(3))

//Class 
class Serie {
    constructor(titulo, episodios, descripcion, episodiosVistos=0){
        this.titulo = titulo;
        this.episodios = episodios;
        this.descripcion = descripcion;
        this.episodiosVistos = episodiosVistos;
    }

    episodiosPorVer(){
        return this.episodios - this.episodiosVistos;
    }
}

let twd = new Serie("The walking Dead", 200, "Una serie", 150)
let leftlovers = new Serie("The Leftlovers", 150, "Otra serie", 20)
let got = new Serie("GOT", 90, "Otra serie", 90)
let banshee = new Serie("Banshee", 30, "Otra serie", 30)
console.log(twd.episodiosPorVer())
const series = [twd, leftlovers, got, banshee]



//console.log(typeof(twd))

//Map, filter, reduce
const nums = [2, 3, 5, 6, 6, 10]

const tripleNums = nums.map((n) => n*3);
console.log(tripleNums)

const numsPares = tripleNums.filter((n)=> n % 2 === 0)
console.log(numsPares)

const sumaNumsPares = numsPares.reduce((acc, n) => {
    return acc += n    
}, 0);
console.log(sumaNumsPares)

function seriesVistas(misSeries){
    let seriesVistas = series.filter(serie => serie.episodiosPorVer() === 0);
    let nombreSeriesVistas = seriesVistas.map
      
}  /*  if(serie.episodiosPorVer > 0){
        return serie.titulo
    }
 */
console.log(seriesVistas)