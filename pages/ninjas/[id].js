import axios from 'axios';
import Link from "next/link";
export default function Ninjas({ ninja }) {
  return (
    <div>
      <Link href="/"><h2>Go Home</h2></Link>
    <div>Description: {ninja.data.attributes.Description}</div>
    </div>
  )
}

export async function getServerSideProps(context) {
  const res = await axios.get(`http://localhost:1337/api/restaurents/${context.query.id}`)
  return {
    props: {ninja:res.data },
  }

}





































/*import React from 'react'

export async function getStaticPaths(){
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await res.json();

    const paths = data.map(ninja => {
        return {
            params: { id: ninja.id.toString() }
        }
    })

    return {
      paths,
      fallback: false
    }
  }

  
  export async function getStaticProps(context) {
    const id = context.params.id;
    const res = await fetch('https://jsonplaceholder.typicode.com/users' +id);
    const data = await res.json();
  
    return {
        props: { ninja: data }
    }
  }
const Details = ( { ninja } ) => {
  return (
    <div>
      <h1>{ ninja.name } </h1>
      <p>{ ninja.email }</p>
      <p>{ ninja.website }</p>
    </div>
  )
}

export default Details*/
