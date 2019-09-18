class Ruta {
    constructor(Ruta, Nombre, tiempo_de_duracion, base_de_inicio){
        this._Ruta = Ruta;
        this._Nombre = Nombre;
        this._tiempo_de_duracion = tiempo_de_duracion;
        this._base_de_inicio = base_de_inicio;
    }
    get Ruta(){
        return this._Ruta;
    }
    get Nombre(){
        return this._Nombre;
    }
    get tiempo_de_duracion(){
        return this._tiempo_de_duracion;
    }
    get base_de_inicio(){
        return this._base_de_inicio;
    }
}

class Base {
    constructor(Tiempo_de_llegada, Nombre, Referencia, Latitud, Longitud){
        this._Tiempo_de_llegada = Tiempo_de_llegada;
        this._Nombre = Nombre;
        this._Referencia = Referencia;
        this._Latitud = Latitud;
        this._Longitud = Longitud;
    }

    get Tiempo_de_llegada(){
        return this._Tiempo_de_llegada;
    }
    get Nombre(){
        return this._Nombre;
    }
    get Referencia(){
        return this._Referencia;
    }
    get Latitud(){
        return this._Latitud;
    }
    get Longitud(){
        return this._Longitud;
    }
} 

class Camion {
    constructor(Numero_de_camion, Base_de_inicio, Hora_de_inicio, Fin_de_trabajo){
        this._Numero_de_camion = Numero_de_camion;
        this.Base_de_inicio = Base_de_inicio;
        this._Hora_de_inicio = Hora_de_inicio;
        this._Fin_de_trabajo = Fin_de_trabajo;
    }

    get Numero_de_camion(){
        return this._Numero_de_camion;
    }
    get Base_de_inicio(){
        return this._Base_de_inicio;
    }
    get Hora_de_inicio(){
        return this._Hora_de_inicio;
    }
    get Fin_de_trabajo(){
        return this._Fin_de_trabajo;
    }
}