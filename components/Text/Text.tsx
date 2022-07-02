import { TextProps } from "./Text.props";
import styles from './Text.module.scss'
import cn from 'classnames'

export const Text = ({ tag, size='m', font='roboto', color='black', href, className, children, ...props }: TextProps ): JSX.Element => {
    return (

        <>
            {tag =='p' &&
            <p className={cn(styles.text, className, {
                [styles.s]: size == 's',
                [styles.m]: size == 'm',
                [styles.l]: size == 'l',
                [styles.roboto]: font == 'roboto',
                [styles.rubik]: font == 'rubik',
                [styles.black]: color == 'black',
                [styles.gray]: color == 'gray'
            })}
                {...props}
            >
                { children }
            </p>}
            {tag =='span' &&
            <span className={cn(styles.text, className, {
                [styles.s]: size == 's',
                [styles.black]: color == 'black',
                [styles.gray]: color == 'gray'
            })}
                  {...props}
            > {
                href
                    ? <a href={href} target='_blank' rel="noopener noreferrer">{children}</a>
                    : <>{children}</>
            }
            </span>}
        </>
    )
}
