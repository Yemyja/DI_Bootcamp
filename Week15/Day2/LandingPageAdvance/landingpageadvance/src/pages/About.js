import React from 'react'

const About = () => {
return (
    <>
    <h1> About Page </h1>
    <h2>Audios Hipnóticos</h2>
      <ul>
        <li>
          <h3>Título del audio 1</h3>
          <audio controls>
            <source src="ruta_del_audio_1.mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </li>
        <li>
          <h3>Título del audio 2</h3>
          <audio controls>
            <source src="ruta_del_audio_2.mp3" type="audio/mpeg" />
            Tu navegador no soporta el elemento de audio.
          </audio>
        </li>
        {/* Agrega más audios hipnóticos aquí */}
      </ul>

      <h2>Artículos Relacionados</h2>
      <ul>
        <li>
          <a href="enlace_al_articulo_1.html">Título del artículo 1</a>
          <p>Descripción breve del artículo 1.</p>
        </li>
        <li>
          <a href="enlace_al_articulo_2.html">Título del artículo 2</a>
          <p>Descripción breve del artículo 2.</p>
        </li>
        {/* Agrega más enlaces a artículos aquí */}
      </ul>
    
  
    </>
);
};
export default About;