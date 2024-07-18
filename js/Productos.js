function agregarProducto(id, nombre, precio) {
    
    var tbody = document.getElementById("tbody");

    var fila = document.createElement("tr");

    fila.innerHTML = `
        <td>${nombre}</td>
        <td>1</td>
        <td>${precio}</td>
        <td>${precio}</td>
        <td>
            <button class="btn btn-danger btn-sm" onclick="eliminarProducto(this)">Eliminar</button>
        </td>`;

    tbody.appendChild(fila);

    actualizarTotal(parseFloat(precio));
}


function actualizarTotal(precioProducto) {

    var totalElemento = document.getElementById("total");

    var total = parseFloat(totalElemento.textContent);

    total += precioProducto;

    totalElemento.textContent = total.toFixed(2);
}

function eliminarProducto(boton) {
   
    var fila = boton.closest("tr");

    var precio = parseFloat(fila.children[2].textContent);

    actualizarTotal(-precio);

    fila.remove();
}
