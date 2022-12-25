import { Product } from "@/src/interface/product.interface";

export const HARDWARE_STORE_GET_PRODUCT = `
query HardwareStoreGetProduct($id: String!, $type: String!){
  hardwareStoreGetProduct(id: $id, type: $type){
    _id
    slug
    dataProduct{
      type{
        slug
      }
      seoProduct{
        title
        description
      }
      imageProduct{
        src
        alt
      }
    }
    
  }
}
`;

export async function hardwareStoreGetProduct(id: string, type: string):Promise<Product> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PRODUCT,
      variables: {id: id, type: type},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetProduct)
  
}
export const HARDWARE_STORE_GET_PRODUCT_BY_SLUG = `
query HardwareStoreGetProductBySlug($slug: String!, $siteId: String!, $type: String!){
  hardwareStoreGetProductBySlug(slug: $slug, siteId: $siteId, type: $type){
    _id
    slug
    dataProduct{
      type{
        slug
      }
      seoProduct{
        title
        description
      }
      imageProduct{
        src
        alt
      }
    }
    
  }
}
`;

export async function hardwareStoreGetProductBySlug(slug: string, siteId: string, type: string):Promise<Product> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    cache: 'force-cache',
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_PRODUCT_BY_SLUG,
      variables: {slug: slug, siteId: siteId, type: type},
    }),
  })
  .then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetProductBySlug)
  
}

