import React from 'react'
import Link from 'next/link'
import Image from "next/image"
// import { StaticImageData } from 'next/image';

interface propsType {
  thumbnail: string,
  title: string,
  body: string,
  tags:string[],
  readTime: number,
  auther: string
}

const BlogCard: React.FC<propsType> = ({ thumbnail, title, body, tags, readTime, auther }) => {

  return (
    <div className="item">
      <div className="images">
        <Link href={`/blog/${title}`}>
        <Image src={thumbnail || ""} className="rounded" width={500} height={400} alt={title} /></Link>
      </div>
      <div className="info flex justify-center flex-col pt-2 pb-4">

        <div className="title">
          <Link href={`/blog/${title}`}><p className="text-xl font-krona text-gray-800 hover:text-gray-600">{title || "Title"}</p></Link>
        </div>
        <p className="text-gray-500 pt-3 pb-2 font-sans">
          {body.substring(0, 150) || ""}
        </p>
        <div className="flex flex-wrap items-end mb-2">
          {
            tags.map((tag,i)=>{
              return (
                <span key={i} className="text-gray-600 text-xs font-medium me-2 px-2.5 py-0.5 rounded  border border-gray-600 bg-transparent">{tag || ""}</span>
              )
            })
          }

        </div>
        <div className="flex justify-between">
          <p>{readTime || " "} min</p>
          <Link href={`/blog/${title}`}><p className="text-black font-bold capitalize hover:text-gray-600">- {auther || "Unknown"}</p></Link>
        </div>
      </div>
    </div>
  )
}

export default BlogCard