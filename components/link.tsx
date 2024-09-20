import React, { ComponentProps } from 'react'
import { default as NextLink } from 'next/link'

export default function Link(props: ComponentProps<typeof NextLink>) {
  return (
    <NextLink className='text-gray-700 dark:text-gray-300 hover:underline hover:underline-offset-4' {...props}>{props.children}</NextLink>
  )
}
