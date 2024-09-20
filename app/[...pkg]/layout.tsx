import HeroiconsMagnifyingGlass from '@/components/icons/magnifying-glass'
import React from 'react'

export default function Layout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className='mx-auto flex flex-col w-full md:w-[680px] items-center'>
      <div>
        <a className='text-gray-500 hover:text-gray-900 cursor-pointer hover:underline hover:underline-offset-4 flex gap-1.5 items-center text-xs font-medium'>
          <span className='text-base'>
            <HeroiconsMagnifyingGlass />
          </span>
          Search another package
        </a>


      </div>

      {children}
    </div>
  )
}
