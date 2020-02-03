import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;   
        outline: none;
        font-family: 'Roboto', sans-serif;
        outline: none;
    }
    HTML, body {
      margin: 0;
      -webkit-font-smoothing: antialiased;
      -moz-osx-font-smoothing: grayscale;
      height: 100vh;
    }

    #root{
      min-height: 100%;
    }

    div{
      display: flex;
      flex-wrap: wrap;
    }

    h1{
      font-size: 1.4rem;
    }

    button {
      border: none;
      cursor: pointer;
      
    }
`