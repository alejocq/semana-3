function fizzBuzz(numero){
    if(numero % 3 === 0){
        if(numero % 5 === 0){
            console.log("Fizz-Buzz " + numero )
            return
        }
        console.log("Fizz " + numero )
    }else if(numero % 5 === 0){
        console.log("Buzz " + numero)
    }else{
        console.log(numero)
    }
}

//var numero = prompt("Ingresar numero")

fizzBuzz(15)
fizzBuzz(3)
fizzBuzz(5)
fizzBuzz(30)
fizzBuzz(2)