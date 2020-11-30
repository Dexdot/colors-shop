import React from 'react';
import PropTypes from 'prop-types';
import { List, ListItem } from './styled';
import Product from '../Product';

function CatalogList({ products }) {
  return products.length > 0 ? (
    <List>
      {products.map((product) => (
        <ListItem key={product.id}>
          <Product product={product} />
        </ListItem>
      ))}
    </List>
  ) : (
    <p>По выбранным фильтрам товаров нет</p>
  );
}

CatalogList.propTypes = {
  products: PropTypes.arrayOf(PropTypes.object).isRequired
};

export default CatalogList;
