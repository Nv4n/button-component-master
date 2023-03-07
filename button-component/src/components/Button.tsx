import {
	buttonStyles,
	colorStyles,
	disabledShadowStyles,
	sizeStyles,
	variantColorStyles,
	variantStyles,
} from "./ButtonStyles";
type ButtonVariant = "outline" | "text";
type ButtonColor = "default" | "primary" | "secondary" | "danger";
type ButtonSize = "sm" | "md" | "lg";

export interface ButtonsProps {
	text?: string;
	variant?: ButtonVariant;
	color?: ButtonColor;
	size?: ButtonSize;
	startIcon?: string;
	endIcon?: string;
	disableShadow?: boolean;
	disabled?: boolean;
}
const Button = (props: ButtonsProps) => {
	const {
		text = "Default",
		variant,
		size = "md",
		color = "default",
		startIcon,
		endIcon,
		disableShadow,
		disabled,
	} = props;

	let finalStyles = "";
	if (variant) {
		finalStyles += ` ${variantStyles[variant]}`;
		if (disabled) {
			finalStyles += ` ${variantColorStyles["disabled"]}`;
		} else {
			finalStyles += ` ${variantColorStyles[color]}`;
		}
	} else {
		if (disabled) {
			finalStyles += ` ${colorStyles["disabled"]}`;
		} else {
			finalStyles += ` ${colorStyles[color]}`;
		}
	}
	finalStyles += disableShadow ? ` ${disabledShadowStyles}` : "";

	return (
		<button
			className={`${buttonStyles} ${finalStyles} ${sizeStyles[size]} ${
				disabled ? "pointer-events-none" : ""
			}`}
		>
			{startIcon ? (
				<span className={"material-icons text-sm text-current"}>
					{startIcon}
				</span>
			) : null}

			<span className="font-['Noto Sans JP'] font-medium">{text}</span>

			{endIcon ? (
				<span className={"material-icons text-sm text-current"}>
					{endIcon}
				</span>
			) : null}
		</button>
	);
};

export default Button;
