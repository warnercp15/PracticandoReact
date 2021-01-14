import React,{useState} from 'react'
import Footer from './components/Footer';
import Product from './components/Product';
import ListProducts from './components/ListProducts';
import "./App.css";

function App() {

    const [products,setProducts]=useState([
    {name:"Laptop",imageUrl:"https://http2.mlstatic.com/D_NQ_NP_652756-MCR42427933315_072020-W.jpg"},
    {name:"Controller",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/71y%2BUGuJl5L._SL1500_.jpg"},
    {name:"Monitor",imageUrl:"https://d500.epimg.net/cincodias/imagenes/2019/10/17/gadgets/1571299877_786439_1571300030_noticia_normal.jpg"},
    {name:"Headphones",imageUrl:"https://images-na.ssl-images-amazon.com/images/I/51z376z5iBL._AC_SL1200_.jpg"}
    ]);

    const [listProducts,selectProduct]=useState([]);

    return (
        <div className="App">
            <div>
                <h1>Products</h1>
                {products.map(product=>(
                    <Product
                        key={Math.random()*new Date().getMilliseconds()}
                        product={product}
                        products={products}
                        listProducts={listProducts}
                        selectProduct={selectProduct}
                    />
                ))}
            </div>
            <div>
                <h1>Shopping Cart</h1>
                <ListProducts
                    listProducts={listProducts}
                    selectProduct={selectProduct}
                />
            </div>
            <Footer/>
        </div>
    );
}
export default App;