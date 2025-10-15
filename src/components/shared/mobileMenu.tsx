import { headerMenuLinks } from "@/constants/headerMenu";
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet";
import "@/styles/mobileMenu.scss";
import Link from "next/link";

export const MobileMenu = () => {
	return (
		<Sheet>
			<SheetTrigger>
				<div className="burger"></div>
			</SheetTrigger>
			<SheetContent className="mobile-sheet">
				<ul className="sheet-nav">
					{headerMenuLinks.map(({ name }, index) => (
						<li className="sheet-item" key={index}>
							<Link className="sheet-itme-link" href={"/"}>
								{name}
							</Link>
						</li>
					))}
				</ul>
			</SheetContent>
		</Sheet>
	);
};
