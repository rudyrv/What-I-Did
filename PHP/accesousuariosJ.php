<?php
$CORREO = ($_REQUEST["correo"]);
$CLAVE = ($_REQUEST["clave"]);

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

//realizo la consulta
$SQL = "SELECT * FROM acrasyst_whatidid.usuario WHERE correo = '".$CORREO."'  && clave = '".$CLAVE."'  ";
$Result = mysql_query($SQL) or die("DB Error");
$Total = mysql_num_rows($Result);

//verifico el resutado de la consulta
if($Total){
  $datas = mysql_fetch_array($Result);

//echo $datas["clave"];
//echo $datas["correo"];

  if(strcmp($CLAVE, $datas["clave"]) == 0){
    if(strcmp($CORREO, $datas["correo"]) == 0){
    //  echo $datas["tipo"];
      //si todo es correcto
      $miResultado->tipo =  "cool";
      echo "<script>window.location = 'http://whatidid.acrasystems.com.mx/activityLog.html'</script>";
    }
  }
  else{
  //  echo "MIERDA";
    echo "<script>window.location = 'http://whatidid.acrasystems.com.mx/home.html'; claveIncorrecta();</script>";
    $arr[] = array('resultado' => "MIERDAaaaa");
    $miResultado->tipo = "mierdaaaaa";
  }
}else{
//  echo "MIERDA";
  echo "<script>window.location = 'http://whatidid.acrasystems.com.mx/home.html'; claveIncorrecta();</script>";
  $arr[] = array('resultado' => "MIERDAAAAAACORREO");
  $miResultado->tipo = "mierdaAAAA";
}


//codifico el arreglo
//$response = json_encode($arr, true);
echo json_encode($miResultado );
//echo json_encode($arr ,  JSON_FORCE_OBJECT );

//echo json_encode($jsonstring = json_encode($arr));



mysql_close($con);


//echo $arr;






?>
