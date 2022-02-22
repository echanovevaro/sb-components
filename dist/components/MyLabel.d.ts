/// <reference types="react" />
import './MyLabel.css';
export interface MyLabelProps {
    /**
     * Texto por defecto
     */
    label: string;
    /**
     * Tamaño por defecto del texto
     */
    size: 'normal' | 'h1' | 'h2' | 'h3';
    /**
     * Mayusculas
     */
    allCaps: boolean;
    /**
     * Color
     */
    color: 'primary' | 'secondary' | 'tertiary';
    /**
     * What background color to use
     */
    fontColor?: string;
}
export declare const MyLabel: ({ allCaps, color, label, size, fontColor, }: MyLabelProps) => JSX.Element;
