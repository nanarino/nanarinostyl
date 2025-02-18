# 更新日志 20/1/2025

## v0.7.0

src 目錄拆分 源碼引入時需要修改

-   `src` -> `docs`
-   `src/lib` -> `lib`

析出了 mixins， 源碼體積有所縮減

移除 [`backdrop-filter()`](https://developer.mozilla.org/en-US/docs/Web/CSS/backdrop-filter) 的兼容前綴 ~~`-webkit-`~~ （同時修復了 `dialog::backdrop` 的顯示異常）

移除 [`filter()`](https://developer.mozilla.org/en-US/docs/Web/CSS/filter) 的兼容前綴 ~~`-webkit-`~~

移除 [`fit-content`](https://developer.mozilla.org/en-US/docs/Web/CSS/fit-content) 的兼容前綴 ~~`-moz-`~~

移除 [`mask`](https://developer.mozilla.org/en-US/docs/Web/CSS/mask) 的兼容前綴 ~~`-webkit-`~~

## v0.6.0

程式塊樣式修改并添加以下 css 變數

-   `--background-color-pre`
-   `--background-color-pre-dark`
-   `--color-code-dark`

修改變數名 `--badge-processing-weight` → `--weight-badge-processing`

移除關於 [`path()`](https://developer.mozilla.org/en-US/docs/Web/CSS/basic-shape/path) 的兼容支援

## v0.5.0

添加以下 css 變數

-   `--font-family-base`
-   `--font-family-serif`
-   `--font-family-mono`

移除關於 [`:has()`](https://developer.mozilla.org/en-US/docs/Web/CSS/:has) 的兼容支援

移除關於 [`@property`](https://developer.mozilla.org/en-US/docs/Web/CSS/@property) 的兼容支援
