'use client'

import React, { useState } from 'react'
import HeroiconsMagnifyingGlass from './icons/magnifying-glass'
import { useRouter } from 'next/navigation'

export default function SearchInput() {
  const [pkg, setPkg] = useState('')
  const router = useRouter()

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    router.push(`/${pkg.trim()}`)
  }

  return (
    <form className='mt-4 flex' onSubmit={handleSubmit}>
      <div className='relative'>
        <input
          type="text"
          className='pl-3 pr-11 py-2.5 border shadow-sm rounded-md text-sm focus:outline-none  focus-visible:outline-yellow-500  focus-visible:outline-offset-0'
          placeholder='npm package'
          value={pkg}
          onChange={e => setPkg(e.target.value.trim())}
        />
        <span className='absolute inset-y-0 end-0 flex items-center pl-3.5 pr-1.5'>
          <button className='p-1.5 text-xl text-white bg-yellow-500 rounded-md disabled:cursor-not-allowed' type='submit' disabled={!pkg}>
            <HeroiconsMagnifyingGlass />
          </button>
        </span>
      </div>
    </form>
  )
}
