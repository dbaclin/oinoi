<?php

if(  (isset($_POST['file_name']) && strlen($_POST['file_name']) > 1)  ||
     (isset($_GET['j']) && strlen($_GET['j']) > 1)  ||
     (isset($_POST['pasted_data']) && strlen($_POST['pasted_data']) > 1)
  )
{
    include("./visual_analytics.php");
} else {
    include("./upload_data.php");
}

?>