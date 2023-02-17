import { createGlobalStyle } from 'styled-components';
 
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: Open-Sans, Helvetica, Sans-Serif;
    img{
        max-width: 10rem;
    }
  }

  #root{
    padding: 0;
    max-width: 100%
  }

.light{
    body{
        background: #ccc;
        color: black;
    }

    nav{
      background: gold;
      color: black;
    }
  }

  .dark{
        background: #222;
        color: #ccc;    

    nav{
        background: #444;
        color: #999;
    }
    nav a {
        color: #999;
    }
  }
`;
 
export default GlobalStyle;