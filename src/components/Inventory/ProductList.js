import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export const Products = () => {
    const [products, setProducts] = useState([])
    const [productType, setProductType] = useState()


    // const [filteredProducts, setFilteredProducts] = useState([])
    // const navigate = useNavigate()


    // const localKandyUser = localStorage.getItem("kandy_user")
    // const kandyUserObject = JSON.parse(localKandyUser)
    
    useEffect(
        () => {
            fetch("http://localhost:8088/products")
            .then(res => res.json())
            .then((productArray) => {
                setProducts(productArray)
            })
        },
        []
    )

    useEffect(
        () => {
            fetch("http://localhost:8088/productTypes")
            .then(res => res.json())
            .then((productTypeArray) => {
                setProducts(productTypeArray)
            })
        },
        []
    )


    return <>



        <h2>Kandy Korner Products</h2>
    
    <article className="products">
            {
                products.map(
                    (product) => {
                        return <section key={product.id} className="product">
                        <p>{product.name}</p>
                        <p>Price: {product.price}</p>
                        <p>Type: {product.type}</p>
                        </section>
                    }
                )
            }
        </article>
     </>
}