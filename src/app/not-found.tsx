import { Button } from "@/components/ui/button"
import Link from "next/link"

const NotFound = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-5">

      <h1 className="text-7xl font-black">404</h1>
      <p className="text-xl text-gray-800">Page not found</p>

      <div className="flex gap-4">
        <Link href='/'><Button>Back to home</Button></Link>
        <Link href='/contact'><Button>Report a problem</Button></Link>
      </div>

    </div>
  )
}

export default NotFound
