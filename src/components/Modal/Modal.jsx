import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modalRef = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    const { onClose } = this.props;
    if (event.code === 'Escape') {
      onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage } = this.props;
    return createPortal(
      <div className={style.Overlay} onClick={this.handleOverlayClick}>
        <div className={style.modal}>
          <img src={largeImage} alt="" />
        </div>
      </div>,
      modalRef,
    );
  }
}

// Modal.defaultProps = {
//   children: null,
// };

// Modal.propTypes = {
//   children: PropTypes.node,
//   onClose: PropTypes.func.isRequired,
// };

export default Modal;

// import PropTypes from 'prop-types';

// import styles from './Modal.module.scss';
//     return createPortal(
//       <div className={styles.Overlay} onClick={this.handleBackdropClick}>
//         <div className={styles.Modal}>{this.props.children}</div>
//       </div>,
//       modalRoot,
//     );
//   }
