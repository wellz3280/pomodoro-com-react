import type React from "react";
import styles from './styles.module.css';

type InputProps = {
    id: string;
    labelText: string;
} & React.ComponentProps<'input'>;

export function DefaultInput({ id, labelText, type, ...rest }: InputProps) {
    return <>
        <label className={styles.label} htmlFor={id}>{labelText}</label>
        <input className={styles.input} type={type} id={id} {...rest} />
    </>;
}