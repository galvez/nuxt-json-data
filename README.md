# nuxt-json-data

Experimental module for [Nuxt.js](https://nuxtjs.org) that changes `asyncData` and `Vuex` hydration to raw JSON serialization instead of using [devalue](https://www.npmjs.com/package/@nuxt/devalue).

This is the approach that [Next.js](https://nextjs.org) takes.

For large `asyncData` payloads, it resulted in up to 40% better performance in some tests.

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
