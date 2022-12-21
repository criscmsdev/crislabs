import { Site } from "@/src/interface/site.interface";

export const HARDWARE_STORE_GET_SITE = `
query HardwareStoreGetSite($id: String!) {
  hardwareStoreGetSite(id: $id) {
    _id
    dataSite {
      name
      description
      type
      
      dbSite {
        uid
        label
        slug
      }
      infoSite{
        clientId
      }
      imageSite {
        banner {
          src
          alt
        }
        logo {
          src
          alt
        }
        icon {
          src
          alt
        }
      }
    }
    url
  }
}
`;

export async function hardwareStoreGetSite(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_SITE,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetSite) 
}

export async function hardwareStoreGetSiteStoreNavigation(id: string):Promise<Site> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: `
      query HardwareStoreGetSite($id: String!) {
        hardwareStoreGetSite(id: $id) {
          _id
          dataSite {
            name
            description
            type 
          }
          pages{
            dataPage{
              type
              seoPage{
                title
              }
            }
            slug
            pages{
              slug
              dataPage{
                seoPage{
                  title
                }
              }
              pages{
                slug
                dataPage{
                  seoPage{
                    title
                  }
                }
              }
            }
          }
        }
      }
      `,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetSite) 
}
