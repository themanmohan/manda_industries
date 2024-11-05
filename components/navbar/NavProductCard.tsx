
import Image, { StaticImageData } from "next/image"

const NavProductCard = ({
    title,
    imageURL
}: {title:string, imageURL:string | StaticImageData}) => {
  return (
    <div className="group relative flex flex-col items-center gap-x-6 rounded-lg px-4 py-3 bg-gray-200 leading-2 hover:bg-gray-50 max-w-[120px] w-[120px]">

      <Image src={imageURL} width={100} height={30} alt='sdfs'  className="w-[60px]" />

    <div>
        <h2 className='text-black font-krona text-[.7rem]'>{title || " "}</h2>
    </div>
  </div>
  )
}

export default NavProductCard;
