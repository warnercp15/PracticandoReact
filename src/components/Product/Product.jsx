import React from 'react';
import "./Product.css";

const Product = ({product,products,listProducts,selectProduct}) => {

    const {name,imageUrl,id}=product;

    const addProduct=(id)=>{
        const product=products.filter(product=>product.id===id)[0];
        selectProduct([...listProducts,product])
    }

    const deleteProduct=(id)=>{
        const newlistProducts=listProducts.filter(product=>product.id!==id);
        selectProduct(newlistProducts);
    };

    return (
        <div className="card">
            <p>{name}</p>
            <img src={imageUrl} alt={name}/>
            {products
                ?<button type="button" onClick={()=>{addProduct(id)}} style={{background:"green"}}>Add</button>
                :<button type="button" onClick={()=>{deleteProduct(id)}} style={{background:"red"}}>Delete</button>
            }
        </div>
     );
}
 
export default Product;