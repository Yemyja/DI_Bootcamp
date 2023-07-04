import React from 'react'
const Contact = () => {
    const handleSubmit = (e) => {
      e.preventDefault();
      
    };
  return(
    <div>
    <h1> Contact Page </h1>
    
      <h1>Contacto</h1>
      <p>¡Nos encantaría saber de ti! Completa el formulario a continuación para ponerte en contacto con nosotros.</p>

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" required />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" rows="5" required></textarea>
        </div>
        <button type="submit">Enviar</button>
      </form>
    </div>
  );


};
export default Contact;
