import { useEffect, useState } from "react"
import { api } from "../../Services/api"
import { StyledH2, StyledH4, StyledText } from "../../Style/tipograpy";
import { BtnAdd, StyledList, Ulcont } from "../Product/StyledProduct"
export const Product = ({setProducts, filterList, addCart}) => {
    useEffect(() => {
      const getProducts = async () => {
        try {
          const response = await api.get('/products');
          setProducts(response.data);
        } catch (error) {
          console.log("erro");
        }
      };
  
      getProducts();
    }, []);
  
    return (
      <Ulcont>
        {filterList.map((product) => (
          <StyledList key={product.id}>
            <div className="ContImg">
              <img src={product.img} alt="imagem" />
            </div>
            <div className="ContInformation">
              <StyledH2>{product.name}</StyledH2>
              <StyledH4>{product.category}</StyledH4>
              <StyledText>{product.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}</StyledText>
              <BtnAdd onClick={()=>{addCart(product)}}>Adicionar</BtnAdd>
            </div>
          </StyledList>
        ))}
      </Ulcont>
    );
  };
  