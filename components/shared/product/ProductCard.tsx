
import Image, { StaticImageData } from 'next/image'

interface PorpsType {
    name: string,
    desc: string,
    thumbnail: StaticImageData,
    extraClass?: string
}
const ProductCard: React.FC<PorpsType> = ({
    name,
    desc,
    thumbnail,
    extraClass
}) => {
  return (
    <div className={`boxShadow rounded-md mx-3 ${extraClass} flex-1`}  data-aos="zoom-in">
      <div className="images">
        <Image src={thumbnail}  className='h-[230px]' alt={name} />
      </div>
      <div className="info flex justify-center flex-col pt-2 pb-4 px-6">
        <div className="title">
          <p className="text-xl my-2 font-krona text-gray-800 hover:text-gray-600">{name}</p>
        </div>
        <p className="text-gray-500 pb-2 font-sans">
          {desc}
        </p>
        <button className={`flex justify-center w-auto items-center gap-2 px-5 py-3 border font-krona text-sm rounded-md leading-none bg-coral-red text-white border-coral-red`}>Make Enquiry</button>
      </div>
    </div>
  )
}

export default ProductCard
