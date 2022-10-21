//exercicio 1

function cubicSquare(){
    for(x = 1; x <= 10; x++){
        console.log(x**3)
    }
}

//exercicio 2

function divisiblesFor(limitador, divisor){
    for(x = 1; x <= limitador; x++){
        if(x % divisor == 0){
            console.log(x)
        }
    }
}

//exercicio 3

function stringElement(string, number){
    console.log(string[number].toUpperCase())
}

//exercicio 4 

function stringSlicer(string, number){
    let palavra = ""
    for(let x = 0; x < number; x++){
        palavra += string[x]
    }
        console.log(palavra.toUpperCase())
}

//exercicio 5

function stringRest(string, number){
    let palavra = ""
    for(let x = number; x < string.length; x++){
        palavra += string[x]
    }
        console.log(palavra.toUpperCase())
}

//exercicio 6

function countVowels(string){
    let contador = 0
    for(let x = 0; x < string.length; x++){
        if(string[x] == "a"){
            contador++
    	}else if(string[x] == "e"){
            contador++
        }else if(string[x] == "i"){
            contador++
        }else if(string[x] == "o"){
            contador++
        }else if(string[x] == "u"){
            contador++
        }
    }
        console.log(contador)
}

//exercicio 7

function countTextOccurrences(string, letra){
    let contador = 0
    for(let x = 0; x < string.length; x++){
        if(string[x].toUpperCase() == letra.toUpperCase()){
            contador++
        }
    }
    console.log(contador)
}

//exercicio 8

function textBackwards(string){
    let palavra = ""
    for(let x = string.length-1; x >= 0; x--){
        palavra += string[x]
    }
        console.log(palavra)
}

//exercicio 9

function removeBlank(string){
    palavra = ""
    for(let x = 0; x < string.length; x++){
        if(string[x] != " "){
            palavra += string[x]
        }
    }
        console.log(palavra)
}

//exercicio 10

function encryptText(string){
    palavra = ""
    for(let x = 0; x < string.length; x++){
        if(string[x] == "A"){
            palavra += "X"
        }else if(string[x] == "E"){
            palavra += "Y"
        }else if(string[x] == "I"){
            palavra += "W"
        }else if(string[x] == "O"){
            palavra += "K"
        }else if(string[x] == "U"){
            palavra += "Z"
        }else if(string[x] == "a"){
            palavra += "x"
        }else if(string[x] == "e"){
            palavra += "y"
        }else if(string[x] == "i"){
            palavra += "w"
        }else if(string[x] == "o"){
            palavra += "k"
        }else if(string[x] == "u"){
            palavra += "z"
        }else{palavra += string[x]}
    }
        console.log(palavra)
}