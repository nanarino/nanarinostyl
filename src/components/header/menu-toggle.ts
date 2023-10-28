const toggle = document.getElementById(
    "header-menu-toggle"
) as HTMLButtonElement;
const aside = toggle?.parentElement?.nextElementSibling?.querySelector?.('aside') as HTMLDivElement;

if (toggle && aside) {
    toggle.onclick = (e: Event) => {
        toggle.toggleAttribute('data-collapsed');
        if (Reflect.has(toggle.dataset, 'collapsed')) {
            Reflect.set(aside.dataset, 'collapsed', '');
        } else {
            Reflect.deleteProperty(aside.dataset, 'collapsed');
        }
    };
}
