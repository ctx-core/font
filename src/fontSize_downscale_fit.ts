import { assign, clone } from '@ctx-core/object'
import { no__dom } from '@ctx-core/dom'
import { throw_invalid_argument, throw_invalid_argument_ctx_T } from '@ctx-core/error'
import type { clone_ctx_type } from './clone_ctx_type'
/**
 * Fit `ctx.el` inside of ``
 */
export function fontSize_downscale_fit(ctx) {
	if (no__dom) return ctx
	const clone_ctx = clone(...arguments) as clone_ctx_type
	const {
		container,
		el,
		step = 0.1,
		max_iterations = 100
	} = clone_ctx
	const step__ = Math.abs(step)
	if (!container) throw_invalid_argument(
		{ key: 'container' } as throw_invalid_argument_ctx_T
	)
	if (!el) throw_invalid_argument({ key: 'el' } as throw_invalid_argument_ctx_T)
	let fontSize =
		clone_ctx.fontSize
		|| parseFloat(
		getComputedStyle(el).getPropertyValue('font-size'))
		/ ctx.px__rem
		|| 1.0
	set__fontSize(fontSize)
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
			const fontSize__ = fontSize - step__
			if (!fontSize__ || fontSize__ <= step__) break
			set__fontSize(fontSize__)
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
	function set__fontSize(fontSize__rem = fontSize) {
		fontSize = fontSize__rem
		el.style.fontSize = `${fontSize}rem`
	}
}
export { fontSize_downscale_fit as fit__downscale__fontSize }
