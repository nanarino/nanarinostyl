===========
☘ 自用样式库
===========

.. highlight:: bash



使用 ``styl`` 来编写

使用 ``pug`` 作为伪代码 

事实上在astro中渲染pug是很困难 它无法完全使用 ``☘``:

::
    
    > Could not parse expression with acorn: Expecting Unicode escape sequence \uXXXX



运行
======
::

    # 安装依赖
    pnpm i
    # 运行开发服务器
    pnpm start


构建
======
::

    # 构建文档
    pnpm build


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
* stylus:
    - 尽量省略冒号分号逗号和花括号。
    - 引入顺序 ``@import`` 应先引入css 再引入stylus。
    - 出现vscode高亮丢失时，应该将其提成stylus变量来规避。
    - 禁止使用元组列 ``color = (red #F00)`` ，应该用字典 ``color = {red: #F00}`` 代替。
