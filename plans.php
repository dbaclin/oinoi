<!DOCTYPE html>
<html lang="en">
    
<?php include_once('./head.php'); ?>
    
    <body>
        <?php include_once('./google_tracking.php'); ?>
       
        <?php include_once('./header_menu.php'); ?>       

<!-- Content
	================================================== -->
	<div id="content" class="container">
	<div class="hero-unit">
		<div class="container">
			<h1 class="ac">Plans and pricing.</h1>
			<p class="ac">
				Pay monthly and switch packages or cancel any time			</p>
		</div>
	</div>

	<!-- Example pricing -->
	<div class="row pricing">

		<div class="span4">
			<div class="well">
				<h2>Free</h2>
				<ul>
					<li>&#10004; Your data are public</li>
					<li>&#10004; Unlimited dashboards</li>
					<li>&#10004; Access to all features</li>
					<li>&#10004; Standard datasources</li>
					<li>&#10004; E-mail support</li>
				</ul>
				<hr />
				<h3 class="ac">Free</h3>
				<hr />
				<p class="ac">
					<a class="btn btn-primary btn-large" href="#">Select plan &raquo;</a>
				</p>
			</div>
		</div>
		<div class="span4 most-popular">
			<div class="well">
				<h2>Enterprise</h2>
				<p><span>POPULAR</span></p>
				<ul>
					<li>&#10004; Your data are private</li>
					<li>&#10004; 1TB of space</li>
					<li>&#10004; Unlimited dashboards</li>
					<li>&#10004; Unlimited users</li>
					<li>&#10004; Access to all features</li>
					<li>&#10004; Premium datasources</li>
					<li>&#10004; Phone and e-mail support</li>
				</ul>          
				<hr />
				<h3 class="ac">$199 / month</h3>
				<hr />
				<p class="ac">
					<a class="btn btn-primary btn-large" href="#">Select plan &raquo;</a>
				</p>
			</div>
		</div>
		<div class="span4">
			<div class="well">
				<h2>Big Data</h2>
				<ul>
					<li>&#10004; Your data are private</li>
					<li>&#10004; Unlimited users</li>
					<li>&#10004; 10TB of space</li>
					<li>&#10004; Unlimited dashboards</li>
					<li>&#10004; Unlimited dashboards</li>
					<li>&#10004; Access to all features</li>
					<li>&#10004; Premium datasources</li>
					<li>&#10004; Phone and e-mail support</li>
				</ul>          
				<hr />
				<h3 class="ac">$499 / month</h3>
				<hr />
				<p class="ac">
					<a class="btn btn-primary btn-large" href="#">Select plan &raquo;</a>
				</p>
			</div>
		</div>
	</div>

	<hr />

	<div class="row">
		<div class="span12">
			<h1 class="lead">
				<b>All plans comes with 90-day</b> money-back guarantee.
			</h1>
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
    $('#top-bar-menu li:contains(Pricing)').addClass('active');
</script>	
    
    </body>

</html>