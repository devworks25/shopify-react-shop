import shopifyClient from "./shopifyClient";

export async function getProducts({
  first = 20,
  query = "",
} = {}) {
  const QUERY = `
    query GetProducts($first: Int!, $query: String) {
      products(
        first: $first
        query: $query
      ) {
        nodes {
          id
          title
          handle
          description

          featuredImage {
            url
            altText
          }

          priceRange {
            minVariantPrice {
              amount
              currencyCode
            }
          }

          variants(first: 10) {
            nodes {
              id
              title
              availableForSale

              price {
                amount
                currencyCode
              }
            }
          }
        }
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(QUERY, {
    variables: {
      first,
      query: query || undefined,
    },
  });

  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return data.products.nodes;
}

export async function getProductByHandle(handle) {
  const QUERY = `
    query GetProduct($handle: String!) {
      product(handle: $handle) {
        id
        title
        handle
        description

        featuredImage {
          url
          altText
        }

        images(first: 10) {
          nodes {
            url
            altText
          }
        }

        priceRange {
          minVariantPrice {
            amount
            currencyCode
          }
          maxVariantPrice {
            amount
            currencyCode
          }
        }

        variants(first: 50) {
          nodes {
            id
            title
            availableForSale

            price {
              amount
              currencyCode
            }

            selectedOptions {
              name
              value
            }
          }
        }
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(QUERY, {
    variables: {
      handle,
    },
  });

  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return data.product;
}