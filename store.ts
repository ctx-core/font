import { assign } from '@ctx-core/object'
import { has__dom, no__dom } from '@ctx-core/dom'
import { writable } from '@ctx-core/store'
export const __px__rem = writable(null)
if (has__dom) {
	reload__px__rem()
}
export function reload__px__rem() {
	if (no__dom) return
	const div = document.createElement('div')
	div.innerHTML = '&nbsp;'
	assign(div.style, {
		display: 'block',
		visibility: 'none',
		fontSize: '1em',
		margin: 0,
		padding: 0,
		height: 'auto',
		lineHeight: 1,
		border: 0
	})
	let px__rem
	try {
		document.body.appendChild(div)
		px__rem = div.offsetHeight
	} finally {
		div.remove()
	}
	__px__rem.set(px__rem)
}
