import React from 'react';
import PropTypes from 'prop-types';
import {
  Section,
  Overlay,
  Container,
  Content,
  Header,
  Title,
  ButtonClose
} from './styled';
import close from './close.svg';

const Modal = ({ isOpen, title, content }) => (
  <Section isOpen={isOpen}>
    <Overlay type="button" />
    <Container isOpen={isOpen}>
      <Content>
        <Header>
          <Title>{title}</Title>
          <ButtonClose type="button">
            <img src={close} alt="Закрыть" />
          </ButtonClose>
          {content}
        </Header>
      </Content>
    </Container>
  </Section>
);

Modal.defaultProps = {
  title: 'Title'
};

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  content: PropTypes.node.isRequired,
  title: PropTypes.node
};

export default Modal;
