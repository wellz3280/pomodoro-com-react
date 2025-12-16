import type React from 'react';
import styles from './styles.module.css';
import { BrushCleaning, Clock } from 'lucide-react';

type HeadingProps = {
    children: React.ReactNode;
    emptyHistory: boolean;
}

export function Heading (props: HeadingProps) {
    let icon = <Clock/>
    if (!props.emptyHistory) {
        icon = <BrushCleaning/>;
    }

    return <h1 className={`${styles.heading}`}>{props.children} {icon}</h1>
}