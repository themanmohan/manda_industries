'use client'

import { useState } from 'react';
import Image from "next/image"
import { navProducts } from '@/constants/products';
import { usePathname } from 'next/navigation';
import {
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,

} from '@heroicons/react/24/outline'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import Logo from "@/assets/logo/logo.jpg";
import Button from '../Button';
import NavProductCard from './NavProductCard';

import { LeftArrow } from '@/assets/svgIcon';
import Link from "next/link"

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = usePathname();

  return (
    <header className="bg-white top-0 z-40000 ">
      <nav aria-label="Global" className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">M AND A Industries</span>
            <Image
              alt="company logo"
              src={Logo}
              className="h-10 w-auto"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <span className="sr-only">M AND A Industries</span>
            <Bars3Icon aria-hidden="true" className="h-6 w-6" />
          </button>
        </div>
        <PopoverGroup className="hidden lg:flex lg:gap-x-12">

        <Link href="/" className={`text-sm font-semibold leading-6 text-gray-900 font-krona ${pathname === '/' ? 'border-b-2 border-coral-red' : ''}`}>
              Home
          </Link>
          <Popover className="relative">
            <PopoverButton className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900 font-krona">
            <Link href="/products" className={`text-sm font-semibold leading-6 text-gray-900 font-krona ${pathname === '/products' ? 'border-b-2 border-coral-red' : ''}`}>
            Products
          </Link>
              <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none text-gray-400" />
            </PopoverButton>

            <PopoverPanel
              transition
              className="absolute -left-8 top-full z-[10000000] mt-3 w-screen max-w-md overflow-hidden rounded-xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
            >
              <div className="px-4 py-6 flex gap-3 flex-wrap justify-center">
                {navProducts.map((item,i) => (
                  <NavProductCard key={i} title={item.name} imageURL={item.img} />
                 
                ))}
              </div>
           
            </PopoverPanel>
          </Popover>
          <Link href="/why-epe" className={`text-sm font-semibold leading-6 text-gray-900 font-krona ${pathname === '/why-epe' ? 'border-b-2 border-coral-red' : ''}`}>
            Why EPE
          </Link>
          <Link href="/contact-us" className={`text-sm font-semibold leading-6 text-gray-900 font-krona ${pathname === '/contact-us' ? 'border-b-2 border-coral-red' : ''}`}>
            Contact Us
          </Link>
          <Link href="/about-us" className={`text-sm font-semibold leading-6 text-gray-900 font-krona ${pathname === '/about-us' ? 'border-b-2 border-coral-red' : ''}`}>
            About Us
          </Link>
        </PopoverGroup>

        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
  
          <Button label="Contact Us"  borderRadius='rounded-full' iconURL={LeftArrow} btnLink='contact-us' />  
      </div>
     
      </nav>

      <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
        <div className="fixed inset-0 z-10" />
        <DialogPanel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">M AND A Industries</span>
              <Image
                alt="company logo"
                src={Logo}
                className="h-10 w-auto"
              />
            </a>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>

          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  <DisclosureButton className="group flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 font-krona">
                  <Link href="/products"   onClick={()=>{setMobileMenuOpen(false)}} className={`text-sm font-semibold leading-6 font-krona ${pathname === '/products' ? 'text-coral-red' : 'text-gray-900'}`}>
            Products
          </Link>
                    <ChevronDownIcon aria-hidden="true" className="h-5 w-5 flex-none group-data-[open]:rotate-180" />
                  </DisclosureButton>
                  <DisclosurePanel className="mt-2 space-y-2">
                  <div className="p-4 flex gap-3 flex-wrap justify-center">
                {navProducts.map((item,i) => (
                  <NavProductCard key={i} title={item.name} imageURL={item.img} />
                 
                ))}
              </div>
                </DisclosurePanel>
                </Disclosure>
                <Link
                onClick={()=>{setMobileMenuOpen(false)}}
                  href="about-us"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 hover:bg-gray-50 font-krona ${pathname === '/about-us' ? ' text-coral-red' : 'text-gray-900'}`}
                >
                  About Us
                </Link>
                <Link
                onClick={()=>{setMobileMenuOpen(false)}}
                  href="why-epe"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 hover:bg-gray-50 font-krona ${pathname === '/why-epe' ? ' text-coral-red' : 'text-gray-900'}`}
                >
                  Why EPE
                </Link>
                <Link
                onClick={()=>{setMobileMenuOpen(false)}}
                  href="contact-us"
                  className={`-mx-3 block rounded-lg px-3 py-2 text-sm font-semibold leading-7 hover:bg-gray-50 font-krona ${pathname === '/contact-us' ? ' text-coral-red' : 'text-gray-900'}`}
                >
                  Contact Us
                </Link>
              </div>

            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  )
}
