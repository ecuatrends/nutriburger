const RESTAURANT = {
  name: "Nutriburger",
  whatsapp: "593959021479",
  address: "Tu dirección aquí",
  hours: "Lun–Sáb · 12:00–21:00",
  instagram: "https://instagram.com/",
  facebook: "https://facebook.com/",
  map: "https://maps.google.com/?q=restaurante"
};

const products = [
  {
    id: "clasica-barrio",
    name: "La clásica del barrio",
    category: "hamburguesas",
    label: "La favorita",
    description: "Carne a la parrilla, queso, lechuga, tomate y nuestra salsa de la casa.",
    ingredients: ["Pan brioche", "Carne a la parrilla", "Queso", "Lechuga", "Tomate", "Salsa de la casa"],
    price: 7.5,
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80",
    alt: "Hamburguesa clásica con queso y vegetales"
  },
  {
    id: "doble-brasa",
    name: "Doble brasa",
    category: "hamburguesas",
    label: "Para los valientes",
    description: "Doble carne, doble queso, cebolla caramelizada y salsa ahumada.",
    ingredients: ["Pan brioche", "Doble carne", "Doble queso", "Cebolla caramelizada", "Salsa ahumada"],
    price: 9.5,
    image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80",
    alt: "Hamburguesa doble con queso"
  },
  {
    id: "menestra-carne",
    name: "Menestra con carne",
    category: "menestras",
    label: "Bien ecuatoriano",
    description: "Arroz blanco, menestra de fréjol y carne a la plancha.",
    ingredients: ["Arroz blanco", "Menestra de fréjol", "Carne a la plancha", "Curtido"],
    price: 7,
    image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=80",
    alt: "Plato casero de arroz con acompañamientos"
  },
  {
    id: "menestra-pollo",
    name: "Menestra con pollo",
    category: "menestras",
    label: "Sabor de casa",
    description: "Arroz, menestra cremosa y pollo jugoso a la parrilla.",
    ingredients: ["Arroz blanco", "Menestra cremosa", "Pollo a la parrilla", "Curtido"],
    price: 6.5,
    image: "https://images.unsplash.com/photo-1532550907401-a500c9a57435?auto=format&fit=crop&w=700&q=80",
    alt: "Pollo a la parrilla con arroz y acompañamientos"
  },
  {
    id: "seco-pollo",
    name: "Seco de pollo",
    category: "secos",
    label: "Receta de casa",
    description: "Pollo cocinado lento en su juguito, arroz y maduro doradito.",
    ingredients: ["Pollo guisado", "Arroz blanco", "Maduro", "Curtido"],
    price: 7,
    image: "https://images.unsplash.com/photo-1604908176997-125f25cc6f3d?auto=format&fit=crop&w=700&q=80",
    alt: "Plato de pollo guisado con arroz"
  },
  {
    id: "seco-carne",
    name: "Seco de carne",
    category: "secos",
    label: "Bien servido",
    description: "Carne suave, arroz blanco y maduro. Un clásico que nunca falla.",
    ingredients: ["Carne guisada", "Arroz blanco", "Maduro", "Curtido"],
    price: 8,
    image: "https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=700&q=80",
    alt: "Plato de carne guisada y arroz"
  },
  {
    id: "papas",
    name: "Papas a la francesa",
    category: "extras",
    label: "Para compartir",
    description: "Doraditas por fuera, suaves por dentro. Con salsa de la casa.",
    ingredients: ["Papas", "Salsa de la casa"],
    price: 3,
    image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80",
    alt: "Papas fritas doradas"
  },
  {
    id: "maduro-queso",
    name: "Maduro con queso",
    category: "extras",
    label: "Dulce antojo",
    description: "Maduro calientito con queso derretido. Pídelo para cerrar con broche de oro.",
    ingredients: ["Maduro", "Queso"],
    price: 3.5,
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?auto=format&fit=crop&w=700&q=80",
    alt: "Acompañamiento recién horneado"
  }
];

