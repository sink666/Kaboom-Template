import { addPlayer } from "../objs/playerHX"

export function gamescene() {
	return scene("gamescene", () => {
		addPlayer();

		let star = add([
			rect(50, 50),
			color(YELLOW),
			pos(width() - 100, height() - 100),
			area(),
			"star",
		])
	})
}