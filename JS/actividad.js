var Horario = (function() {

  var inicio;
  var fin;
  var lugar;
  var evaluacion;
  var frecuencia;
  var actvidad;
  var username;
  var duracion;
// inicio fin lugar evaluacion frecuencia actvidad username duracion
  function Horario(actividad, categoria , lugar,  inicio , fin ,  username   ) {
    this.actividad = actividad;
    this.categoria = categoria;
    this.lugar = lugar;
    this.inicio = inicio;
    this.fin = fin;
    this.username = username;
  }//end costructor

//set
Usuario.prototype.setInicio= function (inicio) {
  this.inicio = inicio;
};//     frecuencia actvidad
  Usuario.prototype.setFin = function (fin) {
    this.fin = fin;
  };
  Usuario.prototype.setLugar = function (lugar) {
    this.lugar = lugar;
  };
  Usuario.prototype.setEvaluacion = function (evaluacion) {
    this.evaluacion = evaluacion;
  };
  Usuario.prototype.setFrecuencia= function (frecuencia) {
    this.frecuencia = frecuencia;
  };
    Usuario.prototype.setActvidad = function (actvidad) {
      this.actvidad = actvidad;
    };
    Usuario.prototype.setUsername = function (username) {
      this.username = username;
    };
    Usuario.prototype.setDuracion = function (duracion) {
      this.duracion = duracion;
    };
//--------------------------------------------------------------------------------------------------------------------------------------------------------
  //get
  Usuario.prototype.getInicio= function (inicio) {
    return this.inicio ;
  };//     frecuencia actvidad
    Usuario.prototype.getFin = function (fin) {
      return this.fin;
    };
    Usuario.prototype.getLugar = function (lugar) {
      return this.lugar ;
    };
    Usuario.prototype.getEvaluacion = function (evaluacion) {
    return  this.evaluacion ;
    };
    Usuario.prototype.getFrecuencia= function (frecuencia) {
      return this.frecuencia ;
    };
      Usuario.prototype.getActvidad = function (actvidad) {
      return   this.actvidad ;
      };
      Usuario.prototype.getUsername = function (username) {
      return   this.username ;
      };
      Usuario.prototype.getDuracion = function (duracion) {
      return   this.duracion ;
      };
//--------------------------------------------------------------------------------------------------------------------------------------------------------
return Horario;
}());
