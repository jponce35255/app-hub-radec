# Etapa 1: Construcción de la aplicación Angular
FROM node:22 as build

# Establecer el directorio de trabajo
WORKDIR /app

# Copiar los archivos de configuración necesarios
COPY package*.json ./

# Instalar dependencias
RUN npm install

# Copiar el código fuente del proyecto
COPY . .

# Construir la aplicación Angular
RUN npm run build -- --configuration production

# Etapa 2: Servir la aplicación con NGINX
FROM nginx:1.25-alpine

# Copiar los archivos construidos en la etapa anterior
COPY --from=build /app/dist/hub /usr/share/nginx/html

# Exponer el puerto 80
EXPOSE 80

# Iniciar NGINX
CMD ["nginx", "-g", "daemon off;"]
