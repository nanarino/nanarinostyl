document.addEventListener("astro:page-load", () => {
    const toggle = document.getElementById(
        "header-menu-toggle"
    ) as HTMLButtonElement

    const aside = toggle?.parentElement?.nextElementSibling?.querySelector?.(
        "aside"
    ) as HTMLDivElement

    if (toggle && aside) {
        document.getElementById('main-panel').onclick = (_ev: MouseEvent) => {
            if (toggle.matches("[aria-pressed=true]")) {
                toggle.setAttribute("aria-pressed", "false")
                Reflect.set(aside.dataset, "collapsed", "")
            }
        }
        toggle.onclick = (_e: Event) => {
            if (toggle.matches("[aria-pressed=true]")) {
                toggle.setAttribute("aria-pressed", "false")
                Reflect.set(aside.dataset, "collapsed", "")
            } else {
                toggle.setAttribute("aria-pressed", "true")
                Reflect.deleteProperty(aside.dataset, "collapsed")
            }
        }
    }
})
