import { Advantages } from "@/components/shared/advantages";
import { Feedback } from "@/components/shared/feedback";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/ui/conainer";
import "@/styles/hero.scss";
import "@/styles/registration.scss";
import Link from "next/link";

export default function Home() {
	return (
		<>
			<section className="hero">
				<Container>
					<h1 className="title">
						<span className="title__accent">Lorem ipsum</span> dolor sit
						ametconsectetur <span className="title__accent">adipiscing</span>
					</h1>
					<div className="description">
						<p className="description__title">
							At vero eos et accusamus et iusto odio dignissimos ducimus!
						</p>
						<ul>
							<li className="description__list-item">
								<span>Totam rem aperiam eaque ipsa</span>
							</li>
							<li className="description__list-item">
								<span>Sit voluptatem accusantium doloremque laudantium</span>
							</li>
							<li className="description__list-item">
								<span>Sed ut perspiciatis, unde omnis iste natus error</span>
							</li>
						</ul>
					</div>
					<div className="buttons">
						<Link href={"#registration"}>
							<Button variant="blue">заказать</Button>
						</Link>
						<Button>подробнее</Button>
					</div>
				</Container>
			</section>
			<section className="registration" id="registration">
				<Container>
					<h2 className="title title__registration">
						Оформление <span className="title__accent">Заказа</span>
					</h2>
					<p className="description">
						Перед заполнением формы ознакомьтесь с нашей схемой работы!
					</p>
					<Advantages />
					<Feedback />
				</Container>
			</section>
		</>
	);
}
