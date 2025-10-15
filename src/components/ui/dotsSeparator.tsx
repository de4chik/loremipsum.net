"use client";
import "@/styles/dotsSeparator.scss";

export const DotsSeparator: React.FC<{ width?: number | null }> = ({
	width = null,
}) => {
	return (
		<div className="dots">
			{width &&
				[
					...Array(
						width > 1200
							? 5
							: width > 1000
							? 4
							: width > 880
							? 3
							: width > 790
							? 2
							: 0
					),
				].map((_, i) => <div className="dot" key={i} />)}
		</div>
	);
};
