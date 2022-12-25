import { Page } from "@/src/interface/page.interface";


export const HARDWARE_STORE_GET_PAGE0 = `
query HardwareStoreGetPage0($id: String!){
  hardwareStoreGetPage0(id: $id){
    _id
    slug
    dataPage{
      seoPage{
        title
        description
      }
      type
    }
  }
}
`;

export async function hardwareStoreGetPage0(id: string):Promise<Page> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PAGE0,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetPage0)
  
}
export const HARDWARE_STORE_GET_PAGE0_BY_SLUG = `
query HardwareStoreGetPage0BySlug($slug: String!, $siteId: String!){
  hardwareStoreGetPage0BySlug(slug: $slug, siteId: $siteId){
    _id
    slug
    dataPage{
      seoPage{
        title
        description
      }
      type
    }
  }
}
`;

export async function hardwareStoreGetPage0BySlug(slug: string, siteId: string):Promise<Page> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PAGE0_BY_SLUG,
      variables: {slug, siteId},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetPage0BySlug)
  
}

