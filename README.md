# AdookUp 🚀

Una plataforma web moderna y de alto rendimiento para agencias de marketing digital construida con Next.js 15 y React 19.

![AdookUp Banner](public/adookup-banner.png)

## Descripción 📌

AdookUp es una plataforma web sofisticada diseñada para agencias de marketing digital que les permite mostrar sus servicios, portafolio, testimonios de clientes y facilitar la comunicación con ellos. Con un diseño elegante, responsivo e interfaz de usuario intuitiva, AdookUp ayuda a las agencias a atraer leads, destacar casos de éxito y agilizar las interacciones con los clientes.

### Características ✨

- **Optimización SEO**: Implementación avanzada de SEO para mejor posicionamiento como agencia de marketing digital
- **Componentes UI Modernos**: Utiliza primitivos de Radix UI para elementos de interfaz accesibles y personalizables
- **Diseño Responsivo**: Diseño completamente adaptable que funciona en todos los dispositivos y tamaños de pantalla
- **Modo Oscuro/Claro**: Cambio de tema incorporado con next-themes
- **Animaciones Interactivas**: Animaciones fluidas y optimizadas para rendimiento con Framer Motion
- **Gestión de Formularios**: Validación avanzada de formularios con React Hook Form y Zod
- **Integración de Email**: Formulario de contacto para clientes potenciado por EmailJS
- **Visualización de Datos**: Gráficos y diagramas elegantes con Recharts
- **Componentes de Carrusel**: Deslizadores y carruseles de imágenes usando Embla
- **Notificaciones Toast**: Sistema de notificaciones elegante con Sonner
- **Componentes Accesibles**: Elementos UI compatibles con ARIA para máxima accesibilidad

## Tecnologías Utilizadas 🛠️

### Frontend
- ⚛️ **React 19** - Última versión con rendimiento mejorado
- 🔄 **Next.js 15** - Framework de React con componentes de servidor y enrutador de aplicaciones
- 🔷 **TypeScript** - Desarrollo de código con tipado seguro
- 🎨 **Tailwind CSS** - Framework CSS de utilidades
- 🎭 **Framer Motion** - Biblioteca de animaciones
- 💅 **Radix UI** - Componentes UI accesibles sin estilos predefinidos
- 🌓 **next-themes** - Gestión de temas

### Integración Backend
- 📧 **EmailJS** - Envío de emails sin necesidad de backend
- 🔄 **API Routes** - Endpoints API de Next.js para lógica del lado del servidor

### Herramientas de Desarrollo
- 📦 **npm/pnpm** - Gestión de paquetes
- 🧪 **TypeScript** - Verificación de tipos estáticos
- 🛠️ **ESLint** - Análisis de código
- 🎯 **Git & GitHub** - Control de versiones

## Instalación y Configuración 📥

Sigue estos pasos para ejecutar AdookUp en tu máquina local:

```bash
# Clonar el repositorio
git clone https://github.com/tuusuario/adookup.git
cd adookup

# Instalar dependencias
npm install
# o
pnpm install

# Configurar variables de entorno
cp .env.example .env.local
# Luego edita el archivo .env.local con tu configuración

# Iniciar el servidor de desarrollo
npm run dev
# o
pnpm dev
```

## Comandos de Desarrollo 🧑‍💻

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm run start

# Ejecutar linter de código
npm run lint
```

## Estructura del Proyecto 📁

```
adookup/
├── app/               # Archivos del App Router de Next.js
│   ├── (auth)/        # Rutas de autenticación
│   ├── (marketing)/   # Páginas de marketing
│   ├── api/           # Rutas de API
│   ├── layout.tsx     # Diseño raíz
│   └── page.tsx       # Página principal
├── components/        # Componentes UI reutilizables
│   ├── ui/            # Componentes UI principales
│   └── sections/      # Secciones de páginas
├── hooks/             # Hooks personalizados de React
├── lib/               # Funciones de utilidad y bibliotecas
├── public/            # Activos estáticos
└── styles/            # Estilos globales
```

## Dependencias Principales 📚

### Componentes UI
- **Radix UI**: Suite completa de primitivos UI accesibles que forman la base de nuestro sistema de componentes
- **Shadcn UI**: Biblioteca de componentes construida sobre Radix UI y Tailwind CSS
- **class-variance-authority**: Para crear estilos de componentes con variantes

### Animación e Interacción
- **Framer Motion**: Para crear animaciones fluidas basadas en física
- **Embla Carousel**: Carrusel/deslizador flexible

### Gestión de Formularios
- **React Hook Form**: Gestión del estado de formularios
- **Zod**: Validación de esquemas

### Comunicación
- **EmailJS**: Envío de emails desde el lado del cliente

## Guía Básica de Uso 🚀

### Proveedor de Temas

Envuelve tus componentes con el `ThemeProvider` para soporte de modo oscuro/claro:

```tsx
import { ThemeProvider } from "@/components/theme-provider";

export default function App({ children }) {
  return <ThemeProvider>{children}</ThemeProvider>;
}
```

### Integración de Formulario de Contacto

```tsx
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import emailjs from "@emailjs/browser";
import { z } from "zod";

// Define el esquema del formulario
const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export default function ContactForm() {
  const form = useForm({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data) => {
    await emailjs.send(
      "TU_SERVICE_ID",
      "TU_TEMPLATE_ID",
      data,
      "TU_PUBLIC_KEY"
    );
  };

  return (
    <form onSubmit={form.handleSubmit(onSubmit)}>
      {/* Campos del formulario */}
    </form>
  );
}
```

## Contribuciones 🤝

¡Las contribuciones son bienvenidas! No dudes en enviar un Pull Request.

## Licencia 📝

Este proyecto está licenciado bajo la Licencia MIT - consulta el archivo LICENSE para más detalles.
