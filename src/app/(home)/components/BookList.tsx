
import React from 'react'
import BookCard from './BookCard'
import { Book } from '@/types';

const BookList = async() => {
  //data fetching



///Getting data from API using Axios function
// const response = await axios.get("http://localhost:4000/api/users/books");

//     const books = response.data; // Axios already parses the JSON response
//     console.log("Fetched books from API:", books);


    //Getting data from API using fecth function
    const response = await fetch(`${process.env.BACKEND_URL}/books`, {
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json",
      },
    });
    
    if (!response.ok) {
      throw new Error("An error occurred while fetching the books");
    }
    
    const books = await response.json();
    console.log("Fetched books from API:", books);
    
  return (
    <div className='grid grid-cols-1 gap-8 md:grid-cols-3 max-w-7xl mx-auto mb-10'>
      
     {books.map((book:Book)=>(
      
      <BookCard key={book._id} book={book}/>
     ))}


    </div>
  )
}

export default BookList
