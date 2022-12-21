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
