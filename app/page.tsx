import Link from '@/components/link'
import SearchInput from '@/components/search-input'
import React from 'react'

export default function Page() {
  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='font-bold text-4xl'>NPM CHART</h1>
        <p className='text-gray-500 text-sm mt-1'>Search for a package to see its download stats over time.</p>
        <SearchInput />
      </div>
      <footer className='fixed bottom-0 w-full pb-6 flex justify-center'>
        <p className='text-gray-500 text-sm'>
          Made by <Link target='_blank' href='https://github.com/zb81'>zb81</Link>
          <span className='mx-1.5'>·</span>
          Source code on <Link target='_blank' href='https://github.com/zb81/npm-chart'>GitHub</Link>
        </p>
      </footer>
    </>
  )
}
