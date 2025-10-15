"use client";
import "@/styles/header.scss";
import { headerMenuLinks } from "@/constants/headerMenu";
import Link from "next/link";
import { Container } from "../ui/conainer";
import { MobileMenu } from "./mobileMenu";
import { useWindowSize } from "@/hooks/useWindowSize";

export const Header = () => {
	const { width } = useWindowSize();
	return (
		<header className="header">
			<Container className="header__container">
				<span className="logo">
					LoremIpsum.<span className="logo__accent">Net</span>
				</span>
				{width && width > 790 && (
					<nav>
						<ul className="menu">
							{headerMenuLinks.map(({ name }, index) => (
								<li className="menu__item" key={index}>
									<Link className="menu__item-link" href={"/"}>
										{name}
									</Link>
								</li>
							))}
						</ul>
					</nav>
				)}
				{width && width < 790 && <MobileMenu />}
			</Container>
		</header>
	);
};
