import Link from 'next/link'
import {React, useEffect} from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push("/");
        }, 3000)
    }, [])  
  return (
    <div className="not-found"> 
    <h1>Opsss.....</h1>
    <h2>that page can not be found</h2>
    <p>Go back to the <Link href="/">Home Page</Link></p>
      
    </div>
  )
}

 export default NotFound
