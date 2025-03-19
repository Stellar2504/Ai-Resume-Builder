import React from 'react'
import { Button } from "@/components/ui/button";


function Navigation() {
  return (
    <>
    <div className='flex flex-row justify-between items-center px-6 py-3 bg-black/80 rounded-b-md bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-70 sticky top-0 border-b border-white'>
      <div className="logo cursor-pointer">
        <h1 className='text-white text-2xl font-semibold'>Resubuild</h1>
      </div>
      <div>
        <Button className="btn cursor-pointer">Get Started</Button>
      </div>
    </div>
    </>
  )
}

export default Navigation