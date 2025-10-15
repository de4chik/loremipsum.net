import "@/styles/footer.scss";
import { Container } from "../ui/conainer";
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
	return (
		<footer className="footer">
			<Container className="footer__container">
				<small className="copirate">
					© 2018 «<span className="copirate__link">LoremIpsum.net</span>» Все
					права защищены.
				</small>
				<div className="separator" />
				<div className="wallets">
					<Link href={"/"} className="wallet wallet__opacity">
						<Image
							alt="qiwi"
							src={"/qiwi.png"}
							width={20}
							height={20}
							unoptimized
						/>
						<span className="wallet__dsc">QIWI wallet</span>
					</Link>
					<Link href={"/"} className="wallet wallet__opacity">
						<Image
							alt="yandex mony"
							src={"/yandexMony.png"}
							width={20}
							height={20}
							unoptimized
						/>
						<span className="wallet__dsc">Yandex Money</span>
					</Link>
					<Link href={"/"} className="wallet wallet__opacity">
						<Image
							alt="web mony"
							src={"/webMony.png"}
							width={20}
							height={20}
							unoptimized
						/>
						<span className="wallet__dsc">Web Money</span>
					</Link>
				</div>
				<div className="separator" />
				<div className="wallets">
					<Link href={"mailto:info@ipsum228.com"} className="wallet">
						<Image
							alt="mail"
							src={"/mail.png"}
							width={20}
							height={20}
							unoptimized
						/>
						<span className="wallet__dsc">info@ipsum228.com</span>
					</Link>
					<Link href={"/"} className="wallet">
						<Image
							alt="vk"
							src={"/vk.png"}
							width={20}
							height={20}
							unoptimized
						/>
						<span className="wallet__dsc">Мы вконтактеy</span>
					</Link>
				</div>
			</Container>
		</footer>
	);
};
