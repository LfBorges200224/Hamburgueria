import styled from "styled-components";

export const Ulcont = styled.ul`
    display: flex;
    width: 100%;
    align-items: center;
    flex-direction: row;
    gap: 10px;
    overflow-x: auto;
    @media (min-width: 769px){
        flex-wrap: wrap;
        gap: 80px;
    }
`

export const BtnAdd = styled.button`
    width: 106px;
    height: 40px;
    padding: 10px;
    transition: 0.5s;
    background: var(--color-grey-100);
    border: 2px solid var(--color-grey-100);
    border-radius: 8px;
    font-weight: 600;
    font-size: 14px;
    color: #ffffff;
    font-family: 'Inter', sans-serif;
    :hover{
        background: var(--color-color-primary);
        border: 2px solid var(--color-color-primary);
    }

`
export const StyledList = styled.li`
    display: flex;
    transition: 0.5s;
    flex-direction: column;
    min-width: 300px;
    height: 346px;
    border: 2px solid var(--color-grey-100);
    border-radius: 8px;
    :hover{
        border: 2px solid var(--color-color-primary);
    }
    img{
        height: 110px;
        width: 110px;
    }
    .ContImg{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        background: var(--color-grey-100);
    }
    .ContInformation{
        display: flex;
        margin-top: 20px;
        gap: 10px;
        align-items: center;
        align-items: flex-start;
        flex-direction: column;
        padding: 10px;
    }
`