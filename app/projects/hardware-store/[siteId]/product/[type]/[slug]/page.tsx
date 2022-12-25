import { hardwareStoreGetProductBySlug } from '@/lib/hardware-store/products/getProduct';
import { ProductOverviewsTool } from '@/ui/tailwindCSS/productOverviews/productOverviewsTool';
import React from 'react'
interface Props {
  params: {
    type: string;
    slug: string;
  };
}

export default async function Page(props: Props) {
  const { params: {type, slug} } = props
  const product = await hardwareStoreGetProductBySlug(slug, process.env.SITE_HARDWARE_STORE as string, type)
  
  return (
    <ProductOverviewsTool product={product}/>

  )
}
