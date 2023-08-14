import styled from "styled-components"

export const Headerstyle = styled.header`
    display: flex;
    flex-direction: row;
    align-items: center;
    flex-wrap: wrap;
    justify-content: space-between;
    background: var(--color-grey-100);
    width: 100%;
    padding: 20px 0px;
    height: fit-content;
    padding-left: clamp(20px , 10vw, 100px);
    padding-right: clamp(20px , 10vw, 100px);
    @media (max-height:768px){
        padding: 20px 0px;
        flex-direction: column;
        align-items: flex-start;
        padding-left: clamp(20px , 1.25rem, 100px); 
        padding-right: clamp(20px , 1.25rem, 100px);
    }

    img{
        width: 150px;
        height: 22.85px;
        margin-left: 26px;
        @media(max-width:768px){
            margin-left: 5px;
        }
    }

    .Headercontent{
        width: fit-content;
        height: 60px;  
        display: flex;
        align-items:center;
        justify-content: space-between;
    }
`
export const BtnCart = styled.button`
    border: none;
    background: none;
    position: absolute;
    top: 17px;
    right: 390px;
    @media(max-width:768px){
        top: -44px;
        right: 0;
    }
`