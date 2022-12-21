export const HARDWARE_STORE_DELETE_SITE = `
mutation HardwareStoreDeleteSite($id: String!) {
  hardwareStoreDeleteSite(id: $id)
}
`;
export async function hardwareStoreDeleteSite(
  id: string,
): Promise<string> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HARDWARE_STORE_DELETE_SITE,
      variables: { id: id },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((result) => result.hardwareStoreDeleteSite);
}

export const HARDWARE_STORE_DELETE_SITES = `
mutation HardwareStoreDeleteSites($ids: [String!]!) {
  hardwareStoreDeleteSites(ids: $ids)
}
`;

export async function hardwareStoreDeleteSites(
  ids: string[],
): Promise<string[]> {
  return await fetch(`${process.env.NEXT_PUBLIC_API_BACKEND_URL}/graphql`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query: HARDWARE_STORE_DELETE_SITES,
      variables: { ids: ids },
    }),
  })
    .then((res) => res.json())
    .then((res) => res.data)
    .then((result) => result.hardwareStoreDeleteSites);
}
