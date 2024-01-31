import { is_server_ } from 'ctx-core/env'
import { invalid_argument__throw } from 'ctx-core/error'
/** @typedef {import('./index.d.ts').fontSize__fit_downscale__o_T} */
/**
 * Fit `ctx.el` inside an element
 * @param {fontSize__fit_downscale__o_T}o
 * @returns {fontSize__fit_downscale__o_T}
 */
export function fontSize__fit_downscale(o) {
	if (is_server_()) return o
	const {
		container,
		el,
		step = 0.1,
		max_iterations = 100,
	} = o
	const out_step = Math.abs(step)
	if (!container) invalid_argument__throw({
		key: 'container'
	})
	if (!el) invalid_argument__throw({
		key: 'el'
	})
	let fontSize =
		o.fontSize
		|| (
			parseFloat(
				getComputedStyle(/** @type {HTMLElement} */el)
					.getPropertyValue('font-size')) / o.rem_px)
		|| 1.0
	set_fontSize(fontSize)
	el.style.color = 'transparent'
	let { width } = el.style
	try {
		el.style.width = 'auto'
		let iteration = 0
		const computedStyle__container = getComputedStyle(/** @type {HTMLElement} */container)
		const paddingLeft = parseInt(computedStyle__container.getPropertyValue('padding-left')) || 0
		const paddingRight = parseInt(computedStyle__container.getPropertyValue('padding-right')) || 0
		const padding = paddingLeft + paddingRight
		while (el.scrollWidth + padding > container.offsetWidth) {
			iteration++
			if (iteration > max_iterations) {
				console.warn(`fit__downscale__fontSize|iterations`)
				break
			}
			const out_fontSize = fontSize - out_step
			if (!out_fontSize || out_fontSize <= out_step) break
			set_fontSize(out_fontSize)
		}
	} finally {
		el.style.color = ''
		el.style.width = width
	}
	return {
		...o,
		step,
		max_iterations,
		fontSize
	}
	function set_fontSize(rem_fontSize = fontSize) {
		fontSize = rem_fontSize
		el.style.fontSize = `${fontSize}rem`
	}
}
export {
	fontSize__fit_downscale as fontSize_downscale_fit,
	fontSize__fit_downscale as fit__downscale__fontSize,
}
