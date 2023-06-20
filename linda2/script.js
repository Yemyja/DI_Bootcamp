// Obtener referencias a los elementos del DOM
const audioForm = document.getElementById('audio-form');
const audioList = document.getElementById('audio-list');

// Manejar el envío del formulario para agregar un nuevo audio
audioForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores del formulario
  const theme = document.getElementById('theme').value;
  const audioName = document.getElementById('audio-name').value;
  const audioFile = document.getElementById('audio-file').files[0];

  // Crear un elemento de lista para mostrar el nuevo audio
  const listItem = document.createElement('li');
  const audioLink = document.createElement('a');
  audioLink.href = URL.createObjectURL(audioFile);
  audioLink.textContent = `${theme} - ${audioName}`;

  // Agregar el elemento de lista al DOM
  listItem.appendChild(audioLink);
  audioList.appendChild(listItem);

  // Limpiar el formulario
  audioForm.reset();
});
// ... Código previo ...

// Importar la biblioteca axios para realizar solicitudes HTTP
import axios from 'axios';

// Manejar el envío del formulario para agregar un nuevo audio
audioForm.addEventListener('submit', async (event) => {
  event.preventDefault(); // Evitar que el formulario se envíe automáticamente

  // Obtener los valores del formulario
  const theme = document.getElementById('theme').value;
  const audioName = document.getElementById('audio-name').value;
  const audioFile = document.getElementById('audio-file').files[0];

  // Crear un objeto FormData para enviar los datos del formulario y el archivo
  const formData = new FormData();
  formData.append('theme', theme);
  formData.append('audioName', audioName);
  formData.append('audioFile', audioFile);

  try {
    // Enviar la solicitud POST para guardar el audio en la base de datos
    const response = await axios.post('/api/audios', formData);

    // Comprobar si la solicitud fue exitosa
    if (response.status === 200) {
      // Crear un elemento de lista para mostrar el nuevo audio
      const listItem = document.createElement('li');
      const audioLink = document.createElement('a');
      audioLink.href = URL.createObjectURL(audioFile);
      audioLink.textContent = `${theme} - ${audioName}`;

      // Agregar el elemento de lista al DOM
      listItem.appendChild(audioLink);
      audioList.appendChild(listItem);

      // Limpiar el formulario
      audioForm.reset();
    } else {
        console.error('Error al guardar el audio');
    }
  } catch (error) {
    console.error(error);
  }
});

