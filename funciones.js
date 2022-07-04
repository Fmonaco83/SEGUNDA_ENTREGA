let contenedor = document.getElementById("container");
let contenedor_carrito = document.getElementById("container_carrito");
let carrito = []; 

cargarCarrito();
mostrarProdcuto();
mostrarCarrito();


//Carga productos guardados en el LocalStorage
function cargarCarrito() {
  if (localStorage.getItem("StorageCarrito") !== null) {
    carrito = JSON.parse(localStorage.getItem("StorageCarrito"));
    return;
  } else {
    localStorage.setItem("StorageCarrito", JSON.stringify(carrito));
    return;
  }
}

//Carga Productos
function mostrarProdcuto() {
  producto.forEach((producto) => {
    contenedor.innerHTML += `
    <div class="card" style="width: 18rem;">
    <img src=${producto.foto} class="card-img-top" alt="...">
    <div class="card-body">
      <h4 class="card-title">${producto.nombre}</h4>
      <p class="card-text">Descripcion: ${producto.descripcion}</p>
      <p class="card-text">Precio: ${producto.precio}</p>
      <button onClick="usuarioCarrito(${producto.id})" class="btn btn-info">Comprar</button>
    </div>
  </div>
    `; 
  });
}


//Muestra productos en el carrito
function mostrarCarrito () {
  carrito.forEach((producto) => {
    contenedor_carrito.innerHTML += `
    <div class="card" style="width: 18rem; ">
    <img src=${producto.foto} class="card-img-top" alt="...">
    <div class="card-body">
    <h4 class="card-title"> ${producto.nombre}</h4>
    <p class="card-text">Descripcion: ${producto.descripcion}</p>
    <p class="card-text">Precio: ${producto.precio}</p>
    <button onClick="quitarCarrito(${producto.id})" class="btn btn-info">ELIMINAR</button>
    </div>
    </div>`; 
  });
}


//Carga nuevo producto en el Array
function usuarioCarrito(identificador) {
  let indice = identificador - 1;
  let objeto_seleccionado = {};
  objeto_seleccionado = producto[indice];
  {
	  carrito.push(objeto_seleccionado);
	  localStorage.setItem("StorageCarrito", JSON.stringify(carrito));
    location.reload()
  } 
}

//Quita Usuario del Array
function quitarCarrito(id) {
  let carrito_filtrado = carrito.filter((elemento) => elemento.id != id);
  carrito = carrito_filtrado;
  localStorage.setItem("StorageCarrito", JSON.stringify(carrito));
  console.log(carrito_filtrado);
  location.reload();
}