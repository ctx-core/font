import { no_dom } from '@ctx-core/dom'
import { throw_invalid_argument, throw_invalid_argument_ctx_T } from '@ctx-core/error'
import { assign, clone } from '@ctx-core/object'
import type { clone_ctx_T } from './clone_ctx_T.js'
/**
 * Fit `ctx.el` inside of ``
 */
export function fontSize_downscale_fit(ctx:{ rem_px:number }):{
	rem_px:number
	container?:HTMLElement
	el?:HTMLElement
	step?:number
	max_iterations?:number
	fontSize?:string
} {
	if (no_dom) return ctx
	const clone_ctx = clone(...arguments) as clone_ctx_T
	const {
		container,
		el,
		step = 0.1,
		max_iterations = 100
	} = clone_ctx
	const out_step = Math.abs(step)
	if (!container) throw_invalid_argument(
		{ key: 'container' } as throw_invalid_argument_ctx_T
	)
	if (!el) throw_invalid_argument({ key: 'el' } as throw_invalid_argument_ctx_T)
	let fontSize =
		clone_ctx.fontSize
		|| parseFloat(
			getComputedStyle(el).getPropertyValue('font-size'))
		/ ctx.rem_px
		|| 1.0
	set_fontSize(fontSize)
	el.style.color = 'transparent'
	let { width } = el.style
	try {
		el.style.width = 'auto'
		let iteration = 0
		const computedStyle__container = getComputedStyle(container)
		const paddingLeft =
			parseInt(
				computedStyle__container
					.getPropertyValue('padding-left'))
			|| 0
		const paddingRight =
			parseInt(
				computedStyle__container
					.getPropertyValue('padding-right'))
			|| 0
		const padding = paddingLeft + paddingRight
		while ((el.scrollWidth + padding) > container.offsetWidth) {
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
	assign(ctx, {
		container,
		el,
		step,
		max_iterations,
		fontSize
	})
	return ctx
	function set_fontSize(rem_fontSize = fontSize) {
		fontSize = rem_fontSize
		el.style.fontSize = `${fontSize}rem`
	}
}
export { fontSize_downscale_fit as fit__downscale__fontSize }
