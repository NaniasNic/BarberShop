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

    opacity: 0;
    pointer-events: none;

    transition: .5s ease;

    > svg {
        position: absolute;
        top: 1rem;
        right: 1rem;
        color: #fff;
    }

    .menu ul{
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
    }

    .shop {
        margin-top: 1rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        gap: 10px;
    }

    .shop button {
        width: 100%;
    }

    ${({ isVisible }) => isVisible && css`
        opacity: 1;
        pointer-events: auto;
    `}
`;