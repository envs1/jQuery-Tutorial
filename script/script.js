// j16

$("#lead-banner").dblclick(function(){
   alert("you clicked me"); 
   $("#lead-banner").off("dblclick");
});


    
    // j17
    
/*$(window).load(function(){
    
});*/



    // j18
    
$(document).ready(function(){
   $("*").on("click", function(e){
        console.log(e.target);
        console.log("the event tag is " + e.type);
        console.log("X coordinate of the event is: " + e.pageX);
        console.log("Y coordinate of the event is: " + e.pageY);
        e.stopPropagation();
   });
});

 // j19

/*$(document).ready(function(){
    function complete(){
        alert("animation complete");
    }
    $("section > h2").on("click", function(){
        $(this).animate({"width" : "500px", "height" : "100px"}, 1000, "linear", complete); 
    });
});*/



    // j20
    
/*$(document).ready(function(){
    $("section > h2").on("click", function(){
        //$(this).fadeOut(2000).fadeIn(500); 
        $(this).fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(200, 0.8)
               .fadeTo(200, 0.2)
               .fadeTo(200, 0.8);
    });
});*/



    // j21

$(document).ready(function(){
    $("img[alt=map]").on("click", function(){
        $("section > h2").toggle(1000);
    });
});

 // j22

$(document).ready(function(){
    
    $(".slide-button-up").on("click", function(){
        $("#lead-banner").slideToggle(1000, function(){
            alert("animation complete");
        });
    });
    
});




    // j23

$(document).ready(function(){
    
    var allQuotes = $("blockquote");
    var currentQuote = 0;
    
    function changeQuote(){
        
        $(allQuotes[currentQuote]).fadeOut(200, function() {
            if(currentQuote == allQuotes.length-1) {
                currentQuote = 0;
            } else {
                currentQuote++;
            }
            
            $(allQuotes[currentQuote]).fadeIn(200);
        });
        

        
    }
    
    var quoteTimer = setInterval(changeQuote, 3000);
    
});



    // j24

$(document).ready(function(){
   
   var items = $("#points-of-sale li");
   
   items.on('click', function() {
       
       $(this).find("p").slideToggle(500);
       
   })
    
});

//j25 & j26

$(document).ready(function(){
    
    $(".rslides").responsiveSlides();
    
});