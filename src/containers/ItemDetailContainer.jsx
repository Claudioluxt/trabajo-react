import { useEffect, useState } from "react";
import promesaDetail from "../utils/promesaDetail";
import {data} from "../utils/data.js";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { id } = useParams();

    useEffect(() => {
        promesaDetail(500, data.find(item => item.id == id))
        .then(result => setDato(result))
        .catch(err => console.log(err))
    }, [id]);

    return (
        <ItemDetail item={dato} />
        )
    }
       
    


export default ItemDetailContainer;