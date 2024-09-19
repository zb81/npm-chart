import Link from '@/components/link'
import SearchInput from '@/components/search-input'
import React from 'react'

const packages = ['react', 'vue', 'svelte', 'angular', 'solid-js', 'next', 'hono', 'fastify', 'nuxt', 'astro', 'supabase', '@adonisjs/core', '@strapi/strapi', '@nestjs/core', 'directus', 'lodash', 'date-fns', 'express', 'h3', 'nitropack', 'typescript', 'vite']

export default function Page() {
  const randomPackages = packages.slice().sort(() => 0.5 - Math.random()).slice(0, 4)

  return (
    <>
      <div className='flex flex-col items-center justify-center h-screen'>
        <h1 className='font-bold text-4xl'>NPM CHART</h1>
        <p className='text-gray-500 text-sm mt-1'>Search for a package to see its download stats over time.</p>
        <SearchInput />
        <div className='flex gap-1 mt-3'>
          {randomPackages.map(pkg => <Link key={pkg} href={`/${pkg.trim()}`} className='px-2 py-1 border-gray-300 font-medium shadow-sm border rounded text-xs'>{pkg}</Link>)}
        </div>
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
