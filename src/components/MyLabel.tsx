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

export const MyLabel = ({
	allCaps = false,
	color,
	label = 'No Label',
	size = 'normal',
	fontColor,
}: MyLabelProps) => {
	return (
		<span
			className={`label ${size} text-${color} `}
			style={{ color: fontColor }}>
			{allCaps === true ? label.toUpperCase() : label}
		</span>
	);
};
