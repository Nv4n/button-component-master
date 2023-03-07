export const buttonStyles =
	"rounded-md transition-colors w-fit text-sm flex justify-center gap-2 cursor-pointer";

export const variantStyles = {
	outline: "border-2 border-solid bg-transparent",
	text: "bg-transparent",
};

export const variantColorStyles = {
	default:
		"text-[hsl(0,0%,88%)] border-[hsl(0,0%,88%)] focus:hover:bg-[hsl(0,0%,68%)] focus:hover:backdrop-brightness-200 ",
	primary:
		"text-[hsl(224,100%,58%)] border-[hsl(224,100%,58%)] focus:hover:bg-[hsl(223,100%,85%)] focus:hover:backdrop-brightness-200",
	secondary:
		"text-[hsl(199,18%,33%)] border-[hsl(199,18%,33%)] focus:hover:bg-[hsl(198,35%,57%)] focus:hover:backdrop-brightness-200",
	danger: "text-[hsl(0,65%,51%)] border-[hsl(0,65%,51%)]  focus:hover:bg-[hsl(357,100%,75%)]",
	disabled: "text-[hsl(0,0%,62%)] border-[hsl(0,0%,88%)]",
};

export const colorStyles = {
	default: "bg-[#E0E0E0] hover:bg-[#AEAEAE] focus:bg-[#AEAEAE]",
	primary: "bg-[#2962FF] text-white focus:hover:bg-[#0039CB]",
	secondary: "bg-[#455A64] text-white focus:hover:bg-[#1C313A]",
	danger: "bg-[#D32F2F] text-white focus:hover:bg-[#9A0007]",
	disabled: "text-[hsl(0,0%,62%)] bg-[#E0E0E0]",
};

export const sizeStyles = {
	sm: "px-3 py-1.5",
	md: "px-4 py-2",
	lg: "px-[22px] py-[11px]",
};

export const disabledShadowStyles = "drop-shadow-none";
