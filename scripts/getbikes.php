<?php
$fsconnect=mysqli_connect("localhost","dbagent","patches","sfbikerescue");
$dbquery="select * from bikesforsale";
$result = $fsconnect->query($dbquery);
echo '{"bikes":[';
$firstRec=true;
while($bike = $result->fetch_row()){
   if($firstRec==false){
         echo ",";}
      else{
         $firstRec=false;}
   echo '{"bikenum":"' . $bike[0]  
      . '","biketitle":"' . $bike[1] 
      . '","biketype":"' . $bike[2]
      . '","bikedesc":"' . $bike[3] 
      . '","bikeprice":"' . $bike[4]
      . '"}';
}
echo ']}';
$fsconnect -> close();
?>