import { ButtonProps } from "./Button.props";
import styles from './Button.module.scss'
import cn from 'classnames'

export const Button = ({ view='button', type='button', disabled=false, children, className, ...props }: ButtonProps ): JSX.Element => {
    return (
         <button
                className={cn(styles.button, className, {
                [styles.full]: view == 'button',
                [styles.link]: view == 'link',
                })}
                type={type}
                {...props}
                disabled={disabled}
            >
                {children}
            </button>

    )
}
