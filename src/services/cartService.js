import shopifyClient from "./shopifyClient";

const CART_FIELDS = `
  id
  checkoutUrl
  totalQuantity

  cost {
    subtotalAmount {
      amount
      currencyCode
    }

    totalAmount {
      amount
      currencyCode
    }
  }

  lines(first: 50) {
    nodes {
      id
      quantity

      merchandise {
        ... on ProductVariant {
          id
          title

          product {
            id
            title
            handle

            featuredImage {
              url
              altText
            }
          }

          price {
            amount
            currencyCode
          }
        }
      }
    }
  }
`;

export async function createCart(variantId, quantity = 1) {
  const MUTATION = `
    mutation CreateCart($input: CartInput) {
      cartCreate(input: $input) {
        cart {
          ${CART_FIELDS}
        }

        userErrors {
          field
          message
        }

        warnings {
          code
          message
        }
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(MUTATION, {
    variables: {
      input: {
        lines: [
          {
            merchandiseId: variantId,
            quantity,
          },
        ],
      },
    },
  });

  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  const userErrors = data.cartCreate.userErrors;

  if (userErrors.length) {
    throw new Error(userErrors[0].message);
  }

  return data.cartCreate.cart;
}

export async function addToCart(cartId, variantId, quantity = 1) {
  const MUTATION = `
    mutation AddToCart(
      $cartId: ID!
      $lines: [CartLineInput!]!
    ) {
      cartLinesAdd(
        cartId: $cartId
        lines: $lines
      ) {
        cart {
          ${CART_FIELDS}
        }

        userErrors {
          field
          message
        }

        warnings {
          code
          message
        }
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(MUTATION, {
    variables: {
      cartId,
      lines: [
        {
          merchandiseId: variantId,
          quantity,
        },
      ],
    },
  });

  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  const userErrors = data.cartLinesAdd.userErrors;

  if (userErrors.length) {
    throw new Error(userErrors[0].message);
  }

  return data.cartLinesAdd.cart;
}

export async function getCart(cartId) {
  const QUERY = `
    query GetCart($cartId: ID!) {
      cart(id: $cartId) {
        ${CART_FIELDS}
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(QUERY, {
    variables: {
      cartId,
    },
  });

  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return data.cart;
}

export async function removeCartLine(cartId, lineId) {
  const MUTATION = `
    mutation RemoveCartLine(
      $cartId: ID!
      $lineIds: [ID!]!
    ) {
      cartLinesRemove(
        cartId: $cartId
        lineIds: $lineIds
      ) {
        cart {
          ${CART_FIELDS}
        }

        userErrors {
          field
          message
        }
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(MUTATION, {
    variables: {
      cartId,
      lineIds: [lineId],
    },
  });

  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return data.cartLinesRemove.cart;
}