const addOnsByCategory = {
  hamburguesas: [
    { id: "queso-extra", name: "Queso extra", price: 1 },
    { id: "huevo", name: "Huevo frito", price: 0.75 },
    { id: "tocino", name: "Tocino", price: 1.5 },
    { id: "carne-extra", name: "Carne extra", price: 2.5 }
  ],
  menestras: [
    { id: "huevo", name: "Huevo frito", price: 0.75 },
    { id: "maduro-extra", name: "Maduro extra", price: 1 },
    { id: "arroz-extra", name: "Porción extra de arroz", price: 1 },
    { id: "menestra-extra", name: "Porción extra de menestra", price: 1.5 }
  ],
  secos: [
    { id: "huevo", name: "Huevo frito", price: 0.75 },
    { id: "maduro-extra", name: "Maduro extra", price: 1 },
    { id: "arroz-extra", name: "Porción extra de arroz", price: 1 },
    { id: "menestra-extra", name: "Porción extra de menestra", price: 1.5 }
  ],
  extras: [
    { id: "queso-extra", name: "Queso extra", price: 1 },
    { id: "salsa-extra", name: "Salsa de la casa extra", price: 0.5 }
  ]
};

const drinks = [
  { id: "cola", name: "Cola personal", price: 1.5 },
  { id: "limonada", name: "Limonada", price: 2 },
  { id: "agua", name: "Agua", price: 1 }
];

const CART_STORAGE_KEY = "brasa-barrio-cart";
const THEME_STORAGE_KEY = "nutriburger-theme";
const MESSAGE_EMOJI = {
  greeting: "\u{1F44B}",
  burger: "\u{1F354}",
  order: "\u{1F6D2}",
  remove: "\u{1F6AB}",
  extra: "\u{2795}",
  drink: "\u{1F964}",
  total: "\u{1F4B0}",
  delivery: "\u{1F4E6}",
  location: "\u{1F4CD}",
  note: "\u{1F4DD}",
  thanks: "\u{1F60A}"
};
let cart = loadCart();
let toastTimeout;
let selectedProduct = null;

const productGrid = document.querySelector("#product-grid");
const cartPanel = document.querySelector("#cart-panel");
const cartOverlay = document.querySelector("#cart-overlay");
const cartItems = document.querySelector("#cart-items");
const cartEmpty = document.querySelector("#cart-empty");
const checkoutForm = document.querySelector("#checkout-form");
const orderType = document.querySelector("#order-type");
const addressInput = document.querySelector("#delivery-address");
const addressLabel = document.querySelector("#address-label");
const themeToggle = document.querySelector("#theme-toggle");
const productDialog = document.querySelector("#product-dialog");
const customizationForm = document.querySelector("#customization-form");
const customizationContent = document.querySelector("#customization-content");

function getAddOns(product) {
  return addOnsByCategory[product.category] || [];
}

function getDrink(id) {
  return drinks.find((drink) => drink.id === id);
}

function getLineKey(productId, removedIngredients = [], addOnIds = [], drinkId = "") {
  const options = JSON.stringify({
    removedIngredients: [...removedIngredients].sort(),
    addOnIds: [...addOnIds].sort(),
    drinkId
  });
  return `${productId}::${encodeURIComponent(options)}`;
}

function getLinePrice(product, item) {
  const addOnTotal = getAddOns(product)
    .filter((addOn) => item.addOnIds.includes(addOn.id))
    .reduce((total, addOn) => total + addOn.price, 0);
  const drink = getDrink(item.drinkId);
  return product.price + addOnTotal + (drink?.price || 0);
}

function applyTheme(theme) {
  const isDark = theme === "dark";
  document.documentElement.dataset.theme = isDark ? "dark" : "light";
  themeToggle.setAttribute("aria-label", `Cambiar a modo ${isDark ? "claro" : "oscuro"}`);
  themeToggle.setAttribute("aria-pressed", String(isDark));
  themeToggle.querySelector(".theme-icon").textContent = isDark ? "☀" : "☾";
  themeToggle.querySelector(".theme-label").textContent = isDark ? "Claro" : "Oscuro";
}

