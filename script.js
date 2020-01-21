$(document).ready(function() {
 

 	$("#stream1_btn").on("click", function() {
 		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream1").addClass('highlight_stream');
	});
	$("#stream2_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream2").addClass('highlight_stream');
	});
	$("#stream3_btn").on("click", function() {
		$(".stream1").removeClass('highlight_stream');
		$(".stream2").removeClass('highlight_stream');
		$(".stream3").removeClass('highlight_stream');
	  	$(".stream3").addClass('highlight_stream');
	});
$("p").click(function(){
        $("p").addClass("highlight_text");
    });
//will add lightblue to h2 elements
    $("h2").hover(function(){
        $("h2").addClass( "h2_color");   
    });
    
       /*
    this will apply larger font size to the active h2 element 
    by adding the h2_font_size class but 
    not the other h2 elements by removing class h2_font_size from them
    */
    $("#hr_html").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_html").addClass("h2_font_size");
    });

    $("#hr_mysql").hover(function(){
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_mysql").addClass("h2_font_size");
    });

    $("#hr_python").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_python").addClass("h2_font_size");
    });

    $("#hr_jquery").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_jquery").addClass("h2_font_size");
    });

    $("#hr_django").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_css").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_django").addClass("h2_font_size");
    });

    $("#hr_css").hover(function(){
        $("#hr_mysql").removeClass("h2_font_size");
        $("#hr_python").removeClass("h2_font_size");
        $("#hr_jquery").removeClass("h2_font_size");
        $("#hr_django").removeClass("h2_font_size");
        $("#hr_html").removeClass("h2_font_size");
        $("#hr_css").addClass("h2_font_size");
    });

    //applies colour black to body background when mouse enters over buttons
    $(".bottom_button").mouseenter(function(){
        $("body").css( "background-color", "black"); 
    });

    //applies colour grey to body background when mouse leaves buttons
    $(".bottom_button").mouseleave(function(){
        $("body").css( "background-color", "#eee"); 
    });
     $("#button_effects1").mouseenter(function(){
            $('#button_effects1').fadeTo(1000, 0.5);
        });
        $("#button_effects1").mouseleave(function(){
            $('#button_effects1').fadeTo(1000, 1);
        });
         $("#button_effects2").mouseenter(function(){
            $('#button_effects2').fadeTo(1000, 0.5);
        });
        $("#button_effects2").mouseleave(function(){
            $('#button_effects2').fadeTo(1000, 1);
        }); $("#button_effects3").mouseenter(function(){
            $('#button_effects3').fadeTo(1000, 0.5);
        });
        $("#button_effects3").mouseleave(function(){
            $('#button_effects3').fadeTo(1000, 1);
        }); $("#button_effects4").mouseenter(function(){
            $('#button_effects4').fadeTo(1000, 0.5);
        });
        $("#button_effects4").mouseleave(function(){
            $('#button_effects4').fadeTo(1000, 1);
        }); $("#button_effects5").mouseenter(function(){
            $('#button_effects5').fadeTo(1000, 0.5);
        });
        $("#button_effects5").mouseleave(function(){
            $('#button_effects5').fadeTo(1000, 1);
        }); $("#button_effects6").mouseenter(function(){
            $('#button_effects6').fadeTo(1000, 0.5);
        });
        $("#button_effects6").mouseleave(function(){
            $('#button_effects6').fadeTo(1000, 1);
        });
         $("#button_effects1").click(function(){
            $('#paragraph_effects1').slideToggle('slow');

        }); $("#button_effects2").click(function(){
            $('#paragraph_effects2').slideToggle('slow');

        }); $("#button_effects3").click(function(){
            $('#paragraph_effects3').slideToggle('fast');

        }); $("#button_effects4").click(function(){
            $('#paragraph_effects4').slideToggle('medium');

        }); $("#button_effects5").click(function(){
            $('#paragraph_effects5').slideToggle('1000');

        }); $("#button_effects6").click(function(){
            $('#paragraph_effects6').slideToggle('1000');

        });
}); 
