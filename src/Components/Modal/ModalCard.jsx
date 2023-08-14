import { HeaderModal, ModalStyle, BtnRemove, ContPrice, Empty} from "../Modal/StyledModal";
import {BsFillTrashFill} from "react-icons/bs"
import { StyledH4, StyledH3, StyledH2} from "../../Style/tipograpy"
import { useEffect, useRef } from "react";

export const Modal = ({isOpen, setIsOpen, cart, removeCart, setCart, value}) => {
    const modalRef = useRef(null);
    const buttonRef = useRef(null);

    const addItens = (product) => {
        const attCart = cart.map((obj)=>{
            if(obj.id === product.id){
                return {...obj,amount:obj.amount+1}
            }
            return obj
        })
        setCart(attCart)
    }

    const removeItens = (product) =>{
        const attCart = cart.map((obj)=>{
            if(obj.id === product.id){
                const newValue = obj.amount-1
                return {...obj,amount:newValue}
            }
            return obj
        })
        const newAtt = attCart.filter(obj => obj.amount > 0)
        setCart(newAtt)
    }

    useEffect(() =>{
        const handleOutClick = (event) =>{
            if(!modalRef.current?.contains(event.target)){
                setIsOpen(false)
            }
        }
        window.addEventListener("mousedown", handleOutClick);
        const handleKeyDown = (event) => {
            if(event.key === "Escape"){
                buttonRef.current?.click()
            }
        }
        window.addEventListener("keydown",handleKeyDown)
        return () =>{
            window.removeEventListener("mousedown", handleOutClick);
            window.removeEventListener("keydown",handleKeyDown);
        }
    },[])

    const closeModal = () => {
        setIsOpen(false);
    };
  return (
    <ModalStyle role="dialog" isOpen={isOpen}>
     <div className="ContMain" ref={modalRef}>
        <HeaderModal>
            <StyledH2>Carrinho de Compras</StyledH2>
            <button onClick={closeModal} ref={buttonRef}>X</button>
        </HeaderModal>
        {
            cart.length > 0 ?

        <ul className="list">
            {cart.map(product =>(
                <li className="EnterProduct">
                    <div className="contPhoto"><img src={product.img} /></div>
                    <div className="contConten">
                        <div className="NameProd">
                            <StyledH3>{product.name}</StyledH3>
                            <BsFillTrashFill onClick={()=>{removeCart(product)}} color="#e0e0e0" size={25}/>
                        </div>
                        <div className="contChoose">
                            <button onClick={()=>{removeItens(product)}} className="btnChoose">-</button>
                            <p className="number">{product.amount}</p>
                            <button onClick={()=>{addItens(product)}} className="btnChoose">+</button>
                        </div>
                    </div>
                </li>
            ))}

        </ul>:  <Empty>
                    <p>Adicione itens ao seu carrinho...</p>
                </Empty>
        }
        <div className="ContRemove"> 
            <ContPrice>
                <StyledH3>Total</StyledH3>
                <StyledH3>{value.toLocaleString("pt-BR", { style: "currency", currency: "BRL",})}</StyledH3>
            </ContPrice>
            <BtnRemove onClick={()=>{setCart([])}}>Remover Todos</BtnRemove>
        </div>
    </div>
    </ModalStyle>
  );
};
