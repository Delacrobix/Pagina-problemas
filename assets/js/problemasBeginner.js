/* 
*Definir una funcion num_max() que tome como argumento dos numeros y devuelva el mayor de ellos.
 */
export function num_max(num1, num2){
    if(!isNaN(num1) && !isNaN(num2))
        if(num1 > num2){
            return num1;
        }else if(num2 > num1){
            return num2;
        }else{
            return "Son iguales";
        }
    else{
        return "Ingrese un numero valido";
    }
}
/* Esto es un comentari para probar */
/* 
* Realize una funcion que recibe un caracter y que retorne true si es vocal
 */
export function isVocal(character){
    switch(character){
        case 'a':
            return true;
        case 'e':
            return true;
        case 'i':
            return true;
        case 'o':
            return true;
        case 'u':
            return true;
        default:
            return false;
    }
}

/* 
*Escribir una funcion sum() y una funcion multp() que sumen y multipliquen  respectivamente
*Respectivamente todos los numeros de una lista. Por ejemplo sum([1, 2, 3]) debe retornar 6 y 
*multp([1, 2, 4]) debe retornar 8
 */
export function sum(arraySum){
    let total_sum = 0;

    for(let i = 0; i < arraySum.length; i++){
        if(isNaN(arraySum[i])){
            return "Ingrese caracteres numericos"
        }

        total_sum += arraySum[i];
    }

    return total_sum;
}

export function multp(arrayMultp){
    let total_multp = arrayMultp[0];

    if(isNaN(arrayMultp[0])){
        return "Ingrese caracteres numericos"
    }

    for(let i = 1; i < arrayMultp.length; i++){
        if(isNaN(arrayMultp[i])){
            return "Ingrese caracteres numericos"
        }

        total_multp *= arrayMultp[i];
    }

    return total_multp;
}

/* 
*Definir una funcion inversa() que calcule la inversion de una cadena.
 */
export function inversa(string_parameter){
    let inverso = "";

    for(let i = string_parameter.length - 1; i >= 0;  i--){
        inverso += string_parameter[i];
    }

    return inverso;
}

/* 
*Dado un numero, definir si es un numero primo
 */
export function esPrimo(number){
    if(number%2 != 0 && number > 1){
        for(let i = 3; i < number; i++){
            if(number%i == 0){
                return false;
            }
        }
        return true;
    }else if(number == 2){
        return true;
    }else{
        return false;
    }
}