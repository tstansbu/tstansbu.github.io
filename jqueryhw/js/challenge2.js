$( "#useBilling" ).click(function() {
    if($( "#useBilling" ).is(':checked')) {
        $("#home").val($("#billing").val());
        $("#home").hide();
    }
    else {
        $("#home").val("");
        $("#home").show();
    }
});