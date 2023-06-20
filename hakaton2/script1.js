
var recetas = [];
var ingredientes = [];
var costoIngredientes = [];

function agregarIngrediente() {
  var ingredienteInput = document.createElement("div");
  ingredienteInput.classList.add("ingrediente-inputs");
  ingredienteInput.innerHTML = `
    <input type="text" class="ingrediente" placeholder="Ingrediente">
    <input type="text" class="cantidad" placeholder="Cantidad">
    <select>
      <option value="gramos">Gramos</option>
      <option value="litros">Litros</option>
      <option value="cucharadas">Cucharadas</option>
      <option value="tazas">Tazas</option>
    </select>
  `;
  document.getElementById("ingredientes-container").appendChild(ingredienteInput);
}

function guardarReceta() {
  var nombreReceta = document.getElementById("nombre-receta").value;
  var ingredientesReceta = [];

  var ingredientesInputs = document.getElementsByClassName("ingrediente-inputs");
  for (var i = 0; i < ingredientesInputs.length; i++) {
    var ingredienteInput = ingredientesInputs[i].getElementsByClassName("ingrediente")[0];
    var cantidadInput = ingredientesInputs[i].getElementsByClassName("cantidad")[0];
    var medidaSelect = ingredientesInputs[i].getElementsByTagName("select")[0];

    var ingrediente = ingredienteInput.value;
    var cantidad = cantidadInput.value;
    var medida = medidaSelect.value;

    ingredientesReceta.push({
      ingrediente: ingrediente,
      cantidad: cantidad,
      medida: medida
    });
  }

  recetas.push({
    nombre: nombreReceta,
    ingredientes: ingredientesReceta
  });
   // Guardar las recetas en el almacenamiento local
   localStorage.setItem("recetas", JSON.stringify(recetas));
  limpiarFormulario();
  mostrarRecetasGuardadas();
  mostrarTablaIngredientes();

}

function limpiarFormulario() {
  document.getElementById("nombre-receta").value = "";
  var ingredientesInputs = document.getElementsByClassName("ingrediente-inputs");
  while (ingredientesInputs[0]) {
    ingredientesInputs[0].parentNode.removeChild(ingredientesInputs[0]);
  }
}

function mostrarRecetasGuardadas() {
  var recetasContainer = document.getElementById("recetas-container");

  // Limpiar el contenedor antes de mostrar las nuevas recetas
  // recetasContainer.innerHTML = ""; checar si es necesario

  for (var i = 0; i < recetas.length; i++) {
    var receta = recetas[i];
    var recetaElement = document.createElement("div");
    recetaElement.classList.add("receta");

    var nombreRecetaElement = document.createElement("h2");
    nombreRecetaElement.textContent = receta.nombre;
    var ingredientesRecetaElement = document.createElement("ul");
    for (var j = 0; j < receta.ingredientes.length; j++) {
      var ingrediente = receta.ingredientes[j];
      var ingredienteElement = document.createElement("li");
      ingredienteElement.textContent = ingrediente.cantidad + " " + ingrediente.medida + " de " + ingrediente.ingrediente;
      ingredientesRecetaElement.appendChild(ingredienteElement);
    }

    recetaElement.appendChild(nombreRecetaElement);
    recetaElement.appendChild(ingredientesRecetaElement);
    recetasContainer.appendChild(recetaElement);
  }

  mostrarTotalCostos();
}

function mostrarTotalCostos() {
  var totalCostosElement = document.getElementById("total-costos");
  var totalCostoRecetas = 0;

  for (var i = 0; i < recetas.length; i++) {
    var receta = recetas[i];
    var costoReceta = calcularCostoReceta(receta);
    totalCostoRecetas += costoReceta;
  }

  totalCostosElement.textContent = "Costo total de las recetas: $" + totalCostoRecetas.toFixed(2);
}

function calcularCostoReceta(receta) {
  var costoReceta = 0;

  for (var i = 0; i < receta.ingredientes.length; i++) {
    var ingrediente = receta.ingredientes[i].ingrediente;
    var cantidad = receta.ingredientes[i].cantidad;
    var medida = receta.ingredientes[i].medida;

    var costoIngrediente = obtenerCostoIngrediente(ingrediente);
    var costoPorCantidad = costoIngrediente / cantidad;
    costoReceta += costoPorCantidad;
  }

  return costoReceta;
}

