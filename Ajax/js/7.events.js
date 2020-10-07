$(document).ready(function () {
    //foucu event
    $('#sname, #sclass,#scountry').focus(function () {
        $(this).css('background-color', 'lime');
    });

    //blur event
    $('#sname, #sclass,#scountry').blur(function () {
        $(this).css('background-color', '');//you can also put white
    });
    //change event-when the option field value whange then it will fired.
    // it works only with select box
    $('#scountry').change(function () {
        $(this).css('background-color', 'pink');
        var a = $(this).val();
        $('#mydiv').html(a);
    });
    //select event- it works only with input field
    $('#sname, #sclass').select(function () {
        $(this).css('background-color', 'grey');
    });
    //submit event
    $('#sform').submit(function () {
        alert('Form Submited');
    });
});