import styled from "styled-components";

import img from "../../assets/1.jpg";

export const Container = styled.div`
    width: 100%;
    height: 86vh;
    background-image: url(${img});
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;

    .opacity {
        height: 100%;
        backdrop-filter: blur(3px);
        background: rgb(0,0,0);
        background: linear-gradient(249deg, rgba(0,0,0,0.6758053563222164) 0%, rgba(0,0,0,0.7178221630449055) 100%);
        display: flex;
        flex-direction: column;
        justify-content: center;
    }

    h1 {
        color: #fff;
        font-size: 4.2rem;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        margin-left: 5rem;
        user-select: none;
    }
    
    span {
        color: #92846A;
    }

    hr {
        width: 150px;
        border: none;
        border-bottom: 2px solid #fff;
        margin-top: 2.3rem;
        margin-left: 5rem;
    }

    p {
        color: #fff;
        font-size: 1.2rem;
        margin-top: 2.3rem;
        margin-left: 5rem;
        user-select: none;
    }

    @media screen and (max-width: 700px) {
        h1 {
            font-size: 3rem;
        }

        p {
            font-size: 1rem;
        }
    }

    @media screen and (max-width: 520px) {
        h1 {
            margin-left: 2rem;
            font-size: 2.5rem;
        }

        hr {
            margin-left: 2rem;
        }

        p {
            margin-left: 2rem;
        }
    }
`;