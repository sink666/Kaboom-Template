import { gamescene } from "./scenes/gamescene"
import { menuscene } from "./scenes/menuscene"
import { creditscene } from "./scenes/creditscene"

export function loadEverything() {
	// sprites
	loadBean()

	// scenes
	menuscene()
	gamescene()
	creditscene()
}