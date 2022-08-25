import { Component } from 'react';
import PropTypes from 'prop-types';

import s from './Modal.module.css';

class Modal extends Component {
  componentDidMount() {
    document.addEventListener('keydown', this.closeModal);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.closeModal);
  }

  closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === 'Escape') {
      this.props.onClick();
    }
  };

  render() {
    const { closeModal } = this;
    const { url } = this.props;

    return (
      <div className={s.overlay} onClick={closeModal}>
        <div className={s.modal}>
          <img src={url} alt="large img" />
        </div>
      </div>
    );
  }
}

export default Modal;

Modal.propTypes = {
  url: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};
