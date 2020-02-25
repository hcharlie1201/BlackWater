<?php
    $conn_string = "host=localhost port=5500 dbname=berkeley user=postgres password=blandford";
 
    // Establish a connection with MySQL server
    $dbconn = pg_connect($conn_string);
     
    // Check connection status. Exit in case of errors
    if(!$dbconn) {
    echo "Error: Unable to open database\n";
    } else {
    echo "Opened database successfully\n";
    }
?>