let proovedores = {
   alimentos : "Herdez",
lacteos: "Aljibes",
carniceria:"Emet",
fruta: "Daniel",
limpieza: "Corona",}
  
let keys1= Object.keys(proovedores);
console.log(keys1);

let valores= Object.values(proovedores);
console.log(valores);

let entries1= Object.entries(proovedores);
console.log(entries1);

console.log (entries1 [2][1]);
console.log (Object.entries(proovedores)) ;


  class TareaIngles {
    constructor(name) {
      this.name = name;
    }
  
    tema() {
      const { name } = this; 
      console.log(`${name} Tienes la tarea completada.`);
    }
  }
  
  class TareaEspañol extends TareaIngles {
    constructor(name, temaEspañol) {
      super(name); 
      this.temaEspañol = temaEspañol;
    }
    tema2() {
        const { name,temaEspañol} = this; 
        console.log(`${name} Tienes la tarea de ${temaEspañol} completada.`);
      }
  }
  
  let abril14 = new TareaEspañol("Lulu", "vocales");
  abril14.tema2(); // "Lulu Tienes la tarea de vocales  completada."


  let abril12 = new TareaEspañol("Lulu", "vocales");
  abril14.tema(); // "Lulu Tienes la tarea completada."
  
  let abril20 = new TareaIngles("David");
  abril20.tema(); // "david Tienes la tarea completada."