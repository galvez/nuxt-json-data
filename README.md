# nuxt-json-data

Experimental module for [Nuxt.js](https://nuxtjs.org) that changes `asyncData` and `Vuex` hydration to raw JSON serialization (like [Next.js](https://nextjs.org)) instead of using [devalue](https://www.npmjs.com/package/@nuxt/devalue). For large `asyncData` payloads, it resulted in up to 40% better performance in some tests.

**Warning**: Does not currently work in `nuxt-edge`.

## Install

```sh
npm i nuxt-json-data --save
```

## Usage

In `nuxt.config.js`:

```js
export default {
  modules: ['nuxt-json-data']
}
```
