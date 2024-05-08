// From maze-utils: https://github.com/ajayyy/maze-utils/blob/master/src/browserApi.ts
export const chromeP = typeof(browser) === "undefined" ? (typeof(chrome) !== "undefined" ? chrome : null as unknown as typeof chrome) : browser;
