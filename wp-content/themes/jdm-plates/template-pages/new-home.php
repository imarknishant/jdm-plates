<?php
/*
Template Name: New Home
*/

session_start();

$_SESSION['plate_view'] = 'both';

global $product;
?>
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
 <link href="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/css/toastr.css" rel="stylesheet"/>

</head>

<body>
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
<style>
/*        * { font: 17px Calibri; }*/
        
        .mainContainer {
            position: relative;
            padding: 0;
            min-width: 250px;
            min-height: 250px;
            display: inline-block;
            margin: 0 auto;
        }
        
        img {border: none; max-width: 100%;}
        
        #textArea {
            display: block;
            padding: 10px 5px;
        }
        
        #text {
            position: absolute;
            top: 90px;
            left: 0;
            background: #000;
            background: rgba(0, 0, 0, 0.1);
            color: #000;
            width: auto;
            padding: 5px;
            text-align: left;
            border: dashed 2px #ff7f27;
            font: 30px Calibri;
            display: block;
            cursor: move;
        }
        
        canvas {max-width: 100%;}
    </style>
<main id="main">
<section class="home-banner">
<!--
    <div style="font-family: UKNumberPlate;">.</div>
    <div style="font-family: Vehicle JNL;">.</div>
-->
    <div class="container-fluid">
    <div class="text-center right-content" >
    <div id="text-style-change">
    <div id="text-style">
     <div class="upper-div front_view_container" id="myHtml">
    <!--The parent container, image and container for text (to place over the image)-->
        <div class="mainContainer" id='mainContainer1'>
            <!--The default image. You can select a different image too.-->
            <img src="https://jdm-plates.customerdevsites.com/wp-content/themes/jdm-plates/plate-images/uk-plates/standard-520x111-front.png" 
                id="plateimg_white" alt="" />

            <!--The text, which is also draggable.-->
            <div id='text-front' class="img-text">YOUR REG</div>
        </div>
    </div>
            
    <div class="upper-div back_view_container" id="myHtml2">
        <div class="mainContainer" id='mainContainer2'>
            <img src="https://jdm-plates.customerdevsites.com/wp-content/themes/jdm-plates/plate-images/uk-plates/standard-520x111-rear.png" 
                id="plateimg_yellow" alt="" />
            <div id='text-back' class="img-text">YOUR REG</div>
        </div>
    </div>
</div>
</div>
        </div>
      
<!--
    <center> 
    <div id="myHtml" style="background-color: #F0F0F1; color: #00cc65; width: 500px; margin:20px;
        padding:25px;">           
            <h2 style="color: #3e4b51;">
                Html to canvas, and canvas to proper image
            </h2>
            <div style="float: left;width:110x;padding-left:10px" >
                <img src="https://jdm-plates.customerdevsites.com/wp-content/uploads/2021/12/Screenshot_4.png" style="width: 100px;height:100px;" />
                
            </div>
            <div style="float: left;width:110x;padding-left:10px" >
                <img  src="https://jdm-plates.customerdevsites.com/wp-content/uploads/2021/12/home-banner.png"
                style="width: 100px;height:100px;" />
            </div>
          
            <p style="color: #3e4b51;">
                <b>Codepedia.info</b> is a programming blog. Tutorials focused on Programming ASP.Net,
                C#, jQuery, AngularJs, Gridview, MVC, Ajax, Javascript, XML, MS SQL-Server, NodeJs,
                Web Design, Software
            </p>
           
    </div>
    </center>
