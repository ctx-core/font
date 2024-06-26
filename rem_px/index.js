/// <reference types="ctx-core" />
import { is_server_ } from 'ctx-core/env'
import { assign } from 'ctx-core/object'
import { id_be_sig_triple_ } from 'ctx-core/rmemo'
export const [
	rem_px$_,
	rem_px_,
	rem_px__set,
] = /** @type {be_sig_triple_T<number|undefined>} */
	id_be_sig_triple_(
		'rem_px',
		()=>undefined)
export {
	rem_px$_ as rem_px__,
}
/**
 * @param {ctx_T}ctx
 */
export function rem_px__reload(ctx) {
	if (is_server_()) return
	const div = document.createElement('div')
	div.innerHTML = '&nbsp;'
	assign(div.style, {
		display: 'block',
		visibility: 'none',
		fontSize: '1em',
		margin: '0',
		padding: '0',
		height: 'auto',
		lineHeight: '1',
		border: '0'
	})
	let rem_px
	try {
		document.body.appendChild(div)
		rem_px = div.offsetHeight
	} finally {
		div.remove()
	}
	rem_px__set(ctx, rem_px)
}

