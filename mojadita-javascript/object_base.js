a = { 
  x: 20, 
  y: 30,
  toString: function() {
      return "<Punto(x=" + this.x + " y=" + this.y + ")>";                        
  },  
};

console.log(a);
console.log("El objeto es: " + a);
console.log(+a);
