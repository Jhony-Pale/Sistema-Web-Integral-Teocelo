## Instalación

1. Clonar repositorio
2. Instalar dependencias del api y client: 'npm install'
3. Crear en api el archivo '.env' con las variables:
    EMAIL_PASSWORD="contraseña del correo que enviará los correos"
    EMAIL_SERVER_EMAIL="correo que enviará los correos"
    EMAIL_DESTINATION="correo que recibirá los correos"

Nota en caso de ser gmail: Para el correo que enviará los correos, habilitar la verificación de dos pasos, y añadir una contraseña de aplicación, esa contraseña será la que se utilice en el archivo .env. [Video de como hacerlo.](https://www.youtube.com/watch?v=KjheexBLY4A)

## Uso
1. Iniciar los servidores, para el api y client: 'npm run dev'