-->
        
        <div id="previewImg">
        </div>
        
    </div>

    <div class="fixed-sidebar">
        <div class="head">
            <h5>JDM Plates number plate builder</h5>
            <p>Welcome to our online number plate builder. Please choose the options below to start building your number plate from scratch:</p>
        </div>
        <form>
        <div id="PlateList" class="plate-list">
            <ul>
                <li><a class="reg" href="javascript:void(0);">1 Your Reg</a>
                    <div class="under">
                        <a href="javascript:void(0);" class="SeeMore back_1">Back to the builder</a>
                        <div class="under-padding text-center">
                            <h4>Enter your registration number below:</h4>
                            <div class="form_container">
                                <input type="text" class="form-control num value_0" maxlength="1" placeholder="Y">
                                <input type="text" class="form-control num value_1" maxlength="1" placeholder="O">
                                <input type="text" class="form-control num value_2" maxlength="1" placeholder="U">
                                <input type="text" class="form-control num value_3" maxlength="1" placeholder="R">
                                <input type="text" class="form-control num value_4" maxlength="1">
                                <input type="text" class="form-control num value_5" maxlength="1" placeholder="R">
                                <input type="text" class="form-control num value_6" maxlength="1" placeholder="E">
                                <input type="text" class="form-control num value_7" maxlength="1" placeholder="G">
                            </div>
                            <p>Please remember to enter your spaces where they need to be as they aren't automatically added.</p>
                            <p>If spacing is incorrect, number plates won't be road legal or contain legal information.</p>
                            <button type="btn" class="btn" id="generate_number_plate">Continue</button>
                        </div>
                    </div>
                </li>
            
                <li><a class="size" href="javascript:void(0);">2 Plate Size</a>
                    <div class="under under-size">
                        <a href="javascript:void(0);" class="SeeMore back_2">Back to the builder</a>
                        <div class="under-padding text-center">
                            <h4>Choose a Plate Size from below:</h4>
                             
                            <div class="form_container flex-wrap">
                               <select class="form-control mb-2" id="plate_type"> 
                                <option value="">Please select...</option>
                              <?php
                                $wcatTerms = get_terms('product_cat', array('hide_empty' => 0, 'parent' =>0));
                                $t=1;
                                foreach($wcatTerms as $cat){
                                    if($cat->name != 'Uncategorized'){
                               ?>
                                <option value="<?php echo $t; ?>" data-type="<?php echo $cat->slug; ?>"><?php echo $cat->name; ?></option>
                                <?php
                                $t++;
                                    }
                                }
                                ?>
<!--
                                <option value="2" data-type="Imported">Imported car number plate</option>
                                <option value="3" data-type="Motorcycle">Motorcycle & ATV number plate</option>
                                <option value="4" data-type="Motorcycle_profiled">Profiled motorcycle plates</option>
-->
<!--
                                <option value="7">Import Shapes</option>
                                <option value="2">Motorbike Shapes</option>
                                <option value="3">Manufacturer Specific Shapes</option>
-->
                               </select>
                            <!-- UK car number plate-->
                            <select name="size-select-1" id="size-select-1" class="mb-2 builder-size-select builder-size-sub-select form-control" style="display:none;" data-parent="0">
                                <option value="">Please select...</option>
                            <?php
                            $args = array(
                                'post_type' => 'product',
                                'post_status' => 'publish',
                                'order' => 'ASC',
                                'tax_query'   => array(
                                        array(
                                            'taxonomy'  => 'product_cat',
                                            'field'     => 'id',
                                            'terms'     => 16,
                                        )
                                    )
                                );
                                $the_query = new WP_Query($args);
                                if($the_query->have_posts()){
                                    
                                    while($the_query->have_posts()):
                                    $the_query->the_post();
                                    $chrLimit = get_field('limit', get_the_ID());
                            ?>
                                <option value="<?php echo get_the_ID();?>" data-chr="<?php echo $chrLimit; ?>"><?php echo get_the_title(); ?></option>
                            <?php
                                    endwhile;
                                    wp_reset_query();
                                }
                            ?>
                            
                            </select>
                                
                <!-- Imported car number plate-->
                <select name="size-select-2" id="size-select-2" class="mb-2 builder-size-select builder-size-sub-select form-control" style="display:none;" data-parent="0">
                    <option value="">Please select...</option>
                    <?php
                    $args = array(
                    'post_type' => 'product',
                    'post_status' => 'publish',
                    'order' => 'ASC',
                    'tax_query'  => array(
                        array(
                            'taxonomy'  => 'product_cat',
                            'field'     => 'id',
                            'terms'     => 17,
                        )
                      )
                    );
                    $the_query = new WP_Query($args);
                    if($the_query->have_posts()){

                        while($the_query->have_posts()):
                        $the_query->the_post();
                        $chrLimit = get_field('limit', get_the_ID());
                    ?>
                    <option value="<?php echo get_the_ID(); ?>" data-chr="<?php echo $chrLimit; ?>"><?php echo get_the_title(); ?></option>
                    <?php 
                        endwhile;
                        wp_reset_query();
                      }
                    ?>
                    
                </select>
                                
                <!-- Motor cycle & ATV number plate-->
                <select name="size-select-3" id="size-select-3" class="mb-2 builder-size-select builder-size-sub-select form-control" style="display:none;" data-parent="0">
                    <option value="">Please select...</option>
                    <?php
                    $args = array(
                    'post_type' => 'product',
                    'post_status' => 'publish',
                    'order' => 'ASC',
                    'tax_query'  => array(
                        array(
                            'taxonomy'  => 'product_cat',
                            'field'     => 'id',
                            'terms'     => 18,
                        )
                      )
                    );
                    $the_query = new WP_Query($args);
                    if($the_query->have_posts()){

                        while($the_query->have_posts()):
                        $the_query->the_post();
                        $chrLimit = get_field('limit', get_the_ID());
                    ?>
                    <option value="<?php echo get_the_ID(); ?>" data-chr="<?php echo $chrLimit; ?>" data-up="4"><?php echo get_the_title(); ?></option>
                    <?php 
                        endwhile;
                        wp_reset_query();
                      }
                    ?>
                </select>
                                
                <!--Profiled motorcycle plates-->
                <select name="size-select-4" id="size-select-4" class="mb-2 builder-size-select builder-size-sub-select form-control" style="display:none;" data-parent="0">
                    <option value="">Please select...</option>
                    <?php
                    $args = array(
                    'post_type' => 'product',
                    'post_status' => 'publish',
                    'order' => 'ASC',
                    'tax_query'  => array(
                        array(
                            'taxonomy'  => 'product_cat',
                            'field'     => 'id',
                            'terms'     => 19,
                        )
                      )
                    );
                    $the_query = new WP_Query($args);
                    if($the_query->have_posts()){

                        while($the_query->have_posts()):
                        $the_query->the_post();
                        $chrLimit = get_field('limit', get_the_ID());
                        $upLimit = get_field('up_value', get_the_ID());
                    ?>
                    <option value="<?php echo get_the_ID(); ?>" data-chr="<?php echo $chrLimit; ?>" data-up="<?php echo $upLimit; ?>"><?php echo get_the_title(); ?></option>
                    <?php 
                        endwhile;
                        wp_reset_query();
                      }
                    ?>
