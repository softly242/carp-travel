'use client'
import Image from 'next/image'
import Link from 'next/link'
import BurgerMenu from './BurgerMenu'
import { useEffect, useState } from 'react'

export default function Header() {
  const [mobileMenuVisible, setMobileMenuVisible] = useState(false)

  const handleMenuClick = () => setMobileMenuVisible(true)

  const handleMenuClose = () => setMobileMenuVisible(false)

  useEffect(() => {
    document.body.classList.toggle('overflow-hidden', mobileMenuVisible)
  }, [mobileMenuVisible])

  return (
    <>
      <header className="mt-9 mb-9 flex items-center justify-between md:mt-[25px] md:mb-[66px] xl:mb-[72px]">
        <Link href="/" className="block w-[61px] h-[33px]">
          <Image
            className="object-contain w-full h-full"
            src="/logo.png"
            alt="logo"
            width={122}
            height={70}
            quality={100}
          />
        </Link>
        <ul className="hidden md:flex md:gap-[24px] items-center justify-between xl:gap-[56px]">
          <li className="text-sm font-normal tracking-[1.4px]">
            <Link href="#about">About</Link>
          </li>
          <li className="text-sm font-normal tracking-[1.4px]">
            <Link href="#services">Services</Link>
          </li>
          <li className="text-sm font-normal tracking-[1.4px]">
            <Link href="#career">Career</Link>
          </li>
          <li className="text-sm font-normal tracking-[1.4px]">
            <Link href="#gallery">Gallery</Link>
          </li>
          <li className="text-sm font-normal tracking-[1.4px]">
            <Link href="#contacts">Contacts</Link>
          </li>
        </ul>

        <button
          onClick={handleMenuClick}
          type="submit"
          className="tracking-[1.4px] text-sm font-normal md:hidden"
        >
          MENU
        </button>
      </header>
      <BurgerMenu visible={mobileMenuVisible} handleClose={handleMenuClose} />
    </>
  )
}
