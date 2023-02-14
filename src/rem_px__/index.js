import { no_dom } from '@ctx-core/dom'
import { atom_ } from '@ctx-core/nanostores'
import { assign, be_ } from '@ctx-core/object'
/** @type {typeof import('./index.d.ts').rem_px__} */
export const rem_px__ = be_('rem_px__', ()=>
	atom_(undefined))
export function rem_px__reload() {
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
	let $rem_px
	try {
		document.body.appendChild(div)
		$rem_px = div.offsetHeight
	} finally {
		div.remove()
	}
	rem_px_.$ = $rem_px
}

