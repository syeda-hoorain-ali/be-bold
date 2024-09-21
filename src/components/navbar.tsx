import { Menu, ShoppingCart } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import { Button } from './ui/button'

const Navbar = () => {

  return (
    <nav className="navbar flex justify-between items-center py-2 px-2 md:px-5 bg-[#f6edf0]">
      <div className="navbar-logo">
        <Link href="/">
          <Image width={100} height={50} src="/logo.png" alt="Be Bold" />
        </Link>
      </div>

      <ul className="navbar-menu gap-4 hidden sm:flex">
        <li><Link href="/" className='hover:text-pink-500'>Home</Link></li>
        <li><Link href="/products" className='hover:text-pink-500'>Products</Link></li>
        <li><Link href="/about" className='hover:text-pink-500'>About</Link></li>
        <li><Link href="/contact" className='hover:text-pink-500'>Contact</Link></li>
      </ul>

      <Link href="/cart" className='hover:bg-pink-300 p-2 rounded-full cursor-pointer transition hidden sm:block'>
        <ShoppingCart />
      </Link>

      <div className='sm:hidden'>

        <Sheet>
          <SheetTrigger asChild>
            <Button className='aspect-square'><Menu /></Button>
          </SheetTrigger>

          <SheetContent className='flex flex-col justify-between w-60 py-10'>

            <ul className="navbar-menu gap-4 flex flex-col">
              <li><Link href="/" className='hover:text-pink-500'>Home</Link></li>
              <li><Link href="/products" className='hover:text-pink-500'>Products</Link></li>
              <li><Link href="/about" className='hover:text-pink-500'>About</Link></li>
              <li><Link href="/contact" className='hover:text-pink-500'>Contact</Link></li>
            </ul>

            <Link href="/cart" className='w-fit hover:bg-pink-300 p-2 rounded-full cursor-pointer transition'>
              <ShoppingCart />
            </Link>
          </SheetContent>
        </Sheet>
      </div>

    </nav>
  )
}

export default Navbar
