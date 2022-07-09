export function menuscene() {
	return scene("menuscene", () => {
		let mainText = add([
			text("Hello world!", {
				size: 80
			}),
			pos(center()),
			origin("center"),
		])
		
		onUpdate(() => {
			if (isMousePressed("left")) {
				go("gamescene")
			}
		})
	})
}