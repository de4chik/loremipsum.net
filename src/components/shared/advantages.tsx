"use client";
import "@/styles/adventages.scss";
import Image from "next/image";
import { DotsSeparator } from "../ui/dotsSeparator";
import { useWindowSize } from "@/hooks/useWindowSize";
export const Advantages = () => {
	const { width } = useWindowSize();

	return (
		<div className="adventages">
			<AdventagesItem
				iconURL="/search.png"
				title="Lorem ipsum dolor sit amet"
			/>
			<DotsSeparator width={width} />
			<AdventagesItem
				iconURL="/percent.png"
				title="Сonsecteturadipiscing elit"
			/>
			<DotsSeparator width={width} />
			<AdventagesItem iconURL="/file.png" title="Sed do eiusmod tempor" />
			<DotsSeparator width={width} />
			<AdventagesItem
				iconURL="/message.png"
				title="Esse cillum dolore eu fugiat"
			/>
			<DotsSeparator width={width} />
			<AdventagesItem
				iconURL="/money.png"
				title="Excepteur sint occaecat cupidatat non proident"
			/>
		</div>
	);
};

export const AdventagesItem = ({
	iconURL,
	title,
}: {
	iconURL: string;
	title: string;
}) => {
	return (
		<div className="adventage">
			<div className="adventage__item">
				<Image alt="alt" src={iconURL} width={55} height={55} unoptimized />
			</div>
			<span className="adventage__title">{title}</span>
		</div>
	);
};