function obtenerCostoIngrediente(ingrediente) {
  for (var i = 0; i < costoIngredientes.length; i++) {
    if (costoIngredientes[i].ingrediente === ingrediente) {
      return parseFloat(costoIngredientes[i].costo);
    }
  }
  return 0;
}

window.addEventListener("load", function () {
    recetas = JSON.parse(localStorage.getItem("recetas")) || [];
    costoIngredientes = JSON.parse(localStorage.getItem("costoIngredientes")) || [];
    localStorage.setItem("costoIngredientes", JSON.stringify(costoIngredientes));

    mostrarRecetasGuardadas();
    mostrarTablaIngredientes();
  });

  function mostrarTablaIngredientes() {
    var tablaIngredientes = document.getElementById("tabla-ingredientes");
  
    // Limpiar la tabla antes de mostrar los nuevos ingredientes
    tablaIngredientes.innerHTML = "";
  
    // for (var i = 0; i < costoIngredientes.length; i++) {
    //     var ingrediente = ingredienteInput.querySelector(".ingrediente").value;
    //     var cantidad = ingredienteInput.querySelector(".cantidad").value;
    //     var medida = ingredienteInput.querySelector("select").value;
    //     var costo = ingredienteInput.querySelector("costo").value
    for (var i = 0; i < costoIngredientes.length; i++) {
      var ingrediente = costoIngredientes[i].ingrediente;
      var cantidad = costoIngredientes[i].cantidad;
      var medida = costoIngredientes[i].medida;
      var costo = costoIngredientes[i].costo;

      var fila = document.createElement("tr");
      var columnaIngrediente = document.createElement("td");
      columnaIngrediente.textContent = ingrediente;
      var columnaCantidad = document.createElement("td");
      columnaCantidad.textContent = cantidad;
      var columnaMedida = document.createElement("td");
      columnaMedida.textContent = medida;
      var columnaCosto = document.createElement("td");
      columnaCosto.textContent = costo;
  
      fila.appendChild(columnaIngrediente);
      fila.appendChild(columnaCantidad);
      fila.appendChild(columnaMedida);
      fila.appendChild(columnaCosto);
  
      tablaIngredientes.appendChild(fila);
    }
  }


// function agregarCostoIngrediente() {
//   var ingrediente = document.getElementById("ingrediente").value;
//   var cantidad = document.getElementById("cantidad").value;
//   var medida = document.getElementById("medida").value;
//   var costo = document.getElementById("costo").value;

//   costoIngredientes.push({
//     ingrediente: ingrediente,
//     cantidad: cantidad,
//     medida: medida,
//     costo: costo
//   });
//   // Guardar el costo de ingredientes en el almacenamiento local
//   localStorage.setItem("costoIngredientes", JSON.stringify(costoIngredientes));

//   mostrarTablaIngredientes();
// }

// window.addEventListener("load", function () {
  // Resto del código...
  function agregarCostoIngrediente() {
    var ingredienteInput = document.getElementById("ingrediente");
    var cantidadInput = document.getElementById("cantidad");
    var medidaSelect = document.getElementById("medida");
    var costoInput = document.getElementById("costo");
  
    var ingrediente = ingredienteInput.value;
    var cantidad = cantidadInput.value;
    var medida = medidaSelect.value;
    var costo = costoInput.value;
  
    costoIngredientes.push({
      ingrediente: ingrediente,
      cantidad: cantidad,
      medida: medida,
      costo: costo
    });
  
    // Guardar el costo de ingredientes en el almacenamiento local
    localStorage.setItem("costoIngredientes", JSON.stringify(costoIngredientes));
  
    mostrarTablaIngredientes();
  
  
  mostrarRecetasGuardadas();
//   mostrarTablaIngredientes();
};

  
  // function agregarCostoIngrediente() {
   
  
  //   costoIngredientes.push({
  //     ingrediente: ingrediente,
  //     cantidad: cantidad,
  //     medida: medida,
  //     costo: costo
  //   });
  
  //   // Guardar el costo de ingredientes en el almacenamiento local
  //   localStorage.setItem("costoIngredientes", JSON.stringify(costoIngredientes));
  
  //   mostrarTablaIngredientes();
  // }
  

  window.addEventListener("load", function () {
    recetas = JSON.parse(localStorage.getItem("recetas")) || [];
    costoIngredientes = JSON.parse(localStorage.getItem("costoIngredientes")) || [];
    localStorage.setItem("costoIngredientes", JSON.stringify(costoIngredientes));
  
    mostrarRecetasGuardadas();
    mostrarTablaIngredientes();
  });