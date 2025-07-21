import { c as createComponent, a as createAstro, m as maybeRenderHead, b as addAttribute, r as renderTemplate } from './astro/server_DAHxl3h8.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro();
const $$BuyButton = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$BuyButton;
  const SPAIN = "ES";
  const country = Astro2.request.headers.get("X-Vercel-IP-Country") ?? SPAIN;
  const storeCountry = country === SPAIN ? "spain" : "usa";
  const { buy } = Astro2.props;
  const url = buy[storeCountry];
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="bg-accent text-white px-4 py-2 rounded hover:bg-accent-light transition-colors">
Comprar en ${storeCountry.toUpperCase()} </a>`;
}, "/Users/josejp/Documents/2025/Hostinger/Astro/dev-publish/src/components/BuyButton.astro", void 0);

const $$file = "/Users/josejp/Documents/2025/Hostinger/Astro/dev-publish/src/components/BuyButton.astro";
const $$url = undefined;

export { $$BuyButton as default, $$file as file, $$url as url };
