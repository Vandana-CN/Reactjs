import React, {useEffect, useState} from "react"
const Products = () => {
    const [products, setProducts] = useState([])

    const fetchData1 = () => {
        fetch('https://jsonplaceholder.typicode.com/albums')
    .then(res => res.json())
    .then(data => setProducts(data)).then(console.log());
    }
    
    useEffect(()=> {
        fetchData1()
    }, [])
    return(
        <div style={{backgroundColor: '#b6b9bd',width:700,border:'solid',borderRadius:10,borderColor:'ButtonShadow',color:'#3a3939',marginTop:5,marginLeft:10}}>
        <h1 style={{textAlign:'left',marginLeft:30,}}>Products</h1>
        <hr/>
        <h1 style={{textAlign:'left',marginLeft:30,}}>Total Products - {products.length}</h1>
        {products.length>0 && (
            
                <ul>
                    {products.map(product => (
                        <li key={product.id}>
                            {product.title}
                        </li>
                    ))}
                </ul>
           
            )}
        </div>
    )
}
export default Products