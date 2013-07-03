<html>
 
<head>    
 
<!-- 1 -->
<link href="../libs/dropzone/css/dropzone.css" type="text/css" rel="stylesheet" />
 
<!-- 2 -->
<script src="../libs/dropzone/dropzone.min.js"></script>
 
</head>
 
<body>
 
<!-- 3 -->
<form action="upload.php" class="dropzone" id="my-dropzone" ></form> 

<script type="text/javascript">
function get_file_name()
{
var myDropzone = Dropzone.forElement("#my-dropzone");
var file_name = myDropzone.files[0].name;
document.getElementById("file_name").value = file_name;
}
</script>

   
<form name="myform" action="test_structure_no_recline.php" method="post">
<div align="center">
<br><input type="hidden" id="file_name" name="file_name" value="" /><br>
<br><input type="submit" value="Analyse this!" onclick="get_file_name();"><br>
</div>
</form> 
   
</body>
 
</html>