export class NavMenu {
    links: Array<NavMenuItem>;
    open: boolean;

    constructor() {
        this.links = Array<NavMenuItem>(
            new NavMenuLink(0, "#", "", "", "Home", "home"),
            new NavMenuLink(1, "#", "", "", "Blog", "blog"),
            new NavDropdownMenu(2, "#", "", "University Work",
                Array(
                    new NavMenuLink(0, "#", "", "", "Database Principles", "database-principles"),
                    new NavMenuLink(1, "#", "", "", "Web Programming", "web-programming")
                )
            ),
            new NavMenuLink(3, "mailto:kyleszalai@gmail.com", "", "", "Contact", null)
        );
        this.open = false;
    }
}

export interface NavMenuItem {
    id: number;
    title: string;
    iconClass: string;
    name: string;
}

export class NavMenuLink implements NavMenuItem {
    id: number;
    href: string;
    title: string;
    iconClass: string;
    name: string;
    route?: string | null;

    constructor(
        id: number,
        href: string,
        title: string,
        iconClass: string,
        name: string,
        route?: string | null
    ) {
        this.id = id;
        this.href = href;
        this.title = title;
        this.iconClass = iconClass;
        this.name = name;
        this.route = route;
    }
}

export class NavDropdownMenu implements NavMenuItem {
    id: number;
    links: Array<NavMenuItem>;
    open: boolean;
    title: string;
    iconClass: string;
    name: string;

    constructor(
        id: number,
        title: string,
        iconClass: string,
        name: string,
        links: Array<NavMenuItem>,
    ) {
        this.id = id;
        this.links = links;
        this.open = false;
        this.title = title;
        this.iconClass = iconClass;
        this.name = name;
    }
}