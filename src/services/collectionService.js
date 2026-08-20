import shopifyClient from "./shopifyClient";

export async function getCollections(first = 20) {
  const QUERY = `
    query GetCollections($first: Int!) {
      collections(first: $first) {
        nodes {
          id
          title
          handle
          description

          image {
            url
            altText
          }
        }
      }
    }
  `;

  const { data, errors } = await shopifyClient.request(QUERY, {
    variables: {
      first,
    },
  });

  if (errors?.length) {
    throw new Error(errors[0].message);
  }

  return data.collections.nodes;
}