import { no_dom } from '@ctx-core/dom'
import { B, be_, assign } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
const key = 'rem_px$'
export const rem_px$_b:B<rem_px$_T> = be_(key, ()=>{
	const rem_px$ = writable$<number|undefined>(undefined)
	return assign(rem_px$, {
		reload_rem_px
	}) as rem_px$_T
	function reload_rem_px() {
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
		let $rem_px:number
		try {
			document.body.appendChild(div)
			$rem_px = div.offsetHeight
		} finally {
			div.remove()
		}
		rem_px$.$ = $rem_px
	}
})
export interface rem_px$_T extends Writable$<number|undefined> {
	reload_rem_px():void
}
