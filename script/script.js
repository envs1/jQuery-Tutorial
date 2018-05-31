//events binding


var myLis = $("#points-of-sale li");

myLis.on("click",function(){
    
    $(this).css({"background": "pink"});
});