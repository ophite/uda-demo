import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';

import { Router } from 'components/Router';
import Dynamic from 'containers/Dynamic';
import HeaderMenu from 'components/HeaderMenu.component';
import Footer from 'components/Footer.component';
import styled, { createGlobalStyle } from 'styled-components';
import './main-theme.css';
import './app--end.css';


// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  }
  * {
  scroll-behavior: smooth;
  }
  
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue',
      Helvetica, Arial, 'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 0;
  
  }
  
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
  
  img {
    max-width: 100%;
  }

`;

const AppStyles = styled.div`
 
  
`;

function App() {
  return (
    <Root>
      <AppStyles>
        <GlobalStyle />
        <HeaderMenu />
        <div className='content'>
          <React.Suspense fallback={ <em>Loading...</em> }>
            <Router>
              <Dynamic path='dynamic' />
              <Routes path='*' />
            </Router>
          </React.Suspense>
        </div>
        <Footer />
      </AppStyles>
    </Root>

  );
}

export default App;
