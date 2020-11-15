import React from 'react';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import theme from './Theme';
import './CSS-vars';

const Menu = React.lazy(() => import('./Menu'));

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
          <React.Suspense fallback={<p>Загрузка...</p>}>
            <Menu open={state.isMenuOpen} toggleMenu={toggleMenu} />
          </React.Suspense>
          <Header toggleMenu={toggleMenu} />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;
