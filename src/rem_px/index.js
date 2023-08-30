import { no_dom } from '@ctx-core/dom'
import { atom_, be_atom_triple_ } from '@ctx-core/nanostores'
import { assign } from '@ctx-core/object'
/** @typedef {import('@ctx-core/object').Ctx}Ctx */
export const [
	rem_px$_,
	rem_px_,
	rem_px__set,
] = be_atom_triple_('rem_px', ()=>
	atom_(undefined))
export {
	rem_px$_ as rem_px__,
}
/**
 * @param {Ctx}ctx
 */
export function rem_px__reload(ctx) {
	if (no_dom) return
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

