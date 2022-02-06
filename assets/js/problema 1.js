/* PROBLEMA 1
*Dada una lista de alturas de paredes, crear una función que calcule la cantidad de nieve que atrapan las paredes.

Ejem:
                 I
        I  N  N  I
        I  N  I  I  N  I

    [0, 2, 0, 1, 3, 0, 1]

*Las 'I' representan la altura de las paredes y las 'N' las zonas con nieve para el vector de ejemplo.
*/

var altura_paredes = [0, 1, 0, 2, 1, 0, 3, 2, 1, 1, 1, 5, 0, 2];
var p = [1, 2, 0, 4, 2, 0, 1];

function hallarConcavidad (array_paredes){
    let pared_elegida, nieve_acomulada = 0, pivot  = 0, flag = false, aux_right, aux_left;
    let ubicacion_mayor, j;

    pared_elegida = Math.max(...array_paredes);

    aux_right = array_paredes.indexOf(pared_elegida);
    aux_left = aux_right;

    while(flag == false){

        ubicacion_mayor = aux_right;

        for(j = ubicacion_mayor + 1; j < array_paredes.length; j++){
            if(pared_elegida == array_paredes[j]){
                pivot = array_paredes[j];
                
                nieve_acomulada = nieve_acomulada + calcularCantidadNieve(array_paredes, j, ubicacion_mayor);

                aux_right = j;
                flag = false
            }else if(array_paredes[j] > pivot){
                pivot = array_paredes[j];

                aux_right = j;
                flag = false
            }
        }

        if(aux_right != j){
            flag = true;
        }

        nieve_acomulada = nieve_acomulada + calcularCantidadNieve(array_paredes, aux_right, ubicacion_mayor);
        pivot = 0;
        ubicacion_mayor = aux_left;

        for(j = ubicacion_mayor - 1; j > 0; j--){
            if(pared_elegida == array_paredes[j]){
                pivot = array_paredes[j];
                
                nieve_acomulada = nieve_acomulada + calcularCantidadNieve(array_paredes, j, ubicacion_mayor);

                aux_left = j;
                flag = false
            }else if(array_paredes[j] > pivot){
                pivot = array_paredes[j];

                aux_left = j;
                flag = false
            }
        }

        nieve_acomulada = nieve_acomulada + calcularCantidadNieve(array_paredes, aux_left, ubicacion_mayor);
        pivot = 0;

        if(aux_left != j){
            flag = true;
        }
    }  
    console.log(nieve_acomulada);
}

function calcularCantidadNieve(h_paredes, i, ubicacion_aux){
    let nieve, distancia_paredes, paredes_internas = 0;

    for(let j = ubicacion_aux + 1; j < i ;j++){
        paredes_internas = paredes_internas + h_paredes[j];
    }

    distancia_paredes = (i - ubicacion_aux);
    nieve = (h_paredes[ubicacion_aux] * distancia_paredes) - paredes_internas;

    return nieve;
}

hallarConcavidad(p);