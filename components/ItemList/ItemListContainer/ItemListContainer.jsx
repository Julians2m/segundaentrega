import { useState, useEffect } from "react";
import getProductosPorCategoria from '../../asyncmock';

import ItemList from "../ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = (props) => {
    const [productos, setProductos] = useState([]);

    const { idCategoria } = useParams();

    useEffect(() => {
        const funcion = idCategoria ? getProductosPorCategoria : 'getproductos';

        funcion(idCategoria)
            .then(res => setProductos(res))

    }, [idCategoria])

    console.log(props)


    return (
        <>
            <h2> {props} </h2>
            <ItemList productos={productos} />
        </>
    )
}

export default ItemListContainer