<!--
                    <option value="7-character-228x164-profiled-2" data-chr="8" data-up="3">7 Character 228x164 Profiled #2</option>
                    <option value="7-character-with-No.1-194x164-profiled-1" data-chr="8" data-up="4">7 Character With No.1 194x164 Profiled #1</option>
                    <option value="7-character-with-No.1-194x164-profiled-2" data-chr="8" data-up="3">7 Character With No.1 194x164 Profiled #2</option>
                    <option value="5-character-174x164-profiled-1" data-chr="6" data-up="2">5 Character 174x164 Profiled #1</option>
                    <option value="5-character-174x164-profiled-2" data-chr="6" data-up="3">5 Character 174x164 Profiled #2</option>
-->
                </select>

                </div>
                            
                <p>Most UK cars will require the standard car plate which are 520mm wide x 111mm high. However, you can go smaller to accommodate your registration number & vehicle type!</p>

                <button type="btn" class="btn" id="generate_number_plate_2">Continue</button>
                        </div>
                    </div>
                </li>
                <li><a href="javascript:void(0);">3 Material</a>
                    <div class="under under-size">
                        <a href="javascript:void(0);" class="SeeMore back_3">Back to the builder</a>
                        <div class="under-padding text-center">
                            <h4>Choose a Material from below:</h4>
                            <div class="form_container">
                                <select class="form-control">
                                 <option value="premium-acrylic">Premium Acrylic</option>
<!--
                                 <option>Premium</option>
                                 <option>Aluminium</option>
                                 <option>Pressed</option>
