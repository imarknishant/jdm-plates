<?php
/*
Template Name: Home
*/
get_header();
?>
<main id="main">
<section class="home-banner">
    <div style="font-family: UKNumberPlate;">.</div>
    <div class="container-fluid">
        <div class="text-center right-content">
            <img src="/wp-content/themes/jdm-plates/plate-images/uk-plates/standard-520x111-front.png" style="display:none;" id="plateimg_white">
            
            <span class="front_view_container">
               <canvas id="canvas"></canvas>                
            </span>
            
            
            <img src="/wp-content/themes/jdm-plates/plate-images/uk-plates/standard-520x111-rear.png" style="display:none;" id="plateimg_yellow">
            <span class="back_view_container">
            <canvas id="canvas_yellow"></canvas>
            </span>
<!--
            <figure>
                <span id="front_view"></span>
                <img src="<?php echo get_template_directory_uri();?>/images/white-banner.png">
            </figure>
-->
<!--
            <figure>
                <img src="<?php echo get_template_directory_uri();?>/images/yellow-banner.png">
            </figure>
-->
            
<!--
            <figure>
            <span class="front_view_container">
                <span id="front_view">
                    YOUR REG
                </span>
                <small>JDM Plates NR<sub>3</sub>8HU</small>
                <small class="right">BSAU 45</small>
            </span>
            </figure>
            
            <figure class="yellow-field">
            <span class="back_view_container">
                <span id="back_view">
                    YOUR REG
                </span>
                <small>JDM Plates NR<sub>3</sub>8HU</small>
                <small class="right">BSAU 45</small>
            </span>
            </figure>
-->
        </div>
    </div>

    <div class="fixed-sidebar">
        <div class="head">
            <h5>Build Your Plate</h5>
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
                                <input type="text" class="form-control num value_0" maxlength="1" value="Y">
                                <input type="text" class="form-control num value_1" maxlength="1" value="O">
                                <input type="text" class="form-control num value_2" maxlength="1" value="U">
                                <input type="text" class="form-control num value_3" maxlength="1" value="R">
                                <input type="text" class="form-control num value_4" maxlength="1">
                                <input type="text" class="form-control num value_5" maxlength="1" value="R">
                                <input type="text" class="form-control num value_6" maxlength="1" value="E">
                                <input type="text" class="form-control num value_7" maxlength="1" value="G">
                            </div>
                            <p>Please remember to enter your spaces where they need to be as they aren't automatically added.</p>
                            <p>Please see our <a href="#">quick spacing guide</a> to make sure your plate is legal.</p>
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
                                <option value="1" data-type="UK">UK car number plate</option>
                                <option value="2" data-type="Imported">Imported car number plate</option>
                                <option value="3" data-type="Motorcycle">Motorcycle & ATV number plate</option>
                                <option value="4" data-type="Motorcycle_profiled">Profiled motorcycle plates</option>
<!--
                                <option value="7">Import Shapes</option>
                                <option value="2">Motorbike Shapes</option>
                                <option value="3">Manufacturer Specific Shapes</option>
