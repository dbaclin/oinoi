<!DOCTYPE html>
<html lang="en">
    
<?php include_once('./head.php'); ?>
    
    <body>
        <?php include_once('./google_tracking.php'); ?>
       
        <?php include_once('./header_menu.php'); ?>       

<div id="content" class="container">
	<div class="hero-unit">
		<div class="ac">
			<h1>An impressive broad set of dashboards created with Oinoi</h1>
			<p>From venture financing to NBA MVP awards, you can use Oinoi to analyze any data.  <br/>Yes, any data. Click on a dashboard and start interacting with the real data!</p>
		</div>
	</div>

	<div id="portfolio">

		<!-- portfolio filter -->		
		<ul id="portfolio-filter" class="nav nav-tabs">
			<li class="active"><a href="#" class="filter" data-filter="*">All</a></li>
			<li><a href="#" class="filter" data-filter=".economics">Economics</a></li>
			<li><a href="#" class="filter" data-filter=".social">Social</a></li>
			<li><a href="#" class="filter" data-filter=".sports">Sports</a></li>
		</ul>

		<!-- portfolio items -->		
		<div class="row" id="portfolio-items">

			<!-- portfolio item-->
			<div class="span4 project zoom" data-tags="economics">

				<a class="thumbnail" href="./index.php?j=51e9de617055c">
					<!-- image -->
					<img src="./images/small-dash1.png" alt="" />
					<!-- name -->
					<b class="project-name">Understanding venture capital money flows</b>
				</a>
			</div>
			<!-- end portfolio item-->

            <!-- portfolio item-->
			<div class="span4 project zoom" data-tags="sports">

				<a class="thumbnail" href="./index.php?j=51e9deaa65569">
					<!-- image -->
					<img src="./images/small-dash2.png" alt="" />
					<!-- name -->
					<b class="project-name">30 years of NBA MVP awards</b>
				</a>
			</div>
			<!-- end portfolio item-->
							
            <!-- portfolio item-->
			<div class="span4 project zoom" data-tags="social">

				<a class="thumbnail" href="./index.php?j=51e9dfa14f9fb">
					<!-- image -->
					<img src="./images/small-dash3.png" alt="" />
					<!-- name -->
					<b class="project-name">Factors driving people's income</b>
				</a>
			</div>
			<!-- end portfolio item-->
							
             <!-- portfolio item-->
			<div class="span4 project zoom" data-tags="social">

				<a class="thumbnail" href="./index.php?j=51efeb5ac5e2e">
					<!-- image -->
					<img src="./images/small-dash4.png" alt="" />
					<!-- name -->
					<b class="project-name">Understanding the Titanic catastrophy</b>
				</a>
			</div>
			<!-- end portfolio item-->
							
		</div>
      </div>	
	</div>

<?php    
    include_once("./footer.php");
?>
    <?php include_once('./libs.php'); ?>
<script src="https://ajax.googleapis.com/ajax/libs/jquery/1.8.3/jquery.min.js"></script>
<script>!window.jQuery && document.write(unescape('%3Cscript src="./home/js/jquery-1.8.3.min.js"%3E%3C/script%3E'))</script>
<script type="text/javascript" src="./libs/webtemplate/bootstrap.min.js"></script>	

<script type="text/javascript" src="./libs/webtemplate/jquery.isotope.min.js"></script>
<script type="text/javascript" src="./libs/webtemplate/jquery.touchSwipe.js"></script>
<script type="text/javascript" src="./libs/webtemplate/jquery.hotkeys.min.js"></script>
<script type="text/javascript" src="./libs/webtemplate/functions.min.js?v=2"></script>
    
<script type="text/javascript">
    $('#top-bar-menu li').removeClass('active');
    $('#top-bar-menu li:contains(Gallery)').addClass('active');
</script>	
    
    </body>

</html>