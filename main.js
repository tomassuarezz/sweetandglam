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
    {id: "var2", tipo: "variado", nombre: "Galletitas personalizadas 1", imagen: "../assets/galles1.jpg", precio: 300, stock: 200},
    {id: "var3", tipo: "variado", nombre: "Galletitas personalizadas 2", imagen: "../assets/galles2.jpg", precio: 300, stock: 200},
    {id: "var2", tipo: "variado", nombre: "Galletitas personalizadas 3", imagen: "../assets/galles3.jpg", precio: 300, stock: 200},
    {id: "var3", tipo: "variado", nombre: "Galletitas personalizadas 4", imagen: "../assets/gallespers2.jpg", precio: 300, stock: 200},
    {id: "var6", tipo: "variado", nombre: "Alfajores de maicena x6", imagen: "../assets/maicena1.jpg", precio: 400, stock: 90},
    {id: "var7", tipo: "variado", nombre: "Alfajores de maicena x15", imagen: "../assets/maicena2.jpg", precio: 800, stock: 30},
    {id: "var8", tipo: "variado", nombre: "Muffins personalizados x3", imagen: "../assets/muffin.jpg", precio: 200, stock: 400},
    {id: "var9", tipo: "variado", nombre: "Muffins personalizados x6", imagen: "../assets/muffin2.jpg", precio: 320, stock: 200}
];


let precio = $(".precio");

let cards = $(".card");

//card productos
let carrito = [];

let listaCards = [];

let contenedorProductos = $(".producto__container");
let productoHTML = $(".producto");
let contenedorPrecio = $(".precio__container");

// $.get("../productos.json", function(resultado, estado) {    
//     if (estado === "success") { 
//         for (const producto of resultado) { 
//             let cardProducto = document.createElement("div");
//             cardProducto.setAttribute("class", `col-12 col-md-6 col-lg-3 ${producto.tipo}`);
//             cardProducto.setAttribute("id", `${producto.id}`);
        
//             cardProducto.innerHTML = `  
//             <div class="product-grid mx-auto item" >
//                 <div class="product-image">
//                     <a href="#" class="image">
//                         <img src="${producto.imagen}">
//                     </a>
//                     <button class="add-to-cart addToCart" id="btn${producto.id}">Agregar al carrito</button>
//                 </div>
//                     <div class="product-content">
//                         <h3 class="title"><a href="#">${producto.nombre}</a></h3>
//                         <div class="price precio span">${producto.precio} $ la unidad </div>
//                     </div>
                
//             </div>`
        
//             listaCards.push(cardProducto)
        
//             for (const card of listaCards) {    
//                 contenedorProductos[0].appendChild(card);
        
//             }
        
//             // $(`#btn${producto.id}`).on('click', function() {
//             //     agregarAlCarrito(producto); //mando completo el objeto literal
//             // });
        
        
//         }

//     }
// })

for (const producto of productos) { 
    let cardProducto = document.createElement("div");
    cardProducto.setAttribute("class", `col-12 col-md-6 col-lg-3 ${producto.tipo}`);
    cardProducto.setAttribute("id", `${producto.id}`);

    cardProducto.innerHTML = `  
    <div class="product-grid mx-auto item" >
        <div class="product-image">
            <a href="#" class="image">
                <img src="${producto.imagen}" class="item-image">
            </a>
            <button class="add-to-cart addToCart" id="btn${producto.id}">Agregar al carrito</button>
        </div>
            <div class="product-content">
                <h3 class="title item-title"><a href="#">${producto.nombre}</a></h3>
                <div class="price item-price">${producto.precio}$ </div>
            </div>
        
    </div>`

    listaCards.push(cardProducto)

    for (const card of listaCards) {    
        contenedorProductos[0].appendChild(card);

    }

    // $(`#btn${producto.id}`).on('click', function() {
    //     agregarAlCarrito(producto); //mando completo el objeto literal
    // });


}

// function agregarAlCarrito(productoNuevo) {
//     carrito.push(productoNuevo);
//     console.log(carrito);
//     Swal.fire(
//         'Nuevo producto agregado al carrito',
//         productoNuevo.nombre,
//         'success'
//     );
//     localStorage.setItem("miCarrito", JSON.stringify(carrito));
// }


//Filtros por secciones

let botonTodos = document.getElementById("todos");
let botonTortas = document.getElementById("tortas");
let botonBoxs = document.getElementById("boxs");
let botonVariados = document.getElementById("variados");
let contenedorPrincipal = document.getElementById("contenedor-principal");

let tortas = $(".torta");
let boxs = $(".box");
let variados = $(".variado");


//eventos

// botonTodos.addEventListener("click", mostrarTodos);
// botonTortas.addEventListener("click", mostrarTortas);
// botonBoxs.addEventListener("click", mostrarBoxs);
// botonVariados.addEventListener("click", mostrarVariados);



// function mostrarTodos() {   
//     for (const torta of tortas) {
//         torta.classList.remove("d-none");
//     }
//     for (const box of boxs) {   
//         box.classList.remove("d-none");
//     }
//     for (const variado of variados) {   
//         variado.classList.remove("d-none");
//     }
// }

// function mostrarTortas() {   
//     for (const torta of tortas) {
//         torta.classList.remove("d-none");
//     }
//     for (const box of boxs) {   
//         box.classList.add("d-none");
//     }
//     for (const variado of variados) {   
//         variado.classList.add("d-none");
//     }
// }

// function mostrarBoxs() {   
//     for (const torta of tortas) {
//         torta.classList.add("d-none");
//     }
//     for (const box of boxs) {   
//         box.classList.remove("d-none");
//     }
//     for (const variado of variados) {   
//         variado.classList.add("d-none");
//     }
// }

// function mostrarVariados() {
//     for (const box of boxs) {
//         box.classList.add("d-none");
//     }
//     for (const variado of variados) {
//         variado.classList.remove("d-none");
//     }
//     for (const torta of tortas) {
//         torta.classList.add("d-none");
//     }
    
// }

$("#todos").click(function() {
    $(".torta").fadeIn();
    $(".box").fadeIn();
    $(".variado").fadeIn();
    
});

$("#tortas").click(function() {
    $(".box").fadeOut();
    $(".variado").fadeOut();
    $(".torta").fadeOut().fadeIn("slow");
    
});

$("#boxs").click(function() {
    $(".box").fadeOut().fadeIn("slow");
    $(".torta").fadeOut();
    $(".variado").fadeOut();
    
});

$("#variados").click(function() {
    $(".torta").fadeOut();
    $(".box").fadeOut();
    $(".variado").fadeOut().fadeIn("slow");
    
});

