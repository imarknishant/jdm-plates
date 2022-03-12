jQuery(document).ready(function(){
    var t = 0;
    
    jQuery(".screen-reader-text").remove();
    
    $("input[type=text]" ).focusin(function(){
        if(t == 0){
            $("input[type=text]" ).each(function(){
                $( this ).val('');
            });
        }
        t++;
    }); 
    
    $('.num').keyup(function (event){
        
        var key = event.keyCode || event.charCode;

        if( key == 8 || key == 46 ){
            $(this).prev('.num').focus().val('');
//            $(this).prev('.num').focus();
        }else{
            $(this).next('.num').focus();
        }
            return false;
    });
    
    jQuery("#generate_number_plate").click(function(e){
       e.preventDefault();
       var chr = jQuery('.plate_selected').find(":selected").data("chr");
       var plateid = jQuery("#plate_type").find(':selected').val();
       var textValue = '';
    
       if(chr == null){
           chr = 8;
       }
        
       for(var j=0; j<chr; j++){
           var alp = jQuery(".value_"+j).val();
           if(alp.trim() != ''){
               textValue += alp;
           }else{
               textValue += ' ';
           }
        }

       if(textValue == ''){
            textValue = 'YOUR REG';
        }
        
        jQuery('#text-style-change').removeClass();
        
        if(plateid == 1){
            jQuery('#text-style-change').addClass('uk-number-plates');
        }else if(plateid == 2){
            jQuery('#text-style-change').addClass('imported-car-number-plates');
        }else if(plateid == 3){
            jQuery('#text-style-change').addClass('motorcycle-and-atv');
        }else if(plateid == 4){
            jQuery('#text-style-change').addClass('profiled-motorcycle');
        }
//        if(textValue != ''){
//            if(textValue.includes("i") || textValue.includes("1")){
//                jQuery("#text-style-change").addClass('default_class');
//            }else{
//                jQuery("#text-style-change").removeClass('default_class');
//            }
//        }
        
        jQuery("#text-front").html(textValue);
        jQuery("#text-back").html(textValue);
        
        var imageWidth = document.getElementById("plateimg_white");
        var width = imageWidth.naturalWidth;
        
        check_number_plate(textValue,width);

        jQuery(".back_1").click();
    });
    
    jQuery("#generate_number_plate_2").click(function(e){
        e.preventDefault();
        jQuery(".back_2").click();
    });
    
    jQuery("#generate_number_plate_3").click(function(e){
        e.preventDefault();
        jQuery(".back_3").click();
    });
    
    jQuery("#generate_number_plate_4").click(function(e){
        e.preventDefault();
        jQuery(".back_4").click();
    });
    
    jQuery("#show_front").click(function(){
       jQuery(".front_view_container").show();
       jQuery(".back_view_container").hide();
       jQuery(this).closest("li").addClass('bg big');
       jQuery("#show_rear").closest("li").removeClass('bg big');
       jQuery("#front_rear").closest("li").removeClass('bg big');
        
       jQuery("input[name='plate_side']").val('front');
       var url = jQuery("#ajax-url").val();
       var textStyle = jQuery('#selected_text_style').val();
       var plateType = jQuery(".plate_selected").find(":selected").val();
       jQuery.ajax({
           type: "POST",
           url: url,
           data: {textStyle:textStyle, plateType:plateType, view:'front', action:"get_price"},
           dataType: 'json',
           success: function(res){
                jQuery("#final_price").text(res.price);
               jQuery("input[name='price']").val(res.price);
           }
       });
    });
    
    jQuery("#show_rear").click(function(){
       jQuery(".front_view_container").hide();
       jQuery(".back_view_container").show();
       jQuery(this).closest("li").addClass('bg big');
       jQuery("#show_front").closest("li").removeClass('bg big');
       jQuery("#front_rear").closest("li").removeClass('bg big');
        
       jQuery("input[name='plate_side']").val('rear');
       var url = jQuery("#ajax-url").val();
       var textStyle = jQuery('#selected_text_style').val();
       var plateType = jQuery(".plate_selected").find(":selected").val();
       jQuery.ajax({
           type: "POST",
           url: url,
           data: {textStyle:textStyle, plateType:plateType, view:'rear', action:"get_price"},
           dataType: 'json',
           success: function(res){
                jQuery("#final_price").text(res.price);
               jQuery("input[name='price']").val(res.price);
           }
       });
        
    });
    
    jQuery("#front_rear").click(function(){
       jQuery(".front_view_container").show();
       jQuery(".back_view_container").show();
       jQuery(this).closest("li").addClass('bg big');
       jQuery("#show_front").closest("li").removeClass('bg big');
       jQuery("#show_rear").closest("li").removeClass('bg big');
        
       jQuery("input[name='plate_side']").val('both');
       var url = jQuery("#ajax-url").val();
       var textStyle = jQuery('#selected_text_style').val();
       var plateType = jQuery(".plate_selected").find(":selected").val();
       jQuery.ajax({
           type: "POST",
           url: url,
           data: {textStyle:textStyle, plateType:plateType, view:'both', action:"get_price"},
           dataType: 'json',
           success: function(res){
                jQuery("#final_price").text(res.price);
               jQuery("input[name='price']").val(res.price);
               
           }
       });
        
    });
    
    jQuery("#plate_type").change(function(){
        
        $(".builder-size-select").each(function (index, element) {
            jQuery(this).hide();
            jQuery(this).removeClass("plate_selected");
        });
        
        var plateid = jQuery(this).val();
        var dataVal = jQuery(this).find(':selected').data('type');
        jQuery("#size-select-"+plateid).show();
        jQuery("#size-select-"+plateid).addClass("plate_selected");
        jQuery("#size-select-"+plateid).attr('data-platetype',dataVal);
        
        jQuery('#text-style-change').removeClass();
        jQuery('body').removeClass();
        
        if(plateid == 1){
            jQuery('#text-style-change').addClass('uk-number-plates');
            jQuery('body').addClass('uk');
        }else if(plateid == 2){
            jQuery('#text-style-change').addClass('imported-car-number-plates');
            jQuery('body').addClass('imported');
        }else if(plateid == 3){
            jQuery('#text-style-change').addClass('motorcycle-and-atv');
            jQuery('body').addClass('motorcycle');
        }else if(plateid == 4){
            jQuery('#text-style-change').addClass('profiled-motorcycle');
            jQuery('body').addClass('profiled');
        }
    });
    
    jQuery(document).on('change','.plate_selected',function(){
        
        var url = jQuery("#ajax-url").val();
        var plate_type = jQuery("#plate_type").find(":selected").val();
        var plateSize = jQuery(this).val();
        var chr = jQuery(this).find(":selected").data("chr");
        var up_letters = jQuery(this).find(":selected").data("up");
        var plate = jQuery(this).data("platetype");
        var textStyle = jQuery('input[name="textType"]').val();
        var platSide = jQuery('input[name="plate_side"]').val();
        
        jQuery("input[name='plateType']").val(plateSize);
        
        jQuery.ajax({
           type: "POST",
           url: url,
           data: {plateSize:plateSize, plate:plate, platSide:platSide, textStyle:textStyle, action:"change_plate_size"},
           dataType: 'json',
           success: function(res){
               jQuery("#plateimg_white").attr('src',res.front);
               jQuery("#plateimg_yellow").attr('src',res.rear);
               
               jQuery("#final_price").text(res.price);
               jQuery("input[name='price']").val(res.price);
               jQuery("input[name='product_id']").val(res.product_id);
               
               var textValue = '';
               for(var j=0; j<chr; j++){
                   var alp = jQuery(".value_"+j).val();
                   if(alp.trim() != ''){
                       textValue += alp;
                   }else{
                       textValue += ' ';
                   }
                }

               if(textValue.trim() == ''){
                    textValue = 'YOUR REG';
                }
               
               console.log(textValue);
               var imageWidth = document.getElementById("plateimg_white");
               setTimeout(function(){
                   
               console.log(imageWidth.naturalWidth);
               var width = imageWidth.naturalWidth;

               jQuery("#text-front").html(textValue);
               jQuery("#text-back").html(textValue);
                   
               check_number_plate(textValue,width);
                
               },1000);
            
           }
        });
    });
    
    jQuery("#text_style_3d_gel").click(function(){
        
        jQuery('#text-style').removeClass();
        
        jQuery(".no-plate a").each(function(){
            jQuery(this).removeClass('active-text');
        });
        
        jQuery(this).addClass('active-text');
        var url = jQuery("#ajax-url").val();
        var plate_type = jQuery("#plate_type").find(":selected").val();
        var plateSize = jQuery('.plate_selected').find(":selected").val();
        var chr = jQuery('.plate_selected').find(":selected").data("chr");
        var up_letters = jQuery('.plate_selected').find(":selected").data("up");
        var plate = jQuery('.plate_selected').find(":selected").data("platetype");
        var platSide = jQuery('input[name="plate_side"]').val();

        if(typeof plateSize == 'undefined'){
            plateSize = 28;
        }
        
        if(typeof plate == 'undefined'){
            plate = 'uk-car-number-plate';
        }
        
        if(typeof chr == 'undefined'){
            chr = 8;
        }
        
        jQuery('#text-style').addClass('style3d_gel'); 
        jQuery('#selected_text_style').val('Gel');
        jQuery("input[name='textType']").val('Gel');
        
        jQuery.ajax({
           type: "POST",
           url: url,
           data: {plateSize:plateSize, plate:plate, platSide:platSide, textStyle:'Gel', action:"change_plate_size"},
           dataType: 'json',
           success: function(res){
               jQuery("#plateimg_white").attr('src',res.front);
               jQuery("#plateimg_yellow").attr('src',res.rear);
               jQuery("#final_price").text(res.price);
               jQuery("input[name='price']").val(res.price);
               
               var textValue = '';
               for(var j=0; j<chr; j++){
                   var alp = jQuery(".value_"+j).val();
                   
                   if(alp.trim() != ''){
                       
                       textValue += alp;
                   }else{
                       textValue += ' ';
                   }
                }

               if(textValue.trim() == ''){
                    textValue = 'YOUR REG';
                }
               
               
               setTimeout(function(){
               var imageWidth = document.getElementById("plateimg_white");
               console.log(imageWidth.naturalWidth);
               var width = imageWidth.naturalWidth;

               jQuery("#text-front").html(textValue);
               jQuery("#text-back").html(textValue);
                
               check_number_plate(textValue,width);

               },1000);
            
           }
        });
    });
    
    jQuery("#text_style_4d_3mm").click(function(){
        
        jQuery('#text-style').removeClass();
        
        jQuery(".no-plate a").each(function(){
            jQuery(this).removeClass('active-text');
        });
        
        jQuery(this).addClass('active-text');
        
        var url = jQuery("#ajax-url").val();
        var plate_type = jQuery("#plate_type").find(":selected").val();
        var plateSize = jQuery('.plate_selected').find(":selected").val();
        var chr = jQuery('.plate_selected').find(":selected").data("chr");
        var up_letters = jQuery('.plate_selected').find(":selected").data("up");
        var plate = jQuery('.plate_selected').find(":selected").data("platetype");
        var platSide = jQuery('input[name="plate_side"]').val();
        
        if(typeof plateSize == 'undefined'){
            plateSize = 28;
        }
        
        if(typeof plate == 'undefined'){
            plate = 'uk-car-number-plate';
        }
        
        if(typeof chr == 'undefined'){
            chr = 8;
        }
        
        jQuery('#text-style').addClass('style4d_3mm');
        jQuery('#selected_text_style').val('4d_3mm');
        jQuery("input[name='textType']").val('4D 3mm');
        
        jQuery.ajax({
           type: "POST",
           url: url,
           data: {plateSize:plateSize, plate:plate, platSide:platSide, textStyle:'4d_3mm', action:"change_plate_size"},
           dataType: 'json',
           success: function(res){
               jQuery("#plateimg_white").attr('src',res.front);
               jQuery("#plateimg_yellow").attr('src',res.rear);
               jQuery("#final_price").text(res.price);
               jQuery("input[name='price']").val(res.price);
               
               var textValue = '';
               for(var j=0; j<chr; j++){
                   var alp = jQuery(".value_"+j).val();
                   if(alp.trim() != ''){
                       textValue += alp;
                   }else{
                       textValue += ' ';
                   }
                }
               
               if(textValue.trim() == ''){
                    textValue = 'YOUR REG';
                }
               
               setTimeout(function(){
                   var imageWidth = document.getElementById("plateimg_white");
                   console.log(imageWidth.naturalWidth);
                   var width = imageWidth.naturalWidth;
                   
                   jQuery("#text-front").html(textValue);
                   jQuery("#text-back").html(textValue);
                   
                   check_number_plate(textValue,width);
            
               },1000);
            
           }
        });
    });
    
    jQuery("#text_style_4d_3mm_gel").click(function(){
        
        jQuery(".no-plate a").each(function(){
            jQuery(this).removeClass('active-text');
        });
        
        jQuery(this).addClass('active-text');
        jQuery('#text-style').removeClass();
        
        var url = jQuery("#ajax-url").val();
        var plate_type = jQuery("#plate_type").find(":selected").val();
        var plateSize = jQuery('.plate_selected').val();
        var chr = jQuery('.plate_selected').find(":selected").data("chr");
        var up_letters = jQuery('.plate_selected').find(":selected").data("up");
        var plate = jQuery('.plate_selected').data("platetype");
        var platSide = jQuery('input[name="plate_side"]').val();
        
        if(typeof plateSize == 'undefined'){
            plateSize = 28;
        }
        
        if(typeof plate == 'undefined'){
            plate = 'uk-car-number-plate';
        }
        
        if(typeof chr == 'undefined'){
            chr = 8;
        }
        
        jQuery('#text-style').addClass('style4d_3mm_gel'); 
        jQuery('#selected_text_style').val('4d_3mm_with_gel');
        jQuery("input[name='textType']").val('4D 3mm with gel');
        
        jQuery.ajax({
           type: "POST",
           url: url,
           data: {plateSize:plateSize, plate:plate, platSide:platSide, textStyle:'4d_3mm_with_gel', action:"change_plate_size"},
           dataType: 'json',
           success: function(res){
               jQuery("#plateimg_white").attr('src',res.front);
               jQuery("#plateimg_yellow").attr('src',res.rear);
               jQuery("#final_price").text(res.price);
               jQuery("input[name='price']").val(res.price);
               
               var textValue = '';
               for(var j=0; j<chr; j++){
                   var alp = jQuery(".value_"+j).val();
                   if(alp.trim() != ''){
                       textValue += alp;
                   }else{
                       textValue += ' ';
                   }
                }
               
               if(textValue.trim() == ''){
                    textValue = 'YOUR REG';
                }
               
               setTimeout(function(){
                   var imageWidth = document.getElementById("plateimg_white");
                   console.log(imageWidth.naturalWidth);
                   var width = imageWidth.naturalWidth;
                   
                   jQuery("#text-front").html(textValue);
                   jQuery("#text-back").html(textValue);
                   
                   check_number_plate(textValue,width);
                   
               },1000);
            
           }
        });
    });
    
    jQuery("#text_style_4d_5mm").click(function(){
        
         jQuery(".no-plate a").each(function(){
            jQuery(this).removeClass('active-text');
        });
        
        jQuery(this).addClass('active-text');
        
        jQuery('#text-style').removeClass();
        
        var url = jQuery("#ajax-url").val();
        var plate_type = jQuery("#plate_type").find(":selected").val();
        var plateSize = jQuery('.plate_selected').find(":selected").val();
        var chr = jQuery('.plate_selected').find(":selected").data("chr");
        var up_letters = jQuery('.plate_selected').find(":selected").data("up");
        var plate = jQuery('.plate_selected').find(":selected").data("platetype");
        var platSide = jQuery('input[name="plate_side"]').val();
        
        if(typeof plateSize == 'undefined'){
            plateSize = 28;
        }
        
        if(typeof plate == 'undefined'){
            plate = 'uk-car-number-plate';
        }
        
        if(typeof chr == 'undefined'){
            chr = 8;
        }
        
        jQuery('#text-style').addClass('style4d_5mm');
        jQuery('#selected_text_style').val('4d_5mm');
        jQuery("input[name='textType']").val('4D 5mm');
        
        jQuery.ajax({
           type: "POST",
           url: url,
           data: {plateSize:plateSize, plate:plate, platSide:platSide, textStyle:'4d_5mm', action:"change_plate_size"},
           dataType: 'json',
           success: function(res){
               jQuery("#plateimg_white").attr('src',res.front);
               jQuery("#plateimg_yellow").attr('src',res.rear);
               jQuery("#final_price").text(res.price);
               jQuery("input[name='price']").val(res.price);
               
               var textValue = '';
               for(var j=0; j<chr; j++){
                   var alp = jQuery(".value_"+j).val();
                   if(alp.trim() != ''){
                       textValue += alp;
                   }else{
                       textValue += ' ';
                   }
                }
               
               if(textValue.trim() == ''){
                    textValue = 'YOUR REG';
                }
               
               setTimeout(function(){
                   var imageWidth = document.getElementById("plateimg_white");
                   console.log(imageWidth.naturalWidth);
                   var width = imageWidth.naturalWidth;
                   
                   jQuery("#text-front").html(textValue);
                   jQuery("#text-back").html(textValue);
                   
                   check_number_plate(textValue,width);
                   
               },1000);
            
           }
        });
    });
    
    jQuery("#text_style_4d_5mm_gel").click(function(){
        
         jQuery(".no-plate a").each(function(){
            jQuery(this).removeClass('active-text');
        });
        
        jQuery(this).addClass('active-text');
        
        jQuery('#text-style').removeClass();
        
        var url = jQuery("#ajax-url").val();
        var plate_type = jQuery("#plate_type").find(":selected").val();
        var plateSize = jQuery('.plate_selected').find(":selected").val();
        var chr = jQuery('.plate_selected').find(":selected").data("chr");
        var up_letters = jQuery('.plate_selected').find(":selected").data("up");
        var plate = jQuery('.plate_selected').find(":selected").data("platetype");
        var platSide = jQuery('input[name="plate_side"]').val();
        
        if(typeof plateSize == 'undefined'){
            plateSize = 28;
        }
        
        if(typeof plate == 'undefined'){
            plate = 'uk-car-number-plate';
        }
        
        if(typeof chr == 'undefined'){
            chr = 8;
        }
        
        jQuery('#text-style').addClass('style4d_5mm_gel');
        jQuery('#selected_text_style').val('4d_5mm_with_gel');
        jQuery("input[name='textType']").val('4D 5mm with gel');
        
        jQuery.ajax({
           type: "POST",
           url: url,
           data: {plateSize:plateSize, plate:plate, platSide:platSide, textStyle:'4d_5mm_with_gel', action:"change_plate_size"},
           dataType: 'json',
           success: function(res){
               jQuery("#plateimg_white").attr('src',res.front);
               jQuery("#plateimg_yellow").attr('src',res.rear);
               jQuery("#final_price").text(res.price);
               jQuery("input[name='price']").val(res.price);
               
               var textValue = '';
               for(var j=0; j<chr; j++){
                   var alp = jQuery(".value_"+j).val();
                   if(alp.trim() != ''){
                       textValue += alp;
                   }else{
                       textValue += ' ';
                   }
                }
               
               if(textValue.trim() == ''){
                    textValue = 'YOUR REG';
                }
               
               setTimeout(function(){
                   var imageWidth = document.getElementById("plateimg_white");
                   console.log(imageWidth.naturalWidth);
                   var width = imageWidth.naturalWidth;
                   
                   jQuery("#text-front").html(textValue);
                   jQuery("#text-back").html(textValue);
                   
                   check_number_plate(textValue,width);
                   
               },1000);
            
           }
        });
    });
    
    jQuery("#text_style_printed").click(function(){
        
         jQuery(".no-plate a").each(function(){
            jQuery(this).removeClass('active-text');
        });
        
        jQuery(this).addClass('active-text');
        
        var url = jQuery("#ajax-url").val();
        var plate_type = jQuery("#plate_type").find(":selected").val();
        var plateSize = jQuery('.plate_selected').find(":selected").val();
        var chr = jQuery('.plate_selected').find(":selected").data("chr");
        var up_letters = jQuery('.plate_selected').find(":selected").data("up");
        var plate = jQuery('.plate_selected').find(":selected").data("platetype");
        var platSide = jQuery('input[name="plate_side"]').val();
        
        if(typeof plateSize == 'undefined'){
            plateSize = 28;
        }
        
        if(typeof plate == 'undefined'){
            plate = 'uk-car-number-plate';
        }
        
        if(typeof chr == 'undefined'){
            chr = 8;
        }
        
        jQuery('#text-style').removeClass();
        jQuery('#selected_text_style').val('Printed');
        jQuery("input[name='textType']").val('Printed');
        
        jQuery.ajax({
           type: "POST",
           url: url,
           data: {plateSize:plateSize, plate:plate, platSide:platSide, textStyle:'Printed', action:"change_plate_size"},
           dataType: 'json',
           success: function(res){
               jQuery("#plateimg_white").attr('src',res.front);
               jQuery("#plateimg_yellow").attr('src',res.rear);
               jQuery("#final_price").text(res.price);
               jQuery("input[name='price']").val(res.price);
               
               var textValue = '';
               for(var j=0; j<chr; j++){
                   var alp = jQuery(".value_"+j).val();
                   if(alp.trim() != ''){
                       textValue += alp;
                   }else{
                       textValue += ' ';
                   }
                }
               
            if(textValue.trim() == ''){
                    textValue = 'YOUR REG';
                }
               
               setTimeout(function(){
                   var imageWidth = document.getElementById("plateimg_white");
                   console.log(imageWidth.naturalWidth);
                   var width = imageWidth.naturalWidth;
                   
                   jQuery("#text-front").html(textValue);
                   jQuery("#text-back").html(textValue);
                   
                   check_number_plate(textValue,width);
                   
              },1000);
            
           }
        });
    });
    
    /**** Add to basket ****/
    jQuery("#add_to_basket").click(function(){
        
        $('#add_to_basket').prop("disabled", true);

        jQuery("#img1").remove();
        jQuery("#img2").remove();
        
        jQuery("#add_to_basket_loader").show();
        
        html2canvas(document.getElementById("mainContainer1"),
        {
            allowTaint: true,
            useCORS: true
        }).then(function (canvas) {
            var anchorTag = document.createElement("a");
            document.body.appendChild(anchorTag);
//            document.getElementById("previewImg").appendChild(canvas);
            anchorTag.download = "filename1.jpg";
            anchorTag.href = canvas.toDataURL();
            anchorTag.target = '_blank';
            anchorTag.id = 'img1';
//            anchorTag.click();
        });
        
         html2canvas(document.getElementById("mainContainer2"),
        {
            allowTaint: true,
            useCORS: true
        }).then(function (canvas) {
            var anchorTag = document.createElement("a");
            document.body.appendChild(anchorTag);
//            document.getElementById("previewImg").appendChild(canvas);
            anchorTag.download = "filename2.jpg";
            anchorTag.href = canvas.toDataURL();
            anchorTag.target = '_blank';
            anchorTag.id = 'img2';
//            anchorTag.click();
        });
        
        setTimeout(function(){
           var url = jQuery("#ajax-url").val();
           var formData = new FormData($('#add_to_basket_form')[0]);
           var chr = jQuery('.plate_selected').find(":selected").data("chr");
           var plateView = jQuery("input[name='plate_side']").val();
            
           if(typeof chr == 'undefined'){
                chr = 8;
            }

           var img_1 = jQuery("#img1").attr('href');
           var img_2 = jQuery("#img2").attr('href');
           var textValue = '';

           for(var j=0; j<chr; j++){
               var alp = jQuery(".value_"+j).val();
               if(alp.trim() != ''){
                   textValue += alp;
               }else{
                   textValue += ' ';
               }
            }
            var str = textValue.replace(/\s/g, '');
            
            if(plateView == 'front'){
                formData.append('image_1', img_1);
            }else if(plateView == 'both'){
                formData.append('image_1', img_1);
                formData.append('image_2', img_2);
            }else if(plateView == 'rear'){
                formData.append('image_2', img_2);
            }
            
            formData.append('plate_number', textValue);
            formData.append('action', 'add_to_basket');
            
            if(str != ''){
               jQuery.ajax({
                   type: "POST",
                   url: url,
                   data: formData,
                   dataType: 'json',
                   cache: false,
                   contentType: false,
                   processData: false,
                   success: function(res){
                        if(res.status == 1){
                            
                            toastr.success("Plate added to basket successfully");
                            $('#add_to_basket').prop("disabled", false);
                            jQuery("#add_to_basket_loader").hide();
                            
                            setTimeout(function(){
                                jQuery("#add_to_cart")[0].click();
                            },10000);
                            
                        }else{
                            toastr.error("Something went wrong");
                        }
                   }
                });
           }else{
               toastr.error("Please enter plate number");
           }
        },8000);
       
       
    });
    
});

