
<?php
  $title = "Jonathan Hey :: Design Creativity Innovation (and more)";
  $header_class = "aboutHeader";
  $header_text = "&nbsp;";
  $stylesheet = "palojono.css";
  include("includes/header.php");
  include("includes/sidebar.php");
  require("includes/database.php");
?>

<?php
// if a message was sent in the success variable get it
  $success = $_GET['success'];
?>
      <div id="content">
        <div id="breadcrumbs">
          <a href="index.php" title="take me to those fun thought bubbles again">home</a> &raquo; contact
        </div>
        <h2>
          Send me a note!
        </h2>

        <p>
		  Thanks for looking around the site. For thoughts on the site, requests for contracting work or speaking opportunities please leave a note below and if you leave an email address I'll be able to get back to you. I'd love to hear from you.
		</p>

	<? if ($success == 'y'){ ?>
	  <p class="notification">Thanks! I got your message.</p>
	<? } ?>


	<div id="contact_form">
		<form action="email.php" method="post">

		<input type="hidden" name="form" value="gencontact.txt">
		<input type="hidden" name="to" value="jono.hey@gmail.com">

		<fieldset>
		    <p><label for="subject">Subject</label> <input type="text" name="subject" size="38" tabindex="1"> (optional)</p>
		    <p><label for="saywhat">Say hi</label> <textarea name="saywhat" cols="38" rows="6" tabindex="2"></textarea></p>

		    <p><label for="name">Name</label> <input type="text" name="name" size="38" tabindex="3"> (optional)</p>
		    <p><label for="email">Email</label> <input type="text" name="email" size="38" tabindex="4"> (optional)</p>

		    <p><label for="verify_text">&nbsp;</label>To prevent spam, please type <strong>nospam</strong> in the box:</p>
		    <p><label for="verify">&nbsp;</label><input type="text" name="verify" size="38" tabindex="5"></p>

		    <p class="submit"><input type="submit" name="Send" value="Send" tabindex="6"></p>
		    <p class="small">It can take a moment to send so please wait until the page reloads</p>
		    <p class="small">Alternatively, email me at the address below</p>
		</fieldset>
		</form>
	</div>

      </div>


<? include("includes/footer.php") ?>
