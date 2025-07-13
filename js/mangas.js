let productos = [
    {
        "id": 1,
        "tipo": "Manga",
        "titulo": "Dragon Ball",
        "precio": 23000.00,
        "moneda": "ARG",
        "imagen": "img/GokuVsVegata.png"
    },
    {
        "id": 2,
        "tipo": "Manga",
        "titulo": "Sailor Moon",
        "precio": 15000.00,
        "moneda": "ARG",
        "imagen": "img/SailorMoon.png"
    },
    {
        "id": 3,
        "tipo": "Manga",
        "titulo": "Naruto",
        "precio": 25000.00,
        "moneda": "ARG",
        "imagen": "img/Naruto.png"
    },
    {
        "id": 4,
        "tipo": "Manga",
        "titulo": "One Piece",
        "precio": 35000.00,
        "moneda": "ARG",
        "imagen": "img/Monkey D. Luffy en acción.png"
    },
    {
        "id": 5,
        "tipo": "Manga",
        "titulo": "Detective Conan",
        "precio": 45000.00,
        "moneda": "ARG",
        "imagen": "img/Colección de personajes manga.png"
    },
    {
        "id": 6,
        "tipo": "Manga",
        "titulo": "Blue Lock",
        "precio": 55000.00,
        "moneda": "ARG",
        "imagen": "img/Colección de personajes manga.png"
    },
    {
        "id": 7,
        "tipo": "Manga",
        "titulo": "Jujutsu Kaisen",
        "precio": 65000.00,
        "moneda": "ARG",
        "imagen": "img/Colección de personajes manga.png"
    },
    {
        "id": 8,
        "tipo": "Manga",
        "titulo": "Attack on Titan",
        "precio": 75000.00,
        "moneda": "ARG",
        "imagen": "img/Colección de personajes manga.png"
    }
];

/*---------------------Mostrar carrucel productos-------------------*/

document.addEventListener("DOMContentLoaded", () => {
  let mangasConteiner = document.getElementById('manga');
  let contenedorManga = document.createElement('div');
  contenedorManga.classList.add('manga-card-conteiner');

  productos.forEach(manga => {
    contenedorManga.innerHTML += `
      <div class="card">
        <form id="form_manga${manga.id}">
            <div class="card_info"> 
                <img src="${manga.imagen}" alt="${manga.titulo}" width="250" height="200">   
                <h2 name="titulo">${manga.titulo}</h2>
                <p>Precio: <strong>${manga.precio} ${manga.moneda}</strong></p>
            </div>
            <div class="card_btn"> 
                <button type="submit" class="btn-agregar" data-id="${manga.id}" onclick="agregarAlCarritoDesdeBoton(1)">Agregar al carrito</button>
            </div>
        </form>
      </div>
    `;
  });

  mangasConteiner.append(contenedorManga);
});

