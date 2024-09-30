import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";
// import axios from "axios";

export default async function Home() {
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
    



  return (<>


    <Banner/>
    <BookList books={books}/>
    
    
    </>
 );
}
