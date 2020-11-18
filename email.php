<?php
// $subject = 'You Got Message'; // Subject of your email
// $to = 'info@designesia.com';  //Recipient's E-mail
// $emailTo = $_REQUEST['email'];

$name = $_REQUEST['name'];
$email = $_REQUEST['email'];
$phone = $_REQUEST['phone'];
$msg = $_REQUEST['message'];

$data = (object) array('name' => $name, 'email' => $email, 'phone'=>$phone, 'message'=>$msg);

$inp = file_get_contents('results.json');
$tempArray = json_decode($inp);
array_push($tempArray, $data);
$jsonData = json_encode($tempArray);
file_put_contents('results.json', $jsonData);
echo $inp
// if (@mail($to, $subject, $message, $email_from))
// {
// 	// Transfer the value 'sent' to ajax function for showing success message.
// 	echo $name, $email
// 	echo 'sent';
// }
// else
// {
// 	// Transfer the value 'failed' to ajax function for showing error message.
// 	echo 'failed';
// }
// echo 'sent';
?>