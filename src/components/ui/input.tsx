import "@/styles/input.scss";
import { cn } from "@/utils/cn";
interface IInputProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	className?: string;
}

export const Input = ({ className, ...props }: IInputProps) => {
	return <input className={cn("text", className)} type="text" {...props} />;
};
