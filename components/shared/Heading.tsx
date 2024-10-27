import Image from "next/image";
import { 
     BigHorizontalLine,
     SmallHorizontalLine,
} from "@/assets/svgIcon"

const Heading: React.FC<{ children: React.ReactNode; hideArrowInMobile?: boolean, extraClass?: string }> = ({ children, hideArrowInMobile = false, extraClass }) => {
  return (
    <div className={`flex items-center gap-3 mb-4 ${extraClass}`}>
     {children}
    <Image src={SmallHorizontalLine} alt="small horizontal line" className={`${hideArrowInMobile && "hidden md:block"}`} />
    <Image src={BigHorizontalLine} alt="big horizontal line" className={`${hideArrowInMobile && "hidden md:block"}`} />
    
</div>
  )
}

export default Heading
