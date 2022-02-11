import ArbolBusquedaBinaria from "./Modules/ArbolBinario.js";
import 'https://cdnjs.cloudflare.com/ajax/libs/Chart.js/2.7.2/Chart.bundle.min.js';

document.getElementById("input_arbol").addEventListener('click', dibujarArbol);

function dibujarArbol(){
    let canvasArbol = document.getElementById("canvas_arbol").getContext("2d");

    var chart = new Chart(canvasArbol, {
        type:"bar",
        data:{
            labels: ["1", "2", "3", "hhkdjhf"],
            datasets: [
                {
                    label: "Arbol",
                    backgroundColor: "rgb(500, 6, 8)",
                    data:[1, 2, 3, 500]
                }
            ]
        }
    });
}

function construirArbol(){
    let arbol = new ArbolBusquedaBinaria();

    let arrayNombres = ["Juan", "Maria", "Carlos", "Guillermo", "Maricela", "Jefrrey", "Harryson",
                        "Melissa", "Laura", "Yesika", "Steisy", "Dayra", "Fernanda", "Daniel", "Jesus",
                        "Camilo", "Sneider", "Olvany", "Johan"];

    for (let i = 0;  i < arrayNombres.length; i++){
        let random = Math.floor(Math.random()*arrayNombres.length);
        let valorRandom = myArray[random];

        arbol.insert(RandArray().valorRandom);
    }
}