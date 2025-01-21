import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MenuProps } from './types';
import styles from './menu.module.scss';

const Menu: React.FC<MenuProps> = ({ items, ...props }) => {
    const navigate = useNavigate();

    const handleClick = (href: string) => {
        navigate(href);
    };

    return (
        <nav className={styles.menu} {...props}>
            {items.map((item, index) => (
                <button
                    key={index}
                    onClick={() => handleClick(item.href)}
                    className={styles.menu__item}
                >
                    {item.label}
                </button>
            ))}
        </nav>
    );
};

export default Menu;
