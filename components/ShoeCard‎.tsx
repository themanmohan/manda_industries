"use client"
import Image, { StaticImageData } from "next/image";

interface ShoeCardProps {
  id: number,
  selectedProduct: { // Define the structure of the selectedProduct object
    id: number;
    title: string;
    desc: string;
    img: {
      thumbnail: StaticImageData;
      subThumbnail: StaticImageData;
    };
  };
  index: number;
  imgURL: string | StaticImageData;
  changeHandler: (id: number) => void,
  bigShoeImg: string | StaticImageData;
}

const ShoeCard = ({ imgURL, bigShoeImg, id, changeHandler, selectedProduct }: ShoeCardProps) => {

  return (
    <div
      onClick={()=>{changeHandler(id)}}
      className={`border-2 rounded-xl ${
        selectedProduct.id === id
          ? "border-coral-red"
          : "border-transparent"
      } cursor-pointer max-sm:flex-1`}
      // onClick={handleClick}
    >
      <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4'>
        <Image
          src={imgURL}
          alt='shoe colletion'
          width={100}
          height={70}
          className='object-contain'
        />
      </div>
    </div>
  );
};

export default ShoeCard;
