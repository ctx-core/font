import { be_, assign } from '@ctx-core/object';
import { writable$ } from '@ctx-core/store';
import { no_dom } from '@ctx-core/dom';
const key = 'rem_px';
export const rem_px_b = be_(key, () => {
    const rem_px = writable$(undefined);
    return assign(rem_px, {
        reload_rem_px
    });
    function reload_rem_px() {
        if (no_dom)
            return;
        const div = document.createElement('div');
        div.innerHTML = '&nbsp;';
        assign(div.style, {
            display: 'block',
            visibility: 'none',
            fontSize: '1em',
            margin: '0',
            padding: '0',
            height: 'auto',
            lineHeight: '1',
            border: '0'
        });
        let $rem_px;
        try {
            document.body.appendChild(div);
            $rem_px = div.offsetHeight;
        }
        finally {
            div.remove();
        }
        rem_px.$ = $rem_px;
    }
});
//# sourceMappingURL=src/rem_px_b.js.map