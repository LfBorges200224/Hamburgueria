import HamburguerLogo from "../../assets/MaskGroup.svg";
import { Search } from "../Search/InputSearch";
import { Headerstyle } from "./StyledHeader";



export const Header = ({setIsOpen,setInputSearch}) => {
  return (
    <Headerstyle>
      <div className="Headercontent">
        <img src={HamburguerLogo} alt="Hambuergueria-Kenzie"/>
      </div>
      <Search setIsOpen={setIsOpen} setInputSearch={setInputSearch}/>
    </Headerstyle>
  );
};

