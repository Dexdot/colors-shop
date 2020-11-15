import React from 'react';
import { ThemeProvider } from 'styled-components';

import Menu from './Menu';
import Header from './Header';
import Footer from './Footer';
import theme from './Theme';
import './CSS-vars';

class App extends React.Component {
  state = {
    isMenuOpen: false
  };

  toggleMenu = () => {
    this.setState(({ isMenuOpen }) => ({ isMenuOpen: !isMenuOpen }));
  };

  render() {
    const { state, toggleMenu } = this;

    return (
      <ThemeProvider theme={theme}>
        <div>
          <Menu open={state.isMenuOpen} toggleMenu={toggleMenu} />
          <Header toggleMenu={toggleMenu} />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
