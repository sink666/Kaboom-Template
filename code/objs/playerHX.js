export let player;

export function addPlayer() {
	player = add([
		sprite("bean"),
		origin("center"),
		pos(center()),
		area(),
		"player",
		{
			speed: 369
		}
	])

	// movement
	player.onUpdate(() => {
		if (isKeyDown("left") || isKeyDown("a")) {
			player.move(-player.speed, 0)
		}

		if (isKeyDown("right") || isKeyDown("d")) {
			player.move(player.speed, 0)
		}

		if (isKeyDown("up") || isKeyDown("w")) {
			player.move(0, -player.speed)
		}

		if (isKeyDown("down") || isKeyDown("s")) {
			player.move(0, player.speed)
		}
	})

	// collisions
	player.onCollide("enemy", (p, e) => {
		destroy(p)
	})

	player.onCollide("star", () => {
		go("creditscene")
	})

	return player;
}