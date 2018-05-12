
<?php
  $title = "Jonathan Hey :: Design Creativity Innovation (and more)";
  $header_class = "aboutHeader";
  $header_text = "&nbsp;";
  $stylesheet = "palojono.css";
  include("includes/header.php");
  include("includes/sidebar.php");
  require("includes/database.php");
?>

      <div id="content">
        <div id="breadcrumbs">
          <a href="index.php" title="take me to those fun thought bubbles again">home</a> &raquo; about Jono
        </div>
        <h2>
          A little about me
        </h2>

        <div align="center"><a href="http://www.wordle.net/gallery/wrdl/849171/Design" title="Wordle: Design"><img src="images/about_me/Jono Wordle tag cloud_450.png" alt="Wordle: Jono Hey" style="padding:4px;border:0px solid #ddd"></a></div>

		<p>
		  I am a freelance innovation consultant based in London, who most recently worked at <a href="http://www.jumpassociates.com">Jump Associates</a>, a design strategy firm in <a href="http://maps.google.com/maps?f=q&hl=en&geocode=&q=the+bay+area,+CA&sll=37.77916,-122.42007&sspn=0.294147,0.396881&ie=UTF8&z=8&iwloc=addr" title="Google Maps Bay Area view">the Bay Area</a>, USA. Jump helps companies find new opportunities for growth by helping them make products that people actually want. It was great to be a part of it.</a>
		</p>

		<p>
		  I am currently available for contract innovation, design, social research and strategy work and am on the look out for a full-time position based in or around London. If you think I might fit the bill please <a href="contact.php">send me a note on the contact page</a>.
		</p>

        <p>
	  	  Until May 2008 I was a PhD candidate at the <a href="http://bid.berkeley.edu">Berkeley Institute of Design</a> at the <a href="http://www.berkeley.edu">University of California, Berkeley</a>. My doctoral thesis studied <a href="papers/Hey_Thesis_Effective_Framing_in_Design_Teams_2008.pdf" title="Doctoral thesis pdf">Effective Framing in Design Teams</a> (pdf).
		</p>

        <p>
          The <a href="http://www.humanmetrics.com">Myers-Briggs</a> personality profile says I'm an <a href="http://keirsey.com/personality/ntep.html">Inventor (eNTP)</a> but I'm no longer sure I agree.
        </p>

        <p>
          By poking around this site you'll know that a couple of my passions include <a href="photos/">photography</a> and <a href="piano.php">music</a>. Thanks for visiting. Don't hesitate to <a href="contact.php" title="Leave me a message here">Say hi</a>.
        </p>

		<p>
		  &nbsp;
		</p>

        <p>
          Today, you may find me being
          <?php
			  include_once("GetRandomText.php");
			  $MPTextFile = "jono_hats.txt";
			  $MPSepString = "*divider*";
			  $MPTextToHTML = false;
			  MPPrintRandomText($MPTextFile, $MPSepString, $MPTextToHTML);
		  ?>.
        </p>

		<p>
		  &nbsp;
		</p>

		<p>Latest tweets and brain food:</p>

		<script src="http://widgets.twimg.com/j/2/widget.js"></script>
		<script>
		new TWTR.Widget({
		  version: 2,
		  type: 'profile',
		  rpp: 4,
		  interval: 6000,
		  width: 475,
		  height: 100,
		  theme: {
		    shell: {
		      background: '#ffffff#756c6c',
		      color: '#756c6c'
		    },
		    tweets: {
		      background: '#ffffff',
		      color: '#660000',
		      links: '#996633'
		    }
		  },
		  features: {
		    scrollbar: true,
		    loop: false,
		    live: true,
		    hashtags: true,
		    timestamp: false,
		    avatars: false,
		    behavior: 'all'
		  }
		}).render().setUser('palojono').start();
		</script>

		<div style="margin:0px;">
		  <embed width="190" height="300" src="http://www.goodreads.com/images/widget/widget2.swf" quality="high" wmode="transparent" FlashVars="id=112291&amp;shelf=currently-reading&amp;title=Current brain food&amp;sort=date_added&amp;order=d&amp;params=amazon,,dest_site,amazon"></embed>
		</div>
		<div style="margin:0px;">
			<a href="http://www.goodreads.com/user/show/112291" target="_blank"><img alt="Widget_logo" border="0" height="32" src="http://www.goodreads.com/images/widget/widget_logo.gif" title="my goodreads profile" width="190" /></a>
		</div>

		<p>The <a href="http://www.wordle.net">Wordle</a> was created from <a href="links.php">my del.icio.us tag cloud</a> as another way to share a little of who I am without doing any thinking about it. Neat.</p>

      </div>

<? include("includes/footer.php") ?>
