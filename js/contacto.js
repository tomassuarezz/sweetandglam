$(".scrollcComprar").click(function() { 
    $('html').animate({ 
        scrollTop: $("#scComprar").offset().top
    }, 1300);
});

$(".scrollContacto").click(function() { 
    $('html').animate({ 
        scrollTop: $("#sContacto").offset().top
    }, 1300);
});

$(".scrollInicio").click(function() { 
    $('html').animate({ 
        scrollTop: $(".fondo").offset().top
    }, 1300);
});

//Código JS para el formulario de contacto

// Tomo los campos y los hago variables

let campoNombre = document.getElementById("txtNombre");
let campoEmail = document.getElementById("txtEmail");
let campoAsunto = document.getElementById("txtAsunto");
let campoMensaje = document.getElementById("txtMensaje");


//EVENTO SUBMIT
let formulario = document.getElementById("formulario");
formulario.addEventListener("submit", validarFormulario);
let divNombre = document.createElement('div');
let divEmail = document.createElement('div');
let divAsunto = document.createElement('div');
let divMensaje = document.createElement('div');
let div = document.createElement('div');
div.id = 'content';

class Datos {
    constructor(nombre, email, asunto, mensaje) {
        this.nombre = nombre;
        this.email = email;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }
}

function validarFormulario(ev) {
    debugger
    // Validación campo Nombre
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let divCampoNombre = document.getElementById("divCampoNombre");
    let divCampoEmail = document.getElementById("divCampoEmail");
    let divCampoAsunto = document.getElementById("divCampoAsunto");
    let divCampoMensaje = document.getElementById("divCampoMensaje");
    const URLPOST = "https://jsonplaceholder.typicode.com/posts";
    const persona1 = new Datos(campoNombre.value, campoEmail.value, campoAsunto.value, campoMensaje.value);
    div.innerHTML = "";
    divNombre.innerHTML = "";
    divEmail.innerHTML = "";
    divAsunto.innerHTML = "";
    divMensaje.innerHTML = "";
    comprobarCampoNombre();
    comprobarCampoEmail();
    comprobarCampoAsunto();
    comprobarCampoMensaje();
    if ((comprobarCampoNombre() == true) && (comprobarCampoEmail() == true) && (comprobarCampoAsunto() == true) && (comprobarCampoMensaje() == true)) {
        divNombre.innerHTML = "";
        divEmail.innerHTML = "";
        divAsunto.innerHTML = "";
        divMensaje.innerHTML = "";
        ev.preventDefault();
        campoNombre.value = "";
        campoEmail.value = "";
        campoMensaje.value = "";
        campoAsunto.value = "";
        $.post(URLPOST, persona1).done(function(data, estado) { 
            console.log("Los datos enviados son: " + estado);
            console.log(data);
            Swal.fire(
                'Datos enviados exitosamente!'
            );
            localStorage.setItem("Datos Enviados", JSON.stringify(persona1));
        });
    
    }

    function comprobarCampoNombre() {
        if (campoNombre.value != "") {
            if (isNaN(campoNombre.value)) {
                if (campoNombre.value.match(specialChars)) {
                    divNombre.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:20px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo no debe poseer caracteres especiales </h2></center>`;
                    divCampoNombre.appendChild(divNombre);
                    ev.preventDefault();
                    return false;
                }
            } else {
                divNombre.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:20px;
                src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Nombre no debe poseer números</h2></center>`;
                divCampoNombre.appendChild(divNombre);
                ev.preventDefault();
                return false;
            }
        } else {
            divNombre.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:20px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Nombre no debe quedar vacío </h2></center>`;
            divCampoNombre.appendChild(divNombre);
            ev.preventDefault();
            return false;
        }
        return true;

    }

    function comprobarCampoEmail() {
        if (campoEmail.value != "") {
            var filtroMail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            if (!filtroMail.test(campoEmail.value)) {
                divEmail.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:20px;
                    src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Email no es válido </h2></center>`;
                divCampoEmail.appendChild(divEmail);
                ev.preventDefault();
                return false;

            }

        } else {
            divEmail.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:20px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Email no debe quedar vacío </h2></center>`;
            divCampoEmail.appendChild(divEmail);
            ev.preventDefault();
            return false;
        }
        return true;
    }

    function comprobarCampoAsunto() {
        if (campoAsunto.value == "") {
            divAsunto.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:20px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Asunto no debe quedar vacío </h2></center>`;
            divCampoAsunto.appendChild(divAsunto);
            ev.preventDefault();
            return false;
        }
        return true;
    }

    function comprobarCampoMensaje() {
        if (campoMensaje.value == "") {
            divMensaje.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:20px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Mensaje no debe quedar vacío </h2></center>`;
            divCampoMensaje.appendChild(divMensaje);
            ev.preventDefault();
            return false;
        }

        return true;
    }

}












