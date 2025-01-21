import React, { useEffect } from 'react';
import { ModalProps } from './types';
import styles from './modal.module.scss';

const Modal: React.FC<ModalProps> = ({ children, onClose }) => {
    useEffect(() => {
        const handleEscKey = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };

        document.addEventListener('keydown', handleEscKey);

        return () => {
            document.removeEventListener('keydown', handleEscKey);
        };
    }, [onClose]);

    return (
        <div className={styles.modal}>
            <div className={styles['modal-content']}>
                <button className={styles['modal-close']} onClick={onClose}>
                    &times;
                </button>
                <div className={styles['modal-body']}>{children}</div>
            </div>
        </div>
    );
};

export default Modal;
