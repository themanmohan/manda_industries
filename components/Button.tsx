import Image from "next/image"
import { FC } from 'react'
import Link from "next/link"
interface ButtonProps {
  label: string
  iconURL?: string
  backgroundColor?: string
  textColor?: string
  borderColor?: string
  fullWidth?: boolean
  mobileFullWidth?:boolean,
  borderRadius?: string
  btnLink?: string,
  onclick?: () => void
}

const Button: FC<ButtonProps> = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
  fullWidth,
  mobileFullWidth,
  borderRadius = "rounded-md",
  btnLink="/",
  onclick
}) => {
  return (
    <Link href={`/${btnLink}`} >
      <button
      onClick={onclick}
        className={`flex justify-center items-center gap-2 px-5 py-3 border font-krona text-sm leading-none
      ${backgroundColor
            ? `${backgroundColor} ${textColor} ${borderColor}`
            : "bg-coral-red text-white border-coral-red"
          } ${borderRadius} ${fullWidth && "w-full"} ${mobileFullWidth && " w-full md:w-auto"}`}
      >
        {label}

        {iconURL && (
          <Image
            src={iconURL}
            alt='arrow right icon'
          />
        )}

      </button>
    </Link>
  )
}

export default Button