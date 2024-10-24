import Image from "next/image";
import { 
     BigHorizontalLine,
     SmallHorizontalLine,
} from "@/assets/svgIcon"

const Heading: React.FC<{ children: React.ReactNode; hideArrowInMobile?: boolean }> = ({ children, hideArrowInMobile = false }) => {
  return (
    <div className='flex items-center gap-3'>
     {children}
    <Image src={SmallHorizontalLine} alt="small horizontal line" className={`${hideArrowInMobile && "hidden md:block"}`} />
    <Image src={BigHorizontalLine} alt="big horizontal line" className={`${hideArrowInMobile && "hidden md:block"}`} />
    
</div>
  )
}

export default Heading
