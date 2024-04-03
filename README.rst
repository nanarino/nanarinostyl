===========
☘ 自用样式库
===========

.. highlight:: bash

.. image:: ./src/icons/logo/color/clover.svg
    :width: 64 px
    :alt: Nanarinostyl Logo
    :target: https://nanarino.github.io/nanarinostyl/

.. image:: ./src/assets/stylus.svg
    :width: 64 px
    :alt: Stylus Logo
    :target: https://stylus-lang.com/


使用 ``styl`` 来编写的纯 CSS 库



利用
======
::

    # 安装npm包
    pnpm i nanarinostyl

    # 然后在jsx中 `import 'nanarinostyl'`
    # 或是在css中 `@import url('nanarinostyl')`

    # 也可以引入stylus源码以及其一部分 `import 'nanarinostyl/src/lib/index.styl'`



运行
======
::

    # 克隆仓库然后安装依赖
    pnpm i
    # 运行开发服务器
    pnpm dev



构建
======
::

    # 修改比如配色默认字体后你可以本地构建文档和样式
    # 构建文档
    pnpm build-docs
    # 构建样式
    pnpm build-styl


借物
======
* icon: `arco官方图标库 <https://arco.design/iconbox/lib/89/0/>`_
* color: `arco默认配色 <https://arco.design/palette/list>`_
* background: `css-doodle <https://css-doodle.com/>`_
* inspiration: `affinity-css <https://github.com/Deep-Codes/affinity-css/>`_


约束
======
* astro:
    - 不省略分号。
    - 模板外不能含有tsx表达式。
    - 模板中 jsx的attr里含有 ``"`` 时需要转义。
    - 直接内嵌客户端脚本时 不省略 ``is:inline`` 并使用IIFE
* mdx:
    - 不能含有js/ts注释。
    - 分割线使用 ``***`` 而不 ``---``。
* styl:
    - 尽量省略冒号分号逗号和花括号。
    - 引入顺序 ``@import`` 应先引入css 再引入stylus。
    - 出现vscode高亮丢失时，应该将其提成stylus变量来规避。
    - 禁止使用元组列 ``color = (red #F00)`` ，应该用字典 ``color = {red: #F00}`` 代替。
    - 使通配符引入时要确保引入的优先级 譬如：要确保含有的 ``&>*`` 选择器（被） ``&`` 覆盖。

兼容
======

+---------------------+---------+
| Support             | Version |
+=====================+=========+
| Chrome              | 88      |
+---------------------+---------+
| Edge                | 88      |
+---------------------+---------+
| Firefox             | 82      |
+---------------------+---------+
| Opera               | 74      |
+---------------------+---------+
| Safari              | 14.1    |
+---------------------+---------+
| Chrome Android      | 83      |
+---------------------+---------+
| Firefox for Android | 79      |
+---------------------+---------+
| Opera Android       | No      |
+---------------------+---------+
| Safari on iOS       | 14.5    |
+---------------------+---------+
| Samsung Internet    | 13.0    |
+---------------------+---------+
| WebView Android     | 83      |
+---------------------+---------+