-->
                               </select>
                            </div>
                            <button type="btn" class="btn" id="generate_number_plate_3">Continue</button>
                        </div>
                    </div>
                </li>
                <li><a href="javascript:void(0);">4 Text Style</a>
                    <div class="under under-size">
                        <a href="javascript:void(0);" class="SeeMore back_4">Back to the builder</a>
                        <div class="under-padding text-center">
                            <h4>Back a text style from below:</h4>
                            <div class="no-plate">
                                <a href="javascript:void(0);" id="text_style_printed">
                                <figure><img src="<?php echo get_template_directory_uri(); ?>/images/no-plate.png" alt="" /></figure>
                                </a>
                                <div class="d-flex justify-content-between"><p>Printed</p> <p><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-image="/wp-content/uploads/2021/12/preview-lightbox-Printed-Text-Style.jpeg" onclick="show_image(6);" id="image_6"><i class="fa fa-search-plus" aria-hidden="true"></i> Close Up</a></p></div>
                            </div>
                            <div class="no-plate">
                                <a href="javascript:void(0);" id="text_style_3d_gel">
                                <figure><img src="<?php echo get_template_directory_uri(); ?>/images/no-plate.png" alt="" /></figure>
                                </a>
                                <div class="d-flex justify-content-between"><p>Gel/3D</p> <p><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-image="/wp-content/uploads/2021/12/preview-lightbox-3D-Gel-Text-Style.jpeg" onclick="show_image(1);" id="image_1"><i class="fa fa-search-plus" aria-hidden="true"></i> Close Up</a></p></div>
                            </div>
                            <div class="no-plate">
                                <a href="javascript:void(0);" id="text_style_4d_3mm">
                                <figure><img src="<?php echo get_template_directory_uri(); ?>/images/no-plate.png" alt="" /></figure>
                                </a>
                                <div class="d-flex justify-content-between"><p>4D (3mm)</p> <p><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-image="/wp-content/uploads/2021/12/preview-gallery-4D-3mm-Text-Style.jpeg" onclick="show_image(2);" id="image_2"><i class="fa fa-search-plus" aria-hidden="true"></i> Close Up</a></p></div>
                            </div>
                            <div class="no-plate">
                                <a href="javascript:void(0);" id="text_style_4d_3mm_gel">
                                <figure><img src="<?php echo get_template_directory_uri(); ?>/images/no-plate.png" alt="" /></figure>
                                </a>
                                <div class="d-flex justify-content-between"><p>Gel/4D (3mm)</p> <p><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-image="/wp-content/uploads/2021/12/preview-gallery-4D-3mm-With-Gel-Text-Style.jpeg" onclick="show_image(3);" id="image_3"><i class="fa fa-search-plus" aria-hidden="true"></i> Close Up</a></p></div>
                            </div>
                            <div class="no-plate">
                                <a href="javascript:void(0);" id="text_style_4d_5mm">
                                <figure><img src="<?php echo get_template_directory_uri(); ?>/images/no-plate.png" alt="" /></figure>
                                </a>
                                <div class="d-flex justify-content-between"><p>4D (5mm)</p> <p><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-image="/wp-content/uploads/2021/12/preview-gallery-4D-5mm-Text-Style.jpeg" onclick="show_image(4);" id="image_4"><i class="fa fa-search-plus" aria-hidden="true"></i> Close Up</a></p></div>
                            </div>
                            <div class="no-plate">
                                <a href="javascript:void(0);" id="text_style_4d_5mm_gel">
                                <figure><img src="<?php echo get_template_directory_uri(); ?>/images/no-plate.png" alt="" /></figure>
                                </a>
                                <div class="d-flex justify-content-between"><p>Gel/4D (5mm)</p> <p><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-image="/wp-content/uploads/2021/12/preview-gallery-4D-5mm-With-Gel-Text-Style.jpeg" onclick="show_image(5);" id="image_5"><i class="fa fa-search-plus" aria-hidden="true"></i> Close Up</a></p></div>
                            </div>
                            

                            <button type="btn" class="btn" id="generate_number_plate_4">Continue</button>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
        </form>
    </div>
</section>

