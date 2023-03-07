import Button, { ButtonsProps } from "./Button";

interface ButtonContainerProps extends ButtonsProps {
	labelText: string;
}

const ButtonContainer = (props: ButtonContainerProps) => {
	const { labelText, ...buttonProps } = props;
	return (
		<div>
			<span className="mb-3 font-['Ubuntu_Mono'] text-xs">
				{labelText}
			</span>
			<Button {...buttonProps}></Button>
		</div>
	);
};

export default ButtonContainer;
