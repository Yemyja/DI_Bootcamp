  
  // Array of quotes
  const quotes = [
    { id: 0, author: "Fernando Pessoa", quote: "La vida es lo que hacemos de ella. Los viajes son los viajeros. Lo que vemos no es lo que vemos sino lo que somos." },
    { id: 1, author: "James Dean", quote: "No puedo cambiar la dirección del viento, pero sí ajustar mis velas para llegar siempre a mi destino." },
    { id: 2, author: "ANelson Mandela", quote: "La educación es el arma más poderosa que puedes usar para cambiar el mundo." },
    { id: 3, author: "Robert Collier", quote: "El éxito es la suma de pequeños esfuerzos repetidos día tras día." },
    { id: 4, author: "Charles R. Swindoll", quote: "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello." },
];

let previousQuote= null;

// Function to get a random quote
function getRandomQuote() {
    let quote = null;
    do{
        quote = quotes[Math.floor(Math.random() * quotes.length)];
    } while (quote === previousQuote);
  
    return quote;
}

// Function to display a quote in the DOM
function displayQuote() {
    const quoteContainer = document.getElementById("quote-container");
   
    const quote = getRandomQuote();

    quoteContainer.innerHTML = `
        <div>
            <h2>${quote.quote}</h2>
            <p>- ${quote.author}</p>
        </div>
    `;
}

// Generate quote on button click
const generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click", displayQuote);

// Display initial quote
displayQuote();



// function getRandomQuote(){
//     let quote = null;
//     if (quotes.length > 0) {
//         const index = Math.floor(Math.random() * quotes.length);
//         quote = quotes[index];
//         quotes.splice(index, 1);
//     }
//     return quote;
// }
// pero aqui llega un punto en el que tienes que dar refresh a la pagina para volver a empezar









// const quotes = [    { id: 0, author: "Fernando Pessoa", quote: "La vida es lo que hacemos de ella. Los viajes son los viajeros. Lo que vemos no es lo que vemos sino lo que somos." },  
//   { id: 1, author: "James Dean", quote: "No puedo cambiar la dirección del viento, pero sí ajustar mis velas para llegar siempre a mi destino." },   
//    { id: 2, author: "Nelson Mandela", quote: "La educación es el arma más poderosa que puedes usar para cambiar el mundo." },   
//     { id: 3, author: "Robert Collier", quote: "El éxito es la suma de pequeños esfuerzos repetidos día tras día." },  
//       { id: 4, author: "Charles R. Swindoll", quote: "La vida es 10% lo que te sucede y 90% cómo reaccionas ante ello." },];

// let shuffledQuotes = shuffleArray(quotes);
// let quoteIndex = 0;

// function shuffleArray(array) {
//     let shuffledArray = [...array];
//     for (let i = shuffledArray.length - 1; i > 0; i--) {
//         const j = Math.floor(Math.random() * (i + 1));
//         [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
//     }
//     return shuffledArray;
// }

// function getRandomQuote() {
//     const quote = shuffledQuotes[quoteIndex];
//     quoteIndex++;
//     if (quoteIndex >= shuffledQuotes.length) {
//         shuffledQuotes = shuffleArray(quotes);
//         quoteIndex = 0;
//     }
//     return quote;
// }

// function displayQuote() {
//     const quoteContainer = document.getElementById("quote-container");
//     const quote = getRandomQuote();

//     quoteContainer.innerHTML = `
//         <div>
//             <h2>${quote.quote}</h2>
//             <p>- ${quote.author}</p>
//         </div>
//     `;
// }

// const generateBtn = document.getElementById("generate-btn");
// generateBtn.addEventListener("click", displayQuote);

// displayQuote();