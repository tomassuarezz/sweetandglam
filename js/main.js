const productos = [ 
    {id: "t-cheese", tipo: "torta", nombre: "Cheese Cake", imagen: "../assets/cheesecake.jpg", precio:650, stock:18},
    {id: "t-chocolate", tipo: "torta", nombre: "Torta Chocolate", imagen: "../assets/chocolate-min.jpg", precio:780, stock:7},
    {id: "t-cumpleaños", tipo: "torta", nombre: "Torta Cumpleaños", imagen: "../assets/cumpleañoschica-min.jpg", precio:660, stock:1},
    {id: "t-frutilla", tipo: "torta", nombre: "Torta Frutilla", imagen: "../assets/cumpleañosfrutilla-min.jpg", precio:850, stock: 10},
    {id: "t-brownie", tipo: "torta", nombre: "Brownie", imagen: "../assets/brownie.jpg", precio:700, stock:25},
    {id: "t-browniecumpleaños", tipo: "torta", nombre: "Brownie Cumpleaños", imagen: "../assets/browniecumpleaños.jpg", precio:865, stock:1},
    {id: "t-browniepers", tipo: "torta", nombre: "Brownie Personalizado", imagen: "../assets/browniepers-min.jpg", precio:900, stock:30},
    {id: "t-lemonpie", tipo: "torta", nombre: "Lemon Pie", imagen: "../assets/lemonpie-min.jpg", precio:720, stock:23},
    {id: "t-matilda", tipo: "torta", nombre: "Torta Matilda", imagen: "../assets/matilda-min.jpg", precio:950, stock:4},
    {id: "t-rogel", tipo: "torta", nombre: "Rogel", imagen: "../assets/rogel.jpg", precio:550, stock:50},
    {id: "box1", tipo: "box", nombre: "Box 1", imagen: "../assets/box1.jpg", precio: 670, stock: 45},
    {id: "box2", tipo: "box", nombre: "Box 2", imagen: "../assets/box2.jpg", precio: 670, stock: 45},
    {id: "box3", tipo: "box", nombre: "Box 3", imagen: "../assets/box3.jpg", precio: 670, stock: 45},
    {id: "box4", tipo: "box", nombre: "Box 4", imagen: "../assets/box4.jpg", precio: 670, stock: 45},
    {id: "box5", tipo: "box", nombre: "Box 5", imagen: "../assets/box5.jpg", precio: 670, stock: 45},
    {id: "box6", tipo: "box", nombre: "Box 6", imagen: "../assets/box6.jpg", precio: 670, stock: 45},
    {id: "box7", tipo: "box", nombre: "Box 7", imagen: "../assets/box7.jpg", precio: 670, stock: 45},
    {id: "var1", tipo: "variado", nombre: "Alfajores de chocolate", imagen: "../assets/alfajores.jpg", precio: 450, stock: 150},
    {id: "var2", tipo: "variado", nombre: "Galletitas personalizadas", imagen: "../assets/galles1.jpg", precio: 300, stock: 200},
    {id: "var3", tipo: "variado", nombre: "Galletitas personalizadas", imagen: "../assets/galles2.jpg", precio: 300, stock: 200},
    {id: "var2", tipo: "variado", nombre: "Galletitas personalizadas", imagen: "../assets/galles3.jpg", precio: 300, stock: 200},
    {id: "var3", tipo: "variado", nombre: "Galletitas personalizadas", imagen: "../assets/gallespers2.jpg", precio: 300, stock: 200},
    {id: "var6", tipo: "variado", nombre: "Alfajores de maicena", imagen: "../assets/maicena1.jpg", precio: 400, stock: 90},
    {id: "var7", tipo: "variado", nombre: "Alfajores de maicena", imagen: "../assets/maicena2.jpg", precio: 800, stock: 30},
    {id: "var8", tipo: "variado", nombre: "Muffins personalizados", imagen: "../assets/muffin.jpg", precio: 200, stock: 400},
    {id: "var9", tipo: "variado", nombre: "Muffins personalizados", imagen: "../assets/muffin2.jpg", precio: 320, stock: 200}
];

let precio = document.getElementsByClassName("precio");

let cards = document.getElementsByClassName("card");

//card productos

let listaCards = [];

let contenedorProductos = document.getElementsByClassName("producto__container");
let productoHTML = document.getElementsByClassName("producto");
let contenedorPrecio = document.getElementsByClassName("precio__container");

for (const producto of productos) { 
    let cardProducto = document.createElement("div");
    cardProducto.setAttribute("class", `col-12 col-md-6 col-lg-3 ${producto.tipo}`);
    cardProducto.setAttribute("id", `${producto.id}`);

    cardProducto.innerHTML = `  
    <div class="product-grid mx-auto" >
        <div class="product-image">
            <a href="#" class="image">
                <img src="${producto.imagen}">
            </a>
            <a href="" class="add-to-cart">Agregar al carrito</a>
        </div>
            <div class="product-content">
                <h3 class="title"><a href="#">${producto.nombre}</a></h3>
                <div class="price">${producto.precio} $ la unidad </div>
            </div>
        
    </div>`

    listaCards.push(cardProducto)

    for (const card of listaCards) {    
        contenedorProductos[0].appendChild(card);

    }
}


