# Control Industrial
## Joaquín "joac" Sorianello
## PyCon Argentina 2013

---

# Por que esta charla
 
 * Me gustan los automatismos.
 * Me gusta `Python`
 * No me gustan las soluciónes cerradas

---

# Antes de arrancar la planta

 * Si hablo muy rapido, presione el pulsador junto a su asiento.
 * Si no funciona, grite "Que te pensa! ¿Que sos Schumaher?"
 * Si hay typos, pull request a [http://github.com/joac/talks](http://github.com/joac/talks)
 * Vamos a mirar **Mucho Código**, no se desmayen

---

# Previously on Pycon

En PyConAr 2010, en córdoba conté sobre varias técnicas para comunicarse control
dispositivos industriales, esta vez, vamos con una implementación en el Mundo Real™.

---

# Que es un SCADA?

**SCADA** es el acrónimo para *Supervisory Control And Data Acquisition*.
(Adquisición de Datos, Supervisión y Control)

 * Combinación de dispositivos de automatización con una computadora.
 * Almacenamiento de Datos
 * Analisis de los procesos
 * Parametrizacion de dispositivos

---


# La competencia

![](img/scada_screenshot_boc_em_overview.gif)

---

# Mas competencia

![](img/wwapp.jpg)

---

# El Problema

 * Aplicaciones diseñadas por **Electricistas**
 * Tecnologías desactualizadas
 * Temor y desconocimiento sobre tecnologias web
 * Runtimes pobremente documentados y con diseño visual arcaico
 * Componentes de baja calidad, y pocas opciones

---

# Mi filosofía en este asunto

 * Los PLC se encargan de la lógica de control del proceso y su seguridad
 * Las aplicaciones *NO DECIDEN* sobre el proceso
 * Ser concientes del riesgo para las personas que puede tener un malfuncionamiento de un software 

---


# Las Herramientas

---

# Modbus

Es un protocolo abierto y documentado [http://www.modbus.com](http://www.modbus.com)
Creado por Modicon (hoy Schneider Electric) en **1979**
 * Trabaja a nivel bit
 * Modbus/TCP usa un transporte muy comun! Redes TCP/IP


---

# PyModbus
 
https://github.com/bashwork/pymodbus

Implementacion del protocolo Modbus basada en Twisted™ muy simple de utilizar:

    !python
    from pymodbus.client.sync import ModbusTcpClient

    client = ModbusTcpClient('127.0.0.1')
    client.write_coil(1, True)
    result = client.read_coils(1,1)
    print result.bits[0]
    client.close()

 

--- 

# Redis
 * Es un storage Key/Value
 * Tiene estructuras de datos **amigables** para los desarrolladores
 * Tiene **Pub/Sub** (Publisher/Suscriber)

---

# Flask

Microframework web inspirado en Sinatra, su `hola mundo` es así de simple:


    !python

    from flask import Flask
    app = Flask(__name__)

    @app.route("/")
    def hello():
        return "Hello World!"

    if __name__ == "__main__":
        app.run() 

---

# SSE
## Server Sent Events

 * Es una técnica que permite enviar eventos y actualizaciones
 desde el servidor a las aplicaciones cliente.
 * Está implementado en los browsers modernos y hay `polyfixes` para los mas antiguos.


--- 

# SSE
## Server Side
 
    !python
    import time
    from flask import Response
     
    app = Flask(__name__)
     
    @app.route('/event_stream')
    def stream():
        def event_stream():
            while True:
            time.sleep(3)
            yield 'data: %s\n\n' % 'hola mundo'
     
    return Response(event_stream(),
                     mimetype="text/event-stream")
 
---

# SSE 
## Client Side
 
    !javascript
    var source = new EventSource('/event_stream');
    source.onmessage = function(event){
      alert(event.data);
    };
 
---

# La solución

---

# Arquitectura

![](img/diagrama_arakur.png)

---

# Arquitectura
## Instrumentación y Control

![](img/diagrama_arakur_instrumentacion.png)

---

# Arquitectura 
## SCADA

![](img/diagrama_arakur_supervision.png)

---

# Arquitectura
## Componentes

---

# Conclusiones

Trabajar con `python` permitio:

 * Alta velocidad de desarrollo
 * Muchas opciones a la hora de elegir librerías
 * Posibilidad de tener entornos de desarrollo, sin los dispositivos
 * Mas felicidad en el desarrollador
 * Si hubiese conocido Backbone o Angular, el desarrollo hubiese sido mas facil

---

# El futuro

En los laboratorios secretos de **Machinalis** estamos trabajando en un proyecto
que hará mucho mas sencillo realizar este tipo de aplicaciones usando python

![](img/logo-full.png)

---

# Preguntas?

