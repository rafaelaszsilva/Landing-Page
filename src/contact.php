
    <?php
	$result="";

	if(isset($_POST['submit'])){
		require 'phpmailer/PHPMailerAutoload.php';
		$mail = new PHPMailer;
		$mail->Host = 'smtp.gmail.com';
		$smail->Port=587;
		$mail->SMTPAuth=true;
		$mail->SMTPSecure='tls';
		$mail->Username='rafasouzasilva13@gmail.com';
		$mail->Password='87ck7grg08';

		$mail->setFrom($_POST['email'],$_POST['name']);
		$mail->addAddress('rafaelasilvasl@hotmail.com');
		$mail->addReplyTo($_POST['email'],$_POST['name']);

		$mail->isHTML(true);
		$mail->Body='<h1 align=center>Name: '$_POST['name'].'<br>Email: '.$_POST['email'].'<br>Message: '.$_POST['message'].'</h1>';

		if(!$mail->send()){
			$result="Algo deu errado. Tente novamente.";
		}
		else{
			$result="Obrigada pela mensagem!";
		}
	}

?>