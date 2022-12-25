import { hardwareStoreGetPage2BySlug } from '@/lib/hardware-store/page/page2/getPage';
import { ProductLists } from '@/ui/tailwindCSS/ecommerce/productLists';
import React from 'react'

interface Props {
  params: {
    page0: string;
    page1: string;
    page2: string;
  };
}

export default async function Page(props: Props) {
  const {
    params: { page0, page1, page2 },
  } = props;
  const page = await hardwareStoreGetPage2BySlug(page2, process.env.SITE_HARDWARE_STORE as string)
  return (
    <ProductLists title={page.dataPage.seoPage.title} products={page.products} />
  )
}
