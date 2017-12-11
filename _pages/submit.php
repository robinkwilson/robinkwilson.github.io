<?php
// if the url field is empty
if(isset($_POST['url']) && $_POST['url'] == ''){

    if($_POST["message"] == "" || $_POST["name"] == "" || $_POST["email"] == ""){
      echo "<script type='text/javascript'>alert('Need to fill all contact form details');</script>";
    } else {
      // then send the form to your email
      mail( 'robin.kath.wilson@gmail.com', 'Contact Form', print_r($_POST,true) );
    }
}
// otherwise, let the spammer think that they got their message through
?>

echo "<script type='text/javascript'>alert('Hello!');</script>";


<h1>Thanks</h1>


<p>I'll get back to you as soon as possible</p>
