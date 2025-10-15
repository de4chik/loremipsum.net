"use client";
import "@/styles/slider.scss";
import { cn } from "@/utils/cn";
import { useState } from "react";
interface ISliderProps
	extends React.DetailedHTMLProps<
		React.InputHTMLAttributes<HTMLInputElement>,
		HTMLInputElement
	> {
	className?: string;
}

export const Slider = ({ className, ...props }: ISliderProps) => {
	const [percent, setPercent] = useState(0);
	return (
		<div className="wrapper__slider">
			<header className="header__slider">
				<span>Sed ut perspiciatis, unde omnis iste natus</span>
				<span>{percent}%</span>
			</header>
			<input
				type="range"
				className={cn("slider", className)}
				value={percent}
				onChange={(e) => setPercent(Number(e.target.value))}
			/>
		</div>
	);
};
