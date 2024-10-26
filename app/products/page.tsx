import React from 'react'
import { HeroBanner } from '@/components'
import ProductCard2 from '@/components/shared/product/ProductCard'; 
import { productLists } from '@/constants/products';


const Products = () => {
  return (
    <main className=''>
        <HeroBanner lableText='Products' ></HeroBanner>

        <section className='max-container whitespace  py-14'>
          <div className='flex flex-wrap gap-y-5'>
          {
                productLists.map((product, i)=>{
                    return (
                        <ProductCard2 
                          key={i}
                          name={product.name}
                          thumbnail={product.thumbnail}
                          desc= {product.desc}
                          extraClass='sm:w-[350px] sm:min-w-[350px] w-full'
                        /> 
                    )
                })
            }
          </div>
        
        </section>
      
    </main>
  )
}

export default Products
