
# Shopify React Shop

A modern headless Shopify storefront built with **React, Vite, Tailwind CSS, React Router, and Shopify Storefront API**.

The project uses a service-based architecture so Shopify API logic stays separate from React UI components.

## Tech Stack

* React 19
* Vite
* Tailwind CSS 4
* React Router
* Shopify Storefront API
* `@shopify/storefront-api-client`
* JavaScript / JSX

## Project Structure

```text
shopify-react-shop/
│
├── public/
│
├── src/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Header.jsx
│   │   │   └── Footer.jsx
│   │   │
│   │   ├── products/
│   │   │   ├── ProductCard.jsx
│   │   │   ├── ProductGrid.jsx
│   │   │   └── ProductFilter.jsx
│   │   │
│   │   └── cart/
│   │       ├── CartItem.jsx
│   │       └── CartSummary.jsx
│   │
│   ├── pages/
│   │   ├── HomePage.jsx
│   │   ├── ProductsPage.jsx
│   │   ├── ProductDetailsPage.jsx
│   │   └── CartPage.jsx
│   │
│   ├── services/
│   │   ├── shopifyClient.js
│   │   ├── productService.js
│   │   ├── collectionService.js
│   │   └── cartService.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── .env
├── .env.example
├── .gitignore
├── index.html
├── package.json
└── vite.config.js
```

## Features

* Shopify product listing
* Product search
* Product details
* Product variants
* Add to cart
* Remove from cart
* Cart quantity
* Shopify checkout
* React Router navigation
* Responsive Tailwind UI
* Shopify API service layer
* Environment-based Shopify configuration

## Prerequisites

Make sure you have:

* Node.js installed
* npm installed
* A Shopify store
* Shopify Storefront API access
* Storefront API access token

Check Node.js:

```bash
node --version
```

Check npm:

```bash
npm --version
```

## Installation

Clone the repository:

```bash
git clone <your-repository-url>
```

Go into the project:

```bash
cd shopify-react-shop
```

Install dependencies:

```bash
npm install
```

## Environment Configuration

Create a `.env` file in the project root:

```env
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your_storefront_token
VITE_SHOPIFY_API_VERSION=2026-07
```

Do not commit `.env` to Git.

Use `.env.example` as a template:

```env
VITE_SHOPIFY_STORE_DOMAIN=your-store.myshopify.com
VITE_SHOPIFY_STOREFRONT_TOKEN=your_storefront_token
VITE_SHOPIFY_API_VERSION=2026-07
```

## Start Development Server

Run:

```bash
npm run dev
```

The application will normally be available at:

```text
http://localhost:5173/
```

## Available Routes

| Route               | Description     |
| ------------------- | --------------- |
| `/`                 | Home page       |
| `/products`         | Product listing |
| `/products/:handle` | Product details |
| `/cart`             | Shopping cart   |

Example:

```text
http://localhost:5173/
http://localhost:5173/products
http://localhost:5173/products/t-shirt
http://localhost:5173/cart
```

## Build for Production

Create a production build:

```bash
npm run build
```

Preview the production build:

```bash
npm run preview
```

## Shopify Architecture

The application follows this architecture:

```text
React Components
       │
       ▼
Pages
       │
       ▼
Services
       │
       ▼
Shopify Storefront API
       │
       ▼
Shopify Store
```

For example:

```text
ProductsPage
      │
      ▼
productService.js
      │
      ▼
shopifyClient.js
      │
      ▼
Shopify Storefront API
      │
      ▼
Shopify Products
```

## Services

### `shopifyClient.js`

Creates the Shopify Storefront API client.

### `productService.js`

Handles:

* Product listing
* Product search
* Product details
* Product variants

### `collectionService.js`

Handles Shopify collections.

### `cartService.js`

Handles:

* Create cart
* Add product to cart
* Get cart
* Remove cart items
* Shopify checkout URL

## Tailwind CSS

Tailwind CSS is used for the application UI.

The main stylesheet contains:

```css
@import "tailwindcss";
```

Tailwind classes are used directly inside React components.

Example:

```jsx
<button className="rounded-lg bg-black px-5 py-3 text-white hover:bg-gray-800">
  Add to Cart
</button>
```

## React Router

Routes are configured in `App.jsx`.

Example:

```jsx
<Route
  path="/products"
  element={<ProductsPage />}
/>
```

Product details use a dynamic route:

```jsx
<Route
  path="/products/:handle"
  element={<ProductDetailsPage />}
/>
```

## Security

Never commit Shopify credentials.

The following file should remain local:

```text
.env
```

Make sure `.gitignore` contains:

```gitignore
.env
.env.local
.env.*.local
```

Only use a **public Storefront API token** in a browser-based React application. Private credentials should remain on a server-side application.

## Git

Initialize the repository:

```bash
git init
```

Add files:

```bash
git add .
```

Check files before committing:

```bash
git status
```

Commit:

```bash
git commit -m "Initial Shopify React store"
```

## Development Workflow

Typical development workflow:

```text
1. Start Shopify Store
        ↓
2. Configure Storefront API
        ↓
3. Configure .env
        ↓
4. npm install
        ↓
5. npm run dev
        ↓
6. Develop React components
        ↓
7. Test Shopify API
        ↓
8. npm run build
```

## Future Improvements

Possible additions:

* Collection pages
* Advanced product filtering
* Pagination
* Product sorting
* Cart quantity updates
* Wishlist
* Customer accounts
* Login / registration
* Order history
* Responsive mobile navigation
* Product reviews
* Discount codes
* Shipping information
* SEO metadata
* Error boundaries
* Loading skeletons
* Toast notifications
* State management
* Automated tests

## License

This project is for learning and development purposes.
