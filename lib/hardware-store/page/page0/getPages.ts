import { Page } from "@/src/interface/page.interface";


export const HARDWARE_STORE_GET_PAGES0 = `
query HardwareStoreGetPages0{
  hardwareStoreGetPages0{
    _id
    parentId
    siteId
  }
}
`;

export async function hardwareStoreGetPages0():Promise<Page[]> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PAGES0,
      variables: {},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetPages0)
}

export const HARDWARE_STORE_GET_PAGES0_BY_PARENT_ID = `
query HardwareStoreGetPages0ByParentId($parentId: String!){
  hardwareStoreGetPages0ByParentId(parentId: $parentId) {
    slug
    dataPage{
      type
      seoPage{
        title
        description
      }
    }
    pages{
      dataPage{
        seoPage{
          title
          description
          image {
            src
            alt
          }
        }
      }
      slug
      pages{
        dataPage{
          seoPage{
            title
            description
            image {
              src
              alt
            }
          }
        }
        slug  
      }
    }
  }
}
`;

export async function hardwareStoreGetPages0ByParentId(parentId: string):Promise<Page[]> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PAGES0_BY_PARENT_ID,
      variables: {parentId: parentId},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetPages0ByParentId)
}
