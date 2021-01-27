//Operacion de concatenacion 

let nombre = "Emmanuel";
let edad = 33;
let altura = 1.85;
let profesor = true;

// Primara manera de concatenar
console.log(nombre+edad); //una de las variables tiene que ser de tipo string

// segunda manera de concatenar
console.log(""+edad+altura);// Al principio del texto tiene que llevar 
                            // la inicializacion de tipo de datos estring 
                            // **Ejemplo las comillas**  
                            // (""), ('') que identifican que el tipo de dato 
                            // es string

// tercera manera de concatenar
console.log(nombre.concat(edad));//Usando el metodo **concat** 
                                // podemos concatener cualquier 
                                // tipo de datos siempre que la variable 
                                // sea de tipo string

// cuarta manera de concatenar
console.log(nombre, edad, profesor);  //Podemos concatenar las variables con **,** 
                            // pero al momento de visualizar toda la cadena 
                            // cambia **Ejemplo** si mesclamos un strin con 
                            // un numbre y un booleaon se mostrar en la pantall 
                            // pero se pordra diferenciar uno de otro ya que el 
                            // mensaje no se comportara como si guera un string 
                            // si un ropecabezas de cada tipo de dato en este 
                            // caso unsando **console.log()** no generar ningun 
                            // error pero al moneto de usar **document.write()** 
                            // no se vera el resulta deseado se mopstrar las 
                            // variables de tipo string pero las demos mostrara 
                            // el tipo de datp que conforma la variable y en 
                            // caso del evento **alert()** solo se podra usa 
                            // el simblo **+** para concatenar

// quinta manera de concatenar
console.log(`${nombre} ${edad}`);//Usando las comillas Backticks podemos 
                                // identificar cada variable de una manera 
                                // mas comda y la validacion del tipo de dato 
                                // de cada una sera mas comoda

//Operacion decremento
let a = 10;
a --;
console.warn('Operacion decremento', a);

//Operacion division
let b = 10;
console.warn(`Operacion division ${b/2} valor inicial ${b}`);

//Operacion exponencial
let c = 10;
console.warn(`Operacion esponencial ${c**5} valor inicial${c}`);

//Operacion incremento
let d = 10;
a ++;
console.warn(`Operacion incremento ${d}`);

//Operacion de multiplicacion
let e = 10
console.warn(`Operacion de multiplicacion ${e*6} valor inicial ${e}`);

//Operacion de modulo
let f = 10;
console.warn(`residuo de una division ${c%2}`);

//Operacion resta
let g = 10;
console.warn(`Operacion de resta ${g - 2} valor inicial ${g}`);

//Operacion unary -
let h = 10;
console.warn(`Unary negativo ${-h}`);

//Operacion unary +
let w = 10;
console.warn(`Unary plus ${+w}`);

