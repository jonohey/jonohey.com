<!doctype html>
<!--[if lt IE 7]> <html class="no-js lt-ie9 lt-ie8 lt-ie7" lang="en"> <![endif]-->
<!--[if IE 7]>    <html class="no-js lt-ie9 lt-ie8" lang="en"> <![endif]-->
<!--[if IE 8]>    <html class="no-js lt-ie9" lang="en"> <![endif]-->
<!--[if gt IE 8]><!--> <html class="no-js" lang="en"> <!--<![endif]-->
<?php
  if (empty($title)) {
    $title = "Jono Hey";
  }
?>
<head>
	<meta charset="utf-8">
	<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1">

	<title><?php echo $title; ?></title>
	<meta name="description" content="Jono Hey :: Design, UX, photography, music, books and research">
	<meta name="author" content="Jono Hey">

	<meta name="viewport" content="width=device-width, initial-scale=1.0">

  <link href='http://fonts.googleapis.com/css?family=Brawler' rel='stylesheet' type='text/css'>


  <link href="/less/font-awesome.css" rel="stylesheet">

  <!--
  <link rel="stylesheet/less" href="/less/style.less">
  <script src="/js/libs/less-1.3.0.min.js"></script>-->
  
  <!-- Use SimpLESS (Win/Linux/Mac) or LESS.app (Mac) to compile your .less files
  to style.css, and replace the 2 lines above by this one:-->

  <link rel="stylesheet" href="/less/style.css">

	<script src="/js/libs/modernizr-2.5.3-respond-1.1.0.min.js"></script>
  <script src="/js/libs/jquery.colorbox-min.js"></script>

  <!-- favicons generated by favicomatic -->
  <link rel="apple-touch-icon-precomposed" sizes="57x57" href="/favicons/apple-touch-icon-57x57.png" />
  <link rel="apple-touch-icon-precomposed" sizes="114x114" href="/favicons/apple-touch-icon-114x114.png" />
  <link rel="apple-touch-icon-precomposed" sizes="72x72" href="/favicons/apple-touch-icon-72x72.png" />
  <link rel="apple-touch-icon-precomposed" sizes="144x144" href="/favicons/apple-touch-icon-144x144.png" />
  <link rel="apple-touch-icon-precomposed" sizes="120x120" href="/favicons/apple-touch-icon-120x120.png" />
  <link rel="apple-touch-icon-precomposed" sizes="152x152" href="/favicons/apple-touch-icon-152x152.png" />
  <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
  <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
  <meta name="application-name" content="Jono Hey :: Design, UX, photography, music, books and research"/>
  <meta name="msapplication-TileColor" content="#FFFFFF" />
  <meta name="msapplication-TileImage" content="/favicons/mstile-144x144.png" />
</head>

<body class="<?php echo $body_class; ?>">
<!--[if lt IE 7]><p class=chromeframe>Your browser is <em>ancient!</em> <a href="http://browsehappy.com/">Upgrade to a different browser</a> or <a href="http://www.google.com/chromeframe/?redirect=true">install Google Chrome Frame</a> to experience this site.</p><![endif]-->
    
    <div class="navbar navbar-inverse navbar-fixed-top">
      <div class="navbar-inner">
        <div class="container-fluid">
          <a class="btn btn-navbar" data-toggle="collapse" data-target=".nav-collapse">
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </a>
          <a class="brand" href="index.php">Jono Hey</a>

          <div class="nav-collapse collapse">
            <ul class="nav">
              <li class="<?php echo $photography_current; ?>"><a href="/photography.php"><i class="icon-camera"></i>Photography</a></li>
              <li class="<?php echo $music_current; ?>"><a href="/music.php"><i class="icon-headphones"></i>Music</a></li>
              <li class="<?php echo $books_current; ?>"><a href="/books.php"><i class="icon-book"></i>Books</a></li>
              <li><a href="http://palojono.blogspot.com"><i class="icon-pencil"></i>Blog</a></li>
              <li class="dropdown" class="<?php echo $projects_current; ?>" id="project-menu">
                <a class="dropdown-toggle" data-toggle="dropdown" href="#project-menu">
                  <i class="icon-wrench"></i>Projects
                  <b class="caret"></b>
                </a>
                <ul class="dropdown-menu">
                  <li><a href="http://www.sketchplanations.com" title="Explain in a sketch">sketchplanations.com</a></li>
                  <li><a href="/dev/chord_progression_generator/chord_progression_generator.php"><i class="icon-music"></i>Chord Progression Generator</a></li>
                  <li class="divider"></li>
                  <li><a href="/dev/tagv8/index.html">Tag 2.0</a></li>
                  <li><a href="/dev/4ptag/index.html">Simple 4 player tag</a></li>
                  <li><a href="/dev/etch/index.html">Etch-a-Sketch</a></li>
                  <li><a href="/dev/jong3/index.html">Jong</a></li>
                </ul>
              </li>
            </ul>

            <ul class="nav pull-right">
              <li class="<?php echo $contact_current; ?>"><a href="/contact.php"><i class="icon-envelope"></i>Contact</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>