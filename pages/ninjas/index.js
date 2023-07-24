import axios from 'axios';
import Link from "next/link";
export default function Home({ ninjas }) {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.data.map((ninja) => {
       return <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
        <h3>{ninja.attributes.Name}</h3>
      </Link>
      }
      )}
      </div>
  );
}
export async function getStaticProps() {
  const res = await axios.get('http://localhost:1337/api/restaurents');
  return {
    props: { ninjas:res.data },
  };
}

