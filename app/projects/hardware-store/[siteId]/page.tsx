import { CategoryPreviews } from '@/ui/tailwindCSS/ecommerce/categoryPreviews'
import { ProductLists } from '@/ui/tailwindCSS/ecommerce/productLists'
import React from 'react'

export default function Page() {
  return (
    <React.Fragment>
      <CategoryPreviews />
      <ProductLists />
      <div>Page</div>
    </React.Fragment>
  )
}
