import { useEffect, useState } from "react";
import desafio from "../utils/promesa";
import {data} from "../utils/data.js";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";


export default function ItemListContainer(props) {

    const [products, setProducts] = useState([]);
    const { id } = useParams();


  
    useEffect(() => {
      if (id) {
      desafio(data.filter(item => item.categoryId == id))
        .then(result => setProducts(result))
        .catch(err => console.log(err))
      } else {
        desafio(data)
        .then(result => setProducts(result))
        .catch(err => console.log(err))

      }
    })
  
    return (
      <div>
        <h1>{props.greetings}</h1>
        <ItemList items={products} />
      </div>
    );
  }