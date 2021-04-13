# CONSUMO DE APIs EN LA NUBE
## PRÁCTICA DE LABORATORIO
## ACTIVIDADES POR DESARROLLAR
### 1.	Identificar gráficamente la arquitectura web de la aplicación a desarrollar.
La arquitectura web que se utilizó en esta aplicación es una arquitectura de microservicio.
![image](https://user-images.githubusercontent.com/56461202/114565087-91031f00-9c36-11eb-83d5-364a32ce43dd.png)

### 2. Generar una llave para consumir los servicios web de la API (opcional, depende de la API seleccionada).
### 3.	Crear un repositorio en GitHub con el nombre “Practica01 – Consumo de APIs en la nube”
![image](https://user-images.githubusercontent.com/56461202/114565243-b2640b00-9c36-11eb-964b-30e5aadfadeb.png)

### 4. Desarrollar una aplicación con HTML + CSS + JavaScript + Web Services para buscar información y visualizar toda la información disponible a través de la API.

a)	Creamos un archivo HTML el cual nos servirá para poder visualizar nuestra API
![image](https://user-images.githubusercontent.com/56461202/114565316-c60f7180-9c36-11eb-858a-9d4836b5da85.png)

-	Como podemos observar en este archivo, procederemos a llamar a los diferentes archivos que utilizaremos ya sea css o JavaScript.
-	Aquí también declararemos la caja de texto y el botón que nos servirá para poder mostrar los datos que consumiremos de la API. 
-	En la línea 14 declaramos el evento buscar el cual nos permitirá poder realizar una búsqueda por nombre.
-	En la línea 15 declararemos el método cargarDatos() el cual al momento de hacer clic nos presentará los datos consumidos de la API.
![image](https://user-images.githubusercontent.com/56461202/114565358-cdcf1600-9c36-11eb-873e-36d13c8c8e37.png)

-	Desde la línea 42 hasta la línea 46 declararemos los nombres de las columnas que se mostrarán en la página web.
-	En la línea 49 declaramos una tabla “tablaEpisodioDetalles” la cual contiene los datos de la API.

b)	Creamos un archivo CSS el cual contiene todos los estilos que se utilizará en la práctica.

![image](https://user-images.githubusercontent.com/56461202/114565423-dcb5c880-9c36-11eb-8580-ee61374854ad.png)

-	Este archivo contiene los diferentes estilos ya sea del título, tablas, barra de búsqueda, botón, etc.

c)	Creamos un archivo JavaScript el cual contiene los métodos que se utilizarán para la práctica a realizar.

 ![image](https://user-images.githubusercontent.com/56461202/114565473-e9d2b780-9c36-11eb-8c6e-2d817070edd9.png)

-	Aquí podemos observar que se ha creado la función cargarDatos() el cual nos servirá para cargar los datos obtenidos de la API y mostrarlos en una tabla, la cual la llamaré “tablaEpisodioDetalle”, también se realizó dos for, que nos permitirá recorrer mediante un arreglo las diferentes posiciones de los datos obtenidos de la API.

![image](https://user-images.githubusercontent.com/56461202/114565517-f2c38900-9c36-11eb-8e67-d0b4a039e6b0.png)

-	En la segunda función creada nos servirá para realizar la búsqueda por nombre de los datos.

![image](https://user-images.githubusercontent.com/56461202/114565559-fbb45a80-9c36-11eb-8c8d-51a3c6757e88.png)

-	Por último creamos una función llamada “cargarDatosEpisodio()”, la cual nos servirá para obtener desde la url de la API(“ https://rickandmortyapi.com/api/episode”) los datos a consumir en nuestra práctica. Como podemos observar esta API es pública ya que no necesita de una apikey o token para ser visualizada.

### 5. Realizar varios commits en la herramienta GitHub que demuestren el desarrollo de la aplicación.
### 6. Generar el informe de la práctica con el desarrollo de cada uno de los puntos descritos anteriormente.
### 7. Implementar el README del repositorio del proyecto con la misma información del informe de la práctica.
### 8. Subir al AVAC el informe del proyecto en formato *.pdf. El informe debe contar con conclusiones apropiadas y la firma de cada estudiante

## RESULTADOS OBTENIDOS

•	Identifica las diferentes arquitecturas Web para el desarrollo de aplicaciones.

•	Interfaz del proyecto

![image](https://user-images.githubusercontent.com/56461202/114565723-2acacc00-9c37-11eb-93bb-c2d212412bae.png)

•	Visualización de los datos

![image](https://user-images.githubusercontent.com/56461202/114565765-35856100-9c37-11eb-8001-e028eb098a5c.png)

## INFORMACIÓN DE GITHUB (USUARIO Y URL DEL REPOSITORIO DE LA PRÁCTICA)

Usuario: bcarrascoi
URL: https://github.com/bcarrascoi/Practica01-Consumo-de-APIs-en-la-nube

## CONCLUSIONES:
•	Los estudiantes podrán identificar arquitecturas web utilizando servicios en la nube. Así como también, podrán consumir APIs y manipular objetos JSON.
•	Se logró implementar de forma correcta el consumo de la API para obtener un óptimo funcionamiento de la aplicación web.
•	Mediante el uso del archivo validar.js se logró una estructura correcta para los diferentes métodos utilizados.

## RECOMENDACIONES:

•	Probar la solución de la práctica en al menos tres navegadores web cómo: Brave, Firefox y Opera.
•	Aplicar conceptos de interacción humano máquina para el desarrollo de la GUI.


### Estudiante: Bryan Patricio Carrasco Illescas








