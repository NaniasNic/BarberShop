import styled from "styled-components";

export const Container = styled.div`
    display: grid;
    height: 30rem;
    grid-template-columns: repeat(4, 1fr);
    align-content: center;
    justify-items: center;
`;

export const Card = styled.div`
    width: 300px;
    height: 400px;
    background-color: #2A2A2A;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;

    img {
        height: 100px;
    }

    h1 {
        color: #fff;
        text-transform: uppercase;
    }

    p {
        text-align: center;
        color: #fff;
    }

    h3 {
        text-transform: uppercase;
        color: #92846A;
    }
`;