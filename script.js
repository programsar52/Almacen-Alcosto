let total = 0;

function agregar(nombre, precio) {
    const carrito = document.getElementById("carrito");
    const item = document.createElement("li");

    item.textContent = `${nombre} - $${precio}`;
    carrito.appendChild(item);

    total += precio;
    document.getElementById("total").textContent = total;
}
