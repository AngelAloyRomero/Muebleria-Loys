function agregarAlCarrito(producto, precio) {
    const listaCarrito = document.getElementById('lista-carrito');
    const totalCarrito = document.getElementById('total-carrito');

    const item = document.createElement('li');
    item.textContent = `${producto} - $${precio}`;
    listaCarrito.appendChild(item);

    const total = parseFloat(totalCarrito.textContent);
    totalCarrito.textContent = (total + precio).toFixed(2);
}

document.getElementById('contacto-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Formulario enviado');
});