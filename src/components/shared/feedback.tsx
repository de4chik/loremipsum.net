"use client";
import "@/styles/feedback.scss";
import { Select } from "../ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { Slider } from "../ui/slider";
export const Feedback = () => {
	return (
		<div className="feedback__wrapper">
			<form className="feedback" onSubmit={(e) => e.preventDefault()}>
				<Select className="feedback__select" />
				<Input placeholder="Ваш e-mail" name="email" />
				<Input placeholder="Ваше имя" name="name" />

				<div className="slider">
					<Slider name="slider" />
				</div>
				<input type="file" id="file" name="file" style={{ display: "none" }} />
				<label htmlFor="file">
					<Button
						onClick={() => {
							document.getElementById("file")?.click();
						}}
					>
						Прикрепить файл
					</Button>
				</label>
			</form>
			<Button variant="blue" className="send">
				Отправить
			</Button>
		</div>
	);
};