<input type="hidden" id="selected_text_style">
<section class="plates-required">
    <div class="container-fluid">
        <div class="m-auto">
            <div class="text-container">
            <div class="head">
                <p>Please be careful as plate styling and spelling mistakes cannot be changed after payment is made.</p>
                <p>Please note that <a href="https://www.jdmplates.co.uk/contact-us-faq/" style="color: #0d6efd;">documentation</a> is needed in order to produce road legal number plates.</p>
                <p>IF YOU WANT DIFFERENT SIZE FRONT AND REAR NUMBER PLATES, PLEASE ADD THEM TO THE BASKET INDIVIDUALLY!</p>
            </div>
            <div class="how-it-works see-more">
                <a href="https://www.jdmplates.co.uk/number-plate-sizing-guide/" class="btn">Number Plate Sizing Guide</a>
            </div>
            </div>
            <div class="price">
                <h4>Price: <strong>£<span id="final_price">29.99</span> inc. VAT</strong></h4>
            </div>
            <div class="flex">
                <h5>Plates Required:</h5>
                <div class="btns">
                    <ul>
                        <li><a href="javascript:void(0);" id="show_front">FRONT</a></li>
                        <li class="bg big"><a href="javascript:void(0);" id="front_rear">FRONT & REAR</a></li>
                        <li><a href="javascript:void(0);" id="show_rear">REAR</a></li>
                        <li><a href="javascript:void(0);" id="add_to_basket">ADD TO BASKET</a>
                        <div id="add_to_basket_loader" style="display:none;">
                            <img src="https://jdm-plates.customerdevsites.com/wp-content/uploads/2022/01/1488.gif">
                        </div>
                        </li>
                    </ul>
                </div>
                
                <form id="add_to_basket_form" enctype="multipart/form-data" style="display:none;">
                    <input type="hidden" name="product_id" value="28">
                    <input type="hidden" name="textType" value="printed">
                    <input type="hidden" name="plate_side" value="both">
                    <input type="hidden" name="plate_material" value="Premium Acrylic">
                    <input type="hidden" name="price" value="29.99">
                </form>
                
            </div>
        </div>
    </div>
</section>



<!-- Modal -->
<div class="plates-popup">
<div class="modal fade" id="exampleModal1" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">     
      <div class="modal-body">
      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        <img src="https://www.number1plates.com/shop/media/regplate/font/3d-gel-black-closeup.png" alt="" id="close-up-image"/>
      </div>
     
    </div>
  </div>
</div>
</div>
</main>
<footer id="footer">
    <div class="container">
        <div class="row">
        <div class="col-lg-3">
            <div class="heading">
            <h6>| We Are:-</h6>
            </div>
            <div class="logo">
                <img src="<?php echo get_template_directory_uri(); ?>/images/logo.png">
            </div>
                <ul class="first">
                    <li>| DVLA RNPS No:- <br>57790</li>
                    <li>| Company No:- <br>11309345</li>
                </ul>
        </div>
        <div class="col-lg-3">
            <div class="heading">
                <h6>| Links:-</h6>
            </div>
            <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Number Plate Shop</a></li>
                <li><a href="#">Social Media Gallery</a></li>
                <li><a href="#">Articles & Posts</a></li>
                <li><a href="#">Account & Tracking</a></li>
                <li><a href="#">FAQ's & Contact Us</a></li>
                <li><a href="#">About Us</a></li>
                <li><a href="#">Site Map</a></li>
  
            </ul>
        </div>
        <div class="col-lg-3">
            <div class="heading">
                <h6>| Important:-</h6>
            </div>
          <ul>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy & Cookie Policy</a></li>
          </ul>

          <div class="heading head">
                <h6>| Payments Using:-</h6>
            </div>

            <figure class="visa">
                <img src="<?php echo get_template_directory_uri(); ?>/images/paypal.png">
                <img src="<?php echo get_template_directory_uri(); ?>/images/visa.png">
            </figure>
        </div>
        <div class="col-lg-3">
            <div class="heading">
                <h6>| Follow Us On:-</h6>
            </div>
            <ul class="social">
                    <li><a href="#"><i class="fa fa-facebook-f" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-twitter" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    <li><a href="#"><i class="fa fa-google-plus"></i></a></li>
                    <li><a href="#"><i class="fa fa-pinterest"></i></a></li>
                </ul>

                <div class="heading head mrg-btm">
                <h6>| Call Free Today:-</h6>
            </div>
            <div class="call">
                <a href="tel:07936 489 785">07936 489 785</a>
            </div>
        </div>
        </div>
    </div>

    <div class="copyright">
        <div class="container">
            <p>CJ Hanley Trading LTD t/a JDM Plates | Britannia House 16 Hall Quay Great Yarmouth NR30 1HP - 07936 489 785</p>
        </div>
    </div>
</footer>
<div id="copyDiv"></div>

 <script src="<?php echo get_template_directory_uri(); ?>/js/bundle.min.js"></script>
 <script src="<?php echo get_template_directory_uri(); ?>/js/ProjectName.js"></script>
 <script src="<?php echo get_template_directory_uri(); ?>/js/new-custom-data.js"></script>
 <script src="<?php echo get_template_directory_uri(); ?>/js/html2canvas.js"></script>
 <script src="https://cdnjs.cloudflare.com/ajax/libs/toastr.js/2.0.1/js/toastr.js"></script>

</body>
</html>