-->
                               </select>
                            <!-- UK car number plate-->
                            <select name="size-select-1" id="size-select-1" class="mb-2 builder-size-select builder-size-sub-select form-control" style="display:none;" data-parent="0">
                                <option value="">Please select...</option>
                                <option value="standard-520x111" data-chr="8">Standard 520x111</option>
                                <option value="7-character-460x101" data-chr="7">7 Character 460x101</option>
                                <option value="7-character-255x199" data-chr="7">7 Character 255x199</option>
                                <option value="7-character-which-includes-a-No.1-424x101" data-chr="7">7 Character With No.1 424x101</option>
                                <option value="7-character-which-includes-a-no.1-225x199" data-chr="7">7 Character With No.1 225x199</option>
                                <option value="6-character-399x101" data-chr="6">6 Character 399x101</option>
                                <option value="5-or-6-character-199x199" data-chr="6">5 or 6 Character 199x199</option>
                                <option value="6-character-which-includes-a-No.1-363x101" data-chr="6">6 Character With No.1 363x101</option>
                                <option value="5-character-338x101" data-chr="5">5 Character 338x101</option>
                            </select>
                                
                            <!-- Imported car number plate-->
                            <select name="size-select-2" id="size-select-2" class="mb-2 builder-size-select builder-size-sub-select form-control" style="display:none;" data-parent="0">
                                <option value="">Please select...</option>
                                <option value="import-size-1-330x165" data-chr="8">Import Size #1 330x165</option>
                                <option value="import-size-2-330x178" data-chr="8">Import Size #2 330x178</option>
                                <option value="import-size-3-303x152" data-chr="8">Import Size #3 303x152</option>
                                <option value="7-character-408x87" data-chr="7">7 Character 408x87</option>
                                <option value="7-character-226x156" data-chr="7">7 Character 226x156</option>
                                <option value="6-character-354x87" data-chr="6">6 Character 354x87</option>
                                <option value="6-character-with-no.1-320x87" data-chr="6">6 Character With No.1 320x87</option>
                                <option value="5-or-6-character-172x156" data-chr="6">5 or 6 Character 172x156</option>
                                <option value="5-character-300x87" data-chr="5">5 Character 300x87</option>
                                <option value="5-character-with-no.1-266x87" data-chr="5">5 Character With No.1 266x87</option>
                            </select>
                                
                                <!-- Motor cycle & ATV number plate-->
                            <select name="size-select-3" id="size-select-3" class="mb-2 builder-size-select builder-size-sub-select form-control" style="display:none;" data-parent="0">
                                <option value="">Please select...</option>
                                <option value="7-character-228x164" data-chr="7">7 Character 228x164</option>
                                <option value="7-character-with-no.1-194x164" data-chr="7">7 Character With No.1 194x164</option>
                                <option value="5-character-174x164" data-chr="5">5 Character 174x164</option>
                            </select>
                                
                                <!--Profiled motorcycle plates-->
                            <select name="size-select-4" id="size-select-4" class="mb-2 builder-size-select builder-size-sub-select form-control" style="display:none;" data-parent="0">
                                <option value="">Please select...</option>
                                <option value="7-character-228x164-profiled-1" data-chr="8" data-up="4">7 Character 228x164 Profiled #1</option>
                                <option value="7-character-228x164-profiled-2" data-chr="8" data-up="3">7 Character 228x164 Profiled #2</option>
                                <option value="7-character-with-No.1-194x164-profiled-1" data-chr="8" data-up="4">7 Character With No.1 194x164 Profiled #1</option>
                                <option value="7-character-with-No.1-194x164-profiled-2" data-chr="8" data-up="3">7 Character With No.1 194x164 Profiled #2</option>
                                <option value="5-character-174x164-profiled-1" data-chr="6" data-up="2">5 Character 174x164 Profiled #1</option>
                                <option value="5-character-174x164-profiled-2" data-chr="6" data-up="3">5 Character 174x164 Profiled #2</option>
                            </select>

                            </div>
                            <p>Most UK cars will require the standard car plate which are 520mm wide x 111mm high. However, you can go smaller to accommodate your registration number & vehicle type!</p>

                            <button type="btn" class="btn" id="generate_number_plate_2">Continue</button>
                        </div>
                    </div>
                </li>
                <li><a href="javascript:void(0);">3 Material</a>
                    <div class="under under-size">
                        <a href="javascript:void(0);" class="SeeMore">Back to the builder</a>
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
                            <button type="btn" class="btn">Continue</button>
                        </div>
                    </div>
                </li>
                <li><a href="javascript:void(0);">4 Text Style</a>
                    <div class="under under-size">
                        <a href="javascript:void(0);" class="SeeMore">Back to the builder</a>
                        <div class="under-padding text-center">
                            <h4>Back a text style from below:</h4>
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
                            <div class="no-plate">
                                <a href="javascript:void(0);" id="text_style_printed">
                                <figure><img src="<?php echo get_template_directory_uri(); ?>/images/no-plate.png" alt="" /></figure>
                                </a>
                                <div class="d-flex justify-content-between"><p>Printed</p> <p><a href="javascript:void(0);" data-bs-toggle="modal" data-bs-target="#exampleModal1" data-image="/wp-content/uploads/2021/12/preview-lightbox-Printed-Text-Style.jpeg" onclick="show_image(6);" id="image_6"><i class="fa fa-search-plus" aria-hidden="true"></i> Close Up</a></p></div>
                            </div>

                            <button type="btn" class="btn">Continue</button>
                        </div>
                    </div>

                </li>
            </ul>
        </div>
        </form>
    </div>
        </section>

        <section class="plates-required">
            <div class="container-fluid">
                <div class="m-auto">
                    <div class="head">
                        <p>Please be careful as plate styling and spelling mistakes cannot be changed after payment is made.</p>
                    </div>
                    <div class="price">
                        <h4>Price: <strong>£00.00</strong></h4>
                    </div>
                    <div class="flex">
                        <h5>Plates Required:</h5>
                        <div class="btns">
                            <ul>
                                <li><a href="javascript:void(0);" id="show_front">FRONT</a></li>
                                <li class="bg big"><a href="javascript:void(0);" id="front_rear">FRONT & REAR</a></li>
                                <li><a href="javascript:void(0);" id="show_rear">REAR</a></li>
                                <li><a href="#">ADD TO BASKET</a></li>
                            </ul>
                        </div>
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
<?php
get_footer();
?>