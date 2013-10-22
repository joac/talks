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

# Arquitectura

![](diagrama_arakur.png)

---

# Arquitectura
## Instrumentación y Control

![](diagrama_arakur_instrumentacion.png)

---

# Arquitectura 
## SCADA

![](diagrama_arakur_supervision.png)

---

# Que es un SCADA?

**SCADA** es el acrónimo para *Supervisory Control And Data Acquisition*.
(Adquisición de Datos, Supervisión y Control)

 * Combinación de dispositivos de automatización con una computadora.
 * Almacenamiento de Datos
 * Analisis de los procesos
 * Parametrizacion de dispositivos

---

# Mi filosofía en este asunto

 * Los PLC se encargan de la lógica de control del proceso y su seguridad
 * Las aplicaciones *NO DECIDEN* sobre el proceso
 * Ser concientes del riesgo para las personas que puede tener un malfuncionamiento de un software 

---

# Modbus

 * Protocolo abierto y documentado
 * [http://www.modbus.com](http://www.modbus.com)
 * Creado por Modicon (hoy Schneider Electric) en **1979**
 * Trabaja a nivel bit
 * Modbus/TCP usa un transporte muy comun! Redes TCP/IP

---

# PyModbus

 * Implementacion del protocolo Modbus basada en Twisted™
 * Simple de utilizar y extender: 

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

# State


---

# Comandos remotos (RPC)

---

# Demonios!

---

# Preguntas?

