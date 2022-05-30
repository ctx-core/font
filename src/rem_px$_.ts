import { no_dom } from '@ctx-core/dom'
import { atom_, WritableAtom_ } from '@ctx-core/nanostores'
import { assign, B, be_ } from '@ctx-core/object'
export const rem_px$_:B<rem_px$_T> = be_('rem_px$', ()=>{
	const rem_px$ = atom_<number|undefined>(undefined)
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
export interface rem_px$_T extends WritableAtom_<number|undefined> {
	reload_rem_px():void
}
