import { createGlobalStyle } from "styled-components";

export const GlobalStyle =  createGlobalStyle `
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        scroll-behavior: smooth;
    }

    @media (max-height: 920px) {
        html{
            font-size: 9px;
        }
    }

    @media (min-height: 921px) and (max-height: 1040px) {
        html{
            font-size: 14px;
        }
    }

    @media (max-width: 480px) {
        html{
            font-size: 7px;
        }
    }
`