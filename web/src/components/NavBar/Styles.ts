import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 100px;
    }

    .menu ul{
        display: flex;
        gap: 2.5rem;
    }

    .menu ul li {
        text-decoration: none;
        list-style: none;
        color: #fff;
        font-size: 1.3rem;
        cursor: pointer;
    }

    .menu ul li:nth-child(1){
        color: #92846A;
    }

    .shop {
        display: flex;
    }
`;