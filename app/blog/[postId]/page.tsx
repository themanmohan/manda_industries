import React from 'react'
import Image from 'next/image'
import RalatedBlog from '@/sections/RelatedBlog'
function BlogDetail() {
    const dsd= {
        id:1,
        title:"test3",
        category:"asjgdja",
        published:"nbvnv",
        subtitle:"ASdasd",
        description:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        img:"https://res.cloudinary.com/hpnoardgude/image/upload/v1728202052/CropImage_cxpukm.jpg"
    }
        return (
            
                <Article {...dsd}></Article>
          
        )
}


export default BlogDetail
function Article({ title, img, subtitle, description }: { title: string; img: string; subtitle: string; description: string }) {

    return (
   
            <section className='max-container whitespace md:px-2 pb-14'>
              

                <div className="post py-10">
                    <h1 className='font-krona text-4xl text-center pb-3'>{title || "No Title"}</h1>

                    <p className='text-gray-500 font-krona text-xl text-center mb-5'>{subtitle || "No Title"}</p>

                        <Image src={img || "/"} width={900} height={600} alt="Blog Image" className='rounded-md' style={{width:"100%"}}></Image>
                   
                    <div className="content info-text flex flex-col gap-4 mt-5">
                        {description || "No Description"}
                    </div>

                </div>  

                <RalatedBlog />
            </section>
   
    )
}

