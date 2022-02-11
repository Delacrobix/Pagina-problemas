import { num_max, isVocal, sum, multp, inversa, esPrimo } from "./problemasBeginner.js";

document.getElementById("btn_result").addEventListener('click', mostrarMayor);
document.getElementById("btn_vocal").addEventListener('click', mostrarVocal);
document.getElementById("num_inputs").addEventListener('keyup', imprimirInputs);
document.getElementById("input_textoParaInvertir").addEventListener('keyup', mostrarTextoInverso);
document.getElementById("input_numeroPrimo").addEventListener('keyup', mostrarSiEsPrimo);

function mostrarMayor(){
    let num1 = Number.parseFloat(document.getElementById("num_mayor1").value);
    let num2 = Number.parseFloat(document.getElementById("num_mayor2").value);

    document.getElementById("mostrar_mayor").innerHTML = num_max(num1, num2);
}

function mostrarVocal(){
    let caracter = document.getElementById("input_vocal").value.toLowerCase();

    if(isVocal(caracter)){
        document.getElementById("es_vocal").innerHTML = "ES VOCAL";
    }else{
        document.getElementById("es_vocal").innerHTML = "NO ES VOCAL";
    }
}

function imprimirInputs(){
    let num = Number.parseInt(document.getElementById("num_inputs").value);
    let cadena = "";

    for(let i = 0; i < num; i++){
        cadena += '<input type="text" class ="input_array">';
    }

    document.getElementById("sec_sum_multp").innerHTML = cadena;
    document.getElementById("sec_button").innerHTML = '<input type="button" id="btn_inputs" value="Enviar">';
    document.getElementById("btn_inputs").addEventListener('click', mostrarMultiplicacionSuma);
}

function formarArray(){
    let array = [], collection = document.getElementsByClassName("input_array");

    for(let i = 0; i < collection.length; i++){
        array[i] = Number.parseFloat(collection[i].value);
    }

    return array;
}

function mostrarMultiplicacionSuma(){
    let arreglo = formarArray();

    document.getElementById("label_suma").innerHTML = sum(arreglo);
    document.getElementById("label_multp").innerHTML = multp(arreglo);
}

function mostrarTextoInverso(){
    let text = document.getElementById("input_textoParaInvertir").value;

    document.getElementById("label_textoInverso").innerHTML = inversa(text);
}

function mostrarSiEsPrimo(){
    let num = Number.parseFloat(document.getElementById("input_numeroPrimo").value);

    if(esPrimo(num)){
        document.getElementById("¿es_primo?").innerHTML = "ES PRIMO";
    }else{
        document.getElementById("¿es_primo?").innerHTML = "NO ES PRIMO";
    }

    if(document.getElementById("input_numeroPrimo").value == ""){
        document.getElementById("¿es_primo?").innerHTML = ""
    }
}