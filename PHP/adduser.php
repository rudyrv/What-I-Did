<?php
$fullname= ($_REQUEST["fullname"]);
$username = ($_REQUEST["username"]);
$pass = ($_REQUEST["pass"]);
$email= ($_REQUEST["email"]);

//regla de accesos
header('Access-Control-Allow-Origin: *');

//clase del objeto que voy a enviar
class Resultado {
 public $tipo;

}
$miResultado = new Resultado();



//conexion mysql parametros
$Hostname = "localhost";
$DBname = "acrasyst_whatidid";
$User = "acrasyst_diego";
$Password = "20rowKO8u4";

//establece una conexion
$con = mysql_connect($Hostname, $User, $Password) or die("Can not connect to DB");
mysql_select_db($DBname) or die ("Can not connect to DB");

if (!$con) {
    die('No pudo conectarse: ' . mysql_error());
}


// $fullname  $username $pass $email
//username nombre clave correo
//realizo la consulta
$SQL =" INSERT INTO usuario (username , nombre , clave , correo )
VALUES ( '".$username."' , '".$fullname."' ,'".$pass."' , '".$email."'   )";

//$query = "INSERT INTO test (value) VALUES ('test')"; --'

          //   '".$ID."'                                                                                                                                                        //   ".$otrasactividades."'
//echo($SQL);ññ

$Result = mysql_query($SQL) or die("<script>window.location = 'http://whatidid.acrasystems.com.mx/'</script>");

/*

$to = "diegors_2102@hotmail.com";
$subject = "ADMINISTRADOR NUEVO EQUIPO REGISTRADO  " ;
$txt = "NUEVO EQUIPO REGISTRADO " .$nombre . $grupo . ", Correo Electronico:". $correo ;
mail($to,$subject,$txt);
*/
$to = $email;
$subject = "NUEVO CUENTA REGISTRADA CORRECTAMENTE" ;
$txt = "Nueva cuanta REGISTRADA a nombre de :" .$fullname . " User Name:".$username  .".\n\n";


mail($to,$subject,$txt);





  $miResultado->tipo = "completo";
//codifico el arreglo

//echo json_encode($miResultado );

echo "<script>window.location = 'http://whatidid.acrasystems.com.mx/login.html'</script>";


mysql_close($con);






?>
