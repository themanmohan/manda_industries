
import Image, { StaticImageData } from "next/image"

const NavProductCard = ({
    title,
    imageURL
}: {title:string, imageURL:string | StaticImageData}) => {
  return (
    <div className="group relative flex flex-col items-center gap-x-6 rounded-lg px-4 py-2 bg-gray-200 leading-6 hover:bg-gray-50 min-w-[120px]">

      <Image src={imageURL} width={100} height={30} alt='sdfs'  className="w-[60px]" />

    <div>
        <h2 className='text-black font-krona text-[.7rem]'>{title || " "}</h2>
        {/* <p className='text-md text-gray-600'>{description || ""}</p> */}
    </div>
  </div>
  )
}

export default NavProductCard;
