<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $amount = floatval($_POST['amount'] ?? 0);

    if (!empty($amount) && $amount > 0) {
        echo "<h1>Thank you for donating Php$amount!</h1>";
        // Add your payment gateway API integration here.
    } else {
        echo "<h1>Invalid donation amount. Please try again.</h1>";
    }
} else {
    echo "<h1>Invalid request method. Please use the form to submit donations.</h1>";
}
?>




