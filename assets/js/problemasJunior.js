/* 
*Dado un string. Determinar si todo parentesis, llave o corchete, fue cerrado y 
*señalar donde.
 TODO hacer que marque las partes donde fue usado cada parentesis*/ 

function isClosed(cadena){
    let pila = [], pilaPosicion = [], ultimoElemento, cadenaAux = cadena;
    let largo = cadena.length;

    for(let i = 0; i < largo; i++){
        if(cadena[i] == '(' || cadena[i] == '[' || cadena[i] == '{'){
            pila.push(cadena[i]);
            pilaPosicion.push(i);
            ultimoElemento = pila.length - 1;
        }else if((cadena[i] == ')' && pila[ultimoElemento] == '(') || 
                    (cadena[i] == '}' && pila[ultimoElemento] == '{') || 
                        (cadena[i] == ']' && pila[ultimoElemento] == '[')){
            pilaPosicion.push(i);

            cadenaAux = marcarElemento(pilaPosicion, cadenaAux);

            pila.pop();
            ultimoElemento = pila.length - 1;
        }
    }

    if(pila.length == 0){
        return cadenaAux;
    }else{
        return "Hay errores en:" + cadenaAux;
    }
}

function marcarElemento(pilaPosicion, cadenaAux){
    let nuevaCadena = "";

    for(let i = cadenaAux.length - 1; i >= 0; i--){
        if(i == pilaPosicion[pilaPosicion.length - 1]){
            nuevaCadena += "'";
            pilaPosicion.pop();
        }else{
            nuevaCadena += cadenaAux[i];
        }
    }

    return nuevaCadena;
}

let stri = "(Hoy tengo) que contar { lo sigui(entr[ksdjjsadf])}";

console.log(isClosed(stri));


/* 
*Dada una estructura jerarquica (una empresa por ejemplo). A su ves esta estructura
*tiene forma de arbol. ¿Cual seria el primer jefe comun en esta jerarquia si introducimos
*dos trabajadores en cargos arbitrarios? 
*/

function buscarJefeComun(arbol, worker1, worker2){

}