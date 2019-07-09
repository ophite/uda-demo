import React from 'react';
import { Root, Routes, addPrefetchExcludes } from 'react-static';
//
import { Link, Router } from 'components/Router';
import Dynamic from 'containers/Dynamic';
import styled, { createGlobalStyle } from 'styled-components';

// import './app.css'

// Any routes that start with 'dynamic' will be treated as non-static routes
addPrefetchExcludes(['dynamic']);

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'HelveticaNeue-Light', 'Helvetica Neue Light', 'Helvetica Neue', Helvetica, Arial,
      'Lucida Grande', sans-serif;
    font-weight: 300;
    font-size: 16px;
    margin: 0;
    padding: 100;
  }
`;

const AppStyles = styled.div`
  a {
    text-decoration: none;
    color: #108db8;
    font-weight: bold;
  }
  nav {
    width: 100%;
    background: #108db8;
    a {
      color: white;
      padding: 1rem;
      display: inline-block;
    }
  }
  .content {
    padding: 1rem;
  }
  img {
    max-width: 100%;
  }
`;

function App() {
  return (
    <Root>
      <AppStyles>
        <GlobalStyle />
        <nav>
          <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/blog'>*Blog</Link>
          <Link to='/dynamic'>*Dynamic</Link>
        </nav>
        <div className='content'>
          <React.Suspense fallback={ <em>Loading...</em> }>
            <Router>
              <Dynamic path='dynamic' />
              <Routes path='*' />
            </Router>
          </React.Suspense>
        </div>
      </AppStyles>
    </Root>
  );
}

export default App;
