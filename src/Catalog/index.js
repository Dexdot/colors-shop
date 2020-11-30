import React from 'react';
import { StyledCatalog, Aside, Content, Header, Count } from './styled';
import Container from '../ui/Container';
import CatalogList from '../CatalogList';
import CatalogFilters from '../CatalogFilters';
import Dropdown from '../Dropdown';
import { declension } from '../helpers';

function filterProducts(products, filters) {
  return products.filter((product) => {
    const keys = Object.keys(filters).filter((key) => filters[key].isChecked);
    return keys.every((key) => product[key]);
  });
}

function sortProducts(oldProducts, sort) {
  const products = [...oldProducts];

  return products.sort((a, b) => {
    if (sort === 'novelty') {
      return a.isNovelty ? -1 : 1;
    }

    if (sort === 'ascPrice') {
      return a.price - b.price;
    }

    if (sort === 'descPrice') {
      return b.price - a.price;
    }

    return 0;
  });
}

class Catalog extends React.Component {
  state = {
    products: [],
    isProductsLoaded: false,
    filters: {
      isNovelty: {
        text: 'Новинки',
        isChecked: false
      },
      isSale: {
        text: 'Распродажа',
        isChecked: false
      },
      isStock: {
        text: 'В наличии',
        isChecked: false
      }
    },
    activeSort: 'novelty',
    sort: {
      descPrice: 'Сначала дорогие',
      ascPrice: 'Сначала дешевые',
      novelty: 'Сначала новые'
    }
  };

  componentDidMount() {
    this.fetchProducts();
  }

  fetchProducts = () => {
    const url = 'https://run.mocky.io/v3/a1633607-c7bf-4cf8-a49e-7fc082703dcd';

    fetch(url)
      .then((res) => res.json())
      .then(({ data }) => {
        this.setState(() => ({ products: [...data], isProductsLoaded: true }));
      })
      .catch((err) => {
        // eslint-disable-next-line
        console.error(err);
      });
  };

  handleFiltersChange = (key) => {
    this.setState(({ filters: oldFilters }) => {
      const filters = { ...oldFilters };
      const filter = { ...filters[key] };
      filter.isChecked = !filter.isChecked;
      filters[key] = { ...filter };
      return { filters };
    });
  };

  handleSortChange = (sortType) => {
    this.setState({ activeSort: sortType });
  };

  render() {
    const { state } = this;
    const {
      products: productsFromState,
      isProductsLoaded,
      filters,
      sort,
      activeSort
    } = state;

    const products = sortProducts(
      filterProducts(productsFromState, filters),
      activeSort
    );

    const { length } = products;
    const CountText = isProductsLoaded
      ? `${length} ${declension(length, 'товар', 'товара', 'товаров')}`
      : 'Загрузка...';

    return (
      <Container>
        <StyledCatalog>
          <Aside>
            <CatalogFilters
              filters={filters}
              onChange={this.handleFiltersChange}
            />
          </Aside>
          <Content>
            <Header>
              <Count>{CountText}</Count>
              <Dropdown
                list={sort}
                active={activeSort}
                onChange={this.handleSortChange}
              />
            </Header>
            {isProductsLoaded ? (
              <CatalogList products={products} />
            ) : (
              <p>Загрузка...</p>
            )}
          </Content>
        </StyledCatalog>
      </Container>
    );
  }
}

export default Catalog;
