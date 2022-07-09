export function creditscene() {
	return scene("creditscene", () => {
		let maintext = add([
			text("You did it!", {
				size: 80
			}),
			pos(center()),
			origin("center"),
		])

		wait(1, () => {
			let yaytext = add([
				text("yay", {
					size: 30
				}),
				pos(width() / 2, maintext.pos.y + 60),
				origin("center"),
			])

			add([
				text("by amyspark-ng", {
					size: 14
				}),
				pos(width() / 2, yaytext.pos.y + 30),
				origin("center"),
			])
		})
	})
}