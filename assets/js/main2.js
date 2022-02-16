import "https://unpkg.com/gojs/release/go-debug.js";
import ArbolBinario from "./modules/ArbolBinario.js";
import { buscarJefeComun } from "./problemasJunior.js";

var arbolBi = new ArbolBinario();

document.getElementById("boton_arbol").addEventListener('click', construirArbol);
/* 
? Seccion dedicada al entorno grafico del arbol.
*/


/* 
TODO Buscar manera de bloquear los elementos del arbol en la interfaz para hacerlos inamovibles
*/
var myDiagram = new go.Diagram("myDiagramDiv",
{
  "undoManager.isEnabled": true,
  layout: new go.TreeLayout({ angle: 90, layerSpacing: 35 })
});

myDiagram.nodeTemplate =
    new go.Node("Horizontal",
    { background: "#FFFFFF" })
    .add(new go.TextBlock("Default Text",
        { margin: 12, stroke: "black", font: "bold 16px sans-serif" })
        .bind("text", "name"));

myDiagram.linkTemplate =
  new go.Link(
    { routing: go.Link.Orthogonal, corner: 5 })
    .add( new go.Shape({ strokeWidth: 3, stroke: "#555" }))


function construirArbol(){
    let arrayNombres = ["Juan", "Maria", "Carlos", "Guillermo", "Maricela", "Jeffrey", "Harryson",
                        "Melissa", "Laura", "Yesika", "Steisy", "Dayra", "Fernanda", "Daniel", "Jesus",
                        "Camilo", "Sneider", "Olvany", "Johan"], 
        arrayArbol = [],
        cantidadDatos = 0;

    while (cantidadDatos < 15){
        let random = Math.floor(Math.random()*arrayNombres.length),
            valorRandom = arrayNombres[random],
            bandera = true;

        for(let j = 0; j < arrayArbol.length; j++){
          if(valorRandom == arrayArbol[j]){
            bandera = false;
          }
        } 

        if(bandera == true){
          arbolBi.insert(valorRandom); //Llena el arbol
          arrayArbol[cantidadDatos] = valorRandom;
          cantidadDatos++;
        }
    }

    myDiagram.model = new go.TreeModel(
        [
          { key: "1",              name: arrayArbol[0]},
          { key: "2", parent: "1", name: arrayArbol[1]},
          { key: "3", parent: "1", name: arrayArbol[2] },
          { key: "4", parent: "2", name: arrayArbol[3]},
          { key: "5", parent: "2", name: arrayArbol[4]},
          { key: "6", parent: "3", name: arrayArbol[5]},
          { key: "7", parent: "3", name: arrayArbol[6]},
          { key: "8", parent: "4", name: arrayArbol[7]},
          { key: "9", parent: "4", name: arrayArbol[8]},
          { key: "10", parent: "5", name: arrayArbol[9]},
          { key: "11", parent: "5", name: arrayArbol[10]},
          { key: "12", parent: "6", name: arrayArbol[11]},
          { key: "13", parent: "6", name: arrayArbol[12]},
          { key: "14", parent: "7", name: arrayArbol[13]},
          { key: "15", parent: "7", name: arrayArbol[14]},
          { key: "16", parent: "8", name: "1"},
          { key: "17", parent: "8", name: "2"},
          { key: "18", parent: "9", name: "3"},
          { key: "19", parent: "9", name: "4"},
          { key: "20", parent: "10", name: "5"},
          { key: "21", parent: "10", name: "6"},
          { key: "22", parent: "11", name: "7"},
          { key: "23", parent: "11", name: "8"},
          { key: "24", parent: "12", name: "9"},
          { key: "25", parent: "12", name: "10"},
          { key: "26", parent: "13", name: "11"},
          { key: "27", parent: "13", name: "12"},
          { key: "28", parent: "14", name: "13"},
          { key: "29", parent: "14", name: "14"},
          { key: "30", parent: "15", name: "15"},
          { key: "31", parent: "15", name: "16"}
        ]);
}

var worker1 = document.getElementById("input_worker1").value,
    worker2 = document.getElementById("input_worker2").value;

buscarJefeComun(arbolBi, worker1, worker2);

construirArbol();