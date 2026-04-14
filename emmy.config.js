import { createConfig, Emmy } from 'emmy-dom/server'

// Importa tus utilidades necesarias
import { saveMarkdown } from './emmydocs'
import * as markdown from './app/Markdown'
import { app } from './app/App'

await saveMarkdown(Emmy, Object.keys(markdown))

// Configuración, la cual detectará y armará los componentes automáticamente
await createConfig({
  // source: Carpeta donde viven todos tus web components y hooks a exportar
  source: './app',
  
  // paths: Mapa de [Ruta en el router] -> [Archivo HTML a generar]
  paths: {
    '/': './index.html'
  },
  
  // template: Base HTML con {content}
  template: './template.html',
  
  // app: (Opcional) El componente inicial de la App.
  // Si se omite, buscará uno llamado `App` dentro de `source`.
  app,
  
  // dependencies: (Opcional) Código vanilla extra inyectado (polyfill globales si necesitas alguno particular en inline tag)
})
