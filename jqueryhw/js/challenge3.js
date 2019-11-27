$("form").submit(function(){
    if($( 'input[name="fruit"]' ).is(':checked')&&$( 'input[name="standing"]' ).is(':checked')) {
        return true;
    }
    else {
        alert("You must pick stuff!")
        return false;
    }
});