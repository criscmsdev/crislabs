import { CreatePage, Page } from "@/src/interface/page.interface";

export const HARDWARE_STORE_CREATE_PAGE2 = `
  mutation HardwareStoreCreatePage2($inputCreate: CreatePage!) {
    hardwareStoreCreatePage2(inputCreate: $inputCreate) {
      parentId
    }
  }
`;

export async function hardwareStoreCreatePage2(
  inputCreate: CreatePage,
): Promise<Page> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HARDWARE_STORE_CREATE_PAGE2,
      variables: { inputCreate: inputCreate },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((result) => result.hardwareStoreCreatePage2);
}
