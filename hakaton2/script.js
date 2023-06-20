var recetas = [];
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
    var ingredienteInput = ingredientesInputs[i];
    var ingrediente = ingredienteInput.getElementsByClassName("ingrediente")[0].value;
    var cantidad = ingredienteInput.getElementsByClassName("cantidad")[0].value;
    var medida = ingredienteInput.getElementsByTagName("select")[0].value;

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

  recetasContainer.innerHTML = "";

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

  totalCostosElement.textContent = "Total de costos: $" + totalCostoRecetas.toFixed(2);
}

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
      var ingredienteInput = ingredientesInputs[i];
      var ingrediente = ingredienteInput.getElementsByClassName("ingrediente")[0].value;
      var cantidad = ingredienteInput.getElementsByClassName("cantidad")[0].value;
      var medida = ingredienteInput.getElementsByTagName("select")[0].value;
  
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
  
    recetasContainer.innerHTML = "";
  
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
     
    }
  
      function calcularCostoReceta(receta) {
        var costoReceta = 0;
      
        for (var i = 0; i < receta.ingredientes.length; i++) {
          var ingrediente = receta.ingredientes[i];
          var costoIngrediente = obtenerCostoIngrediente(ingrediente.ingrediente);
          var cantidad = parseFloat(ingrediente.cantidad);
          costoReceta += costoIngrediente * cantidad;
        }
      
        return costoReceta;
      }
      
      function obtenerCostoIngrediente(nombreIngrediente) {
        // Aquí debes implementar la lógica para obtener el costo del ingrediente.
        // Puedes utilizar una base de datos, una API u otro método para obtener esta información.
        // Por simplicidad, asumiremos que el costo de todos los ingredientes es de $1.
      
        return 1;
      }
    }

    function mostrarTotalCostos() {
        var totalCostosElement = document.getElementById("total-costos");
        var totalCostoRecetas = 0;
      
        for (var i = 0; i < recetas.length; i++) {
          var receta = recetas[i];
          var costoReceta = calcularCostoReceta(receta);
          totalCostoRecetas += costoReceta;
        }
      
        totalCostosElement.textContent = "Total Costos: $" + totalCostoRecetas.toFixed(2);
      }
      
      // Función calcularCostoReceta() y obtenerCostoIngrediente() aquí
      
      // Resto del código...
      
      // Variables globales
var recetas = [];

// Función para calcular el costo de una receta
function calcularCostoReceta(receta) {
  var costoReceta = 0;
  
  for (var i = 0; i < receta.ingredientes.length; i++) {
    var ingrediente = receta.ingredientes[i];
    var costoIngrediente = obtenerCostoIngrediente(ingrediente.ingrediente);
    
    if (costoIngrediente !== null) {
      var cantidad = parseFloat(ingrediente.cantidad);
      costoReceta += cantidad * costoIngrediente;
    }
  }
  
  return costoReceta;
}

// Función para obtener el costo de un ingrediente por su nombre
function obtenerCostoIngrediente(nombreIngrediente) {
  // Lógica para obtener el costo del ingrediente
  // ...

  // Retorna el costo o null si no se encuentra el ingrediente
}

// Resto del código...

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
    var ingredienteInput = ingredientesInputs[i];
    var ingrediente = ingredienteInput.getElementsByClassName("ingrediente")[0].value;
    var cantidad = ingredienteInput.getElementsByClassName("cantidad")[0].value;
    var medida = ingredienteInput.getElementsByTagName("select")[0].value;

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

  recetasContainer.innerHTML = "";

  for (var i = 0; i < recetas.length; i++) {
    var receta = recetas[i];
    var recetaElement = document.createElement("div");
    recetaElement.classList.add("receta");
    var nombreRecetaElement = document.createElement("h2");
    nombreRecetaElement.textContent = receta    .nombre;
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

  totalCostosElement.textContent = "Total de costos: $" + totalCostoRecetas.toFixed(2);
}

function inicializar() {
  var recetasGuardadas = localStorage.getItem("recetas");
  if (recetasGuardadas) {
    recetas = JSON.parse(recetasGuardadas);
  }

  mostrarRecetasGuardadas();
}

inicializar();

