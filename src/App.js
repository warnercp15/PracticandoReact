import React,{useState} from 'react'
import Footer from './components/Footer/Footer';
import Product from './components/Product/Product';
import ListProducts from './components/ListProducts/ListProducts';
import "./App.css";

function App() {

    const [products,setProducts]=useState([
    {id:1,name:"Laptop",imageUrl:"https://http2.mlstatic.com/D_NQ_NP_652756-MCR42427933315_072020-W.jpg"},
    {id:2,name:"Controller",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg"},
    {id:3,name:"Monitor",imageUrl:"https://d500.epimg.net/cincodias/imagenes/2019/10/17/gadgets/1571299877_786439_1571300030_noticia_normal.jpg"},
    {id:4,name:"Headphones",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51z376z5iBL._AC_SL1200_.jpg"}
    ]);

    const [listProducts,selectProduct]=useState([]);

    return (
        <div className="App">
            <div id="mainContainer">
                <div id="productsContainer">
                    <h3>Products</h3>
                    {products.map(product=>(
                        <Product
                            key={product.id}
                            product={product}
                            products={products}
                            listProducts={listProducts}
                            selectProduct={selectProduct}
                        />
                    ))}
                </div>
                <div id='listShopping'>
                    <h3>Shopping Cart</h3>
                    <ListProducts
                        listProducts={listProducts}
                        selectProduct={selectProduct}
                    />
                </div>
            </div>
            <Footer/>
        </div>
    );
}
export default App;