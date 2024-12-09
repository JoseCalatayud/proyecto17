$(function (){

$('.botones').append($('<button>').attr("id", "listar").text('Listar'));
$('.botones').append($('<button>').attr("id", "listarID").text('Listar 1'));
$('.botones').append($('<button>').attr("id", "guardar").text('Guardar'));
$('.botones').append($('<button>').attr("id", "modificar").text('Modificar'));
$('.botones').append($('<button>').attr("id", "borrar").text('Borrar'));
$('.respuesta').append($('<h1>').text("Respuesta"))
$('.respuesta').append($('<input id="respuesta" type="text">'))

const listarTodos =  () => {
    $.get( "https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes", function (data){
        $('input').val('')
        $('input').val('OK')
    }
        
    )
}
$('#listar').on('click',listarTodos)







})