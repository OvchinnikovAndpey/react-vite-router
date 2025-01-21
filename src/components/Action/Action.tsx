import React from 'react';
import clsx from 'clsx';
import styles from './Action.module.scss';

export type ActionVariant = 'primary' | 'secondary' | 'text';
export type ActionSize = 'sm' | 'md' | 'lg';

interface BaseProps {
  text: string;
  variant?: ActionVariant;
  size?: ActionSize;
  className?: string;
  disabled?: boolean;
}

interface ButtonProps extends BaseProps {
  type: 'button';
  onClick: () => void;
  href?: never;
}

interface LinkProps extends BaseProps {
  type: 'link';
  href: string;
  onClick?: never;
}

type Props = ButtonProps | LinkProps;

export const Action: React.FC<Props> = ({
  type,
  text,
  variant = 'primary',
  size = 'md',
  className,
  disabled,
  ...props
}) => {
  const classes = clsx(
    styles.action,
    styles[`action--${variant}`],
    styles[`action--${size}`],
    {
      [styles['action--disabled']]: disabled
    },
    className
  );

  if (type === 'button') {
    const { onClick } = props as ButtonProps;
    return (
      <button 
        className={classes}
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </button>
    );
  }

  const { href } = props as LinkProps;
  return (
    <a 
      className={classes}
      href={href}
    >
      {text}
    </a>
  );
};
