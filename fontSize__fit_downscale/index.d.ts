/**
 * Fit `params.el` inside an element
 */
export declare function fontSize__fit_downscale(
	params:fontSize__fit_downscale__o_T
):fontSize__fit_downscale__o_T
export {
	fontSize__fit_downscale as fontSize_downscale_fit,
	fontSize__fit_downscale as fit__downscale__fontSize,
}
export interface fontSize__fit_downscale__o_T {
	rem_px:number
	container:HTMLElement
	el:HTMLElement
	step?:number
	max_iterations?:number
	fontSize?:string
}
