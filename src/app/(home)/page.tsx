import Banner from "@/app/(home)/components/Banner";
import BookList from "@/app/(home)/components/BookList";
import Loading from "@/components/Loading";
import { Suspense } from "react";
// import axios from "axios";

export default async function Home() {




  return (<>


    <Banner/>
    <Suspense fallback={<Loading/>}>

    <BookList />
    </Suspense>
    
    
    
    </>
 );
}
