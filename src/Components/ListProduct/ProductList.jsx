import {Product} from "../Product/Product";


export const ProductList = ({filterList,products,setProducts,addCart}) =>{
    return(
       <Product addCart={addCart} filterList={filterList} products={products} setProducts={setProducts}/>
    )
}
