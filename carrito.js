
const carrito = []


const carritoIndex = (productoId)=>{

    const contenedorCarrito = document.getElementById("contenedorCarrito")

    const renderProductosCarrito = ()=> {
        let producto  = productos.find( producto => producto.id == productoId )
        carrito.push(producto)
        console.log(carrito);

        producto.cantidad = 1

        let div = document.createElement("div")
        div.classList.add("productosEnCarrito")

        div.innerHTML = `<p>${producto.nombre}</p>
                            <p>Precio: ${producto.precio}</p> 
                            <p id="cantidad${producto.id}">Cantidad: ${producto.cantidad}</p>
                            `;
        contenedorCarrito.appendChild(div)

        localStorage.setItem("carrito", JSON.stringify(carrito));
    }

    renderProductosCarrito()
}