function loadTheme() {
  try {
    const savedTheme = localStorage.getItem(THEME_STORAGE_KEY);
    return savedTheme === "light" ? "light" : "dark";
  } catch (error) {
    console.error("No se pudo recuperar el tema guardado.", error);
    return "dark";
  }
}

function saveTheme(theme) {
  try {
    localStorage.setItem(THEME_STORAGE_KEY, theme);
  } catch (error) {
    console.error("No se pudo guardar el tema en este navegador.", error);
    showToast("No pudimos guardar tu preferencia de tema.");
  }
}

function loadCart() {
  try {
    const saved = JSON.parse(localStorage.getItem(CART_STORAGE_KEY) || "{}");
    if (!saved || typeof saved !== "object" || Array.isArray(saved)) return {};
    const restoredCart = {};

    for (const [savedKey, savedItem] of Object.entries(saved)) {
      const legacyProduct = products.find((product) => product.id === savedKey);
      const productId = typeof savedItem === "number" ? legacyProduct?.id : savedItem?.productId;
      const product = products.find((item) => item.id === productId);
      const quantity = typeof savedItem === "number" ? savedItem : savedItem?.quantity;
      if (!product || !Number.isInteger(quantity) || quantity <= 0 || quantity > 99) continue;

      const removedIngredients = Array.isArray(savedItem?.removedIngredients)
        ? savedItem.removedIngredients.filter((ingredient) => product.ingredients.includes(ingredient))
        : [];
      const addOnIds = Array.isArray(savedItem?.addOnIds)
        ? savedItem.addOnIds.filter((id) => getAddOns(product).some((addOn) => addOn.id === id))
        : [];
      const drinkId = typeof savedItem?.drinkId === "string" && getDrink(savedItem.drinkId)
        ? savedItem.drinkId
        : "";
      const lineKey = getLineKey(product.id, removedIngredients, addOnIds, drinkId);
      const existingQuantity = restoredCart[lineKey]?.quantity || 0;
      restoredCart[lineKey] = {
        productId: product.id,
        quantity: Math.min(existingQuantity + quantity, 99),
        removedIngredients,
        addOnIds,
        drinkId
      };
    }

    return restoredCart;
  } catch (error) {
    console.error("No se pudo recuperar el carrito guardado.", error);
    return {};
  }
}

function saveCart() {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
  } catch (error) {
    console.error("No se pudo guardar el carrito en este navegador.", error);
    showToast("No pudimos guardar tu carrito en este dispositivo.");
  }
}

function formatPrice(price) {
  return new Intl.NumberFormat("es-EC", { style: "currency", currency: "USD" }).format(price);
}

function renderProducts(category = "todos") {
  const visibleProducts = category === "todos"
    ? products
    : products.filter((product) => product.category === category);

  productGrid.innerHTML = visibleProducts.map((product) => `
    <article class="product-card" data-product-card="${product.id}" tabindex="0" role="group" aria-label="Personalizar ${product.name}">
      <div class="product-image-wrap">
        <img class="product-image" src="${product.image}" alt="${product.alt}" loading="lazy" />
        <span class="product-tag">${product.label}</span>
      </div>
      <div class="product-info">
        <div class="product-title-row">
          <h3>${product.name}</h3>
          <span class="product-price">${formatPrice(product.price)}</span>
        </div>
        <p class="product-description">${product.description}</p>
        <button class="add-button" type="button" data-customize="${product.id}">
          <span>Personalizar pedido</span><span aria-hidden="true">＋</span>
        </button>
      </div>
    </article>
  `).join("");
}

function getCartQuantity() {
  return Object.values(cart).reduce((sum, item) => sum + item.quantity, 0);
}

