<!DOCTYPE html>
<html lang="en">
    
<?php include_once('./head.php'); ?>
    
    <body>
    <?php include_once('./google_tracking.php'); ?>
       
    <?php include_once('./header_menu.php'); ?>

  <div id="content" class="container">
  </div>
  <div class="homepage">
  <div class="container">
  <div class="hero-unit">

    <!-- Carousel --> 
    <div id="macbook_carousel">
      
    <div id="carousel" class="carousel slide" rel="carousel">
        <div class="carousel-inner">
          <div class="active item">
             <iframe width="600" height="360" src="http://www.youtube.com/embed/nPyi2wkdLGg?vq=large&rel=0" frameborder="0" allowfullscreen></iframe> 
            <!-- <iframe src="//player.vimeo.com/video/73643736?color=ffffff" width="600" height="337" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe> <p><a href="http://vimeo.com/73643736">Oinoi, analytics for all</a></p> -->
          </div><!-- 
          <div class="item">
            <a href="http://oinoi.com/?j=51e9deaa65569"> <img src="./images/dash2.png" alt="" /></a>
          </div>
          <div class="item">
            <a href="http://oinoi.com/?j=51e9dfa14f9fb"> <img src="./images/dash3.png" alt="" /></a>
          </div>
          <div class="item">
            <a href="./analyze.php"> <img src="./images/dash4.png" alt="" /></a>
          </div> -->
        </div>
        <a class="carousel-control left" href="#carousel" data-slide="prev">&lsaquo;</a>
        <a class="carousel-control right" href="#carousel" data-slide="next">&rsaquo;</a> 
      </div>
    </div> 

  </div>
  </div>
  </div>

    <?php include_once("./footer.php"); ?>
    <?php include_once('./libs.php'); ?>

<script type="text/javascript">
    
    $('ul.nav li').removeClass('active');
    $('ul.nav li:contains(See in action)').addClass('active');

</script> 

    </body>

</html>