<?php
  $title = "Jono Hey :: Music";
  $music_current = "active";
  include("includes/header.inc.php");
?>

    <div id="fb-root"></div>
    <script>(function(d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s); js.id = id;
      js.src = "//connect.facebook.net/en_US/all.js#xfbml=1";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));</script>

    <div class="container-fluid">

      <header class="jumbotron subhead" id="overview">
        <h1><i class="icon-headphones icon-large h1_subhead_icon"></i>Music</h1>
        <p class="lead">Mostly piano music. Also, some trance.</p>

        <!--<div class="track_showcase">
          <h2>Relaxing piano playlist</h2>
          <iframe width="560" height="315" src="//www.youtube.com/embed/MoRIRzZzgTI" frameborder="0" allowfullscreen></iframe>
          <p>Good for working to, and our little'uns have been listening to them as they go to sleep.</p>
          <p>Photos are from travels in Central America, SE Asia and South Africa.</p>
        </div>-->
      </header>

      <section id="listen">
        <h2>Piano</h2>
        <p>Compilation of 2 hours of my favourite tracks.</p>

        <div class="row-fluid music-embed">
          <div class="span3">
            <h3>2 hour relaxing piano compilation</h3>
            <p>Good for working to, and our little'uns have been listening to them as they go to sleep.</p>
            <p>Photos are from travels in Central America, SE Asia and South Africa.</p>
          </div>
          <div class="span9">
            <iframe width="560" height="315" src="//www.youtube.com/embed/MoRIRzZzgTI" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>

        <div class="row-fluid music-embed">
          <div class="span3">
            <h3>Individual playlist</h3>
          </div>
          <div class="span9">
            <iframe width="560" height="315" src="//www.youtube.com/embed/videoseries?list=PLVajIt_b5zSWOFD4ETRvdbI21Lpg2Q4ox" frameborder="0" allowfullscreen></iframe>
          </div>
        </div>
        <div class="row-fluid">
      
      </div> <!-- listen -->

      <section id="nutmeg-music">
        <div class="row-fluid">
          <div class="span3">
            <h3>The Nutmeg jingle</h3>
            <p>The voice of Nutmeg is the fab <a href="http://www.ginabeck.co.uk/">Gina Beck</a>.</p>
          </div>
          <div class="span9">
            <div class="embed-right-span">
              <iframe width="560" height="315" src="//www.youtube.com/embed/tROgeAUVM2Y" frameborder="0" allowfullscreen></iframe>
            </div>
          </div>
      </section> <!-- nutmeg-music -->

      <section id="trance">
        <h2>Trance</h2>
        <p>I had the pleasure of co-writing a couple of tracks with Sneijder.</p>

        <div class="row-fluid music-embed">
          <div class="span3">
            <h3>Your Way</h3>
            <p>Played by Armin Van Buuren. This makes me happy.</p>
          </div>
          <div class="span9">
            <iframe width="560" height="315" src="//www.youtube.com/embed/ksBDIqpUbG0" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="span9">
            
          </div>
        </div>

        <div class="row-fluid music-embed">
          <div class="span3">
            <h3>Jackknife</h3>
          </div>
          <div class="span9">
            <iframe width="560" height="315" src="//www.youtube.com/embed/CXZ0gbBIeqE" frameborder="0" allowfullscreen></iframe>
          </div>
          <div class="span9">
            
          </div>
        </div>
        <div class="row-fluid">
      </div> <!-- Trance -->

      <section id="track-library">
        <h2>Individual piano tracks</h2>
        <div class="row-fluid">
          <div class="span4">
            <h3>Berlin</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Berlin.ogg" type="audio/ogg">
              <source src="content/music/mp3/Berlin.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

          <div class="span4">
            <h3>Riddle</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Riddle.ogg" type="audio/ogg">
              <source src="content/music/mp3/Riddle.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

          <div class="span4">
            <h3>Road to anywhere II</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Road to anywhere II.ogg" type="audio/ogg">
              <source src="content/music/mp3/Road to anywhere II.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>
        </div>
        <hr>

        <div class="row-fluid">

          <div class="span4">
            <h3>Ada</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Ada.ogg" type="audio/ogg">
              <source src="content/music/mp3/Ada.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

          <div class="span4">
            <h3>Mission</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Mission.ogg" type="audio/ogg">
              <source src="content/music/mp3/Mission.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

          <div class="span4">
            <h3>Golden Gateway</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Golden Gateway.ogg" type="audio/ogg">
              <source src="content/music/mp3/Golden Gateway.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

        </div>
        <hr>

        <div class="row-fluid">

          <div class="span4">
            <h3>Laid to rest</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Laid to rest.ogg" type="audio/ogg">
              <source src="content/music/mp3/Laid to rest.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

          <div class="span4">
            <h3>Autumn running</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Autumn running.ogg" type="audio/ogg">
              <source src="content/music/mp3/Autumn running.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

          <div class="span4">
            <h3>Persuasion</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Persuasion.ogg" type="audio/ogg">
              <source src="content/music/mp3/Persuasion.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

        </div>
        <hr>

        <div class="row-fluid">

          <div class="span4">
            <h3>Build</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Build.ogg" type="audio/ogg">
              <source src="content/music/mp3/Build.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

          <div class="span4">
            <h3>Pretty Woman</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Pretty Woman.ogg" type="audio/ogg">
              <source src="content/music/mp3/Pretty Woman.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

          <div class="span4">
            <h3>Monday</h3>
            <audio controls preload="metadata">
              <source src="content/music/ogg/Monday.ogg" type="audio/ogg">
              <source src="content/music/mp3/Monday.mp3" type="audio/mp3">
              <p>Your browser does not support the <code>audio</code> element.</p>
            </audio>
          </div>

        </div>
        <hr>
        <p>Like it? <a href="contact.php">Do let me know</a>.</p>
        <hr>
        <div class="alert alert-info">
          <i class="icon-info-sign"></i>Not seeing anything? Upgrade your browser at <a href="http://browsehappy.com">Browse happy</a>
        </div>
        
      </section> <!-- track-library -->

     <!-- <section id="comments">
        <hr>
        <div class="row-fluid">
          <div class="span3">
            <p>&nbsp;</p>
          </div>
          <div class="span9">
            <div class="embed-right-span">
              <div class="fb-comments" data-href="http://palojono.com/music.php" data-width="470" data-num-posts="10"></div>
            </div>
          </div>
      </section> --> <!-- comments -->

    </div><!-- /container -->

<?php
  include("includes/footer.inc.php");
?>