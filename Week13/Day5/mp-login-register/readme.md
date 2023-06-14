
SCRIPT.JS

Este código es una implementación de un formulario de inicio de sesión en JavaScript que utiliza el objeto `fetch` para enviar una solicitud POST al servidor y procesar la respuesta.

Veamos paso a paso lo que hace el código:

1. `if (loginForm)` - Verifica si existe un elemento con el identificador `loginForm`. Si existe, continúa con el código dentro del bloque `if`. De lo contrario, no se ejecutará nada más.

2. `loginForm.addEventListener('submit', event => {` - Agrega un evento de escucha para el evento de envío del formulario. Cuando el formulario se envíe, se ejecutará la función de devolución de llamada pasada como segundo argumento.

3. `event.preventDefault();` - Detiene el comportamiento predeterminado de envío del formulario, evitando que se recargue la página.

4. `const formData = new FormData(loginForm);` - Crea un objeto `FormData` a partir del formulario `loginForm`. Esto captura los valores de los campos del formulario.

5. `const loginData = Object.fromEntries(formData.entries());` - Convierte el objeto `FormData` en un objeto JavaScript plano. Esto se hace utilizando el método `entries()` de `FormData` y luego el método `Object.fromEntries()`.

6. `fetch('/login', {` - Utiliza la función `fetch` para realizar una solicitud POST al punto final `/login` en el servidor.

7. `method: 'POST',` - Especifica que la solicitud es de tipo POST.

8. `'Content-Type': 'application/json'` - Configura el encabezado de la solicitud para indicar que los datos se envían en formato JSON.

9. `body: JSON.stringify(loginData)` - Convierte el objeto `loginData` en una cadena JSON y lo establece como el cuerpo de la solicitud.

10. `.then(response => response.json())` - Devuelve la respuesta del servidor como una promesa y la convierte en formato JSON.

11. `.then(data => {` - Captura la respuesta JSON y ejecuta una función de devolución de llamada con la respuesta.

12. `if (data.message) {` - Verifica si la respuesta contiene una propiedad llamada `message`. Si es así, muestra una alerta con el valor de `data.message`.

13. `} else if (data.error) {` - Si la respuesta no tiene una propiedad `message`, verifica si tiene una propiedad `error`. Si es así, muestra una alerta con el valor de `data.error`.

14. `} else {` - Si no se encuentra ninguna de las propiedades anteriores, muestra una alerta genérica indicando que el nombre de usuario no está registrado.

15. `.catch(error => {` - Captura cualquier error que ocurra durante la solicitud y muestra un mensaje de error en la consola.

En resumen, este código realiza una solicitud POST al servidor con los datos del formulario de inicio de sesión y maneja la respuesta del servidor, mostrando mensajes de alerta dependiendo de la respuesta recibida.


SERVER.JS

Este código utiliza Express, un framework de Node.js, para crear un servidor web que maneja diferentes rutas y responde a solicitudes HTTP. Veamos en detalle lo que hace cada parte:

1. `const express = require('express');` - Importa el módulo `express` para utilizarlo en el código. Este módulo proporciona una interfaz para crear servidores web en Node.js.

2. `const app = express();` - Crea una instancia de la aplicación Express. Esto representa nuestra aplicación web.

3. `const path = require('path');` - Importa el módulo `path`, que proporciona utilidades para trabajar con rutas de archivos y directorios.

4. `app.use(express.static(__dirname));` - Configura Express para servir archivos estáticos desde el directorio actual. Esto significa que los archivos HTML, CSS, imágenes u otros recursos en el directorio actual se pueden acceder a través del servidor.

5. `app.use(express.urlencoded({ extended: true }));` - Configura Express para analizar los datos del cuerpo de la solicitud con el formato `application/x-www-form-urlencoded`. Esto permite que los datos enviados en los formularios HTML se conviertan en un objeto JavaScript accesible en `req.body`.

6. `const registeredUsers = [];` - Crea una matriz vacía llamada `registeredUsers` para almacenar los usuarios registrados.

7. `app.get('/registerForm', (req, res) => { ... });` - Define una ruta `GET` para la URL `/registerForm`. Cuando se accede a esta ruta, se envía el archivo `registerForm.html` como respuesta al cliente.

8. `app.get('/loginForm', (req, res) => { ... });` - Define una ruta `GET` para la URL `/loginForm`. Cuando se accede a esta ruta, se envía el archivo `loginForm.html` como respuesta al cliente.

9. `app.post('/register', (req, res) => { ... });` - Define una ruta `POST` para la URL `/register`. Cuando se realiza una solicitud `POST` a esta ruta, se ejecuta la función de devolución de llamada. En esta función, se obtienen los datos del cuerpo de la solicitud `req.body` y se realiza la lógica de registro de usuarios.

10. `app.post('/login', (req, res) => { ... });` - Define una ruta `POST` para la URL `/login`. Cuando se realiza una solicitud `POST` a esta ruta, se ejecuta la función de devolución de llamada. En esta función, se obtienen los datos del cuerpo de la solicitud `req.body` y se realiza la lógica de inicio de sesión de usuarios.

11. `const PORT = 3000;` - Define el número de puerto en el que el servidor escuchará las solicitudes entrantes.

12. `app.listen(PORT, () => { ... });` - Inicia el servidor y hace que escuche en el puerto especificado. Cuando el servidor se inicia correctamente, se ejecuta la función de devolución de llamada, que muestra un mensaje en la consola.

En resumen, este código crea un servidor web utilizando Express que responde a diferentes rutas, sirve archivos estáticos, procesa datos de formularios de registro e inicio de sesión, y almacena los usuarios registrados en una matriz.