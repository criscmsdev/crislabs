import { ListPage } from "@/src/interface/page.interface";
import { ConnectionArgs } from "@/src/interface/site.interface";

export const HARDWARE_STORE_GET_PAGES1_WITH_CURSOR = `
  query HardwareStoreGetPages1WithCursor($args: ConnectionArgs!, $parentId: String!) {
    hardwareStoreGetPages1WithCursor(args: $args, parentId:$parentId) {
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
            dataPage {
              seoPage{
                title
                image{
                  src
                  alt
                }
              }
              type
            }
            siteId
            slug
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

export async function hardwareStoreGetPages1WithCursor(
  args: ConnectionArgs,
  parentId: string,
): Promise<ListPage> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PAGES1_WITH_CURSOR,
      variables: {
        args: args,
        parentId: parentId,
      },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => res.hardwareStoreGetPages1WithCursor);
}
