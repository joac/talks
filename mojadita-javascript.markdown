# Una mojadita en javascript
##Joaquín "joac.js" Sorianello
## Cordoba - 2013

---

# Por que esta charla

 * Javascript™ es un lenguaje bonito e incomprendido
 * Con la llegada de HTML5 y los browsers modernos hacen falta mas developers
 * Javascript™ está en todas partes
 * Tiene mis iniciales y eso lo hace el mejor lenguaje del mundo
---
# Antes de poner la carne al fuego
 
 * Si hay typos... esta charla es como javascript
 * Si no entiende, pregunte. 
 * Si hablo muy rapido, avise.
 * Si me equivoco, corrijame, lo hago a propósito para ver si estan atentos.

---
# Un poquito de historia
 
 * Creado en Netscape™ por Brendan Eich
 * Lanzado al mercado en septiembre de 1995 (Ya cumplio 18!)
 * Originalmente llamado LiveScript
 * Estandarizado en junio del 97 como **ECMAScript**
 * La llegada de ajax y la web dinámica, le dio un gran impulso

---

# Features
 
 * Tipado Dinamico
 * Basado en objetos
 * Utiliza **prototipos** 
 * Las funciones son **first class citizens**

---

# Comparando con python
 
 * No tiene clases "as is"
 * Hay muchos interpretes y los requerimientos del Mundo Real™ nos obligan a 
escribir codigo que funcione correctamente, a pesar de las diferencias entre ellos.
 * Muchos *no programadores* escriben Javascript

---

# Donde hay javascript

 - Browsers, casi todos (lynx?)
 - Unity 3d
 - Map-Reduce de MongoDB
 - Suite Adobe
 - El nuevo telefono de Mozilla

--- 
# Y porque es tan "poronga"?

 * El lenguaje en si tiene falencias, que tienen que ver con su fugaz desarrollo 
y lanzamiento.
 * Se desarrollan muchas aplicaciones javascript sin conocer el lenguaje
 * La sintaxis es similar a otros lenguajes, pero no se comporta de la misma 
manera.
 * Como está apareado a un runtime, muchas personas consideran las falencias en el manejo del DOM, como falencias de Javascript
 * Los bloques no definen scopes

---

# Todo es global
    
    !javascript    
    
    mi_numero = 8;
    function mi_funcion_mala() {
        mi_numero = 5;
    };
    console.log(mi_numero)
    // -> 8
    mi_funcion_mala()
    console.log(mi_numero)
    // -> 5
---

# Namespace compartido

 * Todos los tags `script` comparten el mismo Namespace
 * Tenemos que ser cuidadosos a la hora de incluir librerias de terceros
 * Tenemos que ser cuidadosos con la "huella" que deja nuestro código en el
   namespace global

---    

# Operador "+" concatena y suma

    !javascript
    console.log(1 + 2)
    // -> 3
    console.log(1 + 2 + '3')
    // -> 33
    console.log('1' + 2 + 3)
    // -> 123
    console.log('1' + [2, 3])
    // -> 12,3
    console.log('1' + {foo: 2, bar: 3})
    // -> 1[object Object]
    console.log(1 + {foo: 2, bar: 3})
    // -> 1[object Object]
    console.log(+{foo: 2, bar: 3} + 1 + 'Hola!' + (-'00001'))
    // NaNHola!-1    
    
Hay que tener cuidado!

---

# Los ';' se completan magicamente.
 
 * Y las reglas de esa magia [no son tan obvias](http://es5.github.io/#x7.9)
 * Nuestro código se rompe si lo minificamos sin tener cuidado  

---

# Un poco de objetos

La forma mas **naive** de crear un objeto:
    
    !javascript
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

No es la unica

---

# Parece un JSON
 
    !javascript 
    
    foo = {"x":20, "y":30};  // JSON y javascript valido
    bar = {x: 30, y:30 };    // Objecto javascript

Son similares, pero no son lo mismo

---

# Y las clases?

Javascript no tiene clases **"as is"**, pero nos permite crear funciones constructoras:     
    
    !javascript
 
    function Punto(x, y) {
        this.x = x; 
        this.y = y; 
        this.toString = function() {
            return "<Punto(x=" + this.x + ", y=" + this.y + ")>";                              };  
    };

Notar que `this` es implicito!

---

# How is 'this'? Pt.1
 
Probemos!

---

# How is 'this'? Pt.2

 * Si usamos `new`, se construye un nuevo objeto vacio y `this` corresponde a ese
nuevo objeto.

 * Si llamamos a la funcion *a secas*, `this` corresponde al objeto global :P
 
 * Si **"attachamos"** la funcion a un objeto, `this` corresponde a ese objeto

---

# Dealing with 'this'

## apply
    
    !javascript
   
    fun.apply(thisArg[, argsArray]) 
 
## call 
    
    !javascript
    
    fun.call(thisArg[, arg1[, arg2[, ...]]]) 

---

# Prototype this!



---

# Prototype override


---

# Buenas practicas 1

## Ser expicitos con los scopes, y usar `window` 

    !javascript
    window.mi_global = 50; 

## Definir las variables al inicio de las funciones

    !javascript
    function mi_funcion() {
        var variable = 75, variable_2 = {foo: 16};
    };

## Usar variables que empiecen con $ para denotar selectores

    !javascript
    $div_loco = $('#div_loco');

---

# Buenas practicas 2

## Si usamos jquery, **cachear** los selectores:

### Mal:
    
    !javascript
    _.each(lista_de_items, function(item) {
        elemento = construir_li(item);
        $('.foo .bar > ul').append(elemento);
    });

### Bien:
    !javascript
    $mi_selector = $('.foo .bar > ul');
    _.each(lista_de_items, function(item) {
        elemento = construir_li(item);
        $mi_selector.append(elemento);
    });


--- 

Me olvido de muchas, acuerdense de estas por ahora!

---

# Mirar para adelante, no para atras

Los polifixes son nuestros amigos!

---

# Como sobrevivir 
  
 * MDN (Mozilla Developer Network)
 * Underscore.js
 * JSDB.io
 * Leer **Javascript, Th Good Parts** de Douglas Crockford 

---

# Gracias !
