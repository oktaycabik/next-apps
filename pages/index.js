import product from "../data.json";
import Link from 'next/link'

export default function Home() {
  return (
    <div>
      <ul>
        {product.map((pro) => (
          <li key={pro.id}>
            <Link href={`/${pro.id}`}> 
            {pro.name}
            </Link>
            {pro.id}
          </li>
        ))}
      </ul>
    </div>
  );
}
