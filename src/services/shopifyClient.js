import { createStorefrontApiClient } from "@shopify/storefront-api-client";

const storeDomain = import.meta.env.VITE_SHOPIFY_STORE_DOMAIN;
const apiVersion = import.meta.env.VITE_SHOPIFY_API_VERSION;
const publicAccessToken = import.meta.env.VITE_SHOPIFY_STOREFRONT_TOKEN;

if (!storeDomain || !apiVersion || !publicAccessToken) {
  throw new Error("Missing Shopify environment variables");
}

const shopifyClient = createStorefrontApiClient({
  storeDomain: storeDomain.startsWith("http")
    ? storeDomain
    : `https://${storeDomain}`,
  apiVersion,
  publicAccessToken,
});

export default shopifyClient;
