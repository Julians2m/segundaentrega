const misProductos = [
    { id: "1", nombre: "Yerba", precio: 500, img: "", idCat: "2" },
    { id: "2", nombre: "Fideos", precio: 200, img: "", idCat: "2" },
    { id: "3", nombre: "Arroz", precio: 180, img: "", idCat: "3" },
    { id: "4", nombre: "Aceite", precio: 900, img: "", idCat: "3" },
]

export const getUnProductos = (id) => {
    return new Promise(resolve => {
        setTimeout( () => {
            const producto = misProductos.find(prod=> prod.id === id);
            resolve(producto);
        }, 100)
    })
}

export const getProductosPorCategoria = (idCategoria) => {
    return new Promise ( resolve => {
        setTimeout( () => {
            const productosCategoria = misProductos.filter(prod => prod.idCat === idCategoria);
            resolve(productosCategoria);
        }, 100 )
    })
}

export default misProductos;
