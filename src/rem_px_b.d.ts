import { Writable$ } from '@ctx-core/store';
import type { font_Ctx } from './font_Ctx';
export declare const rem_px_b: import("@ctx-core/object").Be<font_Ctx, "rem_px", rem_px_T>;
export interface rem_px_T extends Writable$<number | undefined> {
    reload_rem_px(): void;
}
