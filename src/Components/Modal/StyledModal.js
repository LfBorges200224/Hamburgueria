import styled from "styled-components";

export const ModalStyle = styled.div`
    height: 100vh;
    width: 100%;
    background: rgba(0,0,0, .3);
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    inset: 0;

    @keyframes  ContMain{
	0% {
		opacity: 0;
		transform: translateY(-250px);
	}

	100% {
		opacity: 1;
		transform: translateY(0);
	}
}
    .list{
        display: flex;
        flex-direction: column;
        width: 100%;
        gap: 10px;
        min-height: 170px;
        max-height: 170px;
        overflow-y: auto;
        padding-left: 20px;
    }

    .ContMain{
        width: 500px;
        height: 411px;
        background: var(--color-grey-0);
        border-radius: 5px;
        font-family: 'Inter', sans-serif;
        padding: 0;
        flex-direction: column;
        animation: ContMain 2s ease 0s 1 normal forwards;
        gap: 20px;
        @media(max-width:768px){
            width: 375px;
        }
    }

    .ContRemove{
        display: flex;
        flex-direction: column;
        margin-left: 20px;
        margin-right: 20px;
        border-top: 2px solid var(--color-grey-100);
        gap: 20px;
        @media(max-width:768px){
        }
    }

    .contPhoto{
        display: flex;
        align-items: center;
        justify-content: center;
        width: 108.26px;
        height: 80px;
        border: 2px solid var(--color-grey-100);
        border-radius: 8px;
        background: var(--color-grey-100);
    }

    img{
        width: 55px;
        height: 53.49px;
    }

    .btnChoose{
        display: flex;
        align-items: center;
        background: none;
        font-family: 'Inter', sans-serif;
        color: var(--color-grey-100);
        font-size: 30px;
        border: none;
    }
    .number{
        font-size: 20px;
    }
    .contChoose{
        display: flex;
        flex-direction: row;
        align-items: center;
        height: fit-content;
    }
    .contConten{
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 400px;
       
    }
    .NameProd{
        display: flex;
        width: 90%;
        flex-direction: row;
        justify-content: space-between;
        @media(max-width:768px){
            width: 88%;
        }
    }
    .EnterProduct{
        display: flex;
        flex-direction: row;
        width: 100%;
        gap: 20px;
        height: 80px;
    }
`
export const Empty = styled.div`
    display: flex;
    font-family: 'Inter', sans-serif;
    justify-content: center;
    align-items: center;
    min-height: 170px;
    max-height: 170px;
`
export const HeaderModal = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    height: 54px;
    color: white;
    padding: 10px;
    border: 2px solid var(--color-color-primary);
    border-radius: 5px;
    background: var(--color-color-primary);
    

    button{
        font-size: 15px;
        background: none;
        border: none;
        color: white;
    }
`
export const ContPrice = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    
`

export const BtnRemove = styled.button`
    color: var(--color-grey-300);
    width: 100%;
    height: 60px;
    padding: 10px;
    font-family: 'Inter', sans-serif;
    border: 2px solid var(--color-grey-100);
    border-radius: 8px;
    background: var(--color-grey-100);
    :hover{
        background: var(--color-grey-300);
        border: 2px solid var(--color-grey-300);
        color: var(--color-grey-0);
        border-radius: 8px;
    }
`