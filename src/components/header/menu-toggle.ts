const toggle = document.getElementById(
    "header-menu-toggle"
) as HTMLButtonElement;
const aside = toggle?.parentElement?.nextElementSibling?.querySelector?.('aside') as HTMLDivElement;

if (toggle && aside) {
    toggle.onclick = (e: Event) => {
        if (toggle.matches('[aria-pressed=true]')) {
            toggle.setAttribute('aria-pressed', 'false');
            Reflect.set(aside.dataset, 'collapsed', '');
        } else {
            toggle.setAttribute('aria-pressed', 'true');
            Reflect.deleteProperty(aside.dataset, 'collapsed');
        }
    };
}
