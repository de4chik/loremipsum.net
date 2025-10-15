import { cn } from "@/utils/cn";
import "@/styles/button.scss";

interface IButtonProps
	extends React.DetailedHTMLProps<
		React.ButtonHTMLAttributes<HTMLButtonElement>,
		HTMLButtonElement
	> {
	children?: React.ReactNode;
	className?: string;
	variant?: "white" | "blue";
}

export const Button = ({
	children,
	className,
	variant = "white",
	...props
}: IButtonProps) => {
	return (
		<button className={cn(`button button-${variant}`, className)} {...props}>
			{children}
		</button>
	);
};
