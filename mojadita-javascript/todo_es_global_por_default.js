// Global by default
mi_numero = 8;

function mi_funcion_mala() {
  mi_numero = 5;
};
console.log("Mi numero es:" + mi_numero)
// -> 8
mi_funcion_mala()
console.log(mi_numero)
// -> 5

// Constructors
function naive() {
  return 'abc';
};

console.log(naive());
console.log(new naive());


function Point(x, y) {
  this.x = x;  //Por defecto *this* es el objeto global
  this.y = y;
};

//console.log(Point(10, 20));
console.log(new Point(10, 20));

// Method binding
function toString() {
  return "X: " + this.x + " Y: " + this.y; 
};

console.log(toString());

function how_i_am() {
  console.log(this);
}

console.log(how_i_am());

point = new Point(10, 20);

point.toString = toString;
point.how_i_am = how_i_am;

console.log(point.toString());
console.log(point.how_i_am());

point_2 = new Point(10, 20);

console.log(point_2.toString());
console.log(point_2.how_i_am());

/**
 * Atributos privados
 */

function meta_constructor


/** Prototipos
 *
 */

a = 'un string cualquiera'

console.log(a.prototype);





/**
 *  Call
 *  Llama a una función, dado un objeto que sera utilizado como *this*
 */



// Apply
// Bind

