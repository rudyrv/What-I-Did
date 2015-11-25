//usuarioLogIn ES EL USUARIO QUE SE ACABA DE ACCEDER ,


/**
*COSNTRUCTOR DE USUARIO
**/
var Usuario = (function() {

  var username;
  var nombre;
  var clave;
  var correo;

  function Usuario(username, clave ) {

    this.username = username;
    this.clave = clave;
  }//end costructor

//set
Usuario.prototype.setUserName= function (username) {
  this.username = username;
};
  Usuario.prototype.setNombre = function (nombre) {
    this.nombre = nombre;
  };
  Usuario.prototype.setClave = function (clave) {
    this.clave = clave;
  };
  Usuario.prototype.setCorreo = function (correo) {
    this.correo = correo;
  };
//--------------------------------------------------------------------------------------------------------------------------------------------------------
  //get
  Usuario.prototype.getUserName = function () {
    return this.username;
  };
    Usuario.prototype.getNombre = function () {
      return this.nombre;
    };
    Usuario.prototype.getClave = function () {
      return this.clave;
    };
    Usuario.prototype.getCorreo = function () {
      return this.correo;
    };
//--------------------------------------------------------------------------------------------------------------------------------------------------------
//imprime la info del usuario para verificar
   Usuario.prototype.imprimirDatos = function ( ) {

     var inf = "User name:" + this.getUserName() +  ", Nombre:" + this.getNombre() + ", Pass:" + this.getClave() + ", Correo:" + this.getCorreo();
     console.log(inf);

   };
//--------------------------------------------------------------------------------------------------------------------------------------------------------
  /**
  *ESTE METODO GUARDA EN LOCAL TODOS LOS DATOS DEL USUARIO
    **/

  Usuario.prototype.guardarenLocal = function ( ) {
console.log("guardarenLocal");
//VERIFICO QUE EL NAVEGADOR TENGA LA OPCION
  if (window.sessionStorage) {
//guardo las datos
localStorage.setItem("username", this.getUserName());
localStorage.setItem("nombre", this.getNombre());
localStorage.setItem("password", this.getClave());
localStorage.setItem("correo", this.getCorreo());
localStorage.setItem("bandera" , "NO");
}
else{
//notifico para utilice otro navegador
$('#otronavegador').openModal();
}//end else
  };

  //--------------------------------------------------------------------------------------------------------------------------------------------------------
    /**
    *ESTE METODO GUARDA EN LOCAL LA CONTRSEÑA DEL USURI Y USERNAME PARA
    *PERMITIR LOG IN
    **/

    Usuario.prototype.datosLogInLocal = function ( ) {
  console.log("guardarenLocal");
  //VERIFICO QUE EL NAVEGADOR TENGA LA OPCION
    if (window.sessionStorage) {
  //guardo las datos

  localStorage.setItem("passwordlogin", this.getClave());
  localStorage.setItem("user_nameemail", this.getCorreo());
  localStorage.setItem("bandera" , "SI");
  }
  else{
  //notifico para utilice otro navegador
  $('#otronavegador').openModal();
  }//end else
    };

  return Usuario;
}());
//--------------------------------------------------------------------------------------------------------------------------------------------------------
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VARIABLES GLOBALES
var sesionAbierta = false;
var usuarioLogIn;
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VARIABLES GLOBALES

/*
*ESTE METODO RECUPERA LOS DATOS QUE TECLO EL Usuario LOS GUARDA EN EL NAVEGADOR
* PARA MAS TARDE RECUPERARLOS EN EL INICIO DE SESION
**/
function singup() {
//recuoerar datos
console.log("singup");
//obtengo los datos de la pagina
var user = document.getElementById("username").value;
var nam = document.getElementById("fullname").value;
var pss = document.getElementById("password").value;
var email = document.getElementById("email").value;
var miUsuario = new Usuario ( user, pss );

miUsuario.setNombre(nam) ;
miUsuario.setCorreo(email) ;

miUsuario.imprimirDatos();//verificar que todo va bien
miUsuario.guardarenLocal();//guardo en local

}//END SIG UP

