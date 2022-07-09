import kaboom from "kaboom"

import { loadEverything } from './loader.js'

kaboom({
	width: 900,
	height: 600,
}) 

loadEverything()

go("menuscene")
