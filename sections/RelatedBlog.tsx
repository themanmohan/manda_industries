import Link from "next/link"
import Image from "next/image"

export default function RalatedBlog() {

    return (
        <section className="pt-20">
            <h1 className="font-bold text-3xl py-10">Related</h1>

            <div className="flex gap-10">
                {
                    [{
                        id: 1,
                        title: "test",
                        category: "asjgdja",
                        published: "nbvnv",
                        author: "mannu",
                        img: "https://res.cloudinary.com/hpnoardgude/image/upload/v1728202052/CropImage_cxpukm.jpg"
                    }, {
                        id: 1,
                        title: "test2",
                        category: "asjgdja",
                        published: "nbvnv",
                        author: "mannu",
                        img: "https://res.cloudinary.com/hpnoardgude/image/upload/v1728202052/CropImage_cxpukm.jpg"
                    }, {
                        id: 1,
                        title: "test3",
                        category: "asjgdja",
                        published: "nbvnv",
                        author: "mannu",
                        img: "https://res.cloudinary.com/hpnoardgude/image/upload/v1728202052/CropImage_cxpukm.jpg"
                    }, {
                        id: 1,
                        title: "test",
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


function Post({ data }) {

    const { id, title, category, img, published, author } = data;

    return (
        <div className="flex flex-col gap-5">
            <div className="image flex flex-col justify-start">
                <Link href={`/posts/${id}`}><Image src={img || ""} className="rounded" style={{width:"300px"}} width={300} height={200} /></Link>
            </div>
            <div className="info flex justify-center flex-col">
                <div className="cat">
                    <Link href={`/posts/${id}`}><p className="text-orange-600 hover:text-orange-800">{category || "No Category"}</p></Link>
                    <Link href={`/posts/${id}`}><p className="text-gray-800 hover:text-gray-600">- {published || ""}</p></Link>
                </div>
                <div className="title">
                    <Link href={`/posts/${id}`}><p className="text-xl font-bold text-gray-800 hover:text-gray-600">{title || "No Title"}</p></Link>
                </div>
                {/* { author ? <Author {...author}></Author> : <></>} */}
            </div>
        </div>
    )
}