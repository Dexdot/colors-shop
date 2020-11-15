import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import theme from './Theme';
import './CSS-vars';

const App = () => (
  <ThemeProvider theme={theme}>
    <div>
      <Header />
      <Footer />
    </div>
  </ThemeProvider>
);

export default App;
