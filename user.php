<?php

$existingEmails = [

"admin@gmail.com",

"student@gmail.com",

"test@gmail.com",

"hemanth@gmail.com",

"user@gmail.com"

];

$email = "";

if(isset($_GET['email'])){

$email = strtolower(trim($_GET['email']));

}

if($email==""){

echo "";

}

elseif(in_array($email,$existingEmails)){

echo "<span style='color:red;'>❌ Email already exists</span>";

}

else{

echo "<span style='color:green;'>✅ Email Available</span>";

}

?>