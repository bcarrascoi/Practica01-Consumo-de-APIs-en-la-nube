# CONSUMO DE APIs EN LA NUBE
## PRÁCTICA DE LABORATORIO
## ACTIVIDADES POR DESARROLLAR
### 1.	Identificar gráficamente la arquitectura web de la aplicación a desarrollar.
La arquitectura web que se utilizó en esta aplicación es una arquitectura de microservicio.
![image](https://user-images.githubusercontent.com/56461202/114565087-91031f00-9c36-11eb-83d5-364a32ce43dd.png)

### 2. Generar una llave para consumir los servicios web de la API (opcional, depende de la API seleccionada).
### 3.	Crear un repositorio en GitHub con el nombre “Practica01 – Consumo de APIs en la nube”

### 4. Desarrollar una aplicación con HTML + CSS + JavaScript + Web Services para buscar información y visualizar toda la información disponible a través de la API.

a)	Creamos un archivo HTML el cual nos servirá para poder visualizar nuestra API
![image](https://user-images.githubusercontent.com/56461202/114965048-7945b980-9e35-11eb-8a4c-4bfab0a2b408.png)

-	Como podemos observar en este archivo, procederemos a llamar a los diferentes archivos que utilizaremos ya sea css o JavaScript.
-	Como podemos observar en la línea 25 creamos una barra de navegación que contendrá la galería, la lista de episodios y el contacto del desarrollador.

![image](https://user-images.githubusercontent.com/56461202/114965089-8bbff300-9e35-11eb-8a67-87594ef46533.png)

-	Como podemos observar en la línea 37 declararemos el nombre que contendrá el título principal de la página.
-	En la línea 42 declaramos el botón que nos servirá para listar los diferentes episodios, los cuales serán llamados por el evento “cargarDatos()”, el mismo está programado en el archivo JavaScript.

![image](https://user-images.githubusercontent.com/56461202/114965140-a2664a00-9e35-11eb-910d-4d229fe66088.png)

-	Como podemos observar aquí procedemos a llamar a las diferentes imágenes que se utilizarán como parte de la galería de la página.

![image](https://user-images.githubusercontent.com/56461202/114965164-abefb200-9e35-11eb-897a-fe7eea5cedd5.png)

-	En la línea 81 declaramos la sección que contendrá la caja de texto, la cuál conforme digite una letra se buscará el nombre del episodio.
-	Desde la línea 87 creamos la tabla que contendrá el encabezado de los datos.

![image](https://user-images.githubusercontent.com/56461202/114965174-b3af5680-9e35-11eb-8e68-31deb425a069.png)

-	Desde la línea 105 hasta la línea 125 creamos la sección que contendrá la información personal en   caso que dé se desee contactar al desarrollador.



b)	Creamos un archivo CSS el cual contiene todos los estilos que se utilizará en la práctica.

![image](https://user-images.githubusercontent.com/56461202/114965188-bf9b1880-9e35-11eb-95c4-3643a940e3cb.png)

![image](https://user-images.githubusercontent.com/56461202/114965194-c1fd7280-9e35-11eb-8058-f1a2005815e5.png)

-	Este archivo contiene los diferentes estilos ya sea del título, tablas, barra de búsqueda, botón, etc.

c)	Creamos un archivo JavaScript el cual contiene los métodos que se utilizarán para la práctica a realizar.

![image](https://user-images.githubusercontent.com/56461202/114965209-c88bea00-9e35-11eb-8775-479fe443a840.png)

-	Aquí podemos observar que se ha creado la función cargarDatos() el cual nos servirá para cargar los datos obtenidos de la API y mostrarlos en una tabla, la cual la llamaré “tablaEpisodioDetalle”, también se realizó dos for, que nos permitirá recorrer mediante un arreglo las diferentes posiciones de los datos obtenidos de la API.

![image](https://user-images.githubusercontent.com/56461202/114965226-d0e42500-9e35-11eb-84f7-283b3706d255.png)

-	En la segunda función creada nos servirá para realizar la búsqueda por nombre de los datos, donde declaramos seis variables que nos permitirán el desarrollo de esta, donde la variable “input” nos servirá para recibir los datos en base de la Id=”myInput” declarada en el archivo HTML.
-	También la variable filtro nos servirá para que al momento de digitar una tecla, se busque en base al nombre del episodio.
-	La variable tabla nos sirve para recibir los datos de la tabla en base al Id creado en el archivo HTML.
-	La variable auxiliar1 nos sirve para recibir los datos en base al encabezado que programamos anteriormente.
-	También se creó un for el cual irá recorriendo las posiciones de los datos mostrados y en base a esos datos se mostrará el resultado depende que letra o palabra digite al momento de buscar.

![image](https://user-images.githubusercontent.com/56461202/114965249-db062380-9e35-11eb-8e7a-767767dcf79b.png)

-	Por último creamos una función llamada “cargarDatosEpisodio()”, la cual nos servirá para obtener desde la url de la API(“ https://rickandmortyapi.com/api/episode”) los datos a consumir en nuestra práctica. Como podemos observar esta API es pública ya que no necesita de una apikey o token para ser visualizada.

### 5. Realizar varios commits en la herramienta GitHub que demuestren el desarrollo de la aplicación.
### 6. Generar el informe de la práctica con el desarrollo de cada uno de los puntos descritos anteriormente.
### 7. Implementar el README del repositorio del proyecto con la misma información del informe de la práctica.
### 8. Subir al AVAC el informe del proyecto en formato *.pdf. El informe debe contar con conclusiones apropiadas y la firma de cada estudiante

## RESULTADOS OBTENIDOS

•	Identifica las diferentes arquitecturas Web para el desarrollo de aplicaciones.

•	Interfaz del proyecto

- INICIO
![image](https://user-images.githubusercontent.com/56461202/114965274-e5282200-9e35-11eb-87c8-8434ada8f974.png)

- GALERÍA 
![image](https://user-images.githubusercontent.com/56461202/114965297-f2dda780-9e35-11eb-924a-54151af8c65b.png)

- EPISODIOS
![image](https://user-images.githubusercontent.com/56461202/114965315-f96c1f00-9e35-11eb-8bdf-e22e0cb2044d.png)

- CONTACTOS

![image](https://user-images.githubusercontent.com/56461202/114965334-00932d00-9e36-11eb-82a8-fcb74df813db.png)

•	Visualización de los datos

- LISTA DE EPISODIOS

![image](https://user-images.githubusercontent.com/56461202/114965360-0e48b280-9e36-11eb-9745-a6a60fc70f07.png)

- BUSQUEDA AL MOMENTO DE DIGITAR UNA LETRA

![image](https://user-images.githubusercontent.com/56461202/114965406-215b8280-9e36-11eb-8ff9-0cf6c5bee5fb.png)

- BUSQUEDA DEL NOMBRE DE UN CAPITULO

![image](https://user-images.githubusercontent.com/56461202/114965427-2c161780-9e36-11eb-9028-23246c6e7bd1.png)

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








