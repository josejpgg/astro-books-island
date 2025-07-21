import { renderers } from './renderers.mjs';
import { c as createExports } from './chunks/entrypoint_pRopEins.mjs';
import { manifest } from './manifest_BcNqVhCR.mjs';

const serverIslandMap = new Map([
	['BookScore', () => import('./chunks/BookScore_LCXz1AWm.mjs')],
	['BuyButton', () => import('./chunks/BuyButton_NAtwKTGj.mjs')],
]);;

const _page0 = () => import('./pages/_image.astro.mjs');
const _page1 = () => import('./pages/libro/_id_.astro.mjs');
const _page2 = () => import('./pages/index.astro.mjs');
const pageMap = new Map([
    ["node_modules/.pnpm/astro@5.12.0_@types+node@24.0.15_jiti@2.4.2_lightningcss@1.30.1_rollup@4.45.1_typescript@5.8.3/node_modules/astro/dist/assets/endpoint/generic.js", _page0],
    ["src/pages/libro/[id].astro", _page1],
    ["src/pages/index.astro", _page2]
]);

const _manifest = Object.assign(manifest, {
    pageMap,
    serverIslandMap,
    renderers,
    actions: () => import('./_noop-actions.mjs'),
    middleware: () => import('./_noop-middleware.mjs')
});
const _args = {
    "middlewareSecret": "7a0adaa4-7253-40c9-9b65-a78082d63cfd",
    "skewProtection": false
};
const _exports = createExports(_manifest, _args);
const __astrojsSsrVirtualEntry = _exports.default;

export { __astrojsSsrVirtualEntry as default, pageMap };
