import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";

export default async function Home() {
//data fetching
const response = await fetch(`${process.env.BACKEND_URL}/books`);

//const response =await fetch("http://localhost:4000/api/users/books")

if(!response.ok){
  throw new Error("An error occured while fetching the books");
}

const books=await response.json();
console.log("Fetched books from API:", books);
// const response = await fetch(`${process.env.BACKEND_URL}/books`);
// const data = await response.text(); // Get the raw text
// console.log("Raw response:", data); // Check the raw response
// const books = JSON.parse(data); // Parse it into JSON
// console.log("Parsed books:", books);



  return (<>


    <Banner/>
    <BookList books={books}/>
    
    
    </>
 );
}
