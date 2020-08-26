<?php

$errors         = array();  	// array to hold validation errors
$data 			= array(); 		// array to pass back data

// validate the variables ======================================================
	// if any of these variables don't exist, add an error to our $errors array

	if (empty($_POST['name']))
		$errors['name'] = 'Name is required.';

	if (empty($_POST['email']))
		$errors['email'] = 'Email is required.';

	if (empty($_POST['service']))
		$errors['service'] = 'Service is required.';

	if (empty($_POST['phone']))
		$errors['phone'] = 'Phone number is required.';

	if (empty($_POST['message']))
		$errors['message'] = 'The message is required.';

// return a response ===========================================================

	// if there are any errors in our errors array, return a success boolean of false
	if ( ! empty($errors)) {

		// if there are items in our errors array, return those errors
		$data['success'] = false;
		$data['errors']  = $errors;
	} else {

		// if there are no errors process our form, then prepare the message

		$message=
	    '<div style="border: 1px solid #f1f1f1; border-radius: 8px; line-height: 24px; color: #444; padding: 16px;">
	     <strong>Full Name</strong>:	'.$_POST['name'].'<br />
	     <strong>Email</strong>:	'.$_POST['email'].'<br />
	     <strong>Service</strong>:	'.$_POST['service'].'<br />
	     <strong>Phone</strong>:	'.$_POST['phone'].'<br />
	     <strong>Message</strong>:	'.$_POST['message'].'
	     </div>
	    ';

		require "../PHPMailer-master/class.phpmailer.php"; //include phpmailer class

	    // Instantiate Class
	    $mail = new PHPMailer();

	    // Set up SMTP
	    $mail->IsSMTP();                // Sets up a SMTP connection
	    $mail->SMTPAuth = true;         // Connection with the SMTP does require authorization
	    $mail->SMTPSecure = "ssl";      // Connect using a TLS connection
	    $mail->Host = "smtp.gmail.com";  //Gmail SMTP server address
	    $mail->Port = 465;  //Gmail SMTP port
	    $mail->Encoding = '7bit';

	    // Authentication
	    $mail->Username   = "info@drbeatapecko.com"; // Your full Gmail address
	    $mail->Password   = "Locked!355"; // Your Gmail password

	    // Compose
	    $mail->SetFrom($_POST['email'], $_POST['name']);
	    $mail->AddReplyTo($_POST['email'], $_POST['name']);
	    $mail->Subject = "New Contact Form Enquiry";      // Subject (which isn't required)
	    $mail->MsgHTML($message);

	    // Send To
	    // $mail->AddAddress("info@drbeatapecko.com", "Dr. Beata Pecko"); // Where to send it - Recipient
	    $mail->AddAddress("tobyleftly@gmail.com", "Dr. Beata Pecko"); // Where to send it - Recipient
	    $result = $mail->Send();		// Send!

		// show a message of success and provide a true success variable
		$data['success'] = true;
		$data['message'] = 'Success!';
	}

	// return all our data to an AJAX call
	echo json_encode($data);
