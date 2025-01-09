import { SignIn } from '@clerk/nextjs'
import Image from 'next/image'

export default function Page() {
  return(
    <div className="relative h-screen w-screen">
    <Image 
      src='/uberbanner.jpeg' 
      alt='uberbanner' 
      layout="fill" 
      objectFit="cover" 
      className="z-0"
    />
    <div className="absolute top-20 right-10">
      <SignIn />
    </div>
  </div>
  )
}