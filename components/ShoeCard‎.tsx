"use client"
import Image from "next/image";

interface ShoeCardProps {
  imgURL: { thumbnail: string; bigShoe: string };
  changeBigShoeImage: (shoe: string) => void;
  bigShoeImg: string;
}

const ShoeCard: React.FC<ShoeCardProps> = ({ imgURL, changeBigShoeImage, bigShoeImg }) => {
  console.log("imgURL",imgURL)
  console.log("bigShoeImg",bigShoeImg)
    const handleClick = () => {
      if (bigShoeImg !== imgURL.bigShoe) {
        changeBigShoeImage(imgURL.bigShoe);
      }
    };
  
    return (
      <div
        className={`border-2 rounded-xl ${
          bigShoeImg === imgURL
            ? "border-coral-red"
            : "border-transparent"
        } cursor-pointer max-sm:flex-1`}
        onClick={handleClick}
      >
        <div className='flex justify-center items-center bg-card bg-center bg-cover sm:w-40 sm:h-40 rounded-xl max-sm:p-4 bg-gray-300'>
          {/* <Image
            src={imgURL.thumbnail}
            alt='shoe colletion'
            width={127}
            height={103.34}
            style={{height"100px}}
            className='object-contain'
          /> */}

          <Image
          src={imgURL}
          alt='shoe collection'
          width={127}
          height={103.34}
          style={{ height: '100px' }}
          className='object-contain'
        />
        </div>
      </div>
    );
  };
  
  export default ShoeCard;