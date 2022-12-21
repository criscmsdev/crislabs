import { Site } from "@/src/interface/site.interface";

export const HARDWARE_STORE_GET_SITES = `
  query HardwareStoreGetSites {
    hardwareStoreGetSites {
        _id
    }
  }
`;

export async function hardwareStoreGetSites():Promise<Site[]> {
   return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HARDWARE_STORE_GET_SITES,
      variables: {},
    }),
  }).then(res => res.json())
  .then((res)=> res.data)
  .then((result) => result.hardwareStoreGetSites)
  
}
