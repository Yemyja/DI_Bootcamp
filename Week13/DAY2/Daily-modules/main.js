
// const largeNumber = 356;
// module.exports = { largeNumber };

// en la terminal poner:   npm install --save-dev nodemon   (para instalar nodemon)
const largeNumber = 356;

function getCurrentDate() {
  const now = new Date();
  console.log("now:", now);
  return now;
}

module.exports = { largeNumber, getCurrentDate };