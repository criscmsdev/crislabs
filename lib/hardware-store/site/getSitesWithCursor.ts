import { ConnectionArgs, ListSite } from "@/src/interface/site.interface";


export const HARDWARE_STORE_GET_SITES_WITH_CURSOR = `
  query HardwareStoreGetSitesWithCursor($args: ConnectionArgs!) {
    hardwareStoreGetSitesWithCursor(args: $args) {
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
            dataSite {
              name
              type
            }
            url
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

export async function hardwareStoreGetSitesWithCursor(
  args: ConnectionArgs,
):Promise<ListSite> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    // cache: 'force-cache',
    // next: {revalidate: 1},
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_SITES_WITH_CURSOR,
      variables: {
        args: args,
      },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((res) => res.hardwareStoreGetSitesWithCursor)
}

