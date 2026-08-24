import shopifyClient from "./shopifyClient";

const MENU_QUERY = `
  query GetMenu($handle: String!) {
    menu(handle: $handle) {
      id
      handle
      title
      items {
        id
        title
        url
        items {
          id
          title
          url
          items {
            id
            title
            url
          }
        }
      }
    }
  }
`;

export async function getShopifyMenu(handle = "main-menu") {
  try {
    const { data, errors } = await shopifyClient.request(
      MENU_QUERY,
      {
        variables: {
          handle,
        },
      }
    );

    if (errors?.length) {
      console.error("Shopify GraphQL errors:", errors);
      throw new Error("Failed to fetch Shopify menu");
    }

    return data?.menu || null;
  } catch (error) {
    console.error("getShopifyMenu error:", error);
    throw error;
  }
}