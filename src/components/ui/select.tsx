"use client";
import { options } from "@/constants/options";
import "@/styles/select.scss";
import { cn } from "@/utils/cn";
import Image from "next/image";
import { useState } from "react";

interface ISelectProps {
	className?: string;
}

export const Select = ({ className }: ISelectProps) => {
	const [open, setOpen] = useState(false);
	const [activeIndex, setActiveIndex] = useState<null | number>(null);

	return (
		<div className={cn("select", className)}>
			<div className="select-title" onClick={() => setOpen((prev) => !prev)}>
				<span>
					{activeIndex === null ? "Выберите тип системы" : options[activeIndex]}
				</span>
				<Image src={"/arrow.png"} alt="arrow" width={20} height={20} />
			</div>
			<div
				className="options open"
				style={{
					maxHeight: open ? 200 : 0,
				}}
			>
				{options.map((title, index) => (
					<div
						key={index}
						className={cn(
							"options__item",
							activeIndex !== null
								? activeIndex === index && "options__item__active"
								: ""
						)}
						onClick={() => {
							if (activeIndex == index) {
								return setActiveIndex(null);
							}
							return setActiveIndex(index);
						}}
					>
						{title}
					</div>
				))}
			</div>
		</div>
	);
};
