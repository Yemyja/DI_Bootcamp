

// The box element is selected using document.getElementById('box').

   let box = document.getElementById('box');

// An event listener is added to the box element for the mousedown event.

box.addEventListener('mousedown', function(e) {
// When the mousedown event is triggered, the default behavior is prevented using e.preventDefault().
// Cuando se activa el evento mousedown, se evita el comportamiento predeterminado mediante e.preventDefault().
 e.preventDefault();

 // The shiftX and shiftY variables are set to the difference between the clientX/clientY
 // coordinates of the mouse click and the left/top coordinates of the box element relative to the viewport,
// respectively. This is done to ensure that the mouse cursor stays in the same position relative to the box
// element when it is dragged.
// Las variables shiftX y shiftY se establecen a la diferencia entre clientX/clientY
  // coordenadas del clic del mouse y las coordenadas izquierda/superior del elemento del cuadro en relación con la ventana gráfica,
// respectivamente. Esto se hace para garantizar que el cursor del mouse permanezca en la misma posición en relación con el cuadro.
// elemento cuando se arrastra.

  let shiftX = e.clientX - box.getBoundingClientRect().left;
 let shiftY = e.clientY - box.getBoundingClientRect().top;

// The moveAt() function is called with the pageX and pageY coordinates of the mouse click, which are passed
// to the function by the mousedown event.
// La función moveAt() se llama con las coordenadas pageX y pageY del clic del mouse, que se pasan
// a la función por el evento mousedown.


 moveAt(e.pageX, e.pageY);

// The moveAt() function sets the left and top CSS properties of the box element to the difference
// between the pageX/pageY coordinates of the mouse click and the shiftX/shiftY variables, respectively.
// It calls moveAt() with the pageX and pageY coordinates of the mouse pointer. This ensures that the box
// element follows the mouse cursor when it is dragged.
// This is done to move the box element to the position of the mouse cursor.

// La función moveAt() establece la diferencia entre las propiedades CSS izquierda y superior del elemento de caja
// entre las coordenadas pageX/pageY del clic del mouse y las variables shiftX/shiftY, respectivamente.
// Llama a moveAt() con las coordenadas pageX y pageY del puntero del mouse. Esto asegura que la caja
// el elemento sigue al cursor del ratón cuando se arrastra.
// Esto se hace para mover el elemento del cuadro a la posición del cursor del mouse.

 function moveAt(pageX, pageY) {
   box.style.left = pageX - shiftX + 'px';
   box.style.top = pageY - shiftY + 'px';
 }
// The onmouseup event is attached to the box element. When the box element is released, the mousemove
 // event listener is removed using document.removeEventListener('mousemove', onMouseMove), and the
// onmouseup event is set to null to prevent further mouseup events from being triggered.
// El evento onmouseup se adjunta al elemento de caja. Cuando se suelta el elemento de caja, el movimiento del mouse
  // el detector de eventos se elimina usando document.removeEventListener('mousemove', onMouseMove), y el
// el evento onmouseup se establece en nulo para evitar que se activen más eventos mouseup.
 function onMouseMove(e) {
   moveAt(e.pageX, e.pageY);
 }
 document.addEventListener('mousemove', onMouseMove);

 box.onmouseup = function() {

    document.removeEventListener('mousemove', onMouseMove);

    box.onmouseup = null;
   if (isInside(box, target)) {
     alert('Dropped in target!');
   }
 };
});
  // The isInside() function is called with the box and target elements as arguments. It checks whether the 
  // box element is completely inside the target element by comparing their respective left, right, top,

// target element, an alert is triggered.

// Se llama a la función isInside() con los elementos box y target como argumentos. Comprueba si el
   // el elemento del cuadro está completamente dentro del elemento de destino comparando sus respectivos lados izquierdo, derecho, superior,

// elemento de destino, se activa una alerta.

function isInside(box, target) {
 let boxRect = box.getBoundingClientRect();
 let targetRect = target.getBoundingClientRect();
//  La función isInside() se llama con el cuadro y los elementos de destino como argumentos. Comprueba si el
//  elemento de cuadro está completamente dentro del elemento de destino comparando sus respectivos izquierda, derecha, arriba,
//  y las coordenadas inferiores usando el método getBoundingClientRect(). Si el elemento de caja está dentro del
//  elemento de destino, se activa una alerta.

 return boxRect.left > targetRect.left &&
        boxRect.right < targetRect.right &&
        boxRect.top > targetRect.top &&
        boxRect.bottom < targetRect.bottom;
}
