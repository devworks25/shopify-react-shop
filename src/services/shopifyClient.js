import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const shopifyClient = createStorefrontApiClient({
  storeDomain: `https://${import.meta.env.VITE_SHOPIFY_STORE_DOMAIN}`,
  apiVersion: import.meta.env.VITE_SHOPIFY_API_VERSION,
  publicAccessToken: import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN,
});

export default shopifyClient;