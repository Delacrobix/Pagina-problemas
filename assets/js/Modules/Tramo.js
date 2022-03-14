export default class Tramo{
    constructor(horario){
        this.horario =  horario;
        this.numero_motociclistas = 8;
    }

    asignar_motociclista(){
        this.asignar_motociclista--;
    }

    get_umero_motociclistas(){
        return  this.numero_motociclistas;
    }
}