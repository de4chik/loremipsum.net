"use client";
import { SheetContext, useSheet } from "@/utils/useSheet";
import { useState } from "react";
import "@/styles/sheet.scss";
import { cn } from "@/utils/cn";

interface ISheet {
	children?: React.ReactNode;
	className?: string;
}

export const Sheet: React.FC<ISheet> = ({ children }) => {
	const [open, setOpen] = useState(false);
	return (
		<SheetContext.Provider value={{ open, setOpen }}>
			{children}
		</SheetContext.Provider>
	);
};

export const SheetTrigger: React.FC<ISheet> = ({ children }) => {
	const { setOpen, open } = useSheet();
	return <div onClick={() => setOpen(!open)}>{children}</div>;
};

export const SheetContent: React.FC<ISheet> = ({ children, className }) => {
	const { open, setOpen } = useSheet();
	return (
		<div
			className={cn("sheet", className)}
			style={{ transform: open ? "translateX(0)" : "translateX(100%)" }}
		>
			{children}
			<span className="close" onClick={() => setOpen(false)}>
				x
			</span>
		</div>
	);
};
