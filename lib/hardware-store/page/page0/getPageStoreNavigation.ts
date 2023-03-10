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
    pages{
      slug
    }
  }
}
`;

export async function hardwareStoreGetPage0StoreNavigation(id: string):Promise<Page> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'no-store',
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PAGE0,
      variables: {id: id},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetPage0)
  
}

