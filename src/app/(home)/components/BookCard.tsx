import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookCard = ({book}:{book:Book}) => {
  return (
    <div className='flex gap-5 border p-5 shadow-md'>
      <Image src={book.coverImage} alt={book.title} width={300} height={300} />
      <div>
        <h2>{book.title}</h2>
        <p>{book.author.name}</p>
        <Link href={`/book/${book._id}`}>Read more</Link>
      </div>
    </div>
  )
}

export default BookCard
