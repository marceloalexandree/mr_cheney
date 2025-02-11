import styled from "styled-components";

export const TelaCupom = styled.main`
    background-color: #FFDBC4;
    min-height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;

    section{
        width: 71rem;
        height: 30rem;
        background: linear-gradient(to right, #4F2A0A 50%, #E8A4AF 50%);
        border-radius: 25px;
        position: relative;
        overflow: hidden;
        display: flex;
        justify-content: space-between;
    }

    section::before,
    section::after {
    content: "";
        position: absolute;
        width: 40px;
        height: 40px;
        background-color: #FFDBC4;
        border-radius: 50%;
    }

    section::before {
        top: -20px;
        left: 40%;
        transform: translateX(-50%);
    }

    section::after {
        bottom: -20px;
        left: 40%;
        transform: translateX(-50%);
    }

    .esquerda{
        color: #FFFFFF;
        font-family: "Josefin Sans", serif;
        display: flex;
        flex-direction: column;
        justify-content: center;
        gap: 2rem;
        height: 100%;
        width: 40.5%;
        padding-left: 4rem;
        border-right: 5px #FFDBC4 dashed;

        h1{
            font-size: 3rem;
            text-transform: uppercase;
            font-weight: bold;
        }

        p, h2{
            font-size: 2rem;
            max-width: 19.5rem;
            font-weight: 600;
        }

        h2{
            color: #FFB88A;
            margin-top: 1rem;
        }

        #sublinhado{
            text-decoration: underline;
        }
    }

    .direita{
        font-size: 7.75rem;
        font-family: "Josefin Sans", serif;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #4F2A0A;
        
        p{
            background: #EEEEEE;
            height: 20rem;
            width: 20rem;
            border-radius: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    #Logo{
        position: absolute;
        top: 2rem;
        left: 2rem;
        width: 7rem;
    }

    @media (max-width: 390px) {
        .esquerda{
            padding-left: 2rem;
            h1{
                font-size: 2.75rem;
            }
        }
    }
`