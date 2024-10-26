import Link from "next/link"
import Image from "next/image"

export default function RalatedBlog() {

    return (
        <section className="pt-20">
            <h1 className="font-krona text-3xl pb-10">Related Blog</h1>

            <div className="flex flex-wrap gap-10">
                {
                    [{
                        id: 1,
                        title: "test",
                        body:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        category: "asjgdja",
                        published: "nbvnv",
                        author: "mannu",
                        img: "https://res.cloudinary.com/hpnoardgude/image/upload/v1728202052/CropImage_cxpukm.jpg"
                    }, {
                        id: 1,
                        title: "test2",
                        body:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy ",
                        category: "asjgdja",
                        published: "nbvnv",
                        author: "mannu",
                        img: "https://res.cloudinary.com/hpnoardgude/image/upload/v1728202052/CropImage_cxpukm.jpg"
                    }, {
                        id: 1,
                        title: "test3",
                        body:"is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy",
                        category: "asjgdja",
                        published: "nbvnv",
                        author: "mannu",
                        img: "https://res.cloudinary.com/hpnoardgude/image/upload/v1728202052/CropImage_cxpukm.jpg"
                    }].map((value, index) => (
                        <Post key={index} data={value}></Post>
                    ))
                }
            </div>
        </section>
    )
}


function Post({ data }: { data: { id: number; title: string; category: string; img: string; published: string, body: string } }) {
    const { id, title, body, img } = data;

    return (
        <div className="sm:w-[300px] sm:min-w-[300px]">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}><Image src={img || ""} alt={`Post ${id}`} className="rounded" style={{width:"300px"}} width={300} height={200} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
            <Link href={`/posts/${id}`}><p className="text-gray-200">{body || ""}</p></Link>
                <div className="flex justify-between">
                <Link href={`/posts/${id}`}><p className="text-xl text-gray-100 hover:text-gray-600">{title || "No Title"}</p></Link>
                <Link href={`/blog/${title}`}><p className="text-gray-100 border-b-2 border-gray-100">Read Me</p>
                </Link>
                </div>
           
            </div>
        </div>
    )
}
