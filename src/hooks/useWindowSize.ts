import { useEffect, useState } from "react";

export const useWindowSize = () => {
	const [size, setSize] = useState<{ width: number | null }>({
		width: null,
	});
	useEffect(() => {
		window.addEventListener("resize", () => {
			setSize({ width: window.innerWidth });
		});
		setSize({ width: window.innerWidth });
		return window.removeEventListener("resize", () => {});
	}, []);
	return size;
};
