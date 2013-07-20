<!DOCTYPE html>
<html lang="en">
    
<?php include_once('./head.php'); ?>
    
    <body>
        <?php include_once('./google_tracking.php'); ?>
       
        <?php include_once('./header_menu.php'); ?>
        
<?php

if(  (isset($_POST['file_name']) && strlen($_POST['file_name']) > 1)  ||
     (isset($_GET['j']) && strlen($_GET['j']) > 1)  ||
     (isset($_POST['pasted_data']) && strlen($_POST['pasted_data']) > 1)
  )
{
    include_once("./visual_analytics.php");
} else {
    include_once("./upload_data.php");
    include_once("./footer.php");
}

?>


    </body>

</html>