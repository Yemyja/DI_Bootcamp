function generateSong() {
    let startNumber = document.getElementById("startNumber").value;
    let songLyrics = "";

    for (let i = startNumber; i >= 0; i--) {
        if (i === 0) {
            songLyrics += "No more bottles of beer on the wall, no more bottles of beer.<br>";
            songLyrics += "Go to the store and buy some more, 99 bottles of beer on the wall.";
        } else if (i === 1) {
            songLyrics += "1 bottle of beer on the wall, 1 bottle of beer.<br>";
            songLyrics += "Take it down and pass it around, no more bottles of beer on the wall.<br><br>";
        } else {
            songLyrics += i + " bottles of beer on the wall, " + i + " bottles of beer.<br>";
            songLyrics += "Take " + (i === 2 ? "1" : i- "1") + " down and pass them around, ";
            songLyrics += (i - (i === 2 ? 1 : 2)) + " bottle" + (i - (i === 2 ? 1 : 2) === 1 ? "" : "s") + " of beer on the wall.<br><br>";
        }
    }

    document.getElementById("songLyrics").innerHTML = songLyrics;
}

// generamos la funcion generateSong donde primero ponemos get elementarybyId para llamr al valor que escribamos en la pantalla.
// Hcemos sonLyric que sera nuestra cancelAnimationFrame.apply

// Hacemos un for loop donde:
//  si el numero que pongan es = 0 me da el texto de la cancion de 0 ,
//  si es 1 me da la cancion de 1,
//  si es otro numero lo que hace es escribir primero  en la primera parte de la cancion cuantas botellas hay, esto lo hace jalando el valor que escribimos en pantalla,
//   despues en la segunda parte le resta  un numero menos del que pusimos y acompleta la cancion.
