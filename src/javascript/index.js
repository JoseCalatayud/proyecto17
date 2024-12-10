$(function () {

    $('.botones').append($('<button>').attr("id", "listar").text('Listar'));
    $('.botones').append($('<button>').attr("id", "listarID").text('Listar 1'));
    $('.botones').append($('<button>').attr("id", "guardar").text('Guardar'));
    $('.botones').append($('<button>').attr("id", "modificar").text('Modificar'));
    $('.botones').append($('<button>').attr("id", "borrar").text('Borrar'));
    $('.respuesta').append($('<h1>').text("Respuesta"))
    $('.respuesta').append($('<input id="respuesta" type="text">'))

    const listarTodos = () => {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes", function (data) {
            $('input').val('')
            $('input').val('OK')
        }

        )
    }
    function listarUno(id) {
        $.get(`https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/${id}`)

            .done(function (data) {
                $('input').val('')
                $('input').val('OK '+ data)
            })
            .fail((e) => {
                $('input').val(e.status)
            })

    }
    // con promesas
    function guardar() {
        let datos = {
            "nombre": "jose",
            "apellido": "sinApellido"
        }
        $.ajax({
            url: "https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/", // URL del servidor
            type: "POST", // Método HTTP
            data: JSON.stringify(datos), // Envía el JSON plano
            contentType: "application/json" // Especifica que el contenido es JSON            
        }).then(
            (response) => {
                $('input').val('')
                $('input').val(`Registro guardado`)
            },
            (error) => {
                $('input').val('')
                $('input').val(error.statusText)
            }
        )


    }
    //sin promesas
    function modificar(id) {
        let datos = {
            "id": 1,
            "nombre": "jose",
            "apellido": "Calatayud"
        }
        $.ajax({
            url: `https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/${id}`, // URL del servidor
            type: "PUT", // Método HTTP
            data: JSON.stringify(datos), // Envía el JSON plano
            contentType: "application/json", // Especifica que el contenido es JSON
            success: (respuesta) => {
                $('input').val('')
                $('input').val('Registro modificado')
            },
            error: (error) => {
                $('input').val('')
                $('input').val('Error en la modificacion' + error)
            }
        });
    }
    function borrar(id) {
        $.ajax({
            url: `https://my-json-server.typicode.com/desarrollo-seguro/proyecto17/solicitudes/${id}`,
            type: "DELETE",

        }
        )
            .done((data) => {
                $('input').val('')
                $('input').val(`Registro ${id} borrado ${data}`)
            })
            .fail((e) => {
                $('input').val('Fallo en el borrado ' + e.status + e.statusText)
            })
    }

    $('#listar').on('click', listarTodos)
    $('#listarID').on('click', () => listarUno(1))
    $('#guardar').on('click', () => guardar())
    $('#modificar').on('click', () => modificar(1))
    $('#borrar').on('click', () => borrar(9))







})