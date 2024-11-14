"use client"
import React,{useEffect} from 'react'
import AOS from "aos"

import { HeroBanner } from '@/components'
import ProductCard2 from '@/components/shared/product/ProductCard'; 
import { productLists } from '@/constants/products';


const Products = () => {

  useEffect(() => {
    AOS.init({});
  }, []);

  return (
    <main>
        <HeroBanner lableText='Products' ></HeroBanner>

        <section className='max-container whitespace  py-14 overFlow'>
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
