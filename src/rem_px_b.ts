import { _b, assign } from '@ctx-core/object'
import { Writable$, writable$ } from '@ctx-core/store'
import { no_dom } from '@ctx-core/dom'
const key = 'rem_px'
export interface rem_px_Ctx {
	rem_px?:rem_px_T
}
export const rem_px_b = _b<rem_px_Ctx, typeof key>(key, ()=>{
	const rem_px = writable$<number|undefined>(undefined)
	return assign(rem_px, {
		reload_rem_px
	}) as rem_px_T
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
		rem_px.$ = $rem_px
	}
})
export interface rem_px_T extends Writable$<number|undefined> {
	reload_rem_px():void
}
