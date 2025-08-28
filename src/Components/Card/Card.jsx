import { useEffect, useState } from "react"
import { fetchProducts } from "../Api/api"
import './card.css'

export default function Card() {

    const [products , setProducts] = useState([]);


    useEffect(()=> {
        fetchProducts().then(data => setProducts(data));
    } , []);
  
  return (
    <div className="container">
      {products && products.map((p, index) => (
        <div key={index} className="card">
          <div className="title">{p.title}</div>
          <div className="description">{p.description}</div>
          <div className="price">{p.price}</div>
        </div>
      ))}
    </div>
  );
}
