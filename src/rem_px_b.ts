import { _b, assign } from '@ctx-core/object'
import { writable } from '@ctx-core/store'
import { no__dom } from '@ctx-core/dom'
export const rem_px_b = _b('rem_px', ()=>{
	const rem_px = writable(null)
	return assign(rem_px, {
		reload_rem_px
	})
	function reload_rem_px() {
		if (no__dom) return
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
		let px__rem
		try {
			document.body.appendChild(div)
			px__rem = div.offsetHeight
		} finally {
			div.remove()
		}
		rem_px.set(px__rem)
	}
})