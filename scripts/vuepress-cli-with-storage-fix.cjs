#!/usr/bin/env node

/**
 * Work around runtimes where global localStorage exists but is not Web Storage compliant
 * (e.g., localStorage is `{}` and missing getItem/setItem).
 */
const hasValidStorage =
  typeof globalThis.localStorage === 'object' &&
  globalThis.localStorage !== null &&
  typeof globalThis.localStorage.getItem === 'function' &&
  typeof globalThis.localStorage.setItem === 'function';

if (!hasValidStorage) {
  const store = new Map();
  globalThis.localStorage = {
    getItem(key) {
      const normalized = String(key);
      return store.has(normalized) ? store.get(normalized) : null;
    },
    setItem(key, value) {
      store.set(String(key), String(value));
    },
    removeItem(key) {
      store.delete(String(key));
    },
    clear() {
      store.clear();
    },
    key(index) {
      const keys = Array.from(store.keys());
      return keys[index] ?? null;
    },
    get length() {
      return store.size;
    },
  };
}

(async () => {
  const { cli } = await import('vuepress/cli');
  cli();
})().catch((err) => {
  console.error(err);
  process.exit(1);
});
