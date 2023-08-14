import {AiOutlineSearch} from "react-icons/ai"
import {BtnSearch, FormContainer} from "../Search/StyledInputSeach"
import {BsFillCartFill} from "react-icons/bs"
import { BtnCart } from "../Header/StyledHeader"
import { useState } from "react"


export const Search = ({setIsOpen,setInputSearch}) =>{
    const [searchValue, setSearchValue] = useState("");
    const handleSearch = (e) => {
        e.preventDefault();
        setInputSearch(searchValue);
    };
    
    return(
        <FormContainer onSubmit={handleSearch}>
        <BtnCart onClick={()=> setIsOpen(true)}>
          <BsFillCartFill color="grey" size={20}/>
        </BtnCart>
            <input type="text" onChange={(e) => setSearchValue (e.target.value)} placeholder="Didite sua Pesquisa"/>
            <BtnSearch type="submit" >
             <AiOutlineSearch color="#e0e0e0" size={20}/>
            </BtnSearch>
        </FormContainer>
    )
}
