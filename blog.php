<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <title>Oinoi, Analytics for all</title>
        <meta name="google-site-verification" content="hGNyrCyFXc_oW41uMGHdRPk7z-mWKCCHAiuno7kU4VI" />
        
        <meta name="description" content="Page description">
        <meta name="author" content="Oinoi Inc">
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">
    
        <!-- Custom css <link rel="stylesheet" href="./home/css/bootstrap/bootstrap.min.css">-->
        <link href="./home/css/oinoi-override.css" rel="stylesheet">
        <link href="./home/css/style.min.css" rel="stylesheet">
        
        <link href="./libs/jquery/ui/css/flick/jquery-ui-1.10.3.custom.css" rel="stylesheet">
        
        <link href="./home/css/font-awesome/font-awesome.css" rel="stylesheet">
        <!--[if IE 7]>
            <link href="./home/css/font-awesome/font-awesome-ie7.css" rel="stylesheet">
        <![endif]-->
        <link href="./libs/dropzone/css/dropzone.css" type="text/css" rel="stylesheet" />
         
        <!-- Load Open sans from Google Font Directory   -->
        <link href='https://fonts.googleapis.com/css?family=Open+Sans:300,400,500,600,700,800' rel='stylesheet' type='text/css'>

        
        <link rel="stylesheet" type="text/css" href="./libs/dc/dc.css" />


        <link rel="stylesheet" href="./libs/slickgrid/slick.grid.css" type="text/css"/>
        
      <link rel="stylesheet" href="libs/slickgrid/css/smoothness/jquery-ui-1.8.16.custom.css" type="text/css"/>
      <link rel="stylesheet" href="./libs/slickgrid/plugins/slick.headermenu.css" type="text/css"/>
     
 
        <link rel="stylesheet" type="text/css" href="./data-quality.css"/>
        
        <link rel="stylesheet" type="text/css" href="./blog/wp-content/themes/chunk/style-scoped.css"/>
<!--        <link rel="stylesheet" type="text/css" href="./blog/wp-content/themes/chunk/rtl.css"/>-->

        
        <link rel="shortcut icon" href="./images/favicon.png">
        
    </head>    
	
<body>
<?php     require('./blog/wp-blog-header.php'); ?>
     
     
<?php
    include_once("./header_menu.php");
?>        
        <div class="container" id="blog-page">
        <div id="contents">
		<?php if ( have_posts() ) : ?>
			<?php while ( have_posts() ) : the_post(); ?>

				<?php get_template_part( 'content', get_post_format() ); ?>

			<?php endwhile; ?>
		<?php else : ?>

		<div class="hentry error404">
			<div class="postbody text">
				<h1><?php _e( 'Nothing Found', 'chunk' ); ?></h1>
				<div class="content">
					<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'chunk' ); ?></p>
					<?php get_search_form(); ?>
				</div><!-- .content -->
			</div><!-- .postbody -->
		</div>

		<?php endif; ?>
	</div><!-- #contents -->

	<div class="navigation">
		<div class="nav-previous"><?php next_posts_link( __( '<span class="meta-nav">&larr;</span> Older posts', 'chunk' ) ); ?></div>
		<div class="nav-next"><?php previous_posts_link( __( 'Newer posts <span class="meta-nav">&rarr;</span>', 'chunk' ) ); ?></div>
	</div>
        
<!--        <iframe src="http://blog.oinoi.com" frameborder="0" style="overflow:hidden;height:650;width:100%" height="650" width="100%"></iframe>      -->
</div>

<?php wp_footer(); ?>

    </body>

</html>