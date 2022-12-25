import { Page } from "@/src/interface/page.interface";


export const HARDWARE_STORE_GET_PAGE2 = `
query HardwareStoreGetPage2($id: String!){
  hardwareStoreGetPage2(id: $id){
    _id
    slug
    dataPage{
      seoPage{
        title
        description
      }
      type
    }
    products{
      slug
    }
  }
}
`;

export async function hardwareStoreGetPage2(id: string):Promise<Page> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PAGE2,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetPage2)
  
}


export const HARDWARE_STORE_GET_PAGE2_BY_SLUG = `
query HardwareStoreGetPage2BySlug($slug: String!, $siteId: String!){
  hardwareStoreGetPage2BySlug(slug: $slug, siteId: $siteId){
    _id
    slug
    dataPage{
      seoPage{
        title
        description
      }
      type
    }
    pages{
      slug
      dataPage{
        seoPage{
          title
        }
      }
    }
    products{
      slug
      dataProduct{
        type{
          slug
        }
        seoProduct{
          title
          description
          image{
            src
            alt
          }
        }
      }
    }
  }
}
`;

export async function hardwareStoreGetPage2BySlug(slug: string, siteId: string):Promise<Page> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PAGE2_BY_SLUG,
      variables: {slug, siteId},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetPage2BySlug)
  
}