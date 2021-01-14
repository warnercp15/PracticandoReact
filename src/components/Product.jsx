import React from 'react';

const Product = ({product,products,listProducts,selectProduct}) => {

    var {name,imageUrl,id}=product;

    const addProduct=()=>{
        let newProduct={...product};
        newProduct.id=Math.random()*new Date().getMilliseconds();
        selectProduct([...listProducts,newProduct])
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
                ?<button type="button" onClick={()=>{addProduct()}} style={{background:"green"}}>Add</button>
                :<button type="button" onClick={()=>{deleteProduct(id)}} style={{background:"red"}}>Delete</button>
            }
        </div>
     );
}
 
export default Product;