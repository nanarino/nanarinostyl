document.addEventListener('astro:page-load', () => {

    const toggle = document.getElementById(
        "header-menu-toggle"
    ) as HTMLButtonElement;

    const aside = toggle?.parentElement?.nextElementSibling?.querySelector?.('aside') as HTMLDivElement;

    if (toggle && aside) {
        toggle.onclick = (e: Event) => {
            if (toggle.matches('[aria-pressed=true]')) {
                toggle.setAttribute('aria-pressed', 'false');
                aside.setAttribute('aria-expanded', 'false');
            } else {
                toggle.setAttribute('aria-pressed', 'true');
                aside.setAttribute('aria-expanded', 'true');
            }
        };
    }

})
