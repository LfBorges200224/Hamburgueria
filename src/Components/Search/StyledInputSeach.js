import styled from "styled-components";

export const FormContainer = styled.form`
    display: flex;
    position: relative;
    justify-content: center;
    transition: 0.5s;
    align-items: center;
    width: 382px;
    height: 60px;
    background: white;
    border: 2px solid var(--color-grey-0);
    border-radius: 8px;
    :hover{
        border: 2px solid var(--color-grey-600);
    }
    :focus{
        color: var(--color-grey-600);
    }
    @media (max-width: 768px){
        width: 100%;
    }

    input{
        width: 282px;
        height: 40px;
        color: var(--color-grey-600);
        border: none;
        outline: none;
        ::placeholder{
            color: var(--color-grey-600);
            
        }
    }
`

export const BtnSearch = styled.button`
    width:53px;
    height:40px;
    background: var(--color-color-primary);
    border: 2px solid var(--color-color-primary);
    border-radius: 8px;
`