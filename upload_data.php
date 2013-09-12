

<style type="text/css">
.upload {

  margin-top: 10px;

}
h3  {
text-align: left;

}

ul {
  list-style-type:circle;

}
li {
    margin-top:5px;
    font-size: 18px;
    text-align: left;
}

#demo-dataset{

   width: 75%;
    margin: 0 auto;

}


</style>
<script src="./libs/dropzone/dropzone.min.js"></script>
<script type="text/javascript">
function sumbitForm()
{

var myDropzone = Dropzone.forElement("#my-dropzone");
var file_name;
if(myDropzone.files.length > 0) file_name = myDropzone.files[0].name; 
else file_name = "";
var pasted_data = "" + document.getElementById("pasted_data_temp").value;
pasted_data = pasted_data.replace(/\r\n/g, "Ø").replace(/\n/g, "Ø").replace(/\r/g, "Ø").replace(/,/g," ");

document.getElementById("pasted_data").value = pasted_data;

document.getElementById("file_name").value = file_name;
document.getElementById("main_form").submit();
}
</script>

<div class="container upload">        
<div class="row-fluid">
  
  <div class="span6" align="center">
  <p class="upload-explain">Upload a .csv file where all the fields are comma delimited<p>
  <form action="upload.php" class="dropzone" id="my-dropzone" ></form> </div>
  <div class="span6" align="center">
  <p class="upload-explain">Paste some data where all the fields are tab delimited<p>
    <textarea rows="17" cols="10" id="pasted_data_temp" name="pasted_data_temp" placeholder="Paste data (needs to be tabs delimited)"></textarea>  
  </div>
  </div>
  <div class="row-fluid">
  <div class="span12" align="center">
      <form id="main_form" action="analyze.php" method="post">
      <input type="hidden" id="file_name" name="file_name" value="" />
      <input type="hidden" id="pasted_data" name="pasted_data" value="" />
      <a class="btn btn-large btn-primary" href="#" onclick="javascript:sumbitForm();" style="font-size: 30px;">
  <i class="icon-bar-chart"></i> Load data</a>
      </form>
    <div id="demo-dataset">
      <h3>No data at hand? Start with one of our demo dataset:</h3>
      <p >
      <ul>
        <li><a href="?j=5224f3758bd8f">Venture capital data </a> (compare the hottest startup locations)</li>
        <li><a href="?j=5224fe22a5d5a">US Census income data </a> (understand what drives people's income)</li>
        <li><a href="?j=5224f84456b9f">60 years of NBA MVP awards </a> (compare players)</li>
        <li><a href="?j=5224f86b9298b">Market share for mobile carriers in South Africa </a> (figure out who's winning)</li>
      </ul>

      </p>
    </div>
  </div>
  
</div>
 </div>
<?php include_once("./libs.php"); ?>

<script type="text/javascript">
    $('ul.nav li').removeClass('active');
    $('ul.nav li:contains(Analyze)').addClass('active');
</script>	

   
