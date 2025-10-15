import { cn } from "@/utils/cn";
import "@/styles/conatiner.scss";

interface IContainerProps
	extends React.DetailedHTMLProps<
		React.HTMLAttributes<HTMLDivElement>,
		HTMLDivElement
	> {
	children?: React.ReactNode;
	className?: string;
}

export const Container = ({
	children,
	className,
	...props
}: IContainerProps) => {
	return (
		<div className={cn(`container`, className)} {...props}>
			{children}
		</div>
	);
};
