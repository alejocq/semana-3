var miCalculadora = (function(){
    console.log("Funcion autoejecutable")
    function suma(n1, n2){
      return  n1 + n2
    }
    function resta(n1, n2){
      return  n1 - n2
    }
    function multiplica(n1, n2){
      return n1 * n2
    }
    function divide(n1, n2){
      return n1 / n2
    }
    return{
        suma: suma,
        resta: resta,
        multiplica: multiplica,
        divide: divide
    }
})()

//console.log(miCalculadora)
console.log(miCalculadora.suma(1, 2))
console.log(typeof(miCalculadora))