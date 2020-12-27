$(function () {
    $('body').on('click', 'h4', function(){
        $(this).css("color","green")
    });
    $('[data-toggle="tooltip"]').tooltip()

    $('#enviarCorreo').click(function () {
        alert("El correo fue enviado correctamente...")
    });
    $('.card-title').click(function () {
        $('.card-text').toggle()
    });
})