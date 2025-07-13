let seccionProducto = document.getElementById('manga');
let contenedorProductos = document.createElement('div');
contenedorProductos.classList.add('manga-card-conteiner');

async function cargarJSON() {
  try {
    //a response le asigno lo que me devuelve la consulta a la API que pide todos los productos
    const response = await fetch('js/productos.json');
    //a data le asigno todos los productos en formato .json
    const data = await response.json();
    //levanto el json, armando estructura de html
    data.forEach(producto => {
      contenedorProductos.innerHTML += `
        <div class="card">
            <form id="form_manga${producto.id}">
                <div class="card_info"> 
                    <img src="${producto.imagen}" alt="${producto.titulo}" width="250" height="200">   
                    <h2 name="titulo">${producto.titulo}</h2>
                    <p>Precio: <strong>${producto.precio} ${producto.moneda}</strong></p>
                </div>
                <div class="card_btn"> 
                    <button type="submit" class="btn-agregar" data-id="${producto.id}" data-titulo="${producto.titulo}" data-img="${producto.imagen}" onclick="agregarCarrito(${producto.id}, '${producto.titulo}', '${producto.imagen}')">Agregar al carrito</button>
                </div>
            </form>
        </div>
    `;
      seccionProducto.append(contenedorProductos);
    });
    } catch (error) {
      console.error("Error al obtener productos:", error);
    }
}


document.addEventListener('DOMContentLoaded', cargarJSON);



//función que agrea al carrito
//id: id del objeto de fakestore
//favId: id único que sirve de key para interactuar con LocalStorage
function agregarCarrito(productoId, titulo, imagen) {
   console.log("Producto" + productoId );
    console.log("Producto" + titulo );

  const prodToAdd = {
    "id": productoId,
    "favId": Date.now(),
    "titulo": titulo,
    "img": imagen
  }

  //LocalStorage
  if (typeof(Storage) !== "undefined") {
    localStorage.setItem(prodToAdd.favId, JSON.stringify(prodToAdd));
    location.reload();
  }
  return false;
}

//Creo un div contenedor para los favoritos y le agrego una clase 
const contenedorFavoritos = document.createElement('div');
contenedorFavoritos.classList.add('manga-card-conteiners');

let seccionFavs = document.getElementById('seccion_favs');
let totalFavoritos = document.getElementById('total_favoritos');


function loadFavourites() {
  try {

    if(localStorage.length > 0) {
      seccionFavs.style.display = "block";
    //   totalFavoritos.innerText = localStorage.length;
    } 
    Object.keys(localStorage).forEach(function(key) {
      let item = JSON.parse(localStorage.getItem(key));
        console.log(item.id);
        console.log(typeof item.itemId);

      contenedorFavoritos.innerHTML += `
          <div class="card">
            <div>
              <h4>Titulo: ${item.titulo} </h4>
              <h5>Producto ID: ${item.id} </h5>
              <img src="${item.img}" alt="${item.titulo}" width="150" height="150">   
            <div>
                <button onclick="eliminar(${item.favId})" class="button" value="Eliminar">Eliminar</button>
              </div>
            </div>
          </div>
        `;
    });
    seccionFavs.appendChild(contenedorFavoritos);
    } catch (error) {
    console.error("Error al obtener los favoritos:", error);
  }
}

document.addEventListener("DOMContentLoaded", loadFavourites);

function eliminar(id) {
  let idx = id.toString();
  console.log(idx);
  localStorage.removeItem(idx);
  actualizarPagina();
}

const btnDeleteAll = document.getElementById('delete_all');
btnDeleteAll.addEventListener('click', eliminarDeseados);

async function eliminarDeseados() {
  try {
    localStorage.clear();
    actualizarPagina();
  } catch(error) {
    console.log(error);
  }
}

function actualizarPagina() {
  location.reload();
}