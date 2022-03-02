import ArbolBinario from "./modules/ArbolBinario.js";

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
TODO completar UI
TODO completar algoritmo 
*/

export function buscarJefeComun(arbol, worker1, worker2){
    let flagWorker1 = false,
        flagWorker2 = false,
        nodoJefe;

    if (node === null) { // El nodo {1} es nulo
        return false;
    } else if (value === worker1) { // {2} encontrar nodo
        flagWorker1 = true;
        return flagWorker1;
    } else if (value === worker2) { // {2} encontrar nodo
        flagWorker2 = true;
        return flagWorker2;
    } else if (value < node.value) { // {3} Buscar desde el nodo izquierdo
        return this.searchRecursive(node.left, value);
    } else { // {4} Buscar desde el nodo a la derecha
        return this.searchRecursive(node.right, value);
    }

    flagWorker1 = arbol.searchRecursive(arbol.root, worker1);
    flagWorker2 = arbol.searchRecursive(arbol.root, worker2);

    return nodoJefe;
}