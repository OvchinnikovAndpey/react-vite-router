import React, { useEffect, useState } from 'react';
import { Action, ButtonProps } from '@/components/Action/Action';
import styles from './modal.module.scss';
import { ModalProps } from './types';

interface ModalComponent extends React.FC<ModalProps> {
    Trigger: React.FC<{
        text: string;
        variant?: ButtonProps['variant'];
        size?: ButtonProps['size'];
        className?: string;
        disabled?: boolean;
        children: React.ReactNode;
    }>;
}

const Modal: ModalComponent = ({ children, onClose }) => {
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

Modal.Trigger = ({ text, variant, size, className, disabled, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const buttonProps: ButtonProps = {
        type: 'button',
        text,
        variant,
        size,
        className,
        disabled,
        onClick: () => setIsOpen(true)
    };

    return (
        <>
            <Action {...buttonProps} />
            {isOpen && <Modal onClose={() => setIsOpen(false)}>{children}</Modal>}
        </>
    );
};

export default Modal;
