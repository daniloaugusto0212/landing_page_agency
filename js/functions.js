$(function(){
    $('.form').ajaxForm({
        'success':function(data){
            console.log(data);
            alert('Formulário enviado com sucesso!');
        }
    })
})