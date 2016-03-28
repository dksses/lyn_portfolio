<!doctype html>
<html>
<head>
<meta charset="UTF-8">
<title>Untitled Document</title>
</head>

<body>

<?php 


	$name = $_POST['name'];
	$email = $_POST['email'];
	$text = $_POST['comment'];
	$from = 'From: lyn bulb house ';
	$to = 'ehdrudfls@google.com';
	$subject = 'form';
	
	$body = " from: $name\n email : $email\n  text : $text\n ";
		
		if ($_POST['submit']) {
				if (mail ($to, $subject, $body, $from)) {
					echo '<p>Your message has been sent</p>';
				}  else { 
							echo '<p>Error -  try again</p>';
				}
		}

?>


</body>
</html>