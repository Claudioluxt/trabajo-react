import { useEffect, useState } from "react";
import {firestoreOneFetch} from "../utils/firebaseConfig";
import ItemDetail from "../components/ItemDetail";
import { useParams } from "react-router-dom";


const ItemDetailContainer = () => {
    const [dato, setDato] = useState({});
    const { id } = useParams();

    useEffect(() => {
        firestoreOneFetch(id)
            .then(result => setDato(result))
            .catch(err => console.log(err))
    }, [id]);

    return (
        <ItemDetail item={dato} />
        )
    }
       
    


export default ItemDetailContainer;