<?php
if (isset($_GET['event'])) {
    $eventName = htmlspecialchars($_GET['event']);
    echo "<h1>Thank you for registering for $eventName!</h1>";
} else {
    echo "<h1>Invalid event registration.</h1>";
}
?>
