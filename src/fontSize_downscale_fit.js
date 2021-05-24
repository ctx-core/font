import { assign, clone } from '@ctx-core/object';
import { no_dom } from '@ctx-core/dom';
import { throw_invalid_argument } from '@ctx-core/error';
/**
 * Fit `ctx.el` inside of ``
 */
export function fontSize_downscale_fit(ctx) {
    if (no_dom)
        return ctx;
    const clone_ctx = clone(...arguments);
    const { container, el, step = 0.1, max_iterations = 100 } = clone_ctx;
    const step__ = Math.abs(step);
    if (!container)
        throw_invalid_argument({ key: 'container' });
    if (!el)
        throw_invalid_argument({ key: 'el' });
    let fontSize = clone_ctx.fontSize
        || parseFloat(getComputedStyle(el).getPropertyValue('font-size'))
            / ctx.rem_px
        || 1.0;
    set_fontSize(fontSize);
    el.style.color = 'transparent';
    let { width } = el.style;
    try {
        el.style.width = 'auto';
        let iteration = 0;
        const computedStyle__container = getComputedStyle(container);
        const paddingLeft = parseInt(computedStyle__container
            .getPropertyValue('padding-left'))
            || 0;
        const paddingRight = parseInt(computedStyle__container
            .getPropertyValue('padding-right'))
            || 0;
        const padding = paddingLeft + paddingRight;
        while ((el.scrollWidth + padding) > container.offsetWidth) {
            iteration++;
            if (iteration > max_iterations) {
                console.warn(`fit__downscale__fontSize|iterations`);
                break;
            }
            const fontSize__ = fontSize - step__;
            if (!fontSize__ || fontSize__ <= step__)
                break;
            set_fontSize(fontSize__);
        }
    }
    finally {
        el.style.color = '';
        el.style.width = width;
    }
    assign(ctx, {
        container,
        el,
        step,
        max_iterations,
        fontSize
    });
    return ctx;
    function set_fontSize(fontSize__rem = fontSize) {
        fontSize = fontSize__rem;
        el.style.fontSize = `${fontSize}rem`;
    }
}
export { fontSize_downscale_fit as fit__downscale__fontSize };
