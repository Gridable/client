import cn from 'classnames';
import { type ButtonHTMLAttributes, type FC, memo } from 'react';

import cls from './Button.module.scss';

export enum ButtonTheme {
    CLEAR = 'clear',
    OUTLINE = 'outline',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    className?: string;
    theme?: ButtonTheme;
    square?: boolean;
    disabled?: boolean;
}
export const Button: FC<ButtonProps> = memo((props) => {
    const { className, children, theme = ButtonTheme.CLEAR, square, disabled, ...otherProps } = props;
    return (
        <button
            className={cn(cls.Button, className, {
                [cls[theme]]: true,
                [cls.square]: square,
                [cls.disabled]: disabled,
            })}
            disabled={disabled}
            {...otherProps}
        >
            {children}
        </button>
    );
});