function show_image(id){
    var img_url = jQuery("#image_"+id).attr('data-image');
    jQuery("#close-up-image").attr('src',img_url);
}

  // Select image and show it.
    let chooseImage = () => {
    	document.getElementById('file').click();
    }

    let showImage = (fl) => {
        if (fl.files.length > 0) {
            let reader  = new FileReader();

            reader.onload = function (e) {
                let img = new Image();
                
                img.onload = function () {
                    if (this.width > screen.width || this.height > screen.height) {
                        alert('Please select a small image. The image width and height should be less than the screen width and height.');

                        document.getElementById('theText').style.display = 'none';
                        document.getElementById('bt').style.display = 'none';
                        document.getElementById('textArea').style.display = 'none';
                        document.getElementById('myimage').src = '';
                    }
                    else {
                        document.getElementById('theText').style.display = 'block';
                        document.getElementById('bt').style.display = 'block';
                        document.getElementById('textArea').style.display = 'block';
                    }
                }

                img.src = e.target.result;      // actual image. 
                document.getElementById('myimage').src = reader.result;  // Add the image on the form.
            };
            reader.readAsDataURL(fl.files[0]);
        }
    }

    let textContainer;
    let t = 'sample text';

    // Get the values that you have entered in the textarea and
    // write it in the DIV over the image.

    let writeText = (ele) => {
        t = ele.value;
        document.getElementById('text-front').innerHTML = t.replace(/\n\r?/g, '<br />');
        document.getElementById('text-back').innerHTML = t.replace(/\n\r?/g, '<br />');
    }
    
