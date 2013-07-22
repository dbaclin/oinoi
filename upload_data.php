<script src="./libs/dropzone/dropzone.min.js"></script>
<script type="text/javascript">
function sumbitForm()
{

var myDropzone = Dropzone.forElement("#my-dropzone");
var file_name;
if(myDropzone.files.length > 0) file_name = myDropzone.files[0].name; 
else file_name = "";
var pasted_data = "" + document.getElementById("pasted_data_temp").value;
pasted_data = pasted_data.replace(/\r\n/g, "Ø").replace(/\n/g, "Ø").replace(/\r/g, "Ø");

document.getElementById("pasted_data").value = pasted_data;

document.getElementById("file_name").value = file_name;
document.getElementById("main_form").submit();
}
</script>

<div class="container upload">        
<div class="row-fluid">
  
  <div class="span6" align="center"><form action="upload.php" class="dropzone" id="my-dropzone" ></form> </div>
  <div class="span6" align="center">
    <textarea rows="17" cols="10" id="pasted_data_temp" name="pasted_data_temp" placeholder="Paste some data from excel etc (needs to be tab delimited)"></textarea>  
  </div>
  </div>
  <div class="row-fluid">
  <div class="span12" align="center">
      <form id="main_form" action="analyze.php" method="post">
      <input type="hidden" id="file_name" name="file_name" value="" />
      <input type="hidden" id="pasted_data" name="pasted_data" value="" />
      <a class="btn btn-large btn-primary" href="#" onclick="javascript:sumbitForm();" style="font-size: 30px;">
  <i class="icon-bar-chart"></i> Create dashboard</a>
      </form>
  </div>
  
</div>
 </div>
<?php include_once("./libs.php"); ?>

<script type="text/javascript">
    $('ul.nav li').removeClass('active');
    $('ul.nav li:contains(Analyze)').addClass('active');
</script>	

   
