import React from 'react'

export default function Page({ params: { pkg } }: { params: { pkg: string[] } }) {
  const pkgName = decodeURIComponent(pkg.join('/'))

  return (
    <div>{pkgName}</div>
  )
}
