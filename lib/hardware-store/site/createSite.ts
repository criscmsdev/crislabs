import { CreateSite, Site } from "@/src/interface/site.interface";


export const HARDWARE_STORE_CREATE_SITE = `
  mutation HardwareStoreCreateSite($inputCreate: CreateSite!) {
    hardwareStoreCreateSite(inputCreate: $inputCreate) {
      _id
    }
  }
`;

export async function hardwareStoreCreateSite(inputCreate: CreateSite):Promise<Site> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
   method: 'POST',
   headers: {
     'Content-Type': 'application/json',
   },
   body: JSON.stringify({
     query: HARDWARE_STORE_CREATE_SITE,
     variables: {inputCreate: inputCreate},
   }),
 }).then(res => res.json())
 .then((res)=> res.data)
 .then((res) => res.hardwareStoreCreateSite)
}