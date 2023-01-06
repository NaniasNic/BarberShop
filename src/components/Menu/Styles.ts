import styled, { css } from "styled-components";

export const Container = styled.div`
    position: absolute;
    backdrop-filter: blur(3px);
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 5;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    background: rgb(0,0,0);
    background: linear-gradient(249deg, rgba(0,0,0,0.8718837876947654) 0%, rgba(0,0,0,0.8690826672465861) 100%);

    opacity: ${({ isVisible }) => isVisible ? 1 : 0};
    pointer-events: none;

    transition: .5s ease;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: #fff;
    }

    .menuMob ul{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        user-select: none;
    }

    .menuMob ul{
        display: flex;
        gap: 2.5rem;
    }

    .menuMob ul li {
        text-decoration: none;
        list-style: none;
        color: #fff;
        font-size: 1.3rem;
        cursor: pointer;
    }

    .menuMob ul li:nth-child(1){
        color: #92846A;
    }

    .shopMob {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .shopMob button {
        width: 100%;
    }

    ${({ isVisible }) => isVisible && css`
        pointer-events: auto;
    `}
`;