/**
*ESTE METODO GUARDA LOS DATOS DE LA SESION SE EJECUTA EN EL submit
**/
function login() {
console.log("login");
  var pss = document.getElementById("passwordlogin").value;
  var email = document.getElementById("user_nameemail").value;

var user = "";
  var miUsuario = new Usuario ( user, pss );
  miUsuario.setCorreo(email);
  miUsuario.datosLogInLocal();
  console.log(miUsuario.getCorreo());


  //localStorage.setItem("bandera" , "SI");

console.log("login fin");
return true;
}//END LOG IN

function addActivity() {

}//END ADD addActivity

function updateUser() {

}//END updateUser






function guardarBasedeDatos(datos) {//
  var resultadoPHP = "{'tipo':'completooo'}";
  var xmlhttp = new XMLHttpRequest();
  xmlhttp.onreadystatechange = function() {
  if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
  //frespuesta la guardo
   resultadoPHP = xmlhttp.responseText;
console.log(resultadoPHP);
if( resultadoPHP.localeCompare("DB Errorrrr")== 0){
alert("Error al Enviar");
}
  //parseo a json
  var jsonObj = JSON.parse( resultadoPHP );
  // obtengo el resultdado
    tipoConsulta = jsonObj.tipo;
    var str4 = "completo";
   n = tipoConsulta.localeCompare(str4);
   console.log(tipoConsulta);
   if(n == 0){
   alert("Se a almacenado Exitosamente los datos");

 }
   else {
     alert("Error al Enviar");
   }
  }//end
  }//end xml request
  xmlhttp.open("POST", datos , true);
        xmlhttp.send(null);
}//END guardarBasedeDatos

function claveIncorrecta() {   $('#clavemal').openModal();}
function correoIncorrecto() {   $('#correomal').openModal();}

/*
*ESTE METODO RECUPOERA A UN USUARIO QUE INICIO SESION Y ESTA ASIGNADO A ESTA COMPUTADORA
**/
function recuperarUsuario() {
  console.log("recuperarUsuario");
  //VERIFICO QUE EL NAVEGADOR TENGA LA OPCION
    if (window.sessionStorage) {
    var  banderaalmacenada = localStorage.getItem("bandera");
      if( banderaalmacenada.localeCompare("SI") == 0){//verifico que exita una sesion
      var user = "";
      var   email = localStorage.getItem("passwordlogin");//obtengo el pss de local
      var   pass  = localStorage.getItem("user_nameemail");//obtengo el correo de local
       usuarioLogIn = new Usuario ( user, pass );//creo el nuevo objeto
       usuarioLogIn.setCorreo(email);
       sesionAbierta = true;

      }//end if si
      else {
        {
window.location = 'http://whatidid.acrasystems.com.mx';
        }
      }
  }//end if sessionStorage
  else{
  //notifico para utilice otro navegador
  $('#otronavegador').openModal();
  }//end else
}//end recuperarUsuario
/**
*ESTE METDO MODIFICA TODA LA ESTRUCTURA
**/
function actualisarHtmlSesionAbierta() {
  console.log("actualisarHtmlSesionAbierta");

    document.getElementById("usernameText").innerHTML =  localStorage.getItem("user_nameemail");//obtengo el correo de local
    document.getElementById("usernameTextChico").innerHTML =  localStorage.getItem("user_nameemail");//obtengo el correo de local
}//END actualisarHtmlSesionAbierta

/**
*METODOS QUE DEBEN DE JECUTARSE AL ENTRAR A LA PAGINA DE ACTIITYLOG
**/
function iniciar() {
  console.log("iniciar");
  //RECUPERO LOS DATOS
recuperarUsuario();
if (sesionAbierta == true) {

actualisarHtmlSesionAbierta();//cambio todo lo que el usuario debe de ver

}//end if sesion abierta

}//end iniciar

//var form = document.getElementById("datos").submit();
