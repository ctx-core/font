import { _b } from '@ctx-core/object'
import type { B } from '@ctx-core/object'
import type { rem_px_T } from './rem_px_b'
import { rem_px_b } from './rem_px_b'
export interface font_ctx_I {
	rem_px?:rem_px_T
	font_b_h?:font_b_h_T
}
export interface font_b_h_T {
	get rem_px():rem_px_T
}
export function font_b_h_b(ctx:font_ctx_I):B<font_ctx_I, 'font_b_h'> {
	return _b('font_b_h', ()=>{
		return {
			get rem_px() { return rem_px_b(ctx) }
		}
	})
}