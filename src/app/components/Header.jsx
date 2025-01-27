import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='fixed top-0 left-0 z-50 w-full py-10'>
        <div className='container flex h-14 items-center max-lg:px-5 '>
            <Link href="/">
            <Image src="/images/xora.svg" width={115} height={55} alt='logo'/>
            </Link>
        </div>
    </header>
  )
}

export default Header