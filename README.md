# Nutriburger

Página estática de fast food ecuatoriano hecha con HTML, CSS y JavaScript. No requiere servidor ni backend: el carrito se guarda en el navegador y el checkout prepara el pedido para enviarlo por WhatsApp.

La página abre en tema oscuro por defecto. El botón **Claro** del encabezado cambia el tema y recuerda la preferencia elegida en el navegador. Al pulsar una tarjeta del menú se pueden personalizar ingredientes, extras y bebida antes de agregar el producto al carrito.

## Personalizar el restaurante

Edita el objeto `RESTAURANT` al inicio de [app.js](./app.js):

- `whatsapp`: número internacional solo con dígitos, sin `+`, espacios ni guiones. Está configurado con el número del restaurante.
- `address` y `hours`: dirección y horario que se muestran en la página.
- `instagram`, `facebook` y `map`: enlaces de las redes y la ubicación correctas.
- `name`: nombre del restaurante.

Los platos, precios, categorías, ingredientes y fotos se editan en el arreglo `products` de `app.js`. Los extras están en `addOnsByCategory` y las bebidas en `drinks`. Los precios del ejemplo están en dólares estadounidenses. Reemplaza el menú, los precios y las fotos de muestra antes de publicar.

## Publicar en GitHub Pages

1. Sube `index.html`, `styles.css`, `app.js` y `README.md` a la rama del repositorio que usarás para GitHub Pages.
2. En GitHub, abre **Settings → Pages**.
3. En **Build and deployment**, elige **Deploy from a branch**, selecciona la rama y la carpeta raíz (`/`), y guarda.

No hay un proceso de compilación. Las imágenes y tipografías de muestra se cargan desde servicios externos, por lo que requieren conexión a internet.

## Pago y pedidos

El sitio no cobra tarjetas ni procesa pagos: al confirmar, abre WhatsApp con los artículos, cantidades, total estimado, nombre y modalidad seleccionada. El pago, la disponibilidad y el costo de envío se acuerdan directamente en WhatsApp.
