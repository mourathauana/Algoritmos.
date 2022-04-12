function somatorio(numeros){
    var somatorio=0;

    

    for (var i = 0; i < numeros.length; i++) {
        somatorio=somatorio + numeros[i]
    }
   console.log("somatorio: " + somatorio) 
}

var numbers = [1, 2, 3, 4, 5];
somatorio(numbers)