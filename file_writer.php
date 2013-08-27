<?php
function write_config_file($json_string) {
	$unique_id = uniqid();
	$config_file = "./json_configs/" . $unique_id;
	$handle = fopen($config_file, 'w') or die('Cannot open file:  '.$config_file);
	fwrite($handle, $json_string);
	fclose($handle);
	return $unique_id;
}

function write_pasted_data($pasted_data) {
    $unique_id = uniqid();
    $data_file = "./uploads/" . $unique_id . ".csv";
    $handle = fopen($data_file, 'w') or die('Cannot open file:  '.$data_file);
	foreach (explode("Ø",$pasted_data) as $line) {
        if(strlen($line)) fwrite($handle,str_replace("\t",",",$line) . "\n");
    }
    fclose($handle);
    return $unique_id;
}

function write_dataset($json_string) {
    $unique_id = uniqid();
    $data_file = "./uploads/" . $unique_id . ".json";
    $handle = fopen($data_file, 'w') or die('Cannot open file:  '.$data_file);
    fwrite($handle, $json_string);
    fclose($handle);
    return $unique_id;
}


if(isset($_POST['json_string']) && isset($_POST['action'])) {
    $json_string = $_POST['json_string'];
    $action = $_POST['action'];
    
    if($action == "write_config") {
       echo write_config_file($json_string);
    } else if($action == "write_pasted_data") {
       echo write_pasted_data($json_string);
    } else if($action == "write_dataset") {
        echo write_dataset($json_string);
    } else {
       echo "all your bases are belong to us";
    }
} else {
    die('No json string or action provided');
}

?>