<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = htmlspecialchars($_POST['name']);
    $email = htmlspecialchars($_POST['email']);

    $file = 'volunteer-signups.txt';
    $content = "Name: $name\nEmail: $email\n---\n";
    file_put_contents($file, $content, FILE_APPEND);

    echo "Thank you, $name! We’ve recorded your volunteer application. We’ll reach out to you at $email soon.";
}
?>
