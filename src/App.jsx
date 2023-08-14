import React, { useState, useEffect } from "react";
import { Header } from "./Components/Header/Header.jsx";
import { ProductList } from "./Components/ListProduct/ProductList.jsx";
import { Modal } from "./Components/Modal/ModalCard.jsx";
import { GlobalStyle } from "./Style/GlobalStyle.js";
import { Reset } from "./Style/Reset.js";

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputSearch, setInputSearch] = useState("");
  const [products, setProducts] = useState([]);
  const [productsCard, setProductsCard] = useState([]);
  const [cart, setCart] = useState([]);
  const [value, setValue] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  const filterList = products.filter(
    (product) =>
      product.name.toUpperCase().includes(inputSearch.toUpperCase()) ||
      product.category.toUpperCase().includes(inputSearch.toUpperCase())
  );

  useEffect(() => {
    const calcTotal = () => {
      const valueCart = cart.reduce(
        (total, obj) => total + obj.price * obj.amount,
        0
      );
      setValue(valueCart);
    };
    calcTotal();
  }, [cart]);

  const removeCart = (product) => {
    const attCart = cart.filter((obj) => obj.id !== product.id);
    setCart(attCart);
  };

  const addCart = (product) => {
    const verifyProduct = cart.find((obj) => obj.id === product.id);
    if (verifyProduct) {
      const attCart = cart.map((obj) => {
        if (obj.id === product.id) {
          return { ...obj, amount: obj.amount + 1 };
        }
        return obj;
      });
      setCart(attCart);
    } else {
      const attCart = { ...product, amount: 1 };
      setCart([...cart, attCart]);
    }
  };

  return (
    <>
      <GlobalStyle />
      <Reset />
      <Header setIsOpen={setIsOpen} setInputSearch={setInputSearch} />
      <main>
        {isOpen ? (
          <Modal
            value={value}
            setCart={setCart}
            removeCart={removeCart}
            cart={cart}
            setIsOpen={setIsOpen}
          />
        ) : null}
        <ProductList
          addCart={addCart}
          filterList={filterList}
          products={products}
          setProducts={setProducts}
        />
      </main>
    </>
  );
};

export default App;
