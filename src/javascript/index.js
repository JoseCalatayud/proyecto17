$(function () {

    $('.botones').append($('<button>').attr("id", "listar").text('Listar'));
    $('.botones').append($('<button>').attr("id", "listarID").text('Listar 1'));
    $('.botones').append($('<button>').attr("id", "guardar").text('Guardar'));
    $('.botones').append($('<button>').attr("id", "modificar").text('Modificar'));
    $('.botones').append($('<button>').attr("id", "borrar").text('Borrar'));
    $('.respuesta').append($('<h1>').text("Respuesta"))
    $('.respuesta').append($('<input id="respuesta" type="text">'))

    const listarTodos = () => {
        $.get("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes", function (data) {
            $('input').val('')
            $('input').val('OK')
        }

        )
    }
    function listarUno(id) {
        $.get(`https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/${id}`)
            .done(function (id) {
                $('input').val('')
                $('input').val('OK')
            })
            .fail((e) => {
                $('input').val(e.status)
            })

    }
    function guardar() {
        let datos = [{
            "id":3,
            "nombre": "jose",
            "apellido": "sinApellido"
        }]
        $.ajax({
            url: "https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes", // URL del servidor
            method: "POST", // Método HTTP
            data: JSON.stringify(datos), // Envía el JSON plano
            contentType: "application/json", // Especifica que el contenido es JSON
            success: function (respuesta) {
                console.log("Respuesta del servidor:", respuesta);
            },
            error: function (error) {
                console.error("Error al enviar datos:", error);
            }
        });
        // let data = JSON.stringify(datos)
        // $.post("https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes", data)
        //     .done(() => {
        //         $('input').val('')
        //         $('input').val(`Registro guardado`)
        //     })
        //     .fail((e) => {
        //         console.log(e)
        //     })
    }
    function modificar() {
        let datos
    }
    function borrar(id) {
        $.ajax({
            url: `https://my-json-server.typicode.com/desarrollo-seguro/dato/solicitudes/${id}`,
            method: "DELETE",
        }
        )
            .done(() => {
                $('input').val('')
                $('input').val(`Registro ${id} borrado`)
            })
            .fail((e) => {
                $('input').val('Fallo en el borrado ' + e.status)
            })
    }

    $('#listar').on('click', listarTodos)
    $('#listarID').on('click', () => listarUno(27))
    $('#guardar').on('click', () => guardar())
    $('#borrar').on('click', () => borrar(2))







})