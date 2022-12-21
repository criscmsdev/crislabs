import { ListProduct } from "@/src/interface/product.interface";
import { ConnectionArgs } from "@/src/interface/site.interface";

export const HARDWARE_STORE_GET_PRODUCTS_WITH_CURSOR = `
  query HardwareStoreGetProductsWithCursor($args: ConnectionArgs!, $parentId: String!, $type: String!) {
    hardwareStoreGetProductsWithCursor(args: $args, parentId: $parentId, type: $type) {
      page {
        pageInfo {
          startCursor
          endCursor
          hasNextPage
          hasPreviousPage
        }
        edges {
          cursor
          node {
            _id
            siteId
            dataProduct{
              seoProduct{
                title
              }
              type{
                slug
              }
            }
           
          }
        }
      }
      pageData {
        count
        limit
        offset
      }
    }
  }
`;

export async function hardwareStoreGetProductsWithCursor(
  args: ConnectionArgs,  type: string, parentId: string
):Promise<ListProduct> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // cache: 'force-cache',
    // next: {revalidate: 1},
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PRODUCTS_WITH_CURSOR,
      variables: {
        args: args,
        parentId: parentId,
        type: type,
      },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => res.hardwareStoreGetProductsWithCursor)
}

