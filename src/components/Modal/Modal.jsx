import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import './Modal.scss';

const modalRef = document.querySelector('#modal');

class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = event => {
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleOverlayClick = event => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Overlay" onClick={this.handleOverlayClick}>
        <div className="Modal">
          <img src={this.props.largeImage} alt="" />
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
