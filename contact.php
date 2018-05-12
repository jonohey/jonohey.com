<?php
  $title = "Jono Hey : Contact me";
  $contact_current = "active";
  include("includes/header.inc.php");
?>

<?php
// if a message was sent in the success variable get it
  $success = $_GET['success'];
  $error = $_GET['error']
?>

    <div class="container-fluid">

      <div class="row-fluid">
        <div class="span12">

          <div id="contact_form">
            <form class="form-horizontal" action="email.php" method="post">

              <input type="hidden" name="form" value="gencontact.txt">
              <input type="hidden" name="to" value="jono.hey@gmail.com">

              <fieldset>
                <legend><i class="icon-envelope icon-large header_icon"></i>Send me a message</legend>

                  <? if ($success == 'y'){ ?>
                    <div class="alert alert-success">
                      <button type="button" class="close" data-dismiss="alert">×</button>
                      <strong>Success!</strong> The message is on its way. Thanks!
                    </div>
                  <? } ?>

                  <? if ($error == 'blank'){ ?>
                    <div class="alert alert-error">
                      <button type="button" class="close" data-dismiss="alert">×</button>
                      <strong>Ack!</strong> Something was up with the message. Have the patience to send it in an email? I'm at <a href="mailto:jono.hey@gmail.com">jono.hey@gmail.com</a>
                    </div>
                  <? } else { ?>

                    <div class="control-group">
                      <label class="control-label" for="subject">Subject</label>
                      <div class="controls">
                        <input type="text" class="input-xlarge" name="subject" tabindex="1" placeholder="optional">
                        <!-- <p class="help-block">(optional)</p> -->
                      </div>
                    </div>

                    <div class="control-group">
                        <label class="control-label" for="saywhat">Message</label>
                      <div class="controls">
                        <textarea class="input-xlarge" name="saywhat" rows="6" tabindex="2" placeholder="optional"></textarea>
                      </div>
                    </div>

                    <div class="control-group">
                      <label class="control-label" for="name">Name</label>
                      <div class="controls">
                        <input type="text" name="name" tabindex="3" placeholder="optional">
                      </div>
                    </div>

                    <div class="control-group">
                      <label class="control-label" for="email">Email</label>
                      <div class="controls">
                        <input type="text" name="email" tabindex="4" placeholder="optional">
                      </div>
                    </div>

                    <div class="control-group">
                      <label class="control-label" for="verify_text">Verify</label>
                      <div class="controls">
                        <p class="help-block">To prevent spam, please type <strong>nospam</strong> in the box:</p>
                        <input type="text" name="verify" tabindex="5">
                      </div>
                    </div>

                    <div class="form-actions">
                      <input type="submit" class="btn btn-primary btn-large" name="Send" value="Send message" tabindex="6">
                      <p class="help-block">It can take a moment to send so please wait until the page reloads</p>
                    </div>
                    
                    <p class="small">Alternatively, email me at <a href="mailto:jono.hey@gmail.com">jono.hey@gmail.com</a> or tweet me: <a href="http://twitter.com/jonohey">@jonohey</a></p>
                  <? } ?>
              </fieldset>
            </form>
          </div>
        </div>
      </div> <!-- /row -->

    </div><!-- /container -->

<?php
  include("includes/footer.inc.php");
?>