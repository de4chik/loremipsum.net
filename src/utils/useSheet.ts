import { createContext, useContext } from "react";


interface ISheetContext {
  open: boolean
  setOpen: (value: boolean) => void
}
export const SheetContext = createContext<ISheetContext | null>(null);


export const useSheet = () => {
	const ctx = useContext(SheetContext);
	if (!ctx) {
		throw new Error("useSheet must be used within a <Sheet>");
	}
	return ctx;
};
