export declare type clone_ctx_type = {
    container: HTMLElement;
    el: HTMLElement;
    step: number;
    max_iterations: number;
    fontSize: number;
};
/**
 * Fit `ctx.el` inside of ``
 */
export declare function fontSize_downscale_fit(ctx: any): any;
export declare const fit__downscale__fontSize: typeof fontSize_downscale_fit;
