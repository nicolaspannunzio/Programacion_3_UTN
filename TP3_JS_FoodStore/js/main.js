// 1. Seleccionamos los contenedores del HTML usando los IDs que preparamos en el HTML
const contenedorCategorias = document.getElementById("lista-categorias");
const contenedorProductos = document.getElementById("contenedor-productos");

// --- Renderizado de Categorías --- 
function cargarCategorias() {
    // Recorremos el array de categorías (que viene de data.js)
    categorias.forEach(categoria => {
        // Por cada iteración, creamos un nodo <li> 
        const li = document.createElement("li");
        
        // Le inyectamos el enlace <a> usando Template Strings 
        li.innerHTML = `<a href="#">${categoria}</a>`;
        
        // Inyectamos el <li> completo dentro del <ul> en el HTML 
        contenedorCategorias.appendChild(li);
    });
}

// --- Renderizado de Productos --- 
function cargarProductos() {
    // Recorremos el array de productos 
    productos.forEach(producto => {
        // Generamos un nodo <article> por cada producto 
        const article = document.createElement("article");
        
        // Usamos Template Strings para maquetar el contenido interno 
        // Accedemos a las propiedades del objeto con producto.propiedad 
        // Agregamos el alert en el botón para mostrar el nombre del producto 
        article.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p><strong>$${producto.precio}</strong></p>
            <button type="button" onclick="alert('Agregaste el producto: ${producto.nombre}')">Agregar</button>
        `;
        
        // Inyectamos el <article> completo dentro del <section> en el HTML
        contenedorProductos.appendChild(article);
    });
}

// 3. Ejecutamos las funciones para que pinten los datos en pantalla al cargar la página
cargarCategorias();
cargarProductos();