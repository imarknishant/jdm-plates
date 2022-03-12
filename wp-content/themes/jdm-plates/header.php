<!doctype html>
<html>

<head>
  <meta charset="utf-8">
  <title>Jdmplates | Homepage</title>
  <meta name="viewport"
    content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no, shrink-to-fit=no">
  <meta http-equiv="x-ua-compatible" content="ie=edge">
  <!-- Favicon -->
  <link rel="shortcut icon" href="favicon.png" sizes="32x32" type="image/x-icon">

  <!-- CSS -->
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/ProjectName.css">
  <link rel="stylesheet" href="<?php echo get_template_directory_uri(); ?>/css/main.css">
  
</head>

<body <?php body_class(); ?> >
<input type="hidden" id="ajax-url" value="<?php echo admin_url('admin-ajax.php'); ?>">
<header id="header">
  <div class="container-fluid">
    <div class="top-header">
    
            <ul>
                <li><a href="tel:07936489785"><i class="fa fa-phone" aria-hidden="true"></i> 07936489785</a></li>
                <li><a href="mailto:contact-us@jdmplates.co.uk"><i class="fa fa-envelope" aria-hidden="true"></i> contact-us@jdmplates.co.uk</a></li>
            </ul>

            <ul>
              <li>For 10% Off, Use Code JDMP10,Alternatively, Click HERE!</li>
              <li><a href="#"><i class="fa fa-shopping-cart" aria-hidden="true"></i> 0 Items</a></li>
            </ul>
       
    </div>
    <nav class="navbar navbar-expand-lg">
     
        <a class="navbar-brand" href="index.php"><img src="<?php echo get_template_directory_uri(); ?>/images/logo.png"></a>
        <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="navbar-collapse collapse" id="navbarSupportedContent" style="">
          <ul class="navbar-nav ms-auto">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Number Plate Shop</a>
            </li>
            <li>
              <a href="#">Social Media Gallery</a>
            </li>
            <li>
              <a href="#">Articles & Posts</a>
            </li>
            <li>
              <a href="#">My Account & Tracking</a>
            </li>
            <li>
              <a href="#">My Basket</a>
            </li>
            <li>
              <a href="#">Checkout</a>
            </li>

            <li>
              <a href="#"><img src="<?php echo get_template_directory_uri(); ?>/images/search.png"></a>
            </li>
            
          </ul>

          <!-- <ul class="header-social-icons">
              <li><a href="#"><img src="images/search.png"></a></li>
              <li><a href="#"><img src="images/heart.png"></a></li>
              <li><a href="#"><img src="images/cart.png"></a></li>
          </ul> -->
    </div>
    </nav>
</div>
  </header>


  <!-- Modal -->
<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Login</h3>
        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
      </div>
      <div class="modal-body">
        <form>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email Address*">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password*">
          </div>
          <div class="forgot">
          <a href="#">Forgot your password?</a>
</div>
        </form>
      </div>
      <div class="modal-footer">
        <div class="login-btns">
        <a href="#" class="btn">LOGIN</a>
        <a href="JavaScript:void(0);" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModall" class="btn btn-border">REGISTER</a>
</div>
      </div>
    </div>
  </div>
</div>


  <!-- Modal -->
  <div class="modal fade" id="exampleModall" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h3 class="modal-title" id="exampleModalLabel">Register</h3>
        <!-- <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> -->
      </div>
      <div class="modal-body">
        <form>
        <div class="form-group">
            <input type="text" class="form-control" placeholder="First Name">
          </div>
          <div class="form-group">
            <input type="text" class="form-control" placeholder="Last Name">
          </div>
          <div class="form-group">
            <input type="email" class="form-control" placeholder="Email*">
          </div>
          <div class="form-group">
            <input type="password" class="form-control" placeholder="Password*">
          </div>
          <div class="forgot">
          <a href="#">Forgot your password?</a>
</div>
        </form>
      </div>
      <div class="modal-footer">
        <div class="login-btns">
        <a href="#" class="btn">REGISTER</a>
        <a href="JavaScript:void(0);" data-bs-toggle="modal" data-bs-dismiss="modal" data-bs-target="#exampleModal" class="btn btn-border">LOGIN</a>
</div>
      </div>
    </div>
  </div>
</div>