var Traductor = (function(){
    const EN = {
        'hola': 'hello',
        'adios': 'bye',

    }
    const FR = {
        'hola': 'salut',
        'adios': 'adieu',
        
    }
    const PR = {
        'hola': 'ola',
        'adios': 'adeus',        
    }
    const IDIOMAS = {
        EN: EN,
        FR: FR,
        PR: PR
    }
    function traducir(texto, lenguaje){  
        return IDIOMAS[lenguaje.toUpperCase()][texto]      
       /*  if(lenguaje == "EN"){
           return EN[texto]
        }
        if(lenguaje == "FR"){
           return FR[texto]
        }
        if(lenguaje == "PR"){
            return PR[texto]
        } */
    }
    return{
        traducir: traducir,
        translate: traducir
    }
})()

console.log(Traductor.traducir("hola", "EN"))
console.log(Traductor.traducir("hola", "FR"))
console.log(Traductor.traducir("hola", "PR"))
console.log(Traductor.translate("hola", "PR"))