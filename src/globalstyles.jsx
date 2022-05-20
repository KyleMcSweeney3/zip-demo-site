import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`

    * {
        padding: 0;
        border: 0;
        outline: 0;
        list-style: none;
        text-decoration: none;
        box-sizing: inherit;
        color: #1B0825;
    }

    html {
        box-sizing: border-box;
        width: 100%;
        scroll-behavior: smooth;
    }

    body {
        margin: 0;
        width: 100%;
        min-height: 100%;
        overflow-x: hidden;
        -moz-osx-font-smoothing: grayscale;
        -webkit-font-smoothing: antialiased;
        line-height: 1.3;
        @media (max-width: 480px) {
            font-size: 18px;
        }
        &.hidden {
            overflow: hidden;
        }
        &.blur {
            overflow: hidden;
            header {
                background-color: transparent;
        }
        #content > * {
            filter: blur(5px) brightness(0.7);
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            pointer-events: none;
            user-select: none;
        }
        }
    }


    main {
        margin: 0 auto;
        width: 100%;
        max-width: 1800px;
        min-height: 60vh;
        padding: 0px 100px;
        @media (max-width: 1080px) {
        padding: 50px 80px;
        }
        @media (max-width: 768px) {
        padding: 50px 50px;
        }
        @media (max-width: 480px) {
        padding: 25px 25px;
        }
        &.fillHeight {
            padding: 0 150px;
        @media (max-width: 1080px) {
            padding: 0 100px;
        }
        @media (max-width: 768px) {
            padding: 0 50px;
        }
        @media (max-width: 480px) {
            padding: 0 25px;
        }
        }
    }

    section {
        margin: 0 auto;
        padding: 50px 0;
        max-width: 1400px;
        @media (max-width: 768px) {
        padding: 80px 0;
        }
        @media (max-width: 480px) {
        padding: 60px 0;
        }
    }

    a {
        display: inline-block;
        text-decoration: none;
        text-decoration-skip-ink: auto;
        color: inherit;
        position: relative;
        transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
        &:hover,
        &:focus {
        color: #1B0825;
            text-decoration: underline;
        }
        &.inline-link {
            display: inline-block;
            text-decoration: none;
            text-decoration-skip-ink: auto;
            position: relative;
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            color: blue;
            &:hover,
            &:focus,
            &:active {
                color: blue;
                outline: 0;
                &:after {
                    width: 100%;
                }
                & > * {
                    color: blue !important;
                    transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
                }
            }
            &:after {
            content: '';
            display: block;
            width: 0;
            height: 1px;
            position: relative;
            bottom: 0.37em;
            background-color: blue;
            transition: all 0.25s cubic-bezier(0.645, 0.045, 0.355, 1);
            opacity: 0.5;
            }
        }
    }

    button {
        cursor: pointer;
        border: 0;
        border-radius: 0;
    }

    img {
        /* width: 100%; */
        max-width: 100%;
        vertical-align: middle;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
        margin: 0 0 10px 0;
        font-weight: 600;
        color: var(--lightest-slate);
        line-height: 1.1;
    }
`;

export default GlobalStyle;