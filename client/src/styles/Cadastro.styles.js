import styled from "styled-components";
import fundo from "/Fundo.png";

export const TelaCadastro = styled.main`
    min-height: 100vh;
    background: url(${fundo}) center #000;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;

    img{
        width: 13.5rem;
        position: absolute;
        top: -7rem;
        left: 50%;
        transform: translate(-50%, 0);
    }

    section{
        position: relative;
        background:rgba(73, 32, 5, .95);
        max-width: 52.5rem;
        height: 47.5rem;
        border-radius: 30px;
        width: 100%;
    }

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2.75rem;
        padding-top: 7.5rem;

        input{
            max-width: 41rem;
            height: 5.85rem;
            width: 100%;
            border-radius: 100px;
            background:rgba(255, 255, 255, .65);
            padding-left: 2.5rem;
        }

        input[type="number"]::-webkit-outer-spin-button,
        input[type="number"]::-webkit-inner-spin-button {
            -webkit-appearance: none;
        }

        input::placeholder, input{
            color: #331400;
            font-family: "Josefin Sans", serif;
            font-weight: 300;
            font-style: italic;
            font-size: 2rem;
        }

        a{
            color: #FFBF96;
            font-family: "Josefin Sans", serif;
            font-size: 1.75rem;
            font-weight: 400;
        }

        button{
            font-family: "Josefin Sans", serif;
            font-size: 2rem;
            font-weight: 700;
            color: #FFB88A;
            background: #291000;
            width: 17.125rem;
            height: 5.25rem;
            border: none;
            border-radius: 20px;
            cursor: pointer;
        }

        button:active{
            scale: 0.85;
        }

    }

    @media (max-width: 480px) {
        section{
            margin-inline: 1.5rem;
            padding-inline: 1rem;
        }
    }
`