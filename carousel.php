<?php
  $body_class = "photography";
  $title = "Jono Hey :: Photography";
  $photography_current = "active";
  include("includes/header.inc.php");
?>
    <div class="container">
      <header class="jumbotron subhead" id="overview">
        <h1><i class="icon-camera-retro icon-large h1_subhead_icon"></i>Photography</h1>
        <p class="lead">Mostly landscapes. Have a browse here. See more at <a href="http://www.flickr.com/photos/palojono">palojono on Flickr</a> or you can also follow palojono on Instagram.</p>
      </header>
    </div>

    <div id="myCarousel" class="carousel slide">
      <div class="carousel-inner">
        <div class="item active">
          <img src="img/photography/carousel/mt_rainier_summit_jono_hey.jpg" alt="">
        </div>
        <div class="item">
          <img src="img/photography/carousel/cape_point_sunrise_jono_hey.jpg" alt="">
        </div>
        <div class="item">
          <img src="img/photography/carousel/city_from_waterloo_bridge_jono_hey.jpg" alt="">
        </div>
        <div class="item">
          <img src="img/photography/carousel/epping_forest_cathedral_jono_hey.jpg" alt="">
        </div>
        <div class="item">
          <img src="img/photography/carousel/fin_dome_jono_hey.jpg" alt="">
        </div>
        <div class="item">
          <img src="img/photography/carousel/highgate_wood_jono_hey.jpg" alt="">
        </div>
        <div class="item">
          <img src="img/photography/carousel/jonkershoek_jono_hey.jpg" alt="">
        </div>
        <div class="item">
          <img src="img/photography/carousel/sierra_panorama_jono_hey.jpg" alt="">
        </div>
        <div class="item">
          <img src="img/photography/carousel/the_wave_jono_hey.jpg" alt="">
        </div>
        <div class="item">
          <img src="img/photography/carousel/volcan_concepcion_jono_hey.jpg" alt="">
        </div>
      </div>
      <a class="left carousel-control" href="#myCarousel" data-slide="prev">‹</a>
      <a class="right carousel-control" href="#myCarousel" data-slide="next">›</a>
    </div>

    <div class="container-fluid" id="photo_showcase">


      <hr>



      <section id="photography-talk">

        <div class="row-fluid">
          <div class="span8">
            <h2>Some thoughts</h2>
            <p>As you might have guessed you can find most of <a href="http://www.flickr.com/photos/palojono">my photography on Flickr</a>.</p>
            <p>Lest you like some of it I publish my photography under the Creative Commons: <a href="http://creativecommons.org/licenses/by-nc-sa/2.0/">Attribution, Noncommercial, Share Alike</a> licence. Which means you are free to share, remix, adapt and enjoy the work as long as you mention me somewhere. A link back here or to <a href="http://www.flickr.com/photos/palojono">my Flickr page</a> is ideal. Some of them make nice desktop photos.</p>
            <p>For commercial use, please <a href="contact.php">contact me</a>. I am very reasonable.</p>
          </div>
        </div>

      </section> <!-- photography-talk -->    

    </div><!-- /container -->

<?php
  include("includes/footer.inc.php");
?>