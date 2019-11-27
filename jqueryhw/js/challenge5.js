var msg = "Hover over an image below.";
$("img").mouseover(function(){
    $("#image").css('background-image', 'url(' + $(this).attr("src") + ')');
    $("#image").html($(this).attr("alt"));
});
$("img").focus(function(){
    $("#image").css('background-image', 'url(' + $(this).attr("src") + ')');
    $("#image").html($(this).attr("alt"));
});
$("img").mouseout(function(){
    $("#image").css('background-image', "url('')");
    $("#image").html(msg);
});
$("img").blur(function(){
    $("#image").css('background-image', "url('')");
    $("#image").html(msg);
});