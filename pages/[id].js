import React from 'react'
import { useRouter } from 'next/router'
import products from "../data.json"
const product = () => {
    const router = useRouter()
    console.log('router', router.query.id)
     const product = products.find(pro =>pro.id=== Number(router.query.id))
  console.log('product', product)
  return (
    <div>
   {product?.name}
    </div>
  )
}

export default product