function getCartTotal() {
  return Object.values(cart).reduce((sum, item) => {
    const product = products.find((entry) => entry.id === item.productId);
    return sum + (product ? getLinePrice(product, item) * item.quantity : 0);
  }, 0);
}

function renderCart() {
  const entries = Object.entries(cart)
    .map(([lineKey, item]) => ({
      lineKey,
      item,
      product: products.find((product) => product.id === item.productId)
    }))
    .filter((entry) => entry.product);
  const quantity = getCartQuantity();
  document.querySelector("#cart-count").textContent = quantity;
  document.querySelector("#cart-heading-count").textContent = `(${quantity})`;
  document.querySelector("#cart-total").textContent = formatPrice(getCartTotal());
  cartEmpty.hidden = entries.length > 0;
  checkoutForm.hidden = entries.length === 0;

  cartItems.innerHTML = entries.map(({ lineKey, item, product }) => {
    const optionDetails = [
      item.removedIngredients.length
        ? `Sin: ${item.removedIngredients.join(", ")}`
        : "",
      item.addOnIds.length
        ? `Extras: ${getAddOns(product).filter((addOn) => item.addOnIds.includes(addOn.id)).map((addOn) => addOn.name).join(", ")}`
        : "",
      getDrink(item.drinkId) ? `Bebida: ${getDrink(item.drinkId).name}` : ""
    ].filter(Boolean);

    return `
    <div class="cart-row">
      <div>
        <div class="cart-row-name">${product.name}</div>
        <div class="cart-row-options">${optionDetails.length ? optionDetails.join(" · ") : "Preparado como viene"}</div>
        <div class="cart-row-price">${formatPrice(getLinePrice(product, item))} c/u</div>
      </div>
      <div class="quantity-control" aria-label="Cantidad de ${product.name}">
        <button type="button" data-quantity="${lineKey}" data-change="-1" aria-label="Quitar uno de ${product.name}">−</button>
        <span>${item.quantity}</span>
        <button type="button" data-quantity="${lineKey}" data-change="1" aria-label="Agregar uno de ${product.name}">+</button>
      </div>
    </div>
  `;
  }).join("");
}

function updateCustomizationTotal() {
  if (!selectedProduct) return;
  const formData = new FormData(customizationForm);
  const addOnIds = formData.getAll("addOns");
  const drink = getDrink(formData.get("drink"));
  const addOnTotal = getAddOns(selectedProduct)
    .filter((addOn) => addOnIds.includes(addOn.id))
    .reduce((total, addOn) => total + addOn.price, 0);

  document.querySelector("#customization-total").textContent = formatPrice(
    selectedProduct.price + addOnTotal + (drink?.price || 0)
  );
}

function openProductDialog(productId) {
  selectedProduct = products.find((product) => product.id === productId);
  if (!selectedProduct) return;

  const addOnOptions = getAddOns(selectedProduct);
  customizationContent.innerHTML = `
    <div class="customization-product">
      <img src="${selectedProduct.image}" alt="${selectedProduct.alt}" />
      <div>
        <h2 id="customization-title">${selectedProduct.name}</h2>
        <p>${selectedProduct.description}</p>
        <strong>${formatPrice(selectedProduct.price)}</strong>
      </div>
    </div>
    <fieldset class="customization-options">
      <legend>Ingredientes <span>Toca para quitar lo que no quieras</span></legend>
      <div class="option-list">
        ${selectedProduct.ingredients.map((ingredient) => `
          <label class="option-row">
            <span>${ingredient}</span>
            <input type="checkbox" name="ingredients" value="${ingredient}" checked />
          </label>
        `).join("")}
      </div>
    </fieldset>
    <fieldset class="customization-options">
      <legend>¿Le agregamos algo?</legend>
      <div class="option-list">
        ${addOnOptions.map((addOn) => `
          <label class="option-row">
            <span>${addOn.name}</span>
            <span class="option-choice">
              <span>+${formatPrice(addOn.price)}</span>
              <input type="checkbox" name="addOns" value="${addOn.id}" />
            </span>
          </label>
        `).join("")}
      </div>
    </fieldset>
    <div class="drink-option">
      <label for="customization-drink">¿Una bebida?</label>
      <select id="customization-drink" name="drink">
        <option value="">No, gracias</option>
        ${drinks.map((drink) => `
          <option value="${drink.id}">${drink.name} · +${formatPrice(drink.price)}</option>
        `).join("")}
      </select>
    </div>
  `;

  customizationForm.reset();
  productDialog.showModal();
  updateCustomizationTotal();
}

