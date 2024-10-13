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

function Article({ title, img, subtitle, description }){

    return (
        <>
            <section className='max-container whitespace md:px-2 py-16 w-2/3'>
                {/* <div className='flex justify-center'>
                { author ? <Author></Author> : <></>}
                </div> */}

                <div className="post py-10">
                    <h1 className='font-krona text-4xl text-center pb-5'>{title || "No Title"}</h1>

                    <p className='text-gray-500 font-krona text-xl text-center'>{subtitle || "No Title"}</p>

                    <div className="py-10">
                        <Image src={img || "/"} width={900} height={600} style={{width:"100%"}}></Image>
                    </div>

                    <div className="content info-text flex flex-col gap-4">
                        {description || "No Description"}
                    </div>

                </div>  

                <RalatedBlog />
            </section>
        </>
    )
}


// function Author({ name, img, designation }: { name: string; img: string; designation: string }) {
//     return (
//       <div className="author flex py-5">
//           <Image src={img || ""} width={60} height={60} className="rounded-full"></Image>        
//           <div className="flex flex-col justify-center px-4">
//               <Link href={"/"}><p className="text-md font-bold text-gray-800 hover:text-gray-600">{name || "No Name"}</p></Link>
//               <span className="text-sm text-gray-500">{designation || ""}</span>
//           </div>
//       </div>
//     )
//   }