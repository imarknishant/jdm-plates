jQuery(document).ready(function(){
    
    var t = 0;
    $("input[type=text]" ).focusin(function(){
        if(t == 0){
            $("input[type=text]" ).each(function(){
                $( this ).val('');
            });
        }
        t++;
    });
    
    
    /*****  White canvas *****/
    var canvas = document.getElementById('canvas'),
    ctx = canvas.getContext('2d');
    canvas.width = $('#plateimg_white').width();
    canvas.crossOrigin = "Anonymous";
    canvas.height = $('#plateimg_white').height();
    ctx.drawImage($('#plateimg_white').get(0), 0, 0);
    
    /***** Yellow canvas *****/
    var canvas_y = document.getElementById('canvas_yellow'),
    ctx_y = canvas_y.getContext('2d');
    canvas_y.width = $('#plateimg_yellow').width();
    canvas_y.crossOrigin = "Anonymous";
    canvas_y.height = $('#plateimg_yellow').height();
    ctx_y.drawImage($('#plateimg_yellow').get(0), 0, 0);
    
    var default_text = 'YOUR REG';
    
    setTimeout(function(){
        /*****  White canvas *****/
            var width = (canvas.width/100)*90;
            var height = (canvas.height/100)*90;
            var area = width*height;

            var fontsize = Math.sqrt(area/default_text.length);
            var fontsize = fontsize*1.4;
            var font = 'bold '+fontsize+'px UKNumberPlate';
            var countspace = 1;
                                
            ctx.clearRect(0,0,canvas.width,canvas.height);
            ctx.drawImage($('#plateimg_white').get(0), 0, 0);
            //refill text
            ctx.fillStyle = "black";
            ctx.font = font;
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
        
            textWidth = ctx.measureText(default_text).width;
            var x = canvas.width / 2;
            var y = canvas.height / 2;
        
            /*****  Yellow canvas *****/
            ctx_y.clearRect(0,0,canvas_y.width,canvas_y.height);
            ctx_y.drawImage($('#plateimg_yellow').get(0), 0, 0);
            //refill text
            ctx_y.fillStyle = "black";
            ctx_y.font = font;
            ctx_y.textAlign = 'center';
            ctx_y.textBaseline = 'middle';
            textWidth_y = ctx_y.measureText(default_text).width;
        
            if(countspace == 2){
               var heightdivide = (countspace * 4);
            }else if(countspace == 1){
               var heightdivide = (countspace * 2.5);
            }else{
                var heightdivide = 2;
            }
        
            var newy = (canvas.height / heightdivide);
            newy = newy-5;
            ctx.fillText(default_text.toUpperCase(),x,newy);
            ctx_y.fillText(default_text.toUpperCase(),x,newy);

            
    },1000);

    
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
       var custom_arr1 = '';
       var num = $('.num').length;
        var countspace = 0;
        var image_width = $('#plateimg_white').width();
        if(image_width < 400){
            var perchar = 15;

            for(var j=0; j<8; j++){
               var alp = jQuery(".value_"+j).val();
               if(alp.trim() != ''){
                   custom_arr1 += alp;
               }else{

                   countspace = (countspace + 1);
                   custom_arr1 += ' ';
               }
           }
            if(countspace>1){
               perchar = 18;
            }

            var width = (canvas.width/100)*90;
            var height = (canvas.height/100)*90;
            var area = width*height;

            var fontsize = Math.sqrt(area/custom_arr1.length);
            var fontsize = fontsize*1.4;
            var font = 'bold '+fontsize+'px UKNumberPlate'
            var lines = custom_arr1.split(" ");
        }else{

            for(var j=0; j<8; j++){
               var alp = jQuery(".value_"+j).val();
               if(alp.trim() != ''){
                   custom_arr1 += alp;
               }else{
                   custom_arr1 += ' ';
               }
           }

            var width = (canvas.width/100)*90;
            var height = (canvas.height/100)*90;
            var area = width*height;

            var fontsize = Math.sqrt(area/custom_arr1.length);
            var fontsize = fontsize*1.4;
            var font = 'bold '+fontsize+'px UKNumberPlate';
            var lines =0;
        }
    
        /*****  White canvas *****/
        ctx.clearRect(0,0,canvas.width,canvas.height);
        ctx.drawImage($('#plateimg_white').get(0), 0, 0);
        //refill text
        ctx.fillStyle = "black";
        ctx.font=font;
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        textWidth = ctx.measureText(custom_arr1 ).width;
        var x = canvas.width / 2;
        var y = canvas.height / 2;
        
        /*****  Yellow canvas *****/
        ctx_y.clearRect(0,0,canvas_y.width,canvas_y.height);
        ctx_y.drawImage($('#plateimg_yellow').get(0), 0, 0);
        //refill text
        ctx_y.fillStyle = "black";
        ctx_y.font=font;
        ctx_y.textAlign = 'center';
        ctx_y.textBaseline = 'middle';
        textWidth_y = ctx.measureText(custom_arr1 ).width;

        if(countspace == 2){
           var heightdivide = (countspace * 4);
        }else if(countspace == 1){
           var heightdivide = (countspace * 2.5);
        }else{
            var heightdivide = 2.5;
        }

        var newy = (canvas.height / heightdivide);
        newy = newy-5;
        ctx.fillText(custom_arr1.toUpperCase(),x,newy);
        ctx_y.fillText(custom_arr1.toUpperCase(),x,newy);

        jQuery(".back_1").click();
    });
    
    
    jQuery("#generate_number_plate_2").click(function(e){
        e.preventDefault();
        jQuery(".back_2").click();
    });
    
    jQuery("#show_front").click(function(){
       jQuery(".front_view_container").show();
       jQuery(".back_view_container").hide();
       jQuery(this).closest("li").addClass('bg big');
       jQuery("#show_rear").closest("li").removeClass('bg big');
       jQuery("#front_rear").closest("li").removeClass('bg big');
    });
    
    jQuery("#show_rear").click(function(){
       jQuery(".front_view_container").hide();
       jQuery(".back_view_container").show();
       jQuery(this).closest("li").addClass('bg big');
       jQuery("#show_front").closest("li").removeClass('bg big');
       jQuery("#front_rear").closest("li").removeClass('bg big');
    });
    
    jQuery("#front_rear").click(function(){
       jQuery(".front_view_container").show();
       jQuery(".back_view_container").show();
       jQuery(this).closest("li").addClass('bg big');
       jQuery("#show_front").closest("li").removeClass('bg big');
       jQuery("#show_rear").closest("li").removeClass('bg big');
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
        
    });
    
    jQuery(document).on('change','.plate_selected',function(){
        var url = jQuery("#ajax-url").val();
        var plate_type = jQuery("#plate_type").find(":selected").val();
        var plateSize = jQuery(this).val();
        var chr = jQuery(this).find(":selected").data("chr");
        var up_letters = jQuery(this).find(":selected").data("up");
        var plate = jQuery(this).data("platetype");
        jQuery.ajax({
           type: "POST",
           url: url,
           data: {plateSize:plateSize, plate:plate, action:"change_plate_size"},
           dataType: 'json',
           success: function(res){
               jQuery("#plateimg_white").attr('src',res.front);
               jQuery("#plateimg_yellow").attr('src',res.rear);
               
               setTimeout(function(){
                   
                /*****  White canvas *****/
                
                var image_width = $('#plateimg_white').width();
                var canvas = document.getElementById('canvas'),
                ctx = canvas.getContext('2d');
                canvas.width = $('#plateimg_white').width();
                canvas.crossOrigin = "Anonymous";
                canvas.height = $('#plateimg_white').height();
                ctx.drawImage($('#plateimg_white').get(0), 0, 0);

                /***** Yellow canvas *****/
                var canvas_y = document.getElementById('canvas_yellow'),
                ctx_y = canvas_y.getContext('2d');
                canvas_y.width = $('#plateimg_yellow').width();
                canvas_y.crossOrigin = "Anonymous";
                canvas_y.height = $('#plateimg_yellow').height();
                ctx_y.drawImage($('#plateimg_yellow').get(0), 0, 0);  
                   
                var custom_arr2 = '';
                var num = $('.num').length;
   
                setTimeout(function(){

                if(chr == 7 || chr == 8 || chr == 6 || chr == 5){
                    var countspace = 0;
                    var perchar = 15;

                    for(var j=0; j<chr; j++){
                       var alp = jQuery(".value_"+j).val();
                       if(alp.trim() != ''){
                           custom_arr2 += alp;
                       }else{

                           countspace = (countspace + 1);
                           custom_arr2 += ' ';
                       }
                    }
                    if(countspace>1){
                       perchar = 18;
                    }

                    var width = (canvas.width/100)*90;
                    var height = (canvas.height/100)*90;
                    var area = width*height;

                    var fontsize = Math.sqrt(area/custom_arr2.length);

                    if(image_width < 255){
            
                        if(up_letters != '' && typeof up_letters !== "undefined"){
                            
                            new_custom_arr2 = '';
                            var res = custom_arr2.replace(/\s+/g, "");
                            console.log(res);
                            var perChar = res.split('');
                            for(var i=0; i<res.length ; i++){
                                
                                if(up_letters == i){
                                    new_custom_arr2 += ' ';
                                    new_custom_arr2 += perChar[i];
                                }else{
                                    new_custom_arr2 += perChar[i];
                                }
                                  
                            }
                            custom_arr2 = '';
                            custom_arr2 = new_custom_arr2;
                            
                            var lineheight = fontsize+20;
                            var fontsize = fontsize*1.4;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-25;
                            
                        }else{
                            
                            var lineheight = fontsize+7;
                            var fontsize = fontsize*1.2;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-18;
                        }
                        
                        
                    }else if(image_width < 260){
                        
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.1;
                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy-15;
                        
                    }else if(image_width < 295){
                        if(up_letters != '' && typeof up_letters !== "undefined"){
                            
                            new_custom_arr2 = '';
                            var res = custom_arr2.replace(/\s+/g, "");
                            console.log(res);
                            var perChar = res.split('');
                            for(var i=0; i<res.length ; i++){
                                
                                if(up_letters == i){
                                    new_custom_arr2 += ' ';
                                    new_custom_arr2 += perChar[i];
                                }else{
                                    new_custom_arr2 += perChar[i];
                                }
                                  
                            }
                            custom_arr2 = '';
                            custom_arr2 = new_custom_arr2;
                            
                            var lineheight = fontsize+20;
                            var fontsize = fontsize*1.4;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-25;
                            
                        }else{
                            var lineheight = fontsize+7;
                            var fontsize = fontsize*1.2;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-15;
                        }
                        
                        
                        
                    }else if(image_width < 330){
                        
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy-15;
                        
                    }else if(image_width < 375){
                        if(up_letters != '' && typeof up_letters !== "undefined"){
                            new_custom_arr2 = '';
                            var res = custom_arr2.replace(/\s+/g, "");
                            console.log(res);
                            var perChar = res.split('');
                            for(var i=0; i<res.length ; i++){
                                
                                if(up_letters == i){
                                    new_custom_arr2 += ' ';
                                    new_custom_arr2 += perChar[i];
                                }else{
                                    new_custom_arr2 += perChar[i];
                                }
                                  
                            }
                            custom_arr2 = '';
                            custom_arr2 = new_custom_arr2;
                            
                            var lineheight = fontsize+20;
                            var fontsize = fontsize*1.4;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-25;
                            
                        }else{
                            var lineheight = fontsize+7;
                            var fontsize = fontsize*1.3;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-20;
                        }
                        
                        
                    }else if(image_width < 390){
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy+8;
                        
                    }else if(image_width < 438){
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
//                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy-22;
                        
                    }else if(image_width < 442){
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy-22;
                        
                    }else if(image_width < 470){
//                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
//                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
//                        newy = newy-22;
                        
                    }else if(image_width < 485){
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy-22;
                        
                    }else{
                        var lineheight = fontsize;
                        var fontsize = fontsize*1.4;
                        var lines =0;
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                    }

                    var font = 'bold '+fontsize+'px UKNumberPlate';

                }


                /**** Set style variable according to image width ****/
                
                    
                     var totalNumbers = custom_arr2.replace(/[^0-9]/g,"").length;
                     var Letters = custom_arr2.replace(/[^A-Z]/gi, "").length;
                       
                    /*****  White canvas *****/
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    ctx.drawImage($('#plateimg_white').get(0), 0, 0);
                    //refill text
                    ctx.fillStyle = "black";
                    ctx.font = font;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    var lineHeight = ctx.measureText(custom_arr2).width;
                    var x = canvas.width / 2;
                    var y = canvas.height / 3;
                    
                    /*****  Yellow canvas *****/
                    ctx_y.clearRect(0,0,canvas_y.width,canvas_y.height);
                    ctx_y.drawImage($('#plateimg_yellow').get(0), 0, 0);
                    //refill text
                    ctx_y.fillStyle = "black";
                    ctx_y.font = font;
                    ctx_y.textAlign = 'center';
                    ctx_y.textBaseline = 'middle';
                    textWidth_y = ctx.measureText(custom_arr2 ).width;

                    if(Array.isArray(lines)){
                        
                        for (var i = 0; i < lines.length; ++i){
                            ctx.fillText(lines[i], x , newy);
                            ctx_y.fillText(lines[i],x,  newy);
                            newy += lineheight;
                        }
                    }else{
                        ctx.fillText(custom_arr2.toUpperCase(),x,y);
                        ctx_y.fillText(custom_arr2.toUpperCase(),x,y);
                    }
                                
                   },500);
                
                   
               },1000);
           }
        });
    });
    
    /**** Change Text Style *****/
    
    jQuery("#text_style_3d_gel").click(function(){
        var url = jQuery("#ajax-url").val();
        var plate_type = jQuery("#plate_type").find(":selected").val();
        var plateSize = jQuery('.plate_selected').find(":selected").val();
        var chr = jQuery('.plate_selected').find(":selected").data("chr");
        var up_letters = jQuery('.plate_selected').find(":selected").data("up");
        var plate = jQuery('.plate_selected').data("platetype");
        jQuery.ajax({
           type: "POST",
           url: url,
           data: {plateSize:plateSize, plate:plate, action:"change_plate_size"},
           dataType: 'json',
           success: function(res){
               jQuery("#plateimg_white").attr('src',res.front);
               jQuery("#plateimg_yellow").attr('src',res.rear);
               
               setTimeout(function(){
                   
                /*****  White canvas *****/
                
                var image_width = $('#plateimg_white').width();
                var canvas = document.getElementById('canvas'),
                ctx = canvas.getContext('2d');
                canvas.width = $('#plateimg_white').width();
                canvas.crossOrigin = "Anonymous";
                canvas.height = $('#plateimg_white').height();
                ctx.drawImage($('#plateimg_white').get(0), 0, 0);

                /***** Yellow canvas *****/
                var canvas_y = document.getElementById('canvas_yellow'),
                ctx_y = canvas_y.getContext('2d');
                canvas_y.width = $('#plateimg_yellow').width();
                canvas_y.crossOrigin = "Anonymous";
                canvas_y.height = $('#plateimg_yellow').height();
                ctx_y.drawImage($('#plateimg_yellow').get(0), 0, 0);  
                   
                var custom_arr2 = '';
                var num = $('.num').length;
   
                setTimeout(function(){

                if(chr == 7 || chr == 8 || chr == 6 || chr == 5){
                    var countspace = 0;
                    var perchar = 15;

                    for(var j=0; j<chr; j++){
                       var alp = jQuery(".value_"+j).val();
                       if(alp.trim() != ''){
                           custom_arr2 += alp;
                       }else{

                           countspace = (countspace + 1);
                           custom_arr2 += ' ';
                       }
                    }
                    if(countspace>1){
                       perchar = 18;
                    }

                    var width = (canvas.width/100)*90;
                    var height = (canvas.height/100)*90;
                    var area = width*height;

                    var fontsize = Math.sqrt(area/custom_arr2.length);

                    if(image_width < 255){
            
                        if(up_letters != '' && typeof up_letters !== "undefined"){
                            
                            new_custom_arr2 = '';
                            var res = custom_arr2.replace(/\s+/g, "");
                            console.log(res);
                            var perChar = res.split('');
                            for(var i=0; i<res.length ; i++){
                                
                                if(up_letters == i){
                                    new_custom_arr2 += ' ';
                                    new_custom_arr2 += perChar[i];
                                }else{
                                    new_custom_arr2 += perChar[i];
                                }
                                  
                            }
                            custom_arr2 = '';
                            custom_arr2 = new_custom_arr2;
                            
                            var lineheight = fontsize+20;
                            var fontsize = fontsize*1.4;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-25;
                            
                        }else{
                            
                            var lineheight = fontsize+7;
                            var fontsize = fontsize*1.2;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-18;
                        }
                        
                        
                    }else if(image_width < 260){
                        
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.1;
                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy-15;
                        
                    }else if(image_width < 295){
                        if(up_letters != '' && typeof up_letters !== "undefined"){
                            
                            new_custom_arr2 = '';
                            var res = custom_arr2.replace(/\s+/g, "");
                            console.log(res);
                            var perChar = res.split('');
                            for(var i=0; i<res.length ; i++){
                                
                                if(up_letters == i){
                                    new_custom_arr2 += ' ';
                                    new_custom_arr2 += perChar[i];
                                }else{
                                    new_custom_arr2 += perChar[i];
                                }
                                  
                            }
                            custom_arr2 = '';
                            custom_arr2 = new_custom_arr2;
                            
                            var lineheight = fontsize+20;
                            var fontsize = fontsize*1.4;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-25;
                            
                        }else{
                            var lineheight = fontsize+7;
                            var fontsize = fontsize*1.2;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-15;
                        }
                        
                        
                        
                    }else if(image_width < 330){
                        
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy-15;
                        
                    }else if(image_width < 375){
                        if(up_letters != '' && typeof up_letters !== "undefined"){
                            new_custom_arr2 = '';
                            var res = custom_arr2.replace(/\s+/g, "");
                            console.log(res);
                            var perChar = res.split('');
                            for(var i=0; i<res.length ; i++){
                                
                                if(up_letters == i){
                                    new_custom_arr2 += ' ';
                                    new_custom_arr2 += perChar[i];
                                }else{
                                    new_custom_arr2 += perChar[i];
                                }
                                  
                            }
                            custom_arr2 = '';
                            custom_arr2 = new_custom_arr2;
                            
                            var lineheight = fontsize+20;
                            var fontsize = fontsize*1.4;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-25;
                            
                        }else{
                            var lineheight = fontsize+7;
                            var fontsize = fontsize*1.3;
                            var lines = custom_arr2.split(" ");

                            if(countspace == 2){
                               var heightdivide = (countspace * 4);
                            }else if(countspace == 1){
                               var heightdivide = (countspace * 3.5);
                            }else{
                                var heightdivide = 2;
                            }

                            var newy = (canvas.height / heightdivide);
                            newy = newy-20;
                        }
                        
                        
                    }else if(image_width < 390){
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy+8;
                        
                    }else if(image_width < 438){
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
//                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy-22;
                        
                    }else if(image_width < 442){
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy-22;
                        
                    }else if(image_width < 470){
//                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
//                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
//                        newy = newy-22;
                        
                    }else if(image_width < 485){
                        var lineheight = fontsize+7;
                        var fontsize = fontsize*1.3;
                        var lines = custom_arr2.split(" ");
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                        newy = newy-22;
                        
                    }else{
                        var lineheight = fontsize;
                        var fontsize = fontsize*1.4;
                        var lines =0;
                        
                        if(countspace == 2){
                           var heightdivide = (countspace * 4);
                        }else if(countspace == 1){
                           var heightdivide = (countspace * 3.5);
                        }else{
                            var heightdivide = 2;
                        }

                        var newy = (canvas.height / heightdivide);
                    }

                    var font = 'bold '+fontsize+'px UKNumberPlate';

                }


                /**** Set style variable according to image width ****/
                
                    
                     var totalNumbers = custom_arr2.replace(/[^0-9]/g,"").length;
                     var Letters = custom_arr2.replace(/[^A-Z]/gi, "").length;
                       
                    /*****  White canvas *****/
                    ctx.clearRect(0,0,canvas.width,canvas.height);
                    ctx.drawImage($('#plateimg_white').get(0), 0, 0);
                    //refill text
//                    ctx.fillStyle = "black";
                    ctx.font = font;
                    ctx.textAlign = 'center';
                    ctx.textBaseline = 'middle';
                    
                    ctx.shadowColor ="rgb(190, 190, 190)";
                    ctx.shadowOffsetX = -10;
                    ctx.shadowOffsetY = 10;
                    ctx.shadowBlur = 3;
                    
//                    var gradient = ctx.createLinearGradient(0, 0, 150, 100);
//                    gradient.addColorStop(0, "rgb(255, 0, 128)");
//                    gradient.addColorStop(1, "rgb(255, 153, 51)");
//                    ctx.fillStyle = gradient;
                    
                    var lineHeight = ctx.measureText(custom_arr2).width;
                    var x = canvas.width / 2;
                    var y = canvas.height / 3;
                    
                    /*****  Yellow canvas *****/
                    ctx_y.clearRect(0,0,canvas_y.width,canvas_y.height);
                    ctx_y.drawImage($('#plateimg_yellow').get(0), 0, 0);
                    //refill text
                    ctx_y.fillStyle = "black";
                    ctx_y.font = font;
                    ctx_y.textAlign = 'center';
                    ctx_y.textBaseline = 'middle';
                    
                    ctx_y.shadowColor ="rgb(190, 190, 190)";
                    ctx_y.shadowOffsetX = -10;
                    ctx_y.shadowOffsetY = 10;
                    ctx_y.shadowBlur = 3;
                    textWidth_y = ctx.measureText(custom_arr2 ).width;

                    if(Array.isArray(lines)){
                        
                        for (var i = 0; i < lines.length; ++i){
                            ctx.fillText(lines[i], x , newy);
                            ctx_y.fillText(lines[i],x,  newy);
                            newy += lineheight;
                        }
                    }else{
                        ctx.fillText(custom_arr2.toUpperCase(),x,y);
                        ctx_y.fillText(custom_arr2.toUpperCase(),x,y);
                    }
                                
                   },500);
                
                   
               },1000);
           }
        });
    });
    
});

function show_image(id){
    var img_url = jQuery("#image_"+id).attr('data-image');
    jQuery("#close-up-image").attr('src',img_url);
}