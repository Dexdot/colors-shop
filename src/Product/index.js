import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledProduct,
  ImageWrap,
  Image,
  Title,
  Row,
  Price,
  ButtonAdd
} from './styled';

function Product({ product }) {
  return (
    <StyledProduct>
      <ImageWrap href="https://google.com/" target="_blank">
        <Image src={product.image} alt={product.title} />
      </ImageWrap>
      <Title href="https://google.com/" target="_blank">
        {product.title}
      </Title>
      <Row>
        <Price>{product.price} ₽</Price>
        <ButtonAdd className="button-add" />
      </Row>
    </StyledProduct>
  );
}

Product.propTypes = {
  product: PropTypes.objectOf(PropTypes.any).isRequired
};

export default Product;
