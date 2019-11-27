$("#subscribe").click(function() {
    if($( "#subscribe" ).is(':checked')) {
        $("#emailField").show();
    }
    else {
        $("#emailField").hide();
    }
});