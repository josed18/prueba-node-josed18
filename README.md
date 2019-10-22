# prueba-node-josed18

## Intruciones 

1. Clonar repositorio.
2. Copiar archivo `example.env` y renombrarlo a `.env`
3. Asignar a la variable de entorno `MONGO_CONNECTION` el string de conexion de la base de datos en mongo
4. Instalar paquetes con `npm install`
5. Correr servidor con `npm start`

## Endpoints

- `GET http://localhost:3000/api/v1/trips`: Endpoint que retorna la cantidad de viajes totales. Recibe como query param opcional `city`, el nombre de la ciudad para filtrar el total de viajes para una ciudad especifica
- `POST http://localhost:3000/api/v1/trips`: Endpoint para crear un nuevo registro de viaje. Recibe como body la estructura especificada en el esquema del viaje. Retorna el viaje el creado
- `PATCH http://localhost:3000/api/v1/trips/:id`: Enpoint para actualizar un viaje. Recibe como body la estructura parcial de los campos actulizar en el esquema del viaje. recibe como parametro `:id` en la ruta del viaje a actulizar.  Retorna el viaje el actulizado
