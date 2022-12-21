import { CreatePage, Page } from "@/src/interface/page.interface";

export const HARDWARE_STORE_CREATE_PAGE0 = `
  mutation HardwareStoreCreatePage0($inputCreate: CreatePage!) {
    hardwareStoreCreatePage0(inputCreate: $inputCreate) {
      parentId
    }
  }
`;

export async function hardwareStoreCreatePage0(
  inputCreate: CreatePage,
): Promise<Page> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HARDWARE_STORE_CREATE_PAGE0,
      variables: { inputCreate: inputCreate },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((result) => result.hardwareStoreCreatePage0);
}
