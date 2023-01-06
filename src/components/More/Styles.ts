import styled from "styled-components";

export const Container = styled.div`
    height: 40rem;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 50px;

    .photo {
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .photo img {
        width: 900px;
        height: 500px;
        margin-left: 5rem;
    }

    .info {
        display: flex;
        flex-direction: column;
        padding-top: 3.5rem;
    }

    .info h1 {
        font-size: 4rem;
        margin-bottom: 5rem;
        color: #fff;
    }

    .info span {
        color: #92846A;
    }

    .info hr {
        width: 100px;
        margin-bottom: 5rem;
    }

    .info p {
        max-width: 480px;
        color: #fff;
        font-size: 1.1rem;
        margin-bottom: 5rem;
    }
`;