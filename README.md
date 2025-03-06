
### 📄 README - Frontend: Health & Fitness Pro  

# 🖥️ Health & Fitness Pro - Frontend  

## 🌍 Descripción del Proyecto  

**Health & Fitness Pro** es una aplicación web diseñada para la **monitorización del estado físico** y el **seguimiento del progreso** de los usuarios en su entrenamiento y nutrición. La plataforma permite a los usuarios registrarse, establecer objetivos personalizados y recibir un plan de entrenamiento y nutrición adaptado a sus necesidades.  

🚀 **Estado del proyecto:** 80% completado. Faltan mejoras como cifrado de contraseñas con bcrypt, ajustes en diseño y algunas funcionalidades adicionales.  

🔗 **Accede a la aplicación directamente desde:**  
🌍 **[Health & Fitness Pro - DEMO](https://frontend-healt-fitness-pro.onrender.com/)**  

## 🌐 Despliegue en Producción  

El proyecto está desplegado en **Render**, con el **frontend** y **backend** alojados por separado:  

- **Frontend:** [https://frontend-healt-fitness-pro.onrender.com]  
- **Backend:** [https://healt-fitness-pro.onrender.com]

Esto permite a cualquier usuario probar la aplicación sin necesidad de instalación local.  

## 🛠️ Tecnologías utilizadas   

### ⚛️ **Frontend**  
- **React + TypeScript**: Librería de JavaScript para la construcción de interfaces dinámicas, con TypeScript para un tipado fuerte que mejora la seguridad y el control del código.  
- **React Hooks**:  
  - `useState`, `useEffect`, `useReducer`: Manejo de estado y efectos en los componentes.  
  - `useSelector`, `useDispatch`: Integración con Redux para la gestión global del estado.  
- **Redux + Redux Persist**: Manejo global del estado y persistencia de la sesión del usuario.  
- **Bootstrap**: Framework CSS para una interfaz responsiva y estilizada.  
- **SweetAlert2**: Notificaciones visuales para mejorar la experiencia del usuario.  
- **Axios**: Cliente HTTP para la comunicación con la API.  
- **React-ChartJS-2**: Generación de gráficos dinámicos para mostrar progresos.  
- **Variables de entorno (.env)**: Seguridad en las direcciones de la API y credenciales.  
- **FormData()**: Manejo de subida de imágenes y archivos al servidor.  
- **Efectos visuales**: Confeti, animaciones y feedback interactivo.  
- **Consumo de APIs externas**:  
  - **Wger API**: Obtención de información sobre entrenamientos.  
  - **ExerciseDB API**: Datos detallados sobre ejercicios y rutinas.  

## 📌 Funcionalidades principales  

✅ Registro e inicio de sesión de usuarios con persistencia de sesión.  
✅ Personalización del perfil con imagen de usuario.  
✅ Elección de un objetivo principal (**Perder peso, Ganar masa muscular, Mantenimiento**).  
✅ Rutina de ejercicios y plan nutricional adaptado al objetivo.  
✅ Registro de actividades diarias (**Ejercicio, calorías quemadas, peso actual, etc.**).  
✅ Visualización de progresos con gráficos dinámicos.  
✅ Feedback motivacional y efectos gráficos al alcanzar objetivos.  
✅ Calculadora de calorías y macronutrientes integrada.  

## 🖥️ Explicación del funcionamiento  

### **👤 Registro e Inicio de Sesión**  
- El usuario se registra proporcionando **nombre, género, edad, peso, altura, email y contraseña**.  
- Puede subir una imagen de perfil.  
- La sesión se mantiene con **Redux Persist**.  

### **🎯 Selección del Objetivo**  
- Al pulsar **"Get Started Now"**, el usuario elige entre:  
  - **Lose Weight (Perder Peso)**  
  - **Gain Muscle Mass (Ganar Masa Muscular)**  
  - **Maintenance (Mantenimiento)**  
- Se genera un plan basado en su elección.  

### **📊 Dashboard del Usuario**  
- Muestra sus datos personales y permite editarlos.  
- Permite establecer **metas específicas** dentro del objetivo general:  
  - Peso deseado.  
  - Porcentaje de grasa objetivo.  
  - Tiempo estimado para lograrlo.  

### **📅 Registro de Actividades**  
- Cada día el usuario puede registrar:  
  - **Fecha de la actividad.**  
  - **Tipo de ejercicio realizado.**  
  - **Duración en minutos.**  
  - **Calorías quemadas e ingeridas.**  
  - **Peso actual.**  
- Estos datos se almacenan en tablas y se visualizan en **gráficos dinámicos**.  

### **🏆 Feedback y Motivación**  
- Mensajes de apoyo conforme se acercan a los objetivos.  
- Efectos visuales (**confeti, alertas**) al completar metas.  

### **🧮 Calculadora Nutricional**  
- Permite calcular las **calorías y macronutrientes** según el objetivo del usuario.  

## 📈 Mejoras futuras  

- 🔒 **Cifrado de contraseñas con bcrypt.**  
- 🎨 **Mejoras en el diseño y estilos.**  
- 📊 **Optimización de gráficos y reportes de progreso.**  
- 📂 **Mejor estructura en la gestión de archivos y rutas.**  

## 🛠️ Backend (Repositorio separado)  

El backend está desarrollado con **Node.js + Express + MongoDB** bajo arquitectura **Modelo-Vista-Controlador (MVC)**.  

📌 **Repositorio Backend:** [https://github.com/LablancaDev/frontend-healt-fitness-pro]

## 📧 Contacto  

Si deseas más información sobre este proyecto, puedes escribirme a:  
✉️ [valenciano_david@hotmail.com]

👨‍💻 **Autor:** [D.R.L]

