import Link from 'next/link'
import { Button } from './ui/button'
import Nav from './Nav'
import MobileNav from './MobileNav'

function Header() {
  return (
   <header className='py-8 xl:py-12 text-white'>

   <div className="container mx-auto flex justify-between items-center">
    {/* Logo */}
    <Link href={'/'}>
     <h1 className='text-4xl font-semibold'>
      Ankit<span className='text-accent'>.</span>
     </h1>
    </Link>
    {/* desktop nav & hire me button */}

    <div className="hidden xl:flex items-center gap-8">
      <Link href='/contact'>
         <Button>Hire me</Button>
      </Link>
         
    <Nav/>

    {/* mobile nav */}

    <div className="xl:hidden">
      <MobileNav/>
    </div>

    </div>
  </div>

   

   </header>
  
  )
}

export default Header