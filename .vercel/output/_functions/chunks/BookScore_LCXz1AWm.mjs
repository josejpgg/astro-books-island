import { c as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_DAHxl3h8.mjs';
import 'kleur/colors';
import 'clsx';
import { s as setOnSetGetEnv } from './runtime_BaX0UJyD.mjs';

/* eslint-disable @typescript-eslint/no-unused-vars */
// @ts-check

setOnSetGetEnv(() => {
	
});
const PUBLIC_SCORE_API_ENDPOINT = "https://www.random.org/integers/?num=1&min=1&max=5&col=1&base=10&format=plain&rnd=new";

const $$BookScore = createComponent(async ($$result, $$props, $$slots) => {
  console.log(PUBLIC_SCORE_API_ENDPOINT);
  const res = await fetch(PUBLIC_SCORE_API_ENDPOINT);
  const scoreValue = await res.text();
  return renderTemplate`${maybeRenderHead()}<span>
⭐ Puntuación: ${scoreValue.trim()}/5
</span>`;
}, "/Users/josejp/Documents/2025/Hostinger/Astro/dev-publish/src/components/BookScore.astro", void 0);

const $$file = "/Users/josejp/Documents/2025/Hostinger/Astro/dev-publish/src/components/BookScore.astro";
const $$url = undefined;

export { $$BookScore as default, $$file as file, $$url as url };
