import ArbolBusquedaBinaria from "./Modules/ArbolBinario.js";
import "https://unpkg.com/gojs/release/go-debug.js";


document.getElementById("boton_arbol").addEventListener('click', construirArbol);
/* 
? Seccion dedicada al entorno grafico del arbol.
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

// define a Link template that routes orthogonally, with no arrowhead
myDiagram.linkTemplate =
  new go.Link(
    // default routing is go.Link.Normal
    // default corner is 0
    { routing: go.Link.Orthogonal, corner: 5 })
    // the link path, a Shape
    .add( new go.Shape({ strokeWidth: 3, stroke: "#555" }))
    // if we wanted an arrowhead we would also add another Shape with toArrow defined:
    //.add( new go.Shape({  toArrow: "Standard", stroke: null  }))


function construirArbol(){
    let arbolBi = new ArbolBusquedaBinaria();

    let arrayNombres = ["Juan", "Maria", "Carlos", "Guillermo", "Maricela", "Jeffrey", "Harryson",
                        "Melissa", "Laura", "Yesika", "Steisy", "Dayra", "Fernanda", "Daniel", "Jesus",
                        "Camilo", "Sneider", "Olvany", "Johan"];

    for (let i = 0;  i < arrayNombres.length; i++){
        let random = Math.floor(Math.random()*arrayNombres.length);
        let valorRandom = arrayNombres[random];

        arbolBi.insert(valorRandom); //Llena el arbol

        myDiagram.model = new go.TreeModel(
            [
              { key: i + 1, name: valorRandom}
            ]);
    }

    /*
    TODO Explorar arbol y agregarlo al entorno grafico.
    TODO una opcion es guardar el arbol ya creado en una pila y dibujarlo
     */
    /* myDiagram.model = new go.TreeModel(
        [
          { key: "1",              name: "Don Meow"},
          { key: "2", parent: "1", name: "Demeter"},
          { key: "3", parent: "1", name: "Copricat" },
          { key: "4", parent: "3", name: "Jellylorum"},
          { key: "5", parent: "3", name: "Alonzo"},
          { key: "6", parent: "2", name: "Munkustrap"}
        ]); */
}