//Filtros por secciones

let botonTodos = document.getElementById("todos");
let botonTortas = document.getElementById("tortas");
let botonBoxs = document.getElementById("boxs");
let botonVariados = document.getElementById("variados");
let contenedorPrincipal = document.getElementById("contenedor-principal");

let tortas = document.getElementsByClassName("torta");
let boxs = document.getElementsByClassName("box");
let variados = document.getElementsByClassName("variado");


//eventos

botonTodos.addEventListener("click", mostrarTodos);
botonTortas.addEventListener("click", mostrarTortas);
botonBoxs.addEventListener("click", mostrarBoxs);
botonVariados.addEventListener("click", mostrarVariados);

function mostrarTodos() {   
    for (const torta of tortas) {
        torta.classList.remove("d-none");
    }
    for (const box of boxs) {   
        box.classList.remove("d-none");
    }
    for (const variado of variados) {   
        variado.classList.remove("d-none");
    }
}

function mostrarTortas() {   
    for (const torta of tortas) {
        torta.classList.remove("d-none");
    }
    for (const box of boxs) {   
        box.classList.add("d-none");
    }
    for (const variado of variados) {   
        variado.classList.add("d-none");
    }
}

function mostrarBoxs() {   
    for (const torta of tortas) {
        torta.classList.add("d-none");
    }
    for (const box of boxs) {   
        box.classList.remove("d-none");
    }
    for (const variado of variados) {   
        variado.classList.add("d-none");
    }
}

function mostrarVariados() {
    for (const box of boxs) {
        box.classList.add("d-none");
    }
    for (const variado of variados) {
        variado.classList.remove("d-none");
    }
    for (const torta of tortas) {
        torta.classList.add("d-none");
    }
    
}

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

function validarFormulario(ev) {
    debugger
    // Validación campo Nombre
    var specialChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/;
    let divCampoNombre = document.getElementById("divCampoNombre");
    let divCampoEmail = document.getElementById("divCampoEmail");
    let divCampoAsunto = document.getElementById("divCampoAsunto");
    let divCampoMensaje = document.getElementById("divCampoMensaje");
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
        div.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;
        src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')"> ¡Envío exitoso! Nos comunicaremos con vos a la brevedad </h2></center>`;
        formulario.appendChild(div);
        ev.preventDefault();
        campoNombre.value = "";
        campoEmail.value = "";
        campoMensaje.value = "";
        campoAsunto.value = "";
    }

    function comprobarCampoNombre() {
        if (campoNombre.value != "") {
            if (isNaN(campoNombre.value)) {
                if (campoNombre.value.match(specialChars)) {
                    divNombre.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:25px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo no debe poseer caracteres especiales </h2></center>`;
                    divCampoNombre.appendChild(divNombre);
                    ev.preventDefault();
                    return false;
                }
            } else {
                divNombre.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:25px;
                src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Nombre no debe poseer números</h2></center>`;
                divCampoNombre.appendChild(divNombre);
                ev.preventDefault();
                return false;
            }
        } else {
            divNombre.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:25px;
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
                divEmail.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:25px;
                    src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Email no es válido </h2></center>`;
                divCampoEmail.appendChild(divEmail);
                ev.preventDefault();
                return false;

            }

        } else {
            divEmail.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:25px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Email no debe quedar vacío </h2></center>`;
            divCampoEmail.appendChild(divEmail);
            ev.preventDefault();
            return false;
        }
        return true;
    }

    function comprobarCampoAsunto() {
        if (campoAsunto.value == "") {
            divAsunto.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:25px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Asunto no debe quedar vacío </h2></center>`;
            divCampoAsunto.appendChild(divAsunto);
            ev.preventDefault();
            return false;
        }
        return true;
    }

    function comprobarCampoMensaje() {
        if (campoMensaje.value == "") {
            divMensaje.innerHTML = `<center><h2 style="font-family: SUNN-line-regular;color: red;font-size:25px;
            src: url('../assets/fonts/menu/SUNN-Line-Regular.woff')">* El campo Mensaje no debe quedar vacío </h2></center>`;
            divCampoMensaje.appendChild(divMensaje);
            ev.preventDefault();
            return false;
        }

        return true;
    }

}




// USAMOS EL JSON 

let enviar = document.getElementById("enviar");

enviar.addEventListener("click", guardarDatos);

class Datos {
    constructor(nombre, email, asunto, mensaje) {
        this.nombre = nombre;
        this.email = email;
        this.asunto = asunto;
        this.mensaje = mensaje;
    }
}

function guardarDatos() {
    const persona1 = new Datos(campoNombre.value, campoEmail.value, campoAsunto.value, campoMensaje.value);
    localStorage.setItem("Datos Enviados", JSON.stringify(persona1));
}