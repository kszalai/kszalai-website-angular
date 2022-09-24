export class NavMenu {
    links: Array<NavMenuItem>;
    open: boolean;

    constructor() {
        this.links = Array(
            new NavMenuLink("", "", "Home", "home"),
            new NavDropdownMenu(
                "",
                "",
                "University Work",
                Array(
                    new NavMenuLink("", "", "Database Principles", "database-principles"),
                    new NavMenuLink("", "", "Web Programming", "web-programming")
                ),
                "university-work"
            ),
            new NavExternalMenuLink("mailto:kyleszalai@gmail.com", "", "", "Contact", "contact")
        );
        this.open = false;
    }
}

export interface NavMenuItem {
    id: string;
    title: string;
    iconClass: string;
    name: string;
}

export class NavMenuLink implements NavMenuItem {
    title: string;
    iconClass: string;
    name: string;
    id: string;

    constructor(
        title: string,
        iconClass: string,
        name: string,
        id: string
    ) {
        this.title = title;
        this.iconClass = iconClass;
        this.name = name;
        this.id = id;
    }
}

export class NavExternalMenuLink implements NavMenuItem {
    hrefLink: string;
    title: string;
    iconClass: string;
    name: string;
    id: string;

    constructor(
        hrefLink: string,
        title: string,
        iconClass: string,
        name: string,
        id: string
    ) {
        this.hrefLink = hrefLink;
        this.title = title;
        this.iconClass = iconClass;
        this.name = name;
        this.id = id;
    }
}

export class NavDropdownMenu implements NavMenuItem {
    links: Array<NavMenuItem>;
    open: boolean;
    title: string;
    iconClass: string;
    name: string;
    id: string;

    constructor(
        title: string,
        iconClass: string,
        name: string,
        links: Array<NavMenuItem>,
        id: string
    ) {
        this.links = links;
        this.open = false;
        this.title = title;
        this.iconClass = iconClass;
        this.name = name;
        this.id = id;
    }
}