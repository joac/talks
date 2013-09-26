 function Punto(x, y) {
         this.x = x; 
         this.y = y; 
         this.toString = function() {
                   return "<Punto(x=" + this.x + ", y=" + this.y + ")>";                              };  
     };  

n = new Punto(10, 20);
console.log("Mi punto es: " + n);

m = new Punto(50, 30);

console.log(n.toString === m.toString);
