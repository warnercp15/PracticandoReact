import React from 'react'
import Product from "./Product";

const ListProducts = ({listProducts,selectProduct}) => {
    return ( 
        <div id="listShoppingCart">
            {listProducts.length===0
            ?<p>No products selected</p>
            :listProducts.map(product=>(
                <Product
                    key={Math.random()*new Date().getMilliseconds()}
                    product={product}
                    listProducts={listProducts}
                    selectProduct={selectProduct}
                />
            ))}
        </div>
    );
}

export default ListProducts;