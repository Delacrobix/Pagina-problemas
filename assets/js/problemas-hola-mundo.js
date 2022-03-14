/* 
* Los problemas aqui resueltos fueron inspirados en el video de Hola Mundo: 
* https://www.youtube.com/watch?v=aouDQ8caJYg
 */

/* 
* Construye una lista que contenga tramos horarios en en intervalos de 30 min, 
* que empiece a las 8 am y termine a las 8 pm. La empresa tiene disponibilidad
* de 8 motociclistas cada 30 min, cuando alguien haga click sobre una de estas cajas
* tomara un recurso de motociclista (un contador de motociclistas) ademas de marcar
* la caja en verde. Si el mismo usuario da click en esa caja debera liberar el recurso.
* Si otros usuarios han tomado todos los motociclistas en ese horario debera aparecer
* en color rojo y no debera permitir tomar un recurso en ese horario.
*/
import Tramo from "./modules/Tramo.js"

document.getElementById("btn-horario").addEventListener("click", recibir_datos);

function recibir_datos(){
    let value = document.getElementById("btn-horario").value;
}
/* 
* Construye una aplicacion de trivias. Cuando ingrese a la aplicacion me debera pedir
* ingresar algunos datos */