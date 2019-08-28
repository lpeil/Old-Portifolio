$("form").submit(function(event) {
    event.preventDefault();

    var $form = $( this ),
        email = $form.find("input[name='email']").val(),
        celular = $form.find("input[name='celular']").val(),
        nome = $form.find("input[name='nome']").val(),
        texto = $form.find("textarea[name='texto']").val(),
        url = $form.attr( "action" );
    
    var posting = $.post( url, { email: email, nome: nome, texto: texto, celular: celular } );
    
    posting.done(function( data ) {
        $("#mensagem").empty().append( data );
        $('form').each (function(){
            this.reset();
        });
    });
});
