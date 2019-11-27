$("form").submit(function(){
    var validInput = true;
    if($("#fullname").val().length > 0) {
        $("#nameerrormsg").hide();
    }
    else {
        validInput = false;
        $("#nameerrormsg").show();
    }
    if($("#streetaddr").val().length > 0) {
        $("#addrerrormsg").hide();
    }
    else {
        validInput = false;
        $("#addrerrormsg").show();
    }
    
    return validInput;
});