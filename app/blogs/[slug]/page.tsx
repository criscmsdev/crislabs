
import { Post } from '@/ui/tailwindCSS/Article'
import { Headers } from '@/ui/tailwindCSS/header/Headers'
import React from 'react'

export default function Page() {
  
  return (
    <React.Fragment >
      <Headers />
      <Post />
      <div>article</div>
    </React.Fragment>
  )
}
