class Producto {
    constructor(nombre, precio) {
        this.id = Producto.getNextId();
        this.nombre = nombre;
        this.precio = precio;
    }

    static getNextId() {
        if (!Producto.nextId) {
            Producto.nextId = 1;
        } else {
            Producto.nextId++;
        }
        return Producto.nextId;
    }

    getNombre() {
        return this.nombre.charAt(0).toUpperCase() + this.nombre.slice(1).toLowerCase();
    }

    getPrecio() {
        return this.precio.toLocaleString("es-ES", { style: "currency", currency: "EUR" });
    }
}

let productos = [];
const lista = document.getElementById("lista");
const mensajeListaVacia = document.getElementById("mensajeListaVacia");

const guardar = document.getElementById("guardar");
guardar.addEventListener("click", () => {
    const nombre = document.getElementById("nombre").value;
    const precio = parseFloat(document.getElementById("precio").value);
    if (nombre && !isNaN(precio)) {
        const producto = new Producto(nombre, precio);
        productos.push(producto);
        localStorage.setItem("productos", JSON.stringify(productos));
        mostrarLista();
    }
});

const restablecer = document.getElementById("reset");
restablecer.addEventListener("click", () => {
    document.getElementById("nombre").value = "";
    document.getElementById("precio").value = "";
});

const borrarLista = document.getElementById("borrarLista");
borrarLista.addEventListener("click", () => {
    while (lista.firstChild) {
        lista.removeChild(lista.firstChild);
    }
    mensajeListaVacia.style.display = "block";
});
const eliminarAlmacenamiento = document.getElementById("eliminarAlmacenamiento");
eliminarAlmacenamiento.addEventListener("click", () => {
    if (confirm("¿Estás seguro de que quieres eliminar la lista de productos del almacenamiento local?")) {
        localStorage.removeItem("productos");
        productos = [];
        while (lista.firstChild) {
            lista.removeChild(lista.firstChild);
        }
        mensajeListaVacia.style.display = "block";
    }
});

function mostrarLista() {
    mensajeListaVacia.style.display = "none";
    productos = JSON.parse(localStorage.getItem("productos")) || [];
    for (const producto of productos) {
        const li = document.createElement("li");
        li.innerHTML = `${producto.getNombre()} - ${producto.getPrecio()}`;
        lista.appendChild(li);
    }
}

mostrarLista();