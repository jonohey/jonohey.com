<?php
  include("includes/header.inc.php");
?>

    <div class="container-fluid">

      <header class="jumbotron masthead" id="overview">
        <div class="row-fluid">
          <div class="span12">        
            <h1>Hi, I'm Jono</h1>
            <p>I'm a designer of all sorts living and working in London.</p>
          </div>
        </div>

        <div class="row-fluid">
          <div class="span12">
            <ul class="social_icons">
              <li><a href="http://www.twitter.com/jonohey"><i class="icon-twitter icon-large"></i></a></li>
              <li><a href="http://uk.linkedin.com/in/jonohey"><i class="icon-linkedin icon-large"></i></a></li>
            </ul>            
          </div>
        </div>
      </header>

      <section id="about">
        <div class="row-fluid">
          <div class="span12">
            <div class="alert alert-info">
              <i class="icon-info-sign"></i>Side project: I'm currently working on <a href="http://www.sketchplanations.com" title="sketchplanations">sketchplanations.com</a>
            </div>
          </div>
        </div>

        <h1>About Me</h1>
        <hr>
        <div class="row-fluid">
          <div class="span1 icon-span1">
            <h2><i class="icon-camera-retro icon-large header_icon"></i></h2>
          </div>
          <div class="span3">
            <h2><a href="photography.php">I take pictures</a></h2>
          </div>
          <div class="span6">
            <p>Mostly now on Instagram (I'm palojono). But before now mountains, big landscapes and travel are my thing. You can <a href="photography.php">see a few here</a> and in the <a href="books.php#photo-books"> photo books</a> and find the rest at <a href="http://www.flickr.com/photos/palojono">palojono on Flickr</a>.</p>
          </div>
        </div>
        <hr>
        <div class="row-fluid">
          <div class="span1 icon-span1">
            <h2><i class="icon-headphones icon-large header_icon"></i></h2>
          </div>
          <div class="span3">
            <h2><a href="music.php">I write music</a></h2>
          </div>
          <div class="span6">
            <p>I've played piano most of my life. It's about the most relaxing thing I do. <a href="music.php">Have a listen</a>.</p>
          </div>
        </div><!--/row-->
        <hr>

        <div class="row-fluid">
          <div class="span1 icon-span1">
            <h2><i class="icon-pencil icon-large header_icon"></i></h2>
          </div>
          <div class="span3">
            <h2><a href="books.php#notes">I take nice notes</a></h2>
          </div><!--/span-->
          <div class="span6">
            <p>I'm a fan of mindmapping, sketching and Moleskines. Sometimes it works out well. Working on <a href="http://www.sketchplanations.com">sketchplanations.com</a> to hone the skills. One a day for 2013.</p>
          </div><!--/span-->
        </div>
        <hr>

        <div class="row-fluid">
          <div class="span1 icon-span1">
            <h2><i class="icon-cog icon-large header_icon"></i></h2>
          </div>
          <div class="span3">
            <h2><a href="http://www.nutmeg.com">I work at Nutmeg</a></h2>
          </div><!--/span-->
          <div class="span6">
            <p>I work on the user experience at <a href="http://www.nutmeg.com">Nutmeg</a> &mdash; a new, online investment manager. Nutmeg has the wonderful vision of helping us all be better off in the future.</p>
          </div><!--/span-->
        </div><!--/row-->
        <hr>

        <div class="row-fluid">
          <div class="span1 icon-span1">
            <h2><i class="icon-beaker icon-large header_icon"></i></h2>
          </div>
          <div class="span3">
            <h2><a href="books.php#phd-thesis">I did a PhD</a></h2>
          </div><!--/span-->
          <div class="span6">
            <p>I studied design teams during the new product development process at Berkeley University in California.</p>
          </div><!--/span-->
        </div>
        <hr>

        <div class="row-fluid">
          <div class="span1 icon-span1">
            <h2><i class="icon-pencil icon-large header_icon"></i></h2>
          </div>
          <div class="span3">
            <h2><a href="http://palojono.blogspot.com">I have a blog</a></h2>
          </div><!--/span-->
          <div class="span6">
            <p>Which I have been writing off and on for about 7 years.</p>
          </div><!--/span-->
        </div><!--/row-->
        <hr>

        <div class="row-fluid">
          <div class="span1 icon-span1">
            <h2><i class="icon-book icon-large header_icon"></i></h2>
          </div>
          <div class="span3">
            <h2><a href="books.php">I make books</a></h2>
          </div><!--/span-->
          <div class="span6">
            <p>Mostly using <a href="http://www.blurb.com">Blurb</a>. I love 'em. You can even buy a few.</p>
          </div><!--/span-->
        </div>
        <hr>

        <div class="row-fluid">
          <div class="span1 icon-span1">
            <h2><i class="icon-music icon-large header_icon"></i></h2>
          </div>
          <div class="span3">
            <h2><a href="/dev/chord_progression_generator/chord_progression_generator.php">Write your own music</a></h2>
          </div><!--/span-->
          <div class="span6">
            <p>I wrote a simple <a href="/dev/chord_progression_generator/chord_progression_generator.php">chord progression generator</a> in <a href="http://processing.org/">Processing</a>. For when you're stuck for ideas for what to play.</p>
          </div><!--/span-->
        </div>

      </section><!-- about -->

      <hr>

      <section id="tabs">

        <div class="row-fluid">
          <div class="span3">
            <h1>More</h1>
          </div>

          <div class="span9" id="about">
            <ul class="nav nav-tabs">
              <li class="active"><a href="#more-about-me" data-toggle="tab"><i class="icon-user"></i>More about me</a></li>
              <li><a href="#wordle" data-toggle="tab"><i class="icon-cloud"></i>Wordle</a></li>
            </ul>

            <div class="tab-content">
              <div class="tab-pane active" id="more-about-me">
                <h2>More about me</h2>
                <p>
                  I am a user experience designer and strategist based in London working at <a href="http://www.nutmeg.com">Nutmeg</a>.
                </p>
                  Previously I worked at <a href="http://www.jumpassociates.com">Jump Associates</a>, a design strategy firm in <a href="http://maps.google.com/maps?f=q&hl=en&geocode=&q=the+bay+area,+CA&sll=37.77916,-122.42007&sspn=0.294147,0.396881&ie=UTF8&z=8&iwloc=addr" title="Google Maps Bay Area view">the Bay Area</a>, USA. Jump helps companies find new opportunities for growth by helping them make products that people actually want. It was great to be a part of it.</a>
                </p>
                <p>
                  In May 2008 I earned a PhD from the <a href="http://bid.berkeley.edu">Berkeley Institute of Design</a> at the <a href="http://www.berkeley.edu">University of California, Berkeley</a>. My doctoral thesis studied <a href="books.php#phd-thesis">Effective Framing in Design Teams</a>.
                </p>
                <p>
                  Before heading to the US I worked at <a href="http://www.creax.com">Creax</a> &mdash; a fantastically creative firm headquartered in Belgium &mdash; managing software development and consulting and training on innovation particularly using methods for systematic innovation originally based on <a href="http://en.wikipedia.org/wiki/TRIZ">TRIZ</a>: a theory of inventive problem-solving. Sometimes it's awesome and what I learned doing that provides a different lens on everything I do.
                </p>
                <div class="alert alert-info">
                  <i class="icon-info-sign"></i>Get a fuller work history by <a href="http://uk.linkedin.com/in/jonohey">viewing my LinkedIn profile</a>.
                </div>
              </div>
              <div class="tab-pane" id="wordle">
                <h2>Wordle</h2>
                <a href="http://www.wordle.net/gallery/wrdl/849171/Design" title="Wordle: Design">
                  <img src="img/jono_hey_wordle_tag_cloud_450.png" alt="Wordle: Jono Hey" style="padding:4px;border:0px solid #ddd">
                </a>
              </div>
            </div>

          </div><!--/span-->
        </div><!--/row-->

      </section><!-- tabs -->

      <hr>

      <section id="#photo">
        <div class="row-fluid">
          <div class="span12">
              <div class="id-photo">
                <img src="img/jono_hey.png" id="headshot" class="tooltip_above" data-original-title="Hi !"></img>
              </div>
          </div>
        </div><!--/row-->
      </section>   

    </div> <!-- /container -->    

<?php
  include("includes/footer.inc.php");
?>