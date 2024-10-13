import { copyrightSign } from "../assets/icons";
import Image from "next/image";
import { footerLinks } from "../constants";
import Logo from "@/assets/logo/logo.png";
import Link from "next/link"

const Footer = () => {
    return (
        <footer className='max-container'>
            <div className='flex justify-between items-start xl:gap-20 md:gap-10 flex-wrap max-lg:flex-col'>
                <div className='flex flex-col items-start'>
                    <Link href='/'>
                        <Image src={Logo} alt={"logo"} className="w-auto h-12"/>
                    </Link>
                    <p className='font-sans mt-6 text-base leading-7 text-white-400 sm:max-w-sm'>
                    <span >M AND A industries</span> was founded in the year 2005. Our state-of-the-art plant is situated in Baddi, Himachal Pradesh. We are one of the most comprehensive industrial flexible packaging manufacturers in India
                    </p>
                    <div className='flex items-center gap-5 mt-8'>
            
          </div>
                </div>

                <div className='flex flex-1 justify-between md:gap-40  sm:gap-10 xl:gap-20 flex-wrap'>
                    {footerLinks.map((section) => (
                        <div key={section.title}>
                            <h4 className='font-krona text-ms leading-normal font-medium mb-4 text-coral-red border-b-2 border-blue-500 inline-block'>
                                {section.title}
                            </h4>
                            <ul>
                                {section.links.map((link) => (
                                    <li
                                        className='mt-2 text-base leading-normal text-white-400'
                                        key={link.name}
                                    >
                                        <Link href={link.link} className="font-sans">{link.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>

            <div className='flex justify-center items-center text-white-400 mt-5 '>
                <div className='flex flex-1 justify-center items-center gap-2 font-montserrat cursor-pointer'>
                    <Image
                        src={copyrightSign}
                        alt='copyright sign'
                        width={20}
                        height={20}
                        className='rounded-full m-0'
                    />
                    <p>Copyright. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;