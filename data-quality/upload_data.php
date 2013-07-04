 <html lang="en">
    
    <head>
        <meta charset="utf-8">
        <title>Bootstrap, from Twitter</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <meta name="description" content="">
        <meta name="author" content="">
        <!-- Le styles -->
        <link href="../libs/bootstrap/css/bootstrap.css" rel="stylesheet">
        <style>
            body {
                padding-top: 60px;
                /* 60px to make the container go all the way to the bottom of the topbar */
            }
        </style>
        <link href="../libs/bootstrap/css/bootstrap-responsive.css" rel="stylesheet">
        <link href="../libs/dropzone/css/dropzone.css" type="text/css" rel="stylesheet" />
        <link rel="stylesheet" type="text/css" href="../libs/gridster/dist/jquery.gridster.min.css">
        <!-- HTML5 shim, for IE6-8 support of HTML5 elements -->
        <!--[if lt IE 9]>
            <script src="../assets/js/html5shiv.js"></script>
        <![endif]-->
        <!-- Fav and touch icons -->
        <link rel="stylesheet" type="text/css" href="../libs/dc/dc.css" />
        <link href="//netdna.bootstrapcdn.com/font-awesome/3.2.1/css/font-awesome.css" rel="stylesheet">

        
        <link rel="stylesheet" type="text/css" href="./data-quality.css" />
        <link rel="apple-touch-icon-precomposed" sizes="144x144" href="../assets/ico/apple-touch-icon-144-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="114x114" href="../assets/ico/apple-touch-icon-114-precomposed.png">
        <link rel="apple-touch-icon-precomposed" sizes="72x72" href="../assets/ico/apple-touch-icon-72-precomposed.png">
        <link rel="apple-touch-icon-precomposed" href="../assets/ico/apple-touch-icon-57-precomposed.png">
        <link rel="shortcut icon" href="../assets/ico/favicon.png">
        
    </head>
    
    <body>
        
        <div class="navbar navbar-inverse navbar-fixed-top">
            <div class="navbar-inner">
                <div class="container">
                    <button type="button" class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                        <span class="icon-bar"></span>
                    </button>
                    <a class="brand" href="#">Project name</a>
                    <div class="nav-collapse collapse">
                        <ul class="nav">
                            <li class="active">
                                <a href="#">Home</a>
                            </li>
                            <li>
                                <a href="#about">About</a>
                            </li>
                            <li>
                                <a href="#contact">Contact</a>
                            </li>
                        </ul>
                    </div>
                    <!--/.nav-collapse -->
                </div>
            </div>
        </div>

 <div class="container">        
<div class="row-fluid">
  
  <div class="span6" align="center"><form action="upload.php" class="dropzone" id="my-dropzone" ></form> </div>
  <div class="span6" align="center">
    <textarea rows="17" cols="10" id="pasted_data_temp" name="pasted_data_temp" placeholder="Paste some data"></textarea>  
  </div>
  </div>
  <div class="row-fluid">
  <div class="span12" align="center">
      <form id="main_form" action="index.php" method="post">
      <input type="hidden" id="file_name" name="file_name" value="" />
      <input type="hidden" id="pasted_data" name="pasted_data" value="" />
      <a class="btn btn-large btn-info" href="#" onclick="javascript:sumbitForm();" style="font-size: 30px;">
  <i class="icon-bar-chart"></i> Create dashoard</a>
      </form>
  </div>
  
</div>
 </div>

<script src="../libs/dropzone/dropzone.min.js"></script>
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
   
</body>
 
</html>