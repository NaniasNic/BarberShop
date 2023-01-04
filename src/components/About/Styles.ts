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
        font-size: 3.5rem;
        text-transform: uppercase;
        display: flex;
        flex-direction: column;
        margin-left: 5rem;
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
        margin-top: 2.3rem;
        margin-left: 5rem;
    }
`;