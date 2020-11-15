import React from 'react';
import PropTypes from 'prop-types';
import { Section, Overlay, Container, Content, Header, Title } from './styled';
import ButtonClose from '../ui/ButtonClose';

const Modal = ({ open, title, children, toggleModal }) => (
  <Section open={open}>
    <Overlay type="button" onClick={toggleModal} />
    <Container open={open}>
      <Content>
        <Header>
          <Title>{title}</Title>
          <ButtonClose type="button" onClick={toggleModal} />
        </Header>
        {children}
      </Content>
    </Container>
  </Section>
);

Modal.defaultProps = {
  title: 'Title'
};

Modal.propTypes = {
  open: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  title: PropTypes.node,
  toggleModal: PropTypes.func.isRequired
};

export default Modal;
