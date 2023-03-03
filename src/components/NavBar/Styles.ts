import styled from "styled-components";

export const Container = styled.nav`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

    img {
        height: 100px;
    }

    svg {
        display: none;
    }

    .menu ul{
        display: flex;
        gap: 2.5rem;
        user-select: none;
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

    @media screen and (max-width: 940px) {
        .menu {
            display: none;
        }

        .shop {
            display: none;
        }

        svg {
            display: block;
            color: #fff;
            cursor: pointer;
        }
    }
`;