import { B } from '@ctx-core/object';
import { Writable$ } from '@ctx-core/store';
import type { font_Ctx } from './font_Ctx';
declare const key = "rem_px";
export declare const rem_px_b: B<font_Ctx, typeof key>;
export interface rem_px_T extends Writable$<number | undefined> {
    reload_rem_px(): void;
}
export {};
