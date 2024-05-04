===========
``T.astro``
===========

原本想叫 ``tag.astro`` 的，但那样会导致自引用；叫 ``any-tag`` 又嫌长，所以叫 ``T`` 了

为 ``.mdx`` 里使用而设计，将 ``<T tag="div">`` 渲染为 ``<div>`` 同时在属性里属性替换 ``☘`` 占位符

若在 ``.astro`` 中滥用会导致标签属性不被 ``astroHTML.JSX.HTMLAttributes`` 所约束

在如 `src/components/kanban/*.astro` 里这种占位符过多且标签属性简单的情况下，可以使用