function addToCart(product, options) {
  const lineKey = getLineKey(
    product.id,
    options.removedIngredients,
    options.addOnIds,
    options.drinkId
  );
  const currentQuantity = cart[lineKey]?.quantity || 0;
  cart[lineKey] = {
    productId: product.id,
    quantity: Math.min(currentQuantity + 1, 99),
    ...options
  };
  saveCart();
  renderCart();
  showToast(`${product.name} agregado al pedido`);
}

function changeQuantity(lineKey, amount) {
  if (!cart[lineKey]) return;
  const nextQuantity = cart[lineKey].quantity + amount;
  if (nextQuantity <= 0) delete cart[lineKey];
  else cart[lineKey].quantity = Math.min(nextQuantity, 99);
  saveCart();
  renderCart();
}

function setCartOpen(isOpen) {
  cartPanel.classList.toggle("open", isOpen);
  cartPanel.setAttribute("aria-hidden", String(!isOpen));
  cartOverlay.hidden = !isOpen;
  document.body.classList.toggle("cart-open", isOpen);
  if (isOpen) document.querySelector("#close-cart").focus();
  else document.querySelector("#open-cart").focus();
}

function showToast(message) {
  const toast = document.querySelector("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  window.clearTimeout(toastTimeout);
  toastTimeout = window.setTimeout(() => toast.classList.remove("show"), 2400);
}

function updateOrderType() {
  const isDelivery = orderType.value === "Envío a domicilio";
  addressInput.hidden = !isDelivery;
  addressLabel.hidden = !isDelivery;
  addressInput.required = isDelivery;
}

function configureRestaurant() {
  document.title = `${RESTAURANT.name} — Fast food con sabor ecuatoriano`;
  document.querySelector("#restaurant-address").textContent = RESTAURANT.address;
  document.querySelector("#restaurant-hours").textContent = RESTAURANT.hours;
  document.querySelector("#location-link").href = RESTAURANT.map;
  document.querySelector("#instagram-link").href = RESTAURANT.instagram;
  document.querySelector("#facebook-link").href = RESTAURANT.facebook;
  document.querySelector("#whatsapp-link").href = `https://wa.me/${RESTAURANT.whatsapp}`;
  document.querySelector("#current-year").textContent = new Date().getFullYear();
}

document.querySelector(".category-list").addEventListener("click", (event) => {
  const button = event.target.closest("[data-category]");
  if (!button) return;
  document.querySelectorAll(".category-chip").forEach((chip) => chip.classList.remove("active"));
  button.classList.add("active");
  renderProducts(button.dataset.category);
});

productGrid.addEventListener("click", (event) => {
  const productCard = event.target.closest("[data-product-card]");
  if (!productCard) return;
  openProductDialog(productCard.dataset.productCard);
});

productGrid.addEventListener("keydown", (event) => {
  const productCard = event.target.closest("[data-product-card]");
  if (!productCard || event.target !== productCard || !["Enter", " "].includes(event.key)) return;
  event.preventDefault();
  openProductDialog(productCard.dataset.productCard);
});

customizationForm.addEventListener("change", updateCustomizationTotal);
customizationForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!selectedProduct) return;

  const formData = new FormData(customizationForm);
  const selectedIngredients = formData.getAll("ingredients");
  const options = {
    removedIngredients: selectedProduct.ingredients.filter((ingredient) => !selectedIngredients.includes(ingredient)),
    addOnIds: formData.getAll("addOns"),
    drinkId: formData.get("drink") || ""
  };
  addToCart(selectedProduct, options);
  productDialog.close();
});

