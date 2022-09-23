import { useEffect, useState } from "react";
import {firestoreFetch} from "../utils/firebaseConfig";
import { useParams } from "react-router-dom";
import ItemList from "../components/ItemList";



export default function ItemListContainer(props) {

  const [products, setProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    firestoreFetch(id)
      .then(result => setProducts(result))
      .catch(err => console.log(err))
  }, [id])

    
    return (
      <div>
        <h1>{props.greetings}</h1>
        <ItemList items={products} />
      </div>
    );
  }