function check_number_plate(textValue,width){
    
        if(width == 752){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('uk-standard-520×111');

          if(textValue != ''){
            if(textValue.includes("i") || textValue.includes("1")){
                jQuery("#text-style-change").addClass('default_class');
            }else{
                jQuery("#text-style-change").removeClass('default_class');
            }
          }

       }else if(width == 665){

          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('uk-7-character-460x101'); 

          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('uk-7-character-460x101_default_class');
         }
           
       }else if(width == 327){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('uk-7-character-which-includes-a-no-1-225x199'); 
           
        if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('uk-7-character-which-includes-a-no-1-225x199_default_class');
         }else if(textValue.replace(/ /g,'').length < 7){

         }else{
             toastr.error("Please enter correct format as per our Sizing Guide below.");
         }

       }else if(width == 615){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('uk-7-character-which-includes-a-No-1-424x101');
           
           console.log(textValue.replace(/ /g,'').length);
           
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('uk-7-character-which-includes-a-No-1-424x101_default_class');
          }else if(textValue.replace(/ /g,'').length < 7){

          }else{
             toastr.error("Please enter correct format as per our Sizing Guide below.");
          }

       }else if(width == 577){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('uk-6-character-399x101');
           
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('uk-6-character-399x101_default_class');
          }
       }else if(width == 370){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('uk-7-character-255x199');
        
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('uk-7-character-255x199_default_class');
          }
           
            new_custom_arr2 = '';
            var res = textValue.replace(/\s+/g, "");
            var perChar = res.split('');
            for(var i=0; i<res.length ; i++){

                if(textValue.indexOf(' ') == i){
                    new_custom_arr2 += '<br>';
                    new_custom_arr2 += perChar[i];
                }else{
                    new_custom_arr2 += perChar[i];
                }

            }
            custom_arr2 = '';
            textValue = new_custom_arr2;
           
           jQuery("#text-front").html(textValue);
        jQuery("#text-back").html(textValue);
           
       }else if(width == 290){ 
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('uk-5-or-6-character-199x199');
         
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('uk-5-or-6-character-199x199_default_class');
          }
        
           new_custom_arr2 = '';
            var res = textValue.replace(/\s+/g, "");
            console.log(res);
            var perChar = res.split('');
            for(var i=0; i<res.length ; i++){

                if(textValue.indexOf(' ') == i){
                    new_custom_arr2 += '<br>';
                    new_custom_arr2 += perChar[i];
                }else{
                    new_custom_arr2 += perChar[i];
                }

            }
            custom_arr2 = '';
            textValue = new_custom_arr2;
           
           jQuery("#text-front").html(textValue);
        jQuery("#text-back").html(textValue);
       }else if(width == 525){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('uk-6-character-which-includes-a-No-1-363x101');

          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('uk-6-character-which-includes-a-No-1-363x101_default_class');
          }else if(textValue.replace(/ /g,'').length < 6){

          }else{
             toastr.error("Please enter correct format as per our Sizing Guide below.");
          }
           
       }else if(width == 480){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('import-size-1-330x165');
           
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('import-size-1-330x165_default_class');
          }
           
            new_custom_arr2 = '';
            var res = textValue.replace(/\s+/g, "");
            var perChar = res.split('');
           console.log(textValue.indexOf(' '));
            for(var i=0; i<res.length ; i++){

                if(textValue.indexOf(' ') == i){
                    console.log('inside if');
                    new_custom_arr2 += '<br>';
                    new_custom_arr2 += perChar[i];
                }else{
                    new_custom_arr2 += perChar[i];
                }

            }
            custom_arr2 = '';
            textValue = new_custom_arr2;

        jQuery("#text-front").html(textValue);
        jQuery("#text-back").html(textValue);
           
       }else if(width == 591){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('imported-7-character-408x87');
           
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('imported-7-character-408x87_default_class');
          }
           
       }else if(width == 251){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('imported-5-or-6-character-172x156');
           
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('imported-5-or-6-character-172x156_default_class');
          }
           
       }else if(width == 437){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('imported-5-character-300x87');
        
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('imported-5-character-300x87_default_class');
          }
       }else if(width == 441){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('import-size-3-303x152');
        
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('import-size-3-303x152_default_class');
          }
           
           new_custom_arr2 = '';
            var res = textValue.replace(/\s+/g, "");
            var perChar = res.split('');
            for(var i=0; i<res.length ; i++){

                if(textValue.indexOf(' ') == i){
                    new_custom_arr2 += '<br>';
                    new_custom_arr2 += perChar[i];
                }else{
                    new_custom_arr2 += perChar[i];
                }

            }
            custom_arr2 = '';
            textValue = new_custom_arr2;

        jQuery("#text-front").html(textValue);
        jQuery("#text-back").html(textValue);
           
       }else if(width == 515){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('imported-6-character-354x87');
        
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('imported-6-character-354x87_default_class');
          }
       }else if(width == 465){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('imported-6-character-with-no-1-320x87');
          
          console.log(textValue.replace(/ /g,'').length);
           
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('imported-6-character-with-no-1-320x87_default_class');
          }else if(textValue.replace(/ /g,'').length < 6){

          }else{
             toastr.error("Please enter correct format as per our Sizing Guide below.");
          }
           
       }else if(width == 386){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('imported-5-character-with-no-1-266x87');
         
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('imported-5-character-with-no-1-266x87_default_class');
          }else{
              toastr.error("Please enter correct format as per our Sizing Guide below.");
          }
           
       }else if(width == 329){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('imported-7-character-226x156');
         
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('imported-7-character-226x156_default_class');
          }
       }else if(width == 332){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('moto-7-character-228x164');
           
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('moto-7-character-228x164_default_class');
          }

            new_custom_arr2 = '';
            var res = textValue.replace(/\s+/g, "");
            console.log(res);
            var perChar = res.split('');
            for(var i=0; i<res.length ; i++){

                if(textValue.indexOf(' ') == i){
                    new_custom_arr2 += '<br>';
                    new_custom_arr2 += perChar[i];
                }else{
                    new_custom_arr2 += perChar[i];
                }

            }
            custom_arr2 = '';
            textValue = new_custom_arr2;

        jQuery("#text-front").html(textValue);
        jQuery("#text-back").html(textValue);

       }else if(width == 283){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('moto-7-character-with-no-1-194x164');
           
          new_custom_arr2 = '';
            var res = textValue.replace(/\s+/g, "");
            var perChar = res.split('');
            for(var i=0; i<res.length ; i++){

                if(textValue.indexOf(' ') == i){
                    new_custom_arr2 += '<br>';
                    new_custom_arr2 += perChar[i];
                }else{
                    new_custom_arr2 += perChar[i];
                }

            }
            custom_arr2 = '';
            textValue = new_custom_arr2;

           if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('moto-7-character-with-no-1-194x164_default_class');
           }else if(textValue.length <= 10){
             
           }else{
              toastr.error("Please enter correct format as per our Sizing Guide below.");
           }

        jQuery("#text-front").html(textValue);
        jQuery("#text-back").html(textValue);
       }else if(width == 283){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('moto-7-character-with-no-1-194x164');
        
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('moto-7-character-with-no-1-194x164_default_class');
          }else if(textValue.length <= 10){

          }else{
             toastr.error("Please enter correct format as per our Sizing Guide below.");
          }
           
        new_custom_arr2 = '';
        var res = textValue.replace(/\s+/g, "");
        console.log(res);
        var perChar = res.split('');
        for(var i=0; i<res.length ; i++){

            if(textValue.indexOf(' ') == i){
                new_custom_arr2 += '<br>';
                new_custom_arr2 += perChar[i];
            }else{
                new_custom_arr2 += perChar[i];
            }

        }
        custom_arr2 = '';
        textValue = new_custom_arr2;
           
        if(textValue.includes("i") || textValue.includes("1")){
         jQuery('#text-style-change').removeClass();
         jQuery("#text-style-change").addClass('moto-7-character-with-no-1-194x164_default_class');
        }else if(textValue.length <= 10){

        }else{
         toastr.error("Please enter correct format as per our Sizing Guide below.");
        }

        jQuery("#text-front").html(textValue);
        jQuery("#text-back").html(textValue);
           
       }else if(width == 255){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('moto-5-character-174x164');
           
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('moto-5-character-174x164_default_class');
          }
       }else if(width == 254){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('profiled-5-character-174x164-profiled-1');

          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('profiled-5-character-174x164-profiled-1_default_class');
          }
           new_custom_arr2 = '';
            var res = textValue.replace(/\s+/g, "");
            console.log(res);
            var perChar = res.split('');
            for(var i=0; i<res.length ; i++){

                if(textValue.indexOf(' ') == i){
                    new_custom_arr2 += '<br>';
                    new_custom_arr2 += perChar[i];
                }else{
                    new_custom_arr2 += perChar[i];
                }

            }
            custom_arr2 = '';
            textValue = new_custom_arr2;

        jQuery("#text-front").html(textValue);
        jQuery("#text-back").html(textValue);

       }else if(width == 490){
          jQuery('#text-style-change').removeClass();
          jQuery('#text-style-change').addClass('uk-5-character-338x101');  
         
          if(textValue.includes("i") || textValue.includes("1")){
            jQuery('#text-style-change').removeClass();
            jQuery("#text-style-change").addClass('uk-5-character-338x101_default_class');
          }
       }
}
 
//    let saveImageWithText = () => {
//
//        var element = $("#mainContainer"); // global variable
//        var getCanvas; // global variable
//
//        html2canvas(element, {
//                 onrendered: function (canvas) {
//                        $("#copyDiv").append(canvas);
//                        getCanvas = canvas;
//                     }
//          });
////        textContainer = document.getElementById('text-front');     // The element with the text.
////    
////        // Create an image object.
////        let img = new Image();
////        img.src = document.getElementById('plateimg_white').src;
////       
////        // Create a canvas object.
////        let canvas = document.createElement("canvas");
////        
////        // Wait till the image is loaded.
////        img.onload = function(){
////            drawImage();
////            downloadImage(img.src.replace(/^.*[\\\/]/, ''));    // Download the processed image.
////        }
////        
////        // Draw the image on the canvas.
////        let drawImage = () => {
////            let ctx = canvas.getContext("2d");	// Create canvas context.
////
////            // Assign width and height.
////            canvas.width = img.width;
////            canvas.height = img.height;
////
////          	// Draw the image.
////            ctx.drawImage(img, 0, 0);
////            
////            textContainer.style.border = 0;
////            
////            // Get the padding etc.
////            let left = parseInt(window.getComputedStyle(textContainer).left);
////            let right = textContainer.getBoundingClientRect().right;
////            let top = parseInt(window.getComputedStyle(textContainer).top, 0);
////            let center = textContainer.getBoundingClientRect().width / 2;
////
////            let paddingTop = window.getComputedStyle(textContainer).paddingTop.replace('px', '');
////            let paddingLeft = window.getComputedStyle(textContainer).paddingLeft.replace('px', '');
////            let paddingRight = window.getComputedStyle(textContainer).paddingRight.replace('px', '');
////            
////            // Get text alignement, colour and font of the text.
////            let txtAlign = window.getComputedStyle(textContainer).textAlign;
////            let color = window.getComputedStyle(textContainer).color;
////            let fnt = window.getComputedStyle(textContainer).font;
////           
////            // Assign text properties to the context.
////            ctx.font = fnt;
////            ctx.fillStyle = color;
////            ctx.textAlign = 'center';
////			ctx.textBaseline = 'middle';
////            // Now, we need the coordinates of the text.
////            let x; 		// coordinate.
////            if (txtAlign === 'right') {
////            	x = right + parseInt(paddingRight) - 11;
////            }
////            if (txtAlign === 'left') {
////            	x = left + parseInt(paddingLeft);
////            }
////            if (txtAlign === 'center') {
////            	x = center + left;
////            }
////
////            // Get the text (it can a word or a sentence) to write over the image.
////            let str = t.replace(/\n\r?/g, '<br />').split('<br />');
////
////            // finally, draw the text using Canvas fillText() method.
////            for (let i = 0; i <= str.length - 1; i++) {
////            	
////                ctx.fillText(
////                    str[i]
////                        .replace('</div>','')
////                        .replace('<br>', '')
////                        .replace(';',''), 
////                    x, 
////                    parseInt(paddingTop, 10) + parseInt(top, 10) + 10 + (i * 15));
////            }
////            
////             // Show the image with the text on the Canvas.
////            document.body.append(canvas); 
////        }
////
////        // Download the processed image.
////        let downloadImage = (img_name) => {
////            let a = document.createElement('a');
////            a.href = canvas.toDataURL("image/png");
////            a.download = img_name;
////            document.body.appendChild(a);
//////            a.click();        
////        }
//    }