customizationForm.addEventListener("input", updateCustomizationTotal);
document.querySelector("#close-product-dialog").addEventListener("click", () => productDialog.close());
productDialog.addEventListener("click", (event) => {
  if (event.target === productDialog) productDialog.close();
});

cartItems.addEventListener("click", (event) => {
  const button = event.target.closest("[data-quantity]");
  if (button) changeQuantity(button.dataset.quantity, Number(button.dataset.change));
});

document.querySelector("#open-cart").addEventListener("click", () => setCartOpen(true));
themeToggle.addEventListener("click", () => {
  const theme = document.documentElement.dataset.theme === "dark" ? "light" : "dark";
  applyTheme(theme);
  saveTheme(theme);
});
document.querySelector("#close-cart").addEventListener("click", () => setCartOpen(false));
cartOverlay.addEventListener("click", () => setCartOpen(false));
document.querySelector("#browse-menu").addEventListener("click", () => {
  setCartOpen(false);
  document.querySelector("#menu").scrollIntoView({ behavior: "smooth" });
});
orderType.addEventListener("change", updateOrderType);

checkoutForm.addEventListener("submit", (event) => {
  event.preventDefault();
  if (!checkoutForm.reportValidity()) return;
  if (!/^\d{8,15}$/.test(RESTAURANT.whatsapp)) {
    showToast("Revisa el número de WhatsApp del restaurante en app.js.");
    return;
  }

  const formData = new FormData(checkoutForm);
  const lines = Object.values(cart).flatMap((item) => {
    const product = products.find((entry) => entry.id === item.productId);
    if (!product) return [];
    const details = [
      item.removedIngredients.length ? `   ${MESSAGE_EMOJI.remove} Sin: ${item.removedIngredients.join(", ")}` : "",
      item.addOnIds.length
        ? `   ${MESSAGE_EMOJI.extra} Extras: ${getAddOns(product).filter((addOn) => item.addOnIds.includes(addOn.id)).map((addOn) => addOn.name).join(", ")}`
        : "",
      getDrink(item.drinkId) ? `   ${MESSAGE_EMOJI.drink} Bebida: ${getDrink(item.drinkId).name}` : ""
    ].filter(Boolean);

    return [
      `${MESSAGE_EMOJI.burger} ${item.quantity} x *${product.name}* - ${formatPrice(getLinePrice(product, item) * item.quantity)}`,
      ...details
    ];
  });
  const details = [
    `¡Hola, Nutriburger! ${MESSAGE_EMOJI.greeting} ${MESSAGE_EMOJI.burger}`,
    `Soy *${formData.get("name")}* y quisiera hacer este pedido:`,
    "",
    `${MESSAGE_EMOJI.order} *Mi pedido*`,
    ...lines,
    "",
    `${MESSAGE_EMOJI.total} *Total estimado: ${formatPrice(getCartTotal())}*`,
    `${MESSAGE_EMOJI.delivery} *Entrega:* ${formData.get("orderType")}`,
    formData.get("address") ? `${MESSAGE_EMOJI.location} *Dirección:* ${formData.get("address")}` : "",
    formData.get("notes") ? `${MESSAGE_EMOJI.note} *Nota:* ${formData.get("notes")}` : "",
    "",
    `¿Me ayudan confirmando disponibilidad y cómo puedo realizar el pago? ¡Gracias! ${MESSAGE_EMOJI.thanks}`
  ].filter(Boolean);

  const whatsappUrl = new URL(`https://wa.me/${RESTAURANT.whatsapp}`);
  whatsappUrl.searchParams.set("text", details.join("\n"));
  window.open(whatsappUrl.toString(), "_blank", "noopener,noreferrer");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && cartPanel.classList.contains("open")) setCartOpen(false);
});

configureRestaurant();
applyTheme(loadTheme());
renderProducts();
renderCart();
updateOrderType();
