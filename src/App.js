import React from 'react';
import Media from 'react-media';
import { ThemeProvider } from 'styled-components';

import Header from './Header';
import Footer from './Footer';
import Catalog from './Catalog';
import theme from './Theme';
import './CSS-vars';

// Lazy components
const Menu = React.lazy(() => import('./Menu'));
const HeroSlider = React.lazy(() => import('./HeroSlider'));

// App
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
        <Media
          query={{ maxWidth: 990 }}
          render={() => (
            <React.Suspense fallback={<p>Загрузка...</p>}>
              <Menu open={state.isMenuOpen} toggleMenu={toggleMenu} />
            </React.Suspense>
          )}
        />

        <Header toggleMenu={toggleMenu} />

        <main>
          <Media
            query={{ minWidth: 991 }}
            render={() => (
              <React.Suspense fallback={<p>Загрузка...</p>}>
                <HeroSlider />
              </React.Suspense>
            )}
          />

          <Catalog />
        </main>

        <Footer />
      </ThemeProvider>
    );
  }
}

export default App;
