<?php
  include("includes/header.inc.php");
?>
    <div class="container-fluid">

      <div class="hero-unit">
        <h1><i class="icon-book icon-large h1_icon"></i>Page title</h1>

        <p style="padding-top: 20px;">Page intro text.</p>

        <div class="subnav">
          <ul class="nav nav-pills">
            <li><a href="#photo-books">Subnav 1</a></li>
            <li><a href="#cookbook">Subnav 2</a></li>
            <li><a href="#notes">Subnav 2</a></li>
            <li><a href="#phd-thesis">Subnav 2</a></li>
          </ul>
        </div>

      </div><!-- hero-unit -->

      <section id="photo-books">
        <h1>Section 1</h1>
        <p>Section 1 intro</p>
        <hr>

        <div class="row-fluid">
          <div class="span3">
            <h2>Item 1</h2>
            <p>Item 1 explanation</p>
          </div>
          <div class="span9">
            <p>Item 1 more</p>
          </div>
        </div>

        <hr>

        <div class="row-fluid">
          <div class="span3">
            <h2>Item 2</h2>
            <p>Item 2 explanation</p>
          </div>
          <div class="span9">
            <p>Item 2 more</p>
          </div>
        </div>          
      </section> <!-- photo-books -->

    </div><!-- /container -->

<?php
  include("includes/footer.inc.php");
?>