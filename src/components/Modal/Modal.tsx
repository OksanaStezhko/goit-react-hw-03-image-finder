import React, { Component } from 'react';
import { createPortal } from 'react-dom';
import style from './Modal.module.css';

const modalRef: HTMLElement | null = document.querySelector('#modal');

interface Props {
  largeImage: string;
  onClose: () => void;
}
class Modal extends Component<Props> {
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  handleKeyDown = (event: KeyboardEvent) => {
    const { onClose } = this.props;
    if (event.code === 'Escape') {
      onClose();
    }
  };

  handleOverlayClick = (event: React.MouseEvent<HTMLDivElement>) => {
    if (event.currentTarget === event.target) {
      this.props.onClose();
    }
  };

  render() {
    const { largeImage } = this.props;
    return !modalRef
      ? null
      : createPortal(
          <div className={style.Overlay} onClick={this.handleOverlayClick}>
            <div className={style.modal}>
              <img src={largeImage} alt="" />
            </div>
          </div>,
          modalRef,
        );
  }
}

